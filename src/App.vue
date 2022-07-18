<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"/>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

};
</script>

<style>
#app {
  font-family: 'Red Hat Display', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;

}

a {
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.weight700 {
  font-weight: 700;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;

}

.flex-center p {
  display: flex;
  justify-content: center;
  align-items: center;

}

.v-application--wrap {
  min-height: 0vh !important;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

@media screen and (max-width: 1440px) {
  #app, html, body {
    font-size: 14px !important;
  }
}
@media screen and (max-width: 768px) {
  #app, html, body {
    font-size: 12px !important;
  }
}
</style>




