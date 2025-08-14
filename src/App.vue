<template>
  <div id="app">
    <h1>キツネ管理</h1>
    <nav>
      <router-link to="/">一覧</router-link> |
      <router-link to="/add">追加</router-link> |
      <router-link to="/delete">削除</router-link> |
      <router-link to="/update">更新</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(219, 165, 64, 0.199);
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h1{
  padding-top: 15px;
}
</style>
