<template>
  <div class="home">
    <div id="left-login">
      <div id="logo-pic">
        <img
          src="../assets/logo2.png"
          alt=""
        >
      </div>
      <hr>
      <div>
        <div id="inline">
          <p class="letter-24">
            Make the most of your &nbsp;
          </p>
          <p class="letter-24">
            <b> professional Chess Life. </b>
          </p>
        </div>
        <p id="letter-16">
          Connect and communicate.
        </p>
      </div>
      <div id="input-signup">
        <div>
          <input
            v-model="emailogin"
            type="email"
            name=""
            :class="{
              mailin: isActive,
              'text-ok': itsgood,
              'text-danger': hasError,
            }"
            placeholder="Email"
          >
          <p style="color:#f2358d" v-if="already_exist" >Email address already exist on Outpost </p>
          <p id="reqpass1">
            {{ req2 }}
          </p>
        </div>
        <div id="pass-in-flex">
          <div>
            <input
              v-model="pass1"
              type="password"
              name=""
              :class="{
                passin: isActive,
                'passin-danger': hasError2,
                'text-ok2': itsgood2,
              }"
              placeholder="Password"
            >
            <p class="reqpass">
              {{ req }}
            </p>
          </div>
          <div>
            <input
              v-model="pass1repeat"
              type="password"
              name=""
              :class="{
                passin: isActive,
                'passin-danger': hasError1,
                'text-ok2': itsgood2,
              }"
              placeholder="Repeat password"
            >
            <p class="reqpass">
              {{ req1 }}
            </p>
            <p id="reqpass3">
              {{ req3 }}
            </p>
          </div>
        </div>
        <hr style="width: 85%">
        <div class="check-part">
          <div class="start grid-check2">
            <div class="grid-check">
              <div class="flex-center">
                <input
                  id=""
                  v-model="player"
                  type="checkbox"
                  name=""
                >
              </div>
              <div>
                <p class="left-check-text">
                  Player
                </p>
              </div>
            </div>
            <div class="grid-check">
              <div class="flex-center">
                <input
                  id=""
                  v-model="organizer"
                  type="checkbox"
                  name=""
                >
              </div>
              <div>
                <p class="left-check-text">
                  Organizer
                </p>
              </div>
            </div>
            <div class="grid-check">
              <div class="flex-center">
                <input
                  id=""
                  v-model="admin"
                  type="checkbox"
                  name=""
                >
              </div>
              <div>
                <p class="left-check-text">
                  Club
                </p>
              </div>
            </div>
          </div>
          <div class="start grid-check2">
            <div class="grid-check">
              <div class="flex-center">
                <input
                  id=""
                  v-model="arbiter"
                  type="checkbox"
                  name=""
                >
              </div>
              <div>
                <p class="left-check-text">
                  Arbiter
                </p>
              </div>
            </div>
            <div class="grid-check">
              <div class="flex-center">
                <input
                  v-model="trainer"
                  class="checkbox1"
                  type="checkbox"
                  name=""
                >
              </div>
              <div>
                <p class="left-check-text">
                  Trainer
                </p>
              </div>
            </div>
            <div class="grid-check">
              <div class="flex-center">
                <input
                  id=""
                  v-model="other"
                  type="checkbox"
                  name=""
                >
              </div>
              <div>
                <p class="left-check-text">
                  Other
                </p>
              </div>
            </div>
            <div
              id="reqpass1"
              style="width: 150px"
            >
              {{ req4 }}
            </div>
          </div>
        </div>
        <div id="cookie">
          <p class="home-p">
            By clicking Agree & Join, you agree to the Outpost
          </p>
          <div id="policy2">
            <a
              href=""
              class="home-p blue"
            >User Agreement, Privacy Policy,</a>
            &nbsp;
            <p class="home-p">
              and
            </p>
            &nbsp;<a
              href=""
              class="home-p blue"
            > Cookie Policy.</a>
          </div>
        </div>
        <div id="butt1">
          <button
            type="button"
            class="text-join"
            style="border: 1px solid #c8a07d"
            @click="agreelogin"
          >
            Agree & Join
          </button>
        </div>
        <!--  <p id="text-or">or</p>
              <button type="button" onclick="alert('Kasnije!')"   class="text-join "  style="border: 1px solid #E8E8E8;"> <div id="google-cor1"> <div id="google-cor"> <img src="../assets/Group.svg" id="" alt="google"></div ><p id="joingoogle">Join with Google</p> </div></button> -->
      </div>
      <div id="policy">
        <p class="home-p">
          Already on Outpost?
        </p>
        &nbsp;
        <router-link
          to="/login"
          class="home-p blue" 
        >
          <button type="button" class="text-join" id="signin_back" > <p id="joingoogle">Sign in</p> </button>   
        </router-link>
      </div>
    </div>
    <div id="right-login" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      pass1repeat: "",
      pass1: "",
      emailogin: "",
      req: "",
      req1: "",
      req2: "",
      req3: "",
      req4: "",
      isActive: true,
      hasError: false,
      hasError2: false,
      hasError1: false,
      choserole: true,
      itsgood: false,
      itsgood2: false,
      player: false,
      organizer: false,
      arbiter: false,
      admin: false,
      other: false,
      trainer: false,
      already_exist:false
    };
  },
  methods: {
    agreelogin: function () {
      this.req = "";
      (this.req2 = ""),
        (this.req1 = ""),
        (this.req3 = ""),
        (this.req4 = ""),
        (this.isActive = true),
        (this.hasError2 = false),
        (this.hasError = false);
      this.hasError1 = false;
      this.itsgood = false;
      this.itsgood2 = false;
      this.chooserole = true;

      if (this.pass1 == "") {
        this.req = "Enter Password ";
        this.hasError2 = true;
      }
      if (this.pass1 !== "" && this.pass1.length < 6) {
        this.req = "Enter at least 6 character";
        this.hasError2 = true;
      }
      if (this.emailogin == "") {
        this.req2 = "Enter Email";
        this.hasError = true;
      }
      if (this.pass1repeat == "") {
        this.req1 = "Repeat Password";
        this.hasError1 = true;
      }
      if (
        this.pass1 !== "" &&
        this.pass1repeat !== "" &&
        this.emailogin !== "" &&
        this.pass1 !== this.pass1repeat
      ) {
        this.req3 = "Password doesn't match";
        this.itsgood = true;
        this.itsgood2 = true;
      }
      if (
        this.player == false &&
        this.organizer == false &&
        this.arbiter == false &&
        this.admin == false &&
        this.other == false &&
        this.trainer == false
      ) {
        this.req4 = "Choose at least one role";
        this.chooserole = false;
      }

      if (
        this.pass1 !== "" &&
        this.pass1repeat !== "" &&
        this.emailogin !== "" &&
        this.pass1 == this.pass1repeat &&
        this.chooserole == true
      ) {
        fetch(process.env.VUE_APP_URL+'/signup', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.emailogin,
            password: this.pass1,
            rola: {
              PLAYER: this.player,
              ORGANIZER: this.organizer,
              ARBITER: this.arbiter,
              CLUBADMIN: this.admin,
              OTHER: this.other,
              TRAINER: this.trainer,
            },
          }),
        })
          .then((response) => response.json()) 
          .then(data => this.response=data)
        .then(data => console.log('podaci',data)) 
        //  .then(function(response){
       //    console.log(...response)})
           
         .then(response => {
          console.log(this.response.results.status)
         if (this.response.results.status=="alreadyexist") {
              this.already_exist=true
           console.log(response);
          }else{
            this.$router.push('/Thanks');
          } 
          
        })
      }
     
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
hr {
  border: 1px solid rgba(125, 120, 115, 0.2);
  width: 70%;
  margin: 15px auto 30px auto;
}
.home {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
}

