<template>
  <div class="parent">
    <SideBar/>
    <div class="wrapper">
      <div class="search">
        <input type="search" name="" class="search-profile" placeholder="Go to search..." @click="go_to_search"/>
      </div>
      <div class="main-div">
        <div class="top">
          <p class="active">SEND</p>
          <p>WITHDRAW</p>
          <p>ACTIVITY</p>
        </div>
        <div class="bottom">
          <div class="row-one">
            <img src="../assets/arrow-back.svg" alt="back icon">
            <p>Wallet</p>
          </div>
          <div class="row-two">
            <div>
              <h2>Payment methods</h2>
              <p>Your payment info, transactions, recurring <br> payments and reservations</p>
            </div>
            <img src="../assets/Wallet-illustration.svg" alt="chess illustration">
          </div>
          <div class="row-three">
            <h2>Update card</h2>
            <p>Your payment info, transactions, recurring <br> payments and reservations</p>
          </div>
          <div class="main-row">
            <div class="main-top">
              <h2>Update your payment method</h2>
              <img class="master-card" src="../assets/master-card.jpg" alt="master card logo">
              <h2 class="master-card-title"> Mastercard •••• 8095 </h2>
              <p class="master-card-subtitle">Expires 04/23</p>
              <form>
                <input class="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number"
                       maxlength="19"
                       placeholder="Card number">
                <div>
                  <p>#</p>
                  <input type="number" inputmode="numeric" maxlength="2" placeholder="MM">
                  <input type="number" inputmode="numeric" maxlength="2" placeholder="YY">
                  <input type="number" inputmode="numeric" maxlength="4" placeholder="CVC">
                </div>
                <input class="cc-name" type="text"
                       placeholder="Card number">
              </form>
            </div>
            <div class="main-bottom">
              <div class="main-bottom-text">
                <p> Multiple payments accounts are linked to this payments profile. Editing this payment method will
                  apply to all linked payments accounts</p>
              </div>
              <div class="main-bottom-submit">
                <div class="btns">
                  <button type="button">CANCEL</button>
                  <button class="update" type="button">UPDATE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notifications">
        <div class="dropdown-notification">
          <a id="a-middle">
            <img
                id="middle1-img"
                src="../assets/notification_important_24px@2x.png"
                alt=""
                @click="see_notification"
            /></a>
          <div v-if="drop_not" class="dropdown-content">
            <notif-list v-for="notif in notif_arr" :key="notif.n_id" :notif="notif"/>
            <a class="see_notifications" @click="All_notifications">See all notifications </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "WalletAddPaymentMethod",
  components: {SideBar},
  methods: {
    go_to_search: function () {
      this.$router.push("../intsearch");
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.search-profile {
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 1.25rem;
  background-color: #1b1c1d;
  display: flex;
  height: 2.0625rem;
  background-image: url(../assets/search_24px.png);
  background-repeat: no-repeat;
  background-position-x: 1.375rem;
  background-position-y: 0.375rem;
  padding-left: 3.75rem;
  font-size: 0.875rem;
  color: #c7c9d0;
  cursor: pointer;
  width: 16.875rem;
}

#middle1-img {
  height: 1.5625rem;
}

#a-middle {
  border-radius: 50%;
  height: 2.8125rem;
  width: 2.8125rem;
  background-color: #202122;
  display: flex;
  justify-content: center;
  align-items: center;
}

#a-middle:hover {
  opacity: 0.8;
}

#notification_counter {
  color: white;
  position: relative;
  left: 3.125rem;
  border: 1px solid #11c6d1;
  border-radius: 3.125rem;
  background-color: #11c6d1;
  height: 1.25rem;
  width: 1.25rem;
  z-index: 10;
}

.dropdown-content a:hover {
  background: #2c3e50;
  color: white;
}

.dropdown-notification {
  position: relative;
  display: block;
}

.dropdown-content {
  text-decoration: none;
  position: absolute;
  display: block;
  z-index: 1;
  float: left;
  right: 1.5625rem;
  width: 18.75rem;
  border: 1px solid #ffffff;
}

.dropdown-content a {
  display: block;
  float: left;
  color: white;
  padding: 0 0.9375rem;
  line-height: 1.875rem;
  font-size: 0.875rem;
  background: #202122;
  transition: 0.5s;
  width: 100%;
  text-align: left;
}

.see_notifications {
  color: #ffffff;
  cursor: pointer;
}

@media screen and (max-width: 640px) {
  #middle1 {
    display: none;
  }
}

.parent {
  display: flex;
  /*justify-content: space-between;*/
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
  .notifications, .search {
    display: none;
  }

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

.main-row {
  /*height: 47.5rem;*/
  width: 100%;
  border: 1px solid #545454;
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
  color: #C7C9D0;
  border-bottom: 1px solid #202122;
  padding-bottom: 0.625rem;
}

form input:focus {
  border-color: #C8A07D;
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
  background-color: #C8A07D;
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
  background-color: #1A1A1B;
  padding-right: 3.75rem;
  display: flex;
  align-items: center;
}

.btns {
  margin-left: auto;
  color: #6F7381;
  font-size: 0.875rem;
}

.btns button {
  padding-block: 0.844rem;
  padding-inline: 3.039rem;
}

.update {
  color: white;
  border: 1px solid #C8A07D;
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

  .row-one, .main-top, .main-bottom-text {
    padding-left: 2.333rem;
  }

  .row-two {
    padding-right: 2.333rem;
  }

  .row-two img {
    width: 9.833rem;
  }
}
</style>
