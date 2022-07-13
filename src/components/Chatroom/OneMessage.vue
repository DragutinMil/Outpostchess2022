<template>
  <div class="message">
    <div class="top">
      <div class="left">
        <div class="user-avatar"></div>
        <p class="receiver-name">
          Hi there, Magnus Carlsen
        </p>
      </div>
      <div class="message-time">
        <p>10:15 AM</p>
      </div>
    </div>
    <div class="bottom">
      <p>My name is Melissa from the Outpost Premium team. Thanks for being a valued Outpost member. I'd like to offer
        you another one-month free trial of Ourpost Premium.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneMessage",
  props: {
    messageType: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.message {
  margin-block: 2.688rem;
  background-color: #202122;
  padding: 0.625rem 1.375rem 2.875rem 1.313rem;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 2.375rem;
  height: 2.375rem;
  background-color: #6F7381;
  border-radius: 100%;
  margin-right: 1.438rem;
}

.receiver-name {
  font-weight: 700;
  font-size: 1rem;
  color: white;
}

.message-time {
  color: #6F7381;
}

.bottom {
  color: white;
  text-align: start;
  width: 32.563rem;
  margin-top: 0.875rem;
  margin-left: 4rem;
}
</style>
