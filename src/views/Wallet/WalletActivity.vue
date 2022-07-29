<template>
  <div class="parent">
    <SideBar/>
    <div class="wrapper">
      <Search/>
      <div class="main-div">
        <div class="top">
          <p>SEND</p>
          <p>WITHDRAW</p>
          <p class="active">ACTIVITY</p>
        </div>
        <div class="bottom">
          <div class="row-two">
            <div>
              <h2>Activity</h2>
              <p>Your payment info, transactions, recurring <br> payments and reservations</p>
            </div>
            <img src="../../assets/Wallet-illustration.svg" alt="chess illustration">
          </div>
          <div class="row-three">
            <h2>Transfer to your bank </h2>
            <p>Your payment info, transactions, recurring <br> payments and reservations</p>
          </div>
          <div class="main-row">
            <div class="block">
              <div class="text">
                <p>Filter by:</p>
                <p>Lorem ipsum</p>
              </div>
              <div class="filters">
                <p class="filter">
                  <img src="../../assets/check_small.svg" alt="check icon">
                  Last week
                </p>
                <p class="filter">
                  <img src="../../assets/check_small.svg" alt="check icon">
                  Last week
                </p>
                <p class="filter filter-active">
                  <img src="../../assets/check_small.svg" alt="check icon">
                  Last week
                </p>
                <p class="filter filter-active">
                  <img src="../../assets/check_small.svg" alt="check icon">
                  Last week
                </p>
              </div>
            </div>
            <hr>
            <div class="block block-1">
              <div class="text">
                <p>Completed</p>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div class="cards">
            <OneActivityCard transaction-type="mutual"/>
            <OneActivityCard transaction-type="to"/>
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
import OneActivityCard from "@/components/Wallet/OneActivityCard";

export default {
  name: "WalletActivity",
  components: {OneActivityCard, Notifications, Search, SideBar}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
}

a {
  text-decoration: none;
}

hr {
  background-color: #292A2E;
  width: 100%;
}

p {
  font-size: 0.875rem;
  font-weight: 500;
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

.main-row {
  display: flex;
  padding-top: 2.375rem;
  flex-direction: column;
  border: 1px solid #292A2E;
  border-top: none;
  padding-left: 3.25rem;
}

.main-row .block:nth-child(2) {
  margin-bottom: 0;
}

.block {
  margin-bottom: 2.063rem;
}

.block-1 {
  margin-bottom: 1.219rem;
  margin-top: 1.293rem;
}

.block .text {
  margin-bottom: 1.48rem;
}

.block .text p {
  color: #6F7381;
}

.block .text p:first-child {
  color: #C8A07D;
  margin-bottom: 0.426rem;
}

.filters {
  display: flex;
  align-items: center;
}

.filter {
  border: 1px solid #6F7381;
  color: #6F7381;
  width: fit-content;
  padding-inline: 1.688rem;
  padding-block: 0.313rem;
  border-radius: 20px;
  margin-right: 1.375rem;
  cursor: pointer;
}

.filter img {
  display: none;
  margin-right: 0.5rem;
}

.filter-active {
  background-color: #C8A07D;
  color: #FFDEC0;
  border: none;
}

.filter-active img {
  display: inline;
}

@media screen and (max-width: 768px) {
  .parent {
    justify-content: center;
  }

  .wrapper {
    margin-left: 0;
    justify-content: center;
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
  }
}

@media screen and (max-width: 425px) {
  .row-two img {
    width: 9.833rem;
  }

  .row-two {
    text-align: start;
  }

  .main-row {
    height: 26.884rem;
  }
}

@media screen and (max-width: 375px) {
  .input-div {
    width: 80%;
  }
}
</style>
