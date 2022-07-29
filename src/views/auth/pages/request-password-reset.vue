<template>
    <div>
        <div style="padding-top: 1.5625rem">
            <div id="welcom-text">
                <p class="letter-44" style="padding-bottom: 2.5rem">Forgotten your password?</p>
                <p class="letter-44">No need to despair - just enter your email</p>
                <p class="letter-44" style="padding-bottom: 1.25rem">address below to request a password reset.</p>
            </div>
        </div>
        <div id="input-signup">
            <div>
                <input
                    v-model="emailReset"
                    type="email"
                    name=""
                    :class="{ mailin: isActive }"
                    placeholder="Email"
                    @keyup.enter="passReset()"
                />
            </div>
            <div id="forgot-text" />
            <div id="butt1">
                <button type="button" class="text-join" style="border: 1px solid #c8a07d" @click="passReset()">
                    Request password reset
                </button>
            </div>
        </div>
        <div id="welcom-text">
            <p class="letter-34">
                {{ request }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Signin",
    data() {
        return {
            emailReset: "",
            request: "",
            isActive: true,
        };
    },
    methods: {
        passReset: function () {
            if (this.emailReset == "") {
                return (this.request = "*Enter email adress");
            }
            if (this.emailReset !== "") {
                fetch(process.env.VUE_APP_URL + "/public_forgot_password", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: this.emailReset }),
                }).then(response => {
                    if (response.ok) {
                        console.log("ok");
                    } else {
                        throw new Error("Something went wrong");
                    }
                });
                this.request = "*Please check your email and reset password";
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
    font-size: 1rem;
}

.letter-34 {
    font-size: 0.875rem;
    color: #ffffff;
}
.text-join {
    font-size: 0.875rem;
    color: #ffffff;
    background-color: #1b1c1d;
    border-radius: 0.75rem;
    width: 65%;
    box-sizing: border-box;
    border-radius: 6px;
    height: 2.75rem;
}
.text-join:hover {
    opacity: 0.7;
}

#forgot-text {
    width: 65%;
    padding-left: 18%;
    padding-top: 5px;
    display: flex;
}
#welcom-text > p {
    margin: 0;
    padding-left: 29%;
}
#welcom-text {
    margin: 1.875rem;
    text-align: left;
}

#input-signup {
    background-color: #1b1c1d;
    width: 65%;
    padding: 2.1875rem 0 2.1875rem 0;
    margin: auto;
    border-radius: 0.75rem;
}

.mailin {
    width: 65%;
    border: 1px solid rgba(196, 196, 196, 0.5);
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #1b1c1d;
    height: 2.5rem;
    padding-left: 1rem;
    font-size: 0.875rem;
    color: #ffffff;
}

#butt1 {
    padding-top: 1.25rem;
}
</style>
