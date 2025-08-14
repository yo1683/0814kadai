<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div class="btn">
        <v-btn @click="fetchData"> 一覧を表示 </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
  <v-data-table class="data-table"
    :headers="[
      { text: 'ID', value: 'ID' },
      { text: '名前', value: 'Name' },
      { text: '性別', value: 'Sex' },
      { text: '年齢', value: 'Age' },
      { text: '身長', value: 'Height' },
      { text: '体重', value: 'Weight' }
    ]"
    :items="dataList"
    item-key="ID"
   
  >
  </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    dataList() {
      return this.$store.state.dataList;
    },
    favoriteImage() {
      return this.$store.state.getters.favoriteImage;
    },
  },

  methods: {
    fetchData() {
      this.$store.dispatch("fetchData");
    },
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
.data-table {
  width: 50%;
  display: block;
  margin: auto;
}

</style>
