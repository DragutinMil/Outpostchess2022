<template>
  <div class="parent">
    <SideBar/>
    <div class="wrapper">
      <Search/>
      <div class="main-div">
        <div class="top">
          <p>SEND</p>
          <p class="active">WITHDRAW</p>
          <p>ACTIVITY</p>
        </div>
        <div class="bottom">
          <div class="row-two">
            <div>
              <h2>Withdraw</h2>
              <p>Your payment info, transactions, recurring <br> payments and reservations</p>
            </div>
            <img src="../../assets/Wallet-illustration.svg" alt="chess illustration">
          </div>
          <div class="row-three">
            <h2>Transfer to your bank</h2>
            <p>Your payment info, transactions, recurring <br> payments and reservations</p>
          </div>
          <div class="main-row">
            <div class="block-1 block">
              <h2>Instant 1% fee</h2>
              <p>Typically in minutes</p>
              <div>
                <img src="../../assets/add-circle.svg" alt="add">
                <p>Link an eligible debit card</p>
              </div>
            </div>
            <hr>
            <div class="block-2 block">
              <h2>Standard ( 1% fee )</h2>
              <p>Typically in 1-3 bussines day</p>
            </div>
            <div class="block-3">
              <img src="../../assets/check_circle_blue.svg" alt="verified icon">
              <img src="../../assets/master-card.jpg" alt="mastercard logo">
              <div class="text">
                <p>Mastercard••••8095</p>
                <p>Expires 04/23</p>
              </div>
            </div>
            <div class="block-4">
              <p class="text">Et, vitae sit non senectus et et. Tristique justo gravida platea vel vel ultrices sed
                at.</p>
              <p class="btn">Next</p>
            </div>
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
  name: "WalletWithdraw",
  components: {Notifications, Search, SideBar}
}
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

hr {
  background-color: #292A2E;
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

.main-row {
  flex-direction: column;
}

.main-row p {
  color: #6F7381;
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
  border-bottom: 2px solid #11C6D1;
  color: #11C6D1 !important;
  font-weight: 700 !important;
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
  border: 1px solid transparent;
}

.main-row {
  display: flex;
  width: 100%;
  margin-bottom: 13.875rem;
  border: 1px solid #292A2E;
  padding-left: 3.25rem;
  padding-top: 1.688rem;
  padding-bottom: 3.75rem;
}


.right-text p:first-child {
  color: white;
}

.right-text p:nth-child(2) {
  color: #5C5E64;
}

.block, hr {
  margin-bottom: 2.375rem;
}

.block h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #C8A07D;
  margin-bottom: 0.313rem;
}

.block div {
  display: flex;
  align-items: center;
}

.block-1 div {
  margin-top: 1.688rem;
}

.block-1 div img {
  margin-right: 0.5rem;
}

.block-3 {
  margin-bottom: 3.188rem;
  display: flex;
}

.block-3 img:first-child {
  margin-right: 0.938rem;
}

.block-3 img:nth-child(2) {
  margin-right: 1.875rem;
}

.block-3 div p {
  font-size: 1rem;
}

.block-3 div p:first-child {
  color: white;
}

.block-4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2.813rem;
}

.block-4 .text {
  width: 23.116rem;
  font-size: 0.875rem;
}

.block-4 .btn {
  width: 8.75rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #43464D;
  cursor: pointer;
}

.mastercard {
  width: 4.375rem;
  flex: 0 0 6.375rem;
  margin-right: 1.875rem;
}


@media screen and (max-width: 1024px) {

  .main-row {
    flex-direction: column;
  }

  .block-4 {
    align-items: unset;
    flex-direction: column;
  }

  .block-4 .text {
    margin-bottom: 1.625rem;
  }

  .block-4 .btn {
    margin-left: auto;
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
