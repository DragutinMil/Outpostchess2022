<template>
  <div class="home">
    <div id="left-background">
      <div class="left-login  thanks-text1">
        <div id="input-signup">
          <div id="logo-pic">
            <img
              src="../assets/logo2.png"
              alt=""
            >
          </div>
          <div>
            <p class="thanks-text1">
              Thank you for verifying!
            </p>
            <p class="thanks-text2 col">
              Thank you for early sign up!
              Your profile we'll be ready as soon as we reach enough registered users to make the best of your experience.
              We are launching our beta version soon, so hang on there!
              Your feedback and support means a lot to us. 
            </p>
            <p class="thanks-text2 col">      
              See you in the chess connected world.
            </p>
            <p class="thanks-text2">
              Outpost team - let's connect
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="right-login" />
      
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<style scoped>

.home{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
    margin:auto;
    
  }
  .thanks-text2{
      font-size: 18px;
      line-height: 26px;
      color:#C8A07D;
      width:70%;
      margin:auto;
      word-spacing: 2px;
      padding:15px 0 30px 0;
  }
  .col{
      color:#707070;
  }
  .thanks-text1{
      color:#C8A07D;
      font-weight: 500;
      font-size: 46px;
      line-height: 61px;
  }
   #input-signup{
    background-color: #1B1C1D;
    width: 80%;
    padding: 20px 0 20px 0;
    margin: auto;
    border-radius: 11px;
  }  
   .left-login{
    background-color: #1B1B1C;
    height: 100%;
    padding:15% 0;
  }
 
  #logo-pic{
     padding:35px;
  }
#right-login{
      
      background-image: url("../assets/bg1.jpg");
      width:100%;
      background-size:  cover;
      background-position: center;
      color:#707070;
      
  }
 

@media only screen and (max-width: 499px){

  .home{
    display:flex;
    height: 100%;
  }
  #right-login{
      display:none;
  }
   #left-background{
    background-image: url("../assets/bg1.jpg");
  }
  .left-login{
    opacity:0.9
  
  }
  #logo-pic{
     padding:30px 10px 30px 10px;
     margin: auto;
  }
  .thanks-text1{
      font-size: 38px;
      padding:20px 0;
  }
  .thanks-text2{
      width:100%;
      line-height: 1.6;
  }
}
</style>