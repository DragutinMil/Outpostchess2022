<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
     
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
body{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.weight700{
  font-weight: 700;
}
.flex-center{
       display: flex;
       justify-content: center;
       align-items: center;
     
  }
.flex-center p{
       display: flex;
       justify-content: center;
       align-items: center;
     
  }
 .v-application--wrap {
    min-height: 0vh !important;
  }
  input:focus, textarea:focus, select:focus{
        outline: none;}

</style>




