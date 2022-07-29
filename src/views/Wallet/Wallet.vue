<template>
    <div class="parent">
        <SideBar />
        <div class="wrapper">
            <Search />
            <div class="main-div">
                <div class="top">
                    <p class="active">SEND</p>
                    <p>WITHDRAW</p>
                    <p>ACTIVITY</p>
                </div>
                <div class="bottom">
                    <div class="row-one">
                        <img src="../../assets/arrow-back.svg" alt="back icon" />
                        <p>Payments and transaction</p>
                    </div>
                    <div class="row-two">
                        <div>
                            <h2>Wallet</h2>
                            <p>
                                Your payment info, transactions, recurring <br />
                                payments and reservations
                            </p>
                        </div>
                        <img src="../../assets/Wallet-illustration.svg" alt="chess illustration" />
                    </div>
                    <div class="row-three">
                        <h2>Update card</h2>
                        <p>
                            Your payment info, transactions, recurring <br />
                            payments and reservations
                        </p>
                    </div>
                    <div class="main-row">
                        <div class="left">
                            <h3 class="price">100,000 USD</h3>
                            <p class="price-subtitle">estimated total of all currencies</p>
                            <div>
                                <p class="individual-price">100,000 USD</p>
                                <p class="individual-price">50,00 EUR</p>
                            </div>
                            <router-link to="/wallet-send">
                                <p class="transfer">Transfer Funds</p>
                            </router-link>
                        </div>
                        <div class="right">
                            <div class="right-top">
                                <h3 class="name">Katarina Trajkovic</h3>
                                <div class="second-row">
                                    <img class="mastercard" src="../../assets/master-card.jpg" alt="mastercard logo" />
                                    <div class="right-text">
                                        <p>Mastercard••••8095</p>
                                        <p>Expires 04/23</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right-bottom">
                                <router-link to="/wallet-add-payment-method">
                                    <div class="add-card">
                                        <img src="../../assets/add-circle.svg" alt="add a card" />
                                        <p>Add credit card</p>
                                    </div>
                                </router-link>
                                <p>Remove</p>
                                <router-link to="/wallet-add-payment-method">
                                    <p class="edit">Edit</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Notifications />
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Search from "@/components/Search";
import Notifications from "@/components/Notifications";

export default {
    name: "Wallet",
    components: { Notifications, Search, SideBar },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: start;
}

a {
    color: inherit;
    text-decoration: none;
}

.parent {
    display: flex;
    background-color: #171819;
}

.wrapper {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-left: 3.188rem;
    margin-top: 2.188rem;
}

@media screen and (max-width: 768px) {
    .parent {
        justify-content: center;
    }

    .wrapper {
        margin-left: 0;
        justify-content: center;
    }
}

.main-div {
    width: 46.063rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

.top {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #6f7381;
    width: fit-content;
    margin-bottom: 5.125rem;
}

.top p {
    padding-inline: 2.5rem;
    font-size: 0.875rem;
    color: #6f7381;
    line-height: 2.125rem;
    padding-bottom: 0.688rem;
    font-weight: 500;
}

.active {
    border-bottom: 2px solid #6f7381;
}

.bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.row-one {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 2.813rem;
}

.row-one img {
    width: 1.5rem;
    height: 1.5rem;
}

.row-one p {
    color: #6f7381;
    font-size: 1.5rem;
    font-weight: 700;
}

.row-two {
    display: flex;
    align-items: start;
    margin-bottom: 2.625rem;
    justify-content: space-between;
    padding-left: 2.625rem;
}

.row-two div {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.row-two h2,
.row-three h2 {
    color: #6f7381;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.063rem;
}

@media screen and (max-width: 425px) {
    .row-two {
        text-align: start;
    }
}

.row-two p,
.row-three p {
    text-align: start;
    color: #6f7381;
}

.row-three {
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #202122;
    padding-left: 2.625rem;
    padding-top: 2.188rem;
    padding-bottom: 3.25rem;
    border: 1px solid transparent;
}

.main-row {
    display: flex;
    width: 100%;
    margin-bottom: 13.875rem;
}

.left,
.right {
    width: 50%;
    background-color: #171819;
    border: 1px solid #292a2e;
    border-top: none;
}

.left {
    padding-top: 2.125rem;
    padding-left: 2.688rem;
    padding-bottom: 1.5rem;
}

.price {
    font-weight: 700;
    font-size: 2.25rem;
    color: #11c6d1;
    margin-bottom: 0.375rem;
}

.price-subtitle,
.individual-price {
    color: #6f7381;
}

.price-subtitle {
    margin-bottom: 0.875rem;
}

.individual-price {
    margin-bottom: 0.375rem;
}

.left div {
    margin-bottom: 1.188rem;
}

.transfer {
    color: white;
    padding-inline: 1.438rem;
    padding-block: 0.625rem;
    background-color: rgba(63, 74, 93, 0.5);
    border-radius: 6px;
    width: fit-content;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.right-top {
    padding-top: 2.125rem;
    padding-left: 2.688rem;
    padding-bottom: 1.5rem;
}

.second-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.name {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 2.188rem;
    /*font-size: 1rem;*/
}

.right-text {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    font-size: 1rem;
}

.right-text p:first-child {
    color: white;
}

.right-text p:nth-child(2) {
    color: #5c5e64;
}

.mastercard {
    width: 4.375rem;
    flex: 0 0 6.375rem;
    margin-right: 1.875rem;
}

.right-bottom {
    height: 4.063rem;
    background-color: #1a1a1b;
    padding-left: 2.688rem;
    padding-right: 3.5rem;
    justify-content: space-between;
    display: flex;
    align-items: center;
}

.add-card {
    display: flex;
}

.add-card img {
    margin-right: 0.6rem;
}

.right-bottom p {
    color: #6f7381;
    cursor: pointer;
}

.edit {
    color: white !important;
}

@media screen and (max-width: 1024px) {
    .main-row {
        flex-direction: column;
    }

    .left,
    .right {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .parent {
        overflow-x: hidden;
    }

    .wrapper {
        width: 100%;
    }

    .main-div {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 0;
    }

    .top {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-size: 1.167rem;
        font-weight: 500;
        margin-bottom: 4rem;
        justify-content: center;
    }

    .top p {
        text-align: center;
    }

    .active {
        color: #11c6d1 !important;
        font-weight: 700 !important;
        border-color: #11c6d1;
    }

    .row-one {
        padding-left: 2.333rem;
    }

    .row-two {
        padding-right: 2.333rem;
    }

    .main-row {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 425px) {
    .row-two img {
        width: 9.833rem;
    }
}
</style>
