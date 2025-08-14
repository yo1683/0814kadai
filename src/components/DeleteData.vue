<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div>
          <v-alert v-if="text && show" class="flash" :type="textType" >{{ text }} </v-alert>
          <v-btn class="btn" @click="deleteData"> 削除 </v-btn>
          <div class="text-field">
          <v-text-field v-model="id" label="ID" outlined dense></v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      id: "",
      show: false,
    };
  },
  computed: {
    text() {
      return this.$store.state.text;
    },
    textType() {
      // 成功・失敗で色を切り替える
      if (this.text.includes("成功")) {
        return "success";
      } else if (this.text.includes("失敗")) {
        return "warning";
      }
      return "info";
    },
  },
  methods: {
    deleteData() {
      this.$store.dispatch("deleteData", {
        id: Number(this.id),
      });
      this.showFlash();
    },
    showFlash(){
        this.show = true;
      // setTimeoutで3000ms後にshowをfalseにする
        setTimeout(() => {
          this.show = false}
          ,5000
        )
      }
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

.text-field {
  width: 30%;
  display: block;
  margin: auto;
}
.btn {
  margin-bottom: 10px;
} 
</style>
