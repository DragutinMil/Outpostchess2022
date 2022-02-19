<template>
  <div class="home">
    <div id="left-login">
      <div id="logo-pic">
        <img
          src="../assets/logo2.png"
          alt=""
        >
      </div>
               
      <div> 
        <div id="welcom-text">
          <p
            class="letter-44"
            style="padding-bottom:40px;"
            @click="trt"
          >
            Enter new password:
          </p> 
        </div>
      </div>
      <div id="input-signup">
        <div style="padding-bottom:15px;">
          <input
            v-model="newpassword"
            type="password"
            name=""
            :class="{mailin:isActive}"
            placeholder="New password"
          >
        </div> 
        <div style="padding-bottom:20px;">
          <input
            v-model="newpassword1"
            type="password"
            name=""
            :class="{mailin:isActive}"
            placeholder="Repeat password"
          >
        </div> 
                

        <div id="forgot-text" />
        <div id="butt1">
          <button
            type="button"
            class="text-join"
            style=" border: 1px solid #C8A07D; "
            @click="reset()"
          >
            Reset pasword
          </button>
        </div>
              
        <!--   <p id="text-or">or</p>
                <button type="button" onclick="alert('Hello world!')"   class="text-join"  style="border: 1px solid #E8E8E8;"> <div id="google-cor1"> <div id="google-cor"> <img src="../assets/Group.svg" id="" alt="google"></div><p id="joingoogle">Join with Google</p> </div></button>         
             -->
      </div>
      <div id="welcom-text">
        <p class="letter-34">
          {{ req }}
        </p>
        <p class="letter-34">
          {{ req1 }}
        </p>
        <p class="letter-34">
          {{ req2 }}
        </p>
      </div>
    </div>
      
    <div id="right-login" />
  </div>
</template>

<script>
export default {
  name: "Resettoken",
   data () {
      return {
         emailreset:"",
         req:'',
         req1:'',
         req2:'',
         isActive:true,
         newpassword:'',
         newpassword1:'',
         last_segment : '',
         resettoken2:window.location.href.split('/').pop()
      }
      
    },
   //  created() {
   // this.newpassword= this.$route.query.password;
 //   this.resettoken2= window.location.pathname.split('/').pop();
    
  //},
    methods:{
  
    reset: function(){
        this.req='';
        this.req1='';
        this.req2='';
        if(this.newpassword !== this.newpassword1){
        this.req="*Password doesn't match";
        }
        if(this.newpassword==""){
        this.req1="*Enter new Password ";
        }
        if(this.newpassword !=="" && this.newpassword.length < 6){
        this.req="*Enter at least 6 character";
        }
        if(this.newpassword == this.newpassword1 && this.newpassword !=="" && this.newpassword1 !=="" && this.newpassword.length > 6){
        fetch('https://app.outpostchess.com/api/v2/public_reset_forgotten_password', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( { password: this.newpassword,
                                resettoken:this.resettoken2
        })
        })
        .then(response => {
          if (response.ok) {
          console.log('ok')
          this.$router.push('/login');
          } else {
            throw new Error('Something went wrong')
            
          }
          
        })
        
      }

    } ,
    
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
          font-size:18px;
    }
     .letter-34{
          color:#FFFFFF;
          font-size:14px;
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