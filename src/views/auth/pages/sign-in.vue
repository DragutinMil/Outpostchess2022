<template>
    <div class="">
        <div>
            <div id="welcom-text">
                <p class="letter-44">Welcome to your</p>
                <p class="letter-44 weight700">professional chess</p>
                <p class="letter-44 weight700">community.</p>
            </div>
        </div>
        <div id="input-signup">
            <div>
                <input
                    v-model="emailSignin"
                    type="email"
                    name=""
                    :class="{ mailin: isActive, 'text-danger': hasError }"
                    placeholder="Email"
                    @keyup.enter="signIn()"
                />
                <p class="reqpass">
                    {{ req1 }}
                </p>
            </div>

            <div id="password-padd">
                <input
                    v-model="passSignin"
                    type="password"
                    name=""
                    :class="{ mailin: isActive, 'text-danger': hasError2 }"
                    placeholder="Password"
                    @keyup.enter="signIn()"
                />
                <p class="reqpass">
                    {{ req }}
                </p>
                <p class="reqpass">
                    {{ request }}
                </p>
            </div>

            <div id="forgot-text">
                <router-link to="/reset-password">
                    <p class="home-p blue">Forgot password?</p>
                </router-link>
                <router-link v-if="pojava" to="/verification-mail">
                    <p class="home-p blue">You didn't verify the email?</p>
                </router-link>
            </div>
            <div id="butt1">
                <button type="button" class="text-join" style="border: 1px solid #c8a07d" @click="signIn()">
                    Sign in
                </button>
            </div>
            <!--   <p id="text-or">or</p>
      <button type="button" onclick="alert('Hello world!')"   class="text-join"  style="border: 1px solid #E8E8E8;"> <div id="google-cor1"> <div id="google-cor"> <img src="../assets/Group.svg" id="" alt="google"></div><p id="joingoogle">Join with Google</p> </div></button>
   -->
            <div id="policy">
                <p id="text-or">or</p>
                <button type="button" class="text-join" style="border: 1px solid #e8e8e8" @click="back">
                    <p id="joingoogle">Sign up</p>
                </button>
                &nbsp;
                <!--  <div id="forgot-text">
  <router-link
  to="/"
  class="home-p blue"
  >
  Sign up
  </router-link>
  </div>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Signin",
    data() {
        return {
            passSignin: "",
            emailSignin: "",
            req: "",
            req1: "",
            image1: "",
            isActive: true,
            hasError: false,
            hasError2: false,
            request: "",
            pojava: false,
        };
    },
    mounted() {
        this.emailSignin = this.$route.query.email;
    },
    methods: {
        back: function () {
            this.$router.push("/");
        },
        signIn: function () {
            (this.req = ""), (this.req1 = ""), (this.hasError2 = false), (this.hasError = false), (this.request = "");
            if (this.passSignin == "") {
                this.req = "Enter Password";
                this.hasError2 = true;
            }
            if (this.emailSignin == "") {
                this.req1 = " Enter Email";
                this.hasError = true;
            }
            if (this.emailSignin !== "" && this.passSignin !== "") {
                fetch(process.env.VUE_APP_URL + "/auth", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: this.emailSignin, password: this.passSignin }),
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("Something went wrong");
                        }
                    })

                    .then(data => {
                        console.log("ok");
                        // Do something with the response
                        localStorage.setItem("token", data?.token);
                        this.$router.push("/profile");
                    })

                    .catch(error => {
                        console.log("error");
                        console.log(error);
                        this.request = "Login failed.";
                        this.pojava = true;
                    });
            }
        },
    },
};
</script>
<style scoped>
p {
    padding: 0;
}
a {
    text-decoration: none;
}

.letter-44 {
    display: flex;
    color: #ffffff;
    font-size: 44px;
}

.home-p {
    color: #707070;

    font-size: 12px;
    line-height: 12px;
}
.blue {
    color: #11c6d1;
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

#forgot-text {
    width: 80%;
    padding-left: 18%;
    padding-top: 5px;
    text-align: left;
}

#welcom-text > p {
    margin: 0;
    padding-left: 29%;
}
#welcom-text {
    margin: 30px 0 30px 0;
}

#input-signup {
    background-color: #1b1c1d;
    width: 65%;
    padding: 20px 0 20px 0;
    margin: auto;
    border-radius: 11px;
}

.mailin {
    width: 65%;
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
    width: 65%;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #1b1c1d;
    height: 40px;
    padding-left: 15px;
    font-size: 14px;
    border: 1px solid #f2358d;
    color: #ffffff;
    color: #f2358d;
}

#text-or {
    font-size: 14px;
    color: #ffffff;
    padding-top: 15px;
}
#butt1 {
    padding-top: 20px;
}

.reqpass {
    color: #f2358d;
    text-align: left;
    padding-left: 17.5%;
    font-size: 12px;
}
#joingoogle {
    margin: 0;
    padding-left: 15px;
}

@media screen and (min-width: 1149px) and (max-width: 1400px) {
    #password-padd {
        padding: 0;
    }
    #welcom-text {
        margin: 20px 0 0 0;
    }
    #text-or {
        font-size: 14px;
        color: #ffffff;
        padding-top: 0;
        padding-bottom: 0 !important;
    }
    #butt1 {
        padding-top: 10px;
    }
    p {
        margin: 10px;
    }
}

@media screen and (min-width: 951px) and (max-width: 1148px) {
    .letter-44 {
        font-size: 28px;
    }
}
@media only screen and (max-width: 950px) {
    .letter-44 {
        font-size: 24px;
    }
}
</style>
