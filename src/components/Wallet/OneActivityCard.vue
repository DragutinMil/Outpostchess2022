<template>
  <div id="card" class="card">
    <div class="top">
      <div class="left">
        <img src="../../assets/change-circle.png" alt="exchange circle">
        <div>
          <p>Mastercard</p>
          <p><span>23 jun</span> Transfer using Card</p>
        </div>
      </div>
      <div class="middle">
        <img src="../../assets/swap-horizontal_circle.png" alt="">
      </div>
      <div class="right">
        <p>218,65 USD</p>
        <img @click="logMeSomething" src="../../assets/arrow-drop-down.svg" alt="">
      </div>
    </div>
    <div class="bottom">
      <p class="transfer-to">Transfer to:</p>
      <div class="main-part">
        <img src="../../assets/check_circle_blue.svg" alt="verified icon">
        <img src="../../assets/master-card.jpg" alt="mastercard icon">
        <div class="text">
          <p>Mastercard••••8095</p>
          <p>Expires 04/23</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneActivityCard",
  methods: {
    logMeSomething: () => {

      const card = document.getElementById('card')
      console.log(card)
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
}

p {
  font-size: 0.875rem;
  font-weight: 500;
}

.card {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding-inline: 3.125rem;
}

.top {
  height: 5.542rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .left {
    display: flex;

    p {
      margin-bottom: 0;
    }

    img {
      margin-right: 0.75rem;
    }

    div {
      p {
        color: #5C5E64;

        span {
          color: #11C6D1;
        }

        &:first-child {
          color: white;
        }
      }

    }
  }

  .right {
    display: flex;
    justify-content: center;

    p {
      color: #11C6D1;
      font-weight: 700;
      margin-right: 1.563rem;
      margin-bottom: 0;
    }
  }
}


.bottom {
  .transfer-to {
    color: #6F7381;
    margin-bottom: 1.406rem;
  }

  .main-part {
    display: flex;

    img:first-child {
      margin-right: 0.938rem;
    }

    img:nth-child(2) {
      margin-right: 1.875rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    p {
      &:first-child {
        color: white;
      }

      &:nth-child(2) {
        color: #5C5E64;
      }
    }
  }
}
</style>
