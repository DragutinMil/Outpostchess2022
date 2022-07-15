<template>
  <div class="home">
    <div id="left-login">
      <div id="logo-pic">
        <img
          src="../assets/logo2.png"
          alt=""
        >
      </div>
      <div style="padding-top:25px;"> 
        <div class="welcom-text">
          <p
            class="letter-44"
            style="padding-bottom:2.5rem;"
          /> 
          <p class="letter-44">
            Enter email address below,
          </p>  
          <p
            class="letter-44"
            style="padding-bottom:10px;"
          >
            and request to resend verification mail
          </p>
        </div>  
      </div>
      <div id="input-signup">
        <div>
          <input
            v-model="emailreset"
            type="email"
            name=""
            :class="{mailin:isActive}"
            placeholder="Email"
            @keyup.enter="passReset()"
          >
        </div> 
        <div id="forgot-text" />
        <div id="butt1">
          <button
            type="button"
            class="text-join"
            style=" border: 1px solid #C8A07D; "
            @click="verReset()"
          >
            Resend verification mail
          </button>
        </div>
                 
                 
        <!--   <p id="text-or">or</p>
                <button type="button" onclick="alert('Hello world!')"   class="text-join"  style="border: 1px solid #E8E8E8;"> <div id="google-cor1"> <div id="google-cor"> <img src="../assets/Group.svg" id="" alt="google"></div><p id="joingoogle">Join with Google</p> </div></button>         
             -->
      </div>
      <div class="welcom-text">
        <p class="letter-34">
          {{ request }}
        </p>
      </div>
    </div>
      
    <div id="right-login" />
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
   
     verReset: function(){
        if(this.emailreset==""){
          return this.request='*Enter email adress'
        }
        if(this.emailreset !==""  ){
        fetch('https://app.outpostchess.com/api/v2/public_resend_activation_email', {
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
          this.request='*Please check your email'
       } 
       
     }
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
 
    .letter-44{
          display:flex;
          color:#FFFFFF;
          font-size:1rem;
    }
    .letter-34{
        font-size:0.875rem;
        color:#FFFFFF;
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
.welcom-text>p{
   margin:0;
   padding-left:29%;
}
.welcom-text{
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
     padding-left:0.9375rem;
     font-size:0.875rem;
     color:#FFFFFF;
  }
  #text-or{
    font-size: 0.875rem;
    color:#FFFFFF;
    padding-top:0.9375rem;
  }
  #butt1{
    padding-top:1.25em;
  }
 /*
  #google-cor1{
     display:flex;
      justify-content: center;
       align-items: center;
  }
   #google-cor{
     width:1.25em;
     margin:auto 0 auto 0;
     padding-right:0.4375em;
   }
   #reqpass{
     color:#F2358D;
     text-align: left;
     padding-left:17.5%;
     font-size: 0.75rem;
   }
   #joingoogle{
      margin:0;
   padding-left:0.9375rem;
   }*/
</style>