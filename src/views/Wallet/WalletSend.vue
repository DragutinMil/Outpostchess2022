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
          <!--          <router-link to="/wallet">-->
          <!--            <div class="row-one">-->
          <!--              &lt;!&ndash;              <img src="../../assets/arrow-back.svg" alt="back icon">&ndash;&gt;-->
          <!--              <p>Wallet</p>-->
          <!--            </div>-->
          <!--          </router-link>-->
          <div class="row-two">
            <div>
              <h2>Wallet</h2>
              <p>Your payment info, transactions, recurring <br> payments and reservations</p>
            </div>
            <img src="../../assets/Wallet-illustration.svg" alt="chess illustration">
          </div>
          <div class="row-three">
            <h2>Send payment</h2>
            <p>Your payment info, transactions, recurring <br> payments and reservations</p>
          </div>
          <div class="main-row">
            <div class="input-div">
              <img src="../../assets/search-turquoise.svg" alt="search icon">
              <input type="text" placeholder="Name, @username, email">
            </div>
            <div class="btn">
              <p>Next</p>
            </div>
          </div>
        </div>
      </div>
      <Notifications/>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Search from "@/components/Search";
import Notifications from "@/components/Notifications";

export default {
  name: "WalletSend",
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
  padding-top: 3.813rem;
  flex-direction: column;
  border: 1px solid #6F7381;
  border-top: none;
}

.input-div {
  width: 30rem;
  border: 1px solid rgba(111, 115, 129, 0.5);
  border-radius: 6px;
  padding-block: 0.688rem;
  margin-bottom: 2.188rem;
}

.input-div input {
  width: 11rem;
  cursor: pointer;
}

.input-div img {
  margin-right: 1.25rem;
}

.main-row .btn {
  width: 7.5rem;
  color: white;
  border: 1px solid #5C5E64;
  padding-block: 0.531rem;
  cursor: pointer;
  margin-bottom: 4.063rem;
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


  .row-one {
    padding-left: 2.333rem;
  }

  .row-two {
    padding-right: 2.333rem;
  }

  .main-row {
    height: 22.884rem;
    justify-content: center;
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
@media screen and (max-width: 375px) {
 .input-div{
   width: 80%;
 }
}
</style>
