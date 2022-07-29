<template>
  <div class="card">
    <div
        :class="{'open-card': isOpen && transactionType ==='mutual', 'open-card-pink':transactionType === 'to' && isOpen, 'open-card-tirquoise':transactionType === 'from' && isOpen}"
        class="card-wrapper">
      <div :class="{'open-top': isOpen}" class="top">
        <div class="left">
          <div class="transfer-icon">
            <div v-if="transactionType === 'mutual'">
              <img v-if="!isOpen " src="../../assets/change-circle.png" alt="exchange circle">
              <img v-else src="../../assets/change-circle-white.png" alt="exchange circle">
            </div>
            <div v-else>
              <img v-if="!isOpen " src="../../assets/currency-exchange.png" alt="exchange circle">
              <img v-else src="../../assets/currency-exchange-white.png" alt="exchange circle">
            </div>
          </div>
          <div>
            <p>Mastercard</p>
            <p class="mastercard-subtitle"><span>23 jun</span> Transfer using Card</p>
            <p class="mastercard-span">23 jun</p>
          </div>
        </div>
        <div class="middle">
          <div class="transfer-icon">
            <div v-if="transactionType === 'mutual'">
              <img v-if="!isOpen " src="../../assets/transfer-two-arrows.png" alt="exchange circle">
              <img v-else src="../../assets/swap-horizontal-circle-white.png" alt="exchange circle">
            </div>
            <div v-else-if="transactionType === 'to'">
              <img v-if="!isOpen " src="../../assets/arrow-right.png" alt="exchange circle">
              <img v-else src="../../assets/transfer-arrow-right-white.png" alt="exchange circle">
            </div>
            <div v-else>
              <img v-if="!isOpen " src="../../assets/arrow-left.png" alt="exchange circle">
              <img v-else src="../../assets/arrow-left-white.png" alt="exchange circle">
            </div>
          </div>
        </div>
        <div class="right">
          <p>218,65 USD</p>
          <img :class="{'open-arrow': isOpen}" class="arrow" @click="toggleOpen" src="../../assets/arrow-drop-down.svg"
               alt="">
        </div>
      </div>
    </div>
    <div :class="{'open-bottom': isOpen}" class="bottom">
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
  props: {
    // eslint-disable-next-line vue/require-default-prop
    transactionType: String,
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
      const bottom = document.getElementById('bottom')
      const top = document.getElementById('top')
      const card = document.getElementById('card')
      const arrowDown = document.getElementById('arrowDown')
      bottom.classList.toggle('open-bottom')
      top.classList.toggle('open-top')
      card.classList.toggle('open-card')
      arrowDown.classList.toggle('open-arrow')

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
  margin-bottom: 1rem;
}

.mastercard-span {
  display: none;
}

.arrow {
  transition: 1s ease;
}

.top {
  height: 5.542rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-inline: 3.125rem;

  .left {
    display: flex;
    align-items: center;

    .transfer-icon {
      width: 3.015rem;
      height: 3.015rem;
      margin-right: 0.75rem;
    }

    p {
      margin-bottom: 0;
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
  height: 0;
  display: none;
  padding-inline: 3.125rem;


  .transfer-to {
    color: #6F7381;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
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

.open {
  &-bottom {
    height: 7.78rem;
    display: block;
  }

  &-top {
    .left p, .left p span, .right p {
      color: white !important;
    }

    .left .transfer-icon img svg {
      stroke: white;
    }
  }

  &-card {
    background-color: #C8A07D;
    border: none !important;

    &-pink {
      background-color: #F2358D;
    }

    &-tirquoise {
      background-color: #11C6D1;
    }
  }

  &-arrow {
    //transition: 1s ease;
    transform: rotate(180deg);

  }
}

@media screen and (max-width: 1024px) {
  .top {
    padding-inline: 1.125rem;
  }
}

@media screen and (max-width: 768px) {
  .top {
    padding-inline: 3.125rem;

    .left {
      .transfer-icon {
        width: auto;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .top {
    padding-inline: 1.125rem;
  }
  .mastercard-subtitle {
    display: none;
  }
  .mastercard-span {
    display: block;
    color: #11C6D1 !important;
  }
}

</style>