.let700 {
  color: #ffffff;
  font-weight: 700;
}
.checkbox1 {
  border: 5px solid green;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #1b1c1d;
}
.grid-check {
  display: grid;
  grid-template-columns: auto 85%;
}
.grid-check2 {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.start {
  justify-content: flex-start;
  width: 75%;
  margin: auto;
  color: #707070;
  padding: 10px;
}
.letter-24 {
  color: #ffffff;
  font-size: 1.5rem;
}
.home-p {
  color: #707070;
  margin: 0;
  padding: 5px 0 5px 0;
  font-size: 12px;
  line-height: 12px;
}
.blue {
  color: #11c6d1;
}
.passin {
  border: 1px solid rgba(196, 196, 196, 0.5);
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1b1c1d;
  height: 40px;
  padding-left: 15px;
  color: #ffffff;
}
.passin-danger {
  border: 1px solid #f2358d;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1b1c1d;
  height: 40px;
  padding-left: 15px;
  padding-bottom: 15px;
  color: #f2358d;
}
.check-part {
  padding-left: 40px;
}
.left-check-text {
  text-align: left;
  padding-left: 10px;
  font-size: 12px;
  margin: auto;
}
.text-join {
  font-size: 14px;
  color: #ffffff;
  background-color: #1b1c1d;
  border-radius: 11px;
  width: 65%;
  box-sizing: border-box;
  border-radius: 6px;
  height: 44px;
}
.text-join:hover {
  opacity: 0.7;
}

#right-login {
  background-image: url("../assets/loginphoto.jpg");
  width: 100%;
  background-size: cover;
  background-position: center;
  color: #707070;
}

