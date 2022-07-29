<template>
  <div class="home">
    <div id="left-login">
      <div id="logo-pic">
        <img src="../../assets/logo2.png" alt="" />
      </div>
      <router-view></router-view>
    </div>
    <div id="right-login" />
  </div>
</template>

<script>
export default {
  name: "Auth",
  methods: {},
};
</script>
<style scoped>
p {
  padding: 0;
}
a {
  text-decoration: none;
}

.home {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
}

#right-login {
  background-image: url("../../assets/loginphoto.jpg");
  width: 100%;
  background-size: cover;
  background-position: center;
  color: #707070;
}

#welcom-text > p {
  margin: 0;
  padding-left: 29%;
}

#left-login {
  background-color: #1b1b1c;
}
#logo-pic {
  padding: 3.125rem 2.1875rem 0px 2.1875rem;
  display: flex;
  width: 65%;
  margin-left: 24%;
}
</style>
