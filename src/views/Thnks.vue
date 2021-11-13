<template>
  <div class="home">
      <div id="left-login">
          <div id="input-signup">
              <div id="logo-pic">
                    <img src="../assets/logo2.png" alt="">
            
         </div>
         <p id="thanks-text1">Thank you for joining us.</p>
         <p class="thanks-text2">Please check your email and verify your account.</p>
         <p class="thanks-text2 col">The Chess world is waiting for you!</p>

         </div>
        </div>
      <div id="right-login">
             
      </div>
      
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<style scoped>
.home{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
    
  }
  .thanks-text2{
      font-size: 16px;
      line-height: 21px;
      color:#C8A07D;
  }
  .col{
      color:#707070;
  }
  #thanks-text1{
      color:#C8A07D;
      font-weight: 500;
      font-size: 46px;
      line-height: 61px;
  }
   #input-signup{
    background-color: #1B1C1D;
    width: 80%;
    padding: 20px 0 20px 0;
    margin:15% auto auto auto;
    border-radius: 11px;
  }  
   #left-login{
    background-color: #1B1B1C;
    
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
</style>