<template>
  <div id="input-signup">
    <div>
      <p class="thanks-text1">Thank you for joining us.</p>
      <p class="thanks-text2">Please check your email and verify your account.</p>
      <p class="thanks-text2 col">The Chess world is waiting for you!</p>
    </div>
  </div>
</template>

<style scoped>
.home {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
}
.thanks-text2 {
    font-size: 16px;
    line-height: 21px;
    color: #c8a07d;
}
.col {
    color: #707070;
}
.thanks-text1 {
    color: #c8a07d;
    font-weight: 500;
    font-size: 46px;
    line-height: 61px;
}
#input-signup {
    background-color: #1b1c1d;
    width: 80%;
    padding: 20px 0 20px 0;
    margin: auto;
    border-radius: 11px;
}

@media only screen and (max-width: 499px) {
    .thanks-text1 {
        font-size: 38px;
        padding: 20px 0;
    }
    .thanks-text2 {
        padding: 10px;
    }
}
</style>
