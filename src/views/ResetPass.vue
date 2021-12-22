<template>
  <div class="home">
      <div id="left-login">
              <div id="logo-pic">
                    <img src="../assets/logo2.png"  alt="">
              </div>
              <div style="padding-top:25px;"> 
                    <div id="welcom-text">
                        <p class="letter-44" style="padding-bottom:40px;" >Forgotten your password?</p> 
                        <p class="letter-44" > No need to despair - just enter your email </p>  
                        <p class="letter-44" style="padding-bottom:20px;" >address below to request a password reset.</p>
                    </div>  
              </div>
              <div id="input-signup">
                <div>
                     <input type="email" @keyup.enter="passreset()" name=""  v-bind:class="{mailin:isActive}" placeholder="Email" v-model="emailreset">
                </div> 
                 <div id="forgot-text" > </div>
                 <div id="butt1">
                 <button  type="button"  @click="passreset()"  class="text-join" style=" border: 1px solid #C8A07D; ">
                  Request password reset</button> 
                </div>
          
             </div>
             <div id="welcom-text">
              <p class="letter-34" >{{request}}</p>
             </div>
             

      </div>
      
      <div id="right-login">
             
      </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
   data () {
      return {
         emailreset:'',
         request:'',
         isActive:true,
       
      }
      
    },
    methods:{
    passreset: function(){
        if(this.emailreset==""){
          return this.request='*Enter email adress'
        }
        if(this.emailreset !==""  ){
        fetch('https://app.outpostchess.com/api/v2/public_forgot_password', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( { email: this.emailreset})
        })
        .then(response => {
          if (response.ok) {
             console.log('ok');
          } else {
            throw new Error('Something went wrong') }
        })
          this.request='*Please check your email and reset password'
       } 
       
     },
     
  },
}
</script>
<style scoped>
p{
  padding:0;
}
a{
  text-decoration: none;
}

  .home{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
    
  }

  .flex-center{
       display: flex;
       justify-content: center;
       align-items: center;
  }
 
    .letter-44{
          display:flex;
          color:#FFFFFF;
          font-size:16px;
    }
    
    .home-p{
      color:#707070;

      font-size: 12px;
      line-height: 12px;
      
    }
    .blue{
     color: #11C6D1;
    }
    .pass-in{
      border: 1px solid rgba(196, 196, 196, 0.5);
      box-sizing: border-box;
      border-radius: 4px;
      background-color: #1B1C1D;
      height: 40px;
      padding-left:15px;
      color:#FFFFFF;
     
    }
   
    .letter-34{
        font-size:14px;
        color:#FFFFFF;
    }
      .text-join{
    font-size: 14px;
    color:#FFFFFF;
    background-color: #1B1C1D;
    border-radius: 11px;
    width: 65%;
    box-sizing: border-box;
    border-radius: 6px;
    height: 44px;
    }
     .text-join:hover{
       opacity:0.7;
     }

  #right-login{
      
      background-image: url("../assets/loginphoto.jpg");
      width:100%;
      background-size:  cover;
      background-position: center;
      color:#707070;

  }
  #forgot-text{
    width:65%;
    padding-left:18%;
    padding-top:5px;
    display:flex;

    }
#welcom-text>p{
   margin:0;
   padding-left:29%;
}
#welcom-text{
  margin:30px;
  text-align: left;
}
  #left-login{
    background-color: #1B1B1C;
  }
  #logo-pic{
    padding:50px 35px 0px 35px;
    display:flex;
    width:65%;
    margin-left:24%;
    
  }
  
  #input-signup{
    background-color: #1B1C1D;
    width: 65%;
    padding: 35px 0 35px 0;
    margin:auto;
    border-radius: 11px;
  }  
  #letter-16{
         color:#FFFFFF;
         font-size:16px;
    }
  
  .mailin{
     width:65%;
     border: 1px solid rgba(196, 196, 196, 0.5);
     box-sizing: border-box;
     border-radius: 4px;
     background-color: #1B1C1D;
     height: 40px;
     padding-left:15px;
     font-size:14px;
     color:#FFFFFF;
  }
  
  .text-danger{
     width:65%; 
     box-sizing: border-box;
     border-radius: 4px;
     background-color: #1B1C1D;
     height: 40px;
     padding-left:15px;
     font-size:14px;
     border: 1px solid #F2358D;
     color:#FFFFFF;
     color:#F2358D;
  }


  #text-or{
    font-size: 14px;
    color:#FFFFFF;
    padding-top:15px;
  }
  #butt1{
    padding-top:20px;
  }
 
  #google-cor1{
     display:flex;
      justify-content: center;
       align-items: center;
  }
   #google-cor{
     width:20px;
     margin:auto 0 auto 0;
     padding-right:7px;
   }
   #reqpass{
     color:#F2358D;
     text-align: left;
     padding-left:17.5%;
     font-size: 12px;
   }
   #joingoogle{
      margin:0;
   padding-left:15px;
   }
</style>