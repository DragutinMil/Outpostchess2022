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
          <div class="row-one">
            <img src="../../assets/arrow-back.svg" alt="back icon"/>
            <p>Payments and transaction</p>
          </div>
          <div class="row-two">
            <div>
              <h2>Payments and transaction</h2>
              <p>
                Your payment info, transactions, recurring <br/>
                payments and reservations
              </p>
            </div>
            <img src="../../assets/Wallet-illustration.svg" alt="chess illustration"/>
          </div>
          <div class="row-three">
            <div>
              <h2>Milena Dragišić</h2>
              <p>beka2808@gmail.com</p>
            </div>
            <img src="../../assets/user-image.png" alt=""/>
          </div>
          <div class="main-row">
            <div class="input-div">
              <div>
                <input type="text" placeholder="0.00"/>
                <p>USD</p>
              </div>
              <p class="par">ESTIMATED TOTAL OF ALL CURRENCIES</p>
            </div>
            <div class="row-two">
              <h3>What’s this payment for?</h3>
              <p>
                Your payment info, transactions, recurring <br/>
                payments and reservations
              </p>
            </div>
            <div class="row-three">
              <textarea placeholder="This payment is for..."/>
            </div>
            <div class="row-four">
              <p class="disclaimer">
                * Some disclaimer about money transfers via Outpost Chess, and how we’re protecting our
                customers from fraudulent behavior on the platform.
              </p>
              <div class="btns">
                <p class="cancel">Cancel</p>
                <p class="continue">Continue</p>
              </div>
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
  name: "WalletTranslation",
  components: {Notifications, Search, SideBar},
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

.row-two h2,
.row-three h2 {
  color: #6f7381;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.063rem;
}

.row-three h2 {
  color: #c8a07d;
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
  flex-direction: row;
  justify-content: space-between;
  background-color: #202122;
  padding: 2.188rem 2.625rem 3.25rem 2.625rem;
  border: 1px solid transparent;
  align-items: center;
}

.left div {
  margin-bottom: 1.188rem;
}

.left a {
  color: white;
  padding-inline: 1.438rem;
  padding-block: 0.625rem;
  background-color: rgba(63, 74, 93, 0.5);
  border-radius: 6px;
}

.input-div {
  padding-top: 2.5rem;
  padding-left: 3.25rem;
  padding-bottom: 2.625rem;
  border: 1px solid #292A2E;
  border-top: none;
  margin-bottom: 1.25rem;
}

.input-div div {
  position: relative;
}

.input-div div input {
  color: #11c6d1;
  padding-bottom: 1.25rem;
  font-size: 2.25rem;
  border-bottom: 1px solid #6f7381;
  width: 100%;
  margin-bottom: 1.563rem;
  font-weight: 700;
}

.input-div div p {
  font-size: 1.5rem;
  position: absolute;
  right: 3.2rem;
  top: 0;
}

.input-div .par {
  text-transform: lowercase;
  color: #6f7381;
}

.main-row .row-two {
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
  background-color: #202122;
  margin-bottom: 1.875rem;
}

.main-row .row-two h3 {
  color: #6f7381;
  font-weight: 700;
  margin-bottom: 0.688rem;
}

.main-row .row-three {
  border: 1px solid #292A2E;
  height: 12.054rem;
  background-color: #171819;
  padding-bottom: 1rem;
  margin-bottom: 2.25rem;
}

.main-row .row-three textarea {
  resize: none;
  height: 100%;
  width: 100%;
  color: white;
}

.row-four {
  margin-bottom: 4.125rem;
  display: flex;
  align-items: center;
  color: #6f7381;
  justify-content: space-between;
}

.row-four .disclaimer {
  font-size: 0.625rem;
  width: 23.611rem;
  color: #6f7381;
  padding-left: 2.625rem;
}

.row-four .btns {
  display: flex;
  width: 49%;
  justify-content: space-between;
  padding-left: 2rem;
  align-items: center;
}

.cancel {
  cursor: pointer;
}

.continue {
  color: white;
  border: 1px solid #c8a07d;
  width: 11.25rem;
  height: 2.518rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.right-text p:first-child {
  color: white;
}

.right-text p:nth-child(2) {
  color: #5c5e64;
}

.add-card img {
  margin-right: 0.6rem;
}

.right-bottom p {
  color: #6f7381;
  cursor: pointer;
}

.active {
  color: #11c6d1 !important;
  font-weight: 700 !important;
  border-color: #11c6d1;
}

@media screen and (max-width: 1024px) {
  .row-four .disclaimer {
    padding-left: 0;
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

  .main-row {
    margin-bottom: 0;
  }

  .row-four {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding-inline: 2.625rem;
  }

  .row-four .btns {
    justify-content: space-between;
    width: 100%;
    padding-left: 0;
    margin-bottom: 2rem;
  }

  .row-four .disclaimer {
    width: 100%;
  }
}

@media screen and (max-width: 425px) {
  .row-two img {
    width: 9.833rem;
  }
}
</style>
