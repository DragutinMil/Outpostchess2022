<template>
    <div id="input-signup">
        <div>
            <p class="thanks-text1">Thank you for verifying!</p>
            <p class="thanks-text2 col">
                Thank you for early sign up! Your profile we'll be ready as soon as we reach enough registered users to
                make the best of your experience. We are launching our beta version soon, so hang on there! Your
                feedback and support means a lot to us.
            </p>
            <p class="thanks-text2 col">See you in the chess connected world.</p>
            <p class="thanks-text2">Outpost team - let's connect</p>
        </div>
    </div>
</template>

<style scoped>
.thanks-text2 {
    font-size: 18px;
    line-height: 26px;
    color: #c8a07d;
    width: 70%;
    margin: auto;
    word-spacing: 2px;
    padding: 15px 0 30px 0;
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
        width: 100%;
        line-height: 1.6;
    }
}
</style>
