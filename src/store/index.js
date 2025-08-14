import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "",
    name: "",
    sex: "",
    age: "",
    height: "",
    weight: "",
    dataList: [], // データ表示用配列
    data: [], // APIから取得したデータを格納する配列
    text: "", // メッセージ用
    select: "", // 検索結果
  },

  getters: {},

  mutations: {
    setData(state, data) {
      state.dataList = data;
    },
    addData(state, data) {
      state.dataList.push(data);
      state.text = "追加に成功しました";
    },
    updateData(state, data) {
      state.dataList.push(data);
      state.text = "更新に成功しました";
    },
    setError(state, message) {
      state.text = message;
    },
    selectData(state, data) {
      state.select = data;
    },
    deleteSuccess(state, message) {
      state.text = message;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get(
        "https://m3h-osabe-0801.azurewebsites.net/api/SELECT?"
      );
      commit("setData", response.data.List);
    },

    async selectData({ commit }, { id, name, sex, age, height, weight }) {
      //IDの入力チェック（空白か数字以外なら終了）
      if (isNaN(id)) {
        commit("setError", "IDには数値を入力してください");
        return;
      }
      const params = {};
      if (id) params.ID = id;
      if (name) params.Name = name;
      if (sex) params.Sex = sex;
      if (age) params.Age = age;
      if (height) params.Height = height;
      if (weight) params.Weight = weight;

      const response = await axios.get(
        "https://m3h-osabe-0801.azurewebsites.net/api/SELECT?",
        params
      );
      commit("selectData", response.data.List);
    },

    async addData({ commit }, { id, name, sex, age, height, weight }) {
      try {
        //IDの入力チェック（空白か数字以外なら終了）
        if (!id || isNaN(id)) {
          commit("setError", "IDに数値が入力されていません");
          return;
        }
        if (!name) {
          commit("setError", "名前が入力されていません");
          return;
        }
        if (!sex) {
          commit("setError", "性別が入力されていません");
          return;
        }
        if (!age || isNaN(age)) {
          commit("setError", "年齢が入力されていません");
          return;
        }
        if (!height || isNaN(height)) {
          commit("setError", "身長が入力されていません");
          return;
        }
        if (!weight || isNaN(weight)) {
          commit("setError", "体重が入力されていません");
          return;
        }

        //POSTメソッドで送るパラメーターを作成
        const param = {
          ID: id,
          Name: name,
          Sex: sex,
          Age: age,
          Height: height,
          Weight: weight,
        };
        const response = await axios.post(
          `https://m3h-osabe-0801.azurewebsites.net/api/INSERT?`,
          param
        );
        commit("addData", response.data);
        console.log("追加に成功しました:", response.data);
      } catch (error) {
        commit("setError", "追加に失敗しました");
      }
    },

    async deleteData({ commit }, { id }) {
      try {
        //IDの入力チェック（空白か数字以外なら終了）
        if (!id || isNaN(id)) {
          commit("setError", "IDに数値が入力されていません");
          return;
        }

        await axios.get(
          `https://m3h-osabe-0801.azurewebsites.net/api/DELETE?ID=${id}`
        );
        commit("deleteSuccess", "削除しました");
        console.log("削除に成功しました:");
      } catch (error) {
        commit("setError", "削除に失敗しました");
      }
    },

    async updateData({ commit }, { id, name, sex, age, height, weight }) {
      try {
        //IDの入力チェック（空白か数字以外なら終了）
        if (!id || isNaN(id)) {
          commit("setError", "IDには数値を入力してください");
          return;
        }
        const param = {
          ID: id,
          Name: name,
          Sex: sex,
          Age: age,
          Height: height,
          Weight: weight,
        };
        const response = await axios.post(
          "https://m3h-osabe-0801.azurewebsites.net/api/UPDATE?",
          param
        );

        commit("updateData", response.data);
      } catch (error) {
        console.error("更新に失敗しました:", error);
      }
    },
  },
});
