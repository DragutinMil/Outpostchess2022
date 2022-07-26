<template>
  <div class="parent">
    <SideBar/>
    <div class="wrapper">
      <Search/>
      <div class="main-div">
        <div class="top">
          <p class="active">SEND</p>
          <p>WITHDRAW</p>
          <p>ACTIVITY</p>
        </div>
        <div class="bottom">
          <router-link to="/wallet">
            <div class="row-one">
              <img src="../../assets/arrow-back.svg" alt="back icon"/>
              <p>Payments and transaction</p>
            </div>
          </router-link>

          <div class="row-two">
            <div>
              <h2>Wallet</h2>
              <p>Your payment info, transactions, recurring <br> payments and reservations</p>
            </div>
            <img src="../../assets/Wallet-illustration.svg" alt="chess illustration">
          </div>
          <div class="row-three">
            <p class="top-par">Your transfer is done and send to:</p>
            <h2>Milena Dragišić</h2>
            <p class="price">$300.00</p>
          </div>
          <div class="main-row">
            <p class="success-message">You have successfully sent $300. Make sure you
              check with Milena Dragisic if they received funds you sent.</p>
            <p class="disclaimer">* Some disclaimer about money transfers via Outpost Chess, and how we’re protecting
              our customers from fraudulent behavior on the platform.</p>
          </div>
        </div>
      </div>
      <Notifications/>
    </div>
  </div>
</template>

<script>
import Notifications from "@/components/Notifications";
import Search from "@/components/Search";
import SideBar from "@/components/SideBar";

export default {
  name: "WalletTransactionSuccess",
  components: {Notifications, Search, SideBar}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
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

.active {
  color: #11C6D1 !important;
  font-weight: 700 !important;
  border-color: #11C6D1 !important;
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
  border-bottom: 1px solid #6F7381;
  width: fit-content;
  margin-bottom: 10.938rem;
}

.top p {
  padding-inline: 2.5rem;
  font-size: 0.875rem;
  color: #6F7381;
  line-height: 2.125rem;
  padding-bottom: 0.688rem;
  font-weight: 500;
}

.active {
  border-bottom: 2px solid #6F7381;
}

.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.row-one {
  padding-left: 2.333rem;
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
  margin-left: 1rem;
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

.row-two h2, .row-three h2 {
  color: #6F7381;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.688rem;
}

.main-row {
  display: flex;
  align-items: center;
  padding-top: 3.688rem;
  flex-direction: column;
  border: 1px solid #6F7381;
  border-top: none;
  margin-bottom: 14.375rem;
}

.success-message {
  color: #11C6D1;
  font-weight: 700;
  font-size: 0.875rem;
  width: 23.51rem;
  margin-bottom: 2.75rem;
}

.disclaimer {
  color: #6F7381;
  padding-bottom: 3.563rem;
  width: 18.313rem;
  font-size: 0.625rem;
}

@media screen and (max-width: 425px) {
  .row-two {
    text-align: start;
  }
}

.row-two p {
  text-align: start;
  color: #6F7381;
}

.row-three {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #202122;
  padding-top: 2.188rem;
  padding-bottom: 3.25rem;
}

.top-par {
  color: #6F7381;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
}

.row-three h2 {
  color: #11C6D1;
  font-size: 1.5rem;
  line-height: 1.984rem;
}

.price {
  font-size: 1.5rem;
  line-height: 1.984rem;
  font-weight: 500;
  color: white;
}

@media screen and (max-width: 768px) {
  .wrapper {
    width: 100%;
  }

  .main-div {
    width: 100%;
  }

  .top {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 1.167rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }


  .row-two {
    padding-right: 2.333rem;
  }

  .main-row {
    height: 22.884rem;
    justify-content: center;
    border: none;
    padding-top: 0;
  }
}

@media screen and (max-width: 425px) {
  .row-two img {
    width: 9.833rem;
  }

  .main-row {
    height: 26.884rem;
  }
}

</style>