#left-login {
  background-color: #1b1b1c;
}
#logo-pic {
  padding: 35px;
}

#input-signup {
  background-color: #1b1c1d;
  width: 70%;
  padding: 35px 0 0 0;
  margin: 20px auto;
  border-radius: 11px;
}
#letter-16 {
  color: #ffffff;
  font-size: 16px;
  padding: 10px 0;
}
#policy {
  width:65%;
  margin:auto
}
#policy2{
  display: flex;
  align-items: center;
  justify-content: center;

}
.mailin {
  width: 85%;
  border: 1px solid rgba(196, 196, 196, 0.5);
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1b1c1d;
  height: 40px;
  padding-left: 15px;
  font-size: 14px;
  color: #ffffff;
}

.text-danger {
  width: 85%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1b1c1d;
  height: 40px;
  padding-left: 15px;
  font-size: 14px;
  border: 1px solid #f2358d;
  color: #f2358d;
}
.text-ok {
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1b1c1d;
  height: 40px;
  padding-left: 15px;
  font-size: 14px;
  border: 1px solid #11c6d1;
  color: #11c6d1;
}
.text-ok2 {
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1b1c1d;
  height: 40px;
  font-size: 14px;
  border: 1px solid #b4d111;
  color: #b4d111;
}
#pass-in-flex {
  display: flex;
  width: 85%;
  margin: auto;
  justify-content: space-between;
  padding: 15px 0 10px 0;
}

#text-or {
  font-size: 14px;
  color: #ffffff;
  padding-top: 15px;
}
#butt1 {
  padding-top: 20px;
}

#google-cor1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#google-cor {
  width: 20px;
  margin: auto 0 auto 0;
  padding-right: 7px;
}
.reqpass {
  color: #f2358d;
  text-align: left;
  font-size: 12px;
  padding-top: 10px;
}
#reqpass1 {
  color: #f2358d;
  text-align: left;
  font-size: 12px;
  margin: 15px auto;
  width: 85%;
}
#reqpass3 {
  color: #b4d111;
  text-align: left;
  font-size: 12px;
  position: relative;
  bottom: 15px;
}
#joingoogle {
  margin: 0;
  padding-left: 15px;
}
#signin_back{
  border: 1px solid #E8E8E8;
  width: 70%;
}

@media screen and (min-width:961px) and (max-width:1400px){
   #logo-pic {
  padding: 20px;
}
 hr {
  margin: 10px auto 15px auto;
}

#letter-16 {
  color: #ffffff;
  font-size: 16px;
  padding: 10px 0;
}
.start {
  padding: 5px;
}
p{
  margin:0;
}
#cookie{
  padding: 0;
}
#input-signup {
  background-color: #1b1c1d;
  width: 70%;
  padding:0;
  margin: 5px auto;
  border-radius: 11px;
}
#pass-in-flex {
  
  padding: 0;
}

}
@media only screen and (min-width: 500px) {
  #inline {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
}
@media screen and (min-width:961px) and (max-width:1150px){
  
  
  .passin {
  width: 10rem;
}
}



@media only screen and (max-width: 960px) {
#pass-in-flex {
    width: 75%
  
}
  #signin_back{
  width: 85%;
}
  #right-login {
    display: none;
  }
  .home {
    display: flex;
    height: 100vh;
  }
  
  .letter-24 {
    font-size: 16px;
  }
  #left-login {
    width: 100%;
  }
  .check-part {
    padding-left: 15px;
  }
  #letter-16 {
    font-size: 14px;
  }
  ::placeholder {
    font-weight: 300;
    font-size: 12px;
  }
  .start {
    width: 90%;
  }
  .mailin {
    width: 75%;
  }
  #input-signup {
    width: 85%;
  }
  .start {
    justify-content: flex-start;
    width: 90%;
    margin: auto;
    color: #707070;
    padding: 10px;
  }
  .reqpass {
    text-align: center;
  }
  #reqpass1 {
    text-align: center;
  }
  #reqpass3 {
    text-align: center;
  }
}


@media only screen and (max-width: 500px) {

#pass-in-flex {
    display: block;
    ;
  }
}
</style>
