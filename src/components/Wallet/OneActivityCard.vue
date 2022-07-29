<template>
  <div class="card">
    <div id="card" class="card-wrapper">
      <div id="top" class="top">
        <div class="left">
          <div class="transfer-icon">
            <img v-if="transactionType=== 'mutual' " src="../../assets/change-circle.svg" alt="exchange circle">
            <img v-else src="../../assets/transfer-currency.svg" alt="exchange dollar icon">

          </div>
          <div>
            <p>Mastercard</p>
            <p><span>23 jun</span> Transfer using Card</p>
          </div>
        </div>
        <div class="middle">
          <img v-if="!isOpen" src="../../assets/transfer-two-arrows.svg" alt="">
        </div>
        <div class="right">
          <p>218,65 USD</p>
          <img id="arrowDown" class="arrow" @click="toggleOpen" src="../../assets/arrow-drop-down.svg" alt="">
        </div>
      </div>
    </div>
    <div id="bottom" class="bottom">
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

    .transfer-icon {
      width: 3.015rem;
      height: 3.015rem;
    }

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
  height: 0;
  display: none;
  padding-inline: 3.125rem;

  .transfer-to {
    color: #6F7381;
    margin-top: 1.25rem;
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

.open {
  &-bottom {
    height: 5.78rem;
    display: block;
  }

  &-top {
    .left p, .left p span, .right p {
      color: white !important;
    }
  }

  &-card {
    background-color: #C8A07D;
  }

  &-arrow {
    //transition: 1s ease;
    transform: rotate(180deg);

  }
}
</style>
