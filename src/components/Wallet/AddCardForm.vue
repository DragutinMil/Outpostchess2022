<template>
    <div class="main-row">
        <div class="main-top">
            <h2>Update your payment method</h2>
            <img class="master-card" src="../../assets/master-card.jpg" alt="master card logo" />
            <h2 class="master-card-title">Mastercard •••• 8095</h2>
            <p class="master-card-subtitle">Expires 04/23</p>
            <form>
                <input
                    class="ccn"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="19"
                    placeholder="Card number"
                />
                <div>
                    <p>#</p>
                    <input type="number" inputmode="numeric" maxlength="2" placeholder="MM" />
                    <input type="number" inputmode="numeric" maxlength="2" placeholder="YY" />
                    <input type="number" inputmode="numeric" maxlength="4" placeholder="CVC" />
                </div>
                <input class="cc-name" type="text" placeholder="Card number" />
            </form>
        </div>
        <div class="main-bottom">
            <div class="main-bottom-text">
                <p>
                    Multiple payments accounts are linked to this payments profile. Editing this payment method will
                    apply to all linked payments accounts
                </p>
            </div>
            <div class="main-bottom-submit">
                <div class="btns">
                    <button type="button">CANCEL</button>
                    <button class="update" type="button">UPDATE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCardForm",
};
</script>

<style scoped>
.main-row {
<<<<<<< HEAD
    /*height: 47.5rem;*/
    width: 100%;
    border: 1px solid #545454;
=======
  /*height: 47.5rem;*/
  width: 100%;
  border: 1px solid #292A2E;
>>>>>>> f549c7b5214810b38dcc89329f45cf6cc30d8b1d
}

.main-top {
    padding-left: 9.813rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 3.75rem;
}

.main-top h2 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 3.125rem;
}

.master-card {
    margin-bottom: 2.625rem;
}

.master-card-title {
    margin-bottom: 0.875rem !important;
}

.master-card-subtitle {
    margin-bottom: 3.125rem;
    font-size: 1.3rem;
    color: white;
}

form {
    width: 16.563rem;
}

form input {
    color: #c7c9d0;
    border-bottom: 1px solid #202122;
    padding-bottom: 0.625rem;
}

form input:focus {
    border-color: #c8a07d;
}

.ccn {
    width: 100%;
    margin-bottom: 1.875rem;
}

form div {
    display: flex;
    justify-content: space-between;
    margin-left: -2.7rem;
    margin-bottom: 3.75rem;
}

form div input {
    width: 4.125rem;
}

.cc-name {
    width: 100%;
    margin-bottom: 3.75rem;
}

.main-bottom-text {
    width: 100%;
    background-color: #c8a07d;
    height: 6rem;
    padding-left: 10.125rem;
    display: flex;
    align-items: center;
}

.main-bottom-text p {
    width: 32.214rem;
    text-align: start;
    color: white;
}

.main-bottom-submit {
    width: 100%;
    height: 6rem;
    background-color: #1a1a1b;
    padding-right: 3.75rem;
    display: flex;
    align-items: center;
}

.btns {
    margin-left: auto;
    color: #6f7381;
    font-size: 0.875rem;
}

.btns button {
    padding-block: 0.844rem;
    padding-inline: 3.039rem;
}

.update {
    color: white;
    border: 1px solid #c8a07d;
}

@media screen and (max-width: 640px) {
    .main-top,
    .main-bottom-text {
        padding-left: 2.333rem;
    }
}
</style>
