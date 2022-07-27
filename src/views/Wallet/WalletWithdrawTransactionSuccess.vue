<template>
    <div class="parent">
        <SideBar />
        <div class="wrapper">
            <Search />
            <div class="main-div">
                <div class="top">
                    <p>SEND</p>
                    <p class="active">WITHDRAW</p>
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

                    <div class="main-row">
                        <p>You have successfully transferred $300 to your bank.</p>
                    </div>
                </div>
            </div>
            <Notifications />
        </div>
    </div>
</template>

<script>
import Notifications from "@/components/Notifications";
import Search from "@/components/Search";
import SideBar from "@/components/SideBar";

export default {
    name: "WalletWithdrawTransactionSuccess",
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
    height: 100%;
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
    border-bottom: 2px solid #11c6d1;
    color: #11c6d1 !important;
    font-weight: 700 !important;
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

.main-row {
    display: flex;
    width: 100%;
    margin-bottom: 13.875rem;
    height: 25.389rem;
    font-size: 0.875rem;
    color: #11c6d1;
    justify-content: center;
    align-items: center;
    border: 1px solid #292a2e;
}

@media screen and (max-width: 1440px) {
    .main-row {
        height: 21.389rem;
    }
}

@media screen and (max-width: 1024px) {
    .main-row {
        flex-direction: column;
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

    .row-one {
        padding-left: 2.333rem;
    }

    .row-two {
        padding-right: 2.333rem;
    }
}

@media screen and (max-width: 425px) {
    .row-two img {
        width: 9.833rem;
    }
}
</style>
