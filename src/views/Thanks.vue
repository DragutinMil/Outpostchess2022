<template>
    <div class="home">
        <div id="left-background">
            <div class="left-login thanks-text1">
                <div id="input-signup">
                    <div id="logo-pic">
                        <img src="../assets/logo2.png" alt="" />
                    </div>
                    <div>
                        <p class="thanks-text1">Thank you for joining us.</p>
                        <p class="thanks-text2">Please check your email and verify your account.</p>
                        <p class="thanks-text2 col">The Chess world is waiting for you!</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="right-login" />

        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
.left-login {
    background-color: #1b1b1c;
    height: 100%;
    padding: 20% 0;
}

#logo-pic {
    padding: 35px;
}
#right-login {
    background-image: url("../assets/bg1.jpg");
    width: 100%;
    background-size: cover;
    background-position: center;
    color: #707070;
}

@media only screen and (max-width: 499px) {
    .home {
        display: flex;
        height: 100vh;
    }
    #right-login {
        display: none;
    }
    #left-background {
        background-image: url("../assets/bg1.jpg");
    }
    .left-login {
        opacity: 0.9;
    }
    #logo-pic {
        padding: 30px 20px 30px 20px;
        margin: auto;
    }
    .thanks-text1 {
        font-size: 38px;
        padding: 20px 0;
    }
    .thanks-text2 {
        padding: 10px;
    }
}
</style>
