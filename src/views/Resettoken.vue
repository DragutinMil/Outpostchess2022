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
            style="padding-bottom:2.5rem;"
            
          >
            Enter new password:
          </p> 
        </div>
      </div>
      <div id="input-signup">
        <div style="padding-bottom:1rem;">
          <input
            v-model="newPassword"
            type="password"
            name=""
            :class="{mailin:isActive}"
            placeholder="New password"
          >
        </div> 
        <div style="padding-bottom:1.25rem;">
          <input
            v-model="newPassword1"
            type="password"
            name=""
            :class="{mailin:isActive}"
            placeholder="Repeat password"
          >
        </div> 
                

        <div id="forgot-text" />
         <div v-if="changePass" id="butt1">
          <button
            type="button"
            class="text-join"
            style=" border: 1px solid #C8A07D; "
            @click="goLogin"
          >
            Password changed! Click here to login
          </button>
        </div>
        <div v-else id="butt1">
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
  name: "resetToken",
   data () {
      return {
         emailreset:"",
         req:'',
         req1:'',
         req2:'',
         isActive:true,
         newPassword:'',
         newPassword1:'',
         last_segment : '',
         resetToken2:window.location.href.split('/').pop(),
         changePass:false
      }
      
    },
   //  created() {
   // this.newPassword= this.$route.query.password;
 //   this.resetToken2= window.location.pathname.split('/').pop();
    
  //},
    methods:{
    goLogin:function(){
       this.$router.push('/login');
    },
    reset: function(){
        this.req='';
        this.req1='';
        this.req2='';
        if(this.newPassword !== this.newPassword1){
        return this.req="*Password doesn't match";
        }
        if(this.newPassword==""){
        this.req1="*Enter new Password ";
        }
        if(this.newPassword !=="" && this.newPassword.length < 6){
        this.req="*Enter at least 6 character";
        }
        if(this.newPassword == this.newPassword1 && this.newPassword !=="" && this.newPassword1 !=="" && this.newPassword.length >= 6){
        fetch(process.env.VUE_APP_URL+'/public_reset_forgotten_password', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( { password: this.newPassword,
                                resettoken:this.resetToken2
        })
        })
        .then(response => {
          if (response.ok) {
          console.log('ok')
          this.changePass=true;
          //this.$router.push('/login');
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
          font-size:1.125rem;
    }
     .letter-34{
          color:#FFFFFF;
          font-size:0.875rem;
     }
   
      .text-join{
    font-size: 0.875rem;
    color:#FFFFFF;
    background-color: #1B1C1D;
    border-radius: 0.6875rem;
    width: 65%;
    box-sizing: border-box;
    border-radius: 6px;
    height: 2.75rem;
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
  margin:1.875rem;
  text-align: left;
}
  #left-login{
    background-color: #1B1B1C;
  }
  #logo-pic{
    padding:3.125rem 2.1875rem 0px 2.1875rem;
    display:flex;
    width:65%;
    margin-left:24%;
    
  }
  
  #input-signup{
    background-color: #1B1C1D;
    width: 65%;
    padding: 2.1875rem 0 2.1875rem 0;
    margin:auto;
    border-radius: 0.6875rem;
  }  
  #letter-16{
         color:#FFFFFF;
         font-size:1rem;
    }
  
  .mailin{
     width:65%;
     border: 1px solid rgba(196, 196, 196, 0.5);
     box-sizing: border-box;
     border-radius: 4px;
     background-color: #1B1C1D;
     height: 2.5rem;
     padding-left:1rem;
     font-size:0.875rem;
     color:#FFFFFF;
  }
  



  #text-or{
    font-size: 0.875rem;
    color:#FFFFFF;
    padding-top:1rem;
  }
  #butt1{
    padding-top:1.25;
  }

</style>