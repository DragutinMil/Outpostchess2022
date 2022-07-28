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
              <img src="../../assets/arrow-back.svg" alt="back icon">
              <p>Wallet</p>
            </div>
          </router-link>
          <div class="row-two">
            <div>
              <h2>Payment methods</h2>
              <p>Your payment info, transactions, recurring <br> payments and reservations</p>
            </div>
            <img src="../../assets/Wallet-illustration.svg" alt="chess illustration">
          </div>
          <div class="row-three">
            <h2>Update card</h2>
            <p>Your payment info, transactions, recurring <br> payments and reservations</p>
          </div>
          <AddCardForm/>
        </div>
      </div>
      <Notifications/>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import AddCardForm from "@/components/Wallet/AddCardForm";
import Search from "@/components/Search";
import Notifications from "@/components/Notifications";

export default {
  name: "WalletAddPaymentMethod",
  components: {Notifications, Search, AddCardForm, SideBar}
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
  margin-bottom: 5.125rem;
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
  color: #6F7381;
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

.row-two h2, .row-three h2 {
  color: white;
  margin-bottom: 1.063rem;
}

@media screen and (max-width: 425px) {
  .row-two {
    text-align: start;
  }
}

.row-two p, .row-three p {
  text-align: start;
  color: #6F7381;
}

.row-three {
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #202122;
  padding-left: 2.625rem;
  padding-top: 2.188rem;
  padding-bottom: 3.25rem;
  margin-bottom: 0.938rem;
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

  .active {
    color: #11C6D1 !important;
    font-weight: 700 !important;
    border-color: #11C6D1;
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
