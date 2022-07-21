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
          <AddCardForm/>
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
import AddCardForm from "@/components/Wallet/AddCardForm";

export default {
  name: "WalletAddPaymentMethod",
  components: {AddCardForm, SideBar},
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
