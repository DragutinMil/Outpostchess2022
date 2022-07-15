<template>
  <div class="message"
       :class="[
         messageType === 'sent' && 'sent',
       ]">
    <div class="top" :class="[messageType === 'sent' && 'my-top']">
      <div class="left">
        <div class="user-avatar"
             :class="[messageType === 'sent' && 'my-avatar']"
        ></div>
        <p class="receiver-name">
          Hi there, Magnus Carlsen
        </p>
      </div>
      <div class="message-time"
           :class="[
             messageType === 'sent' ? 'time-sent' : 'time-received',
           ]">
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

.sent {
  background-color: #C8A07D;
  width: 41.813rem;
  margin-left: auto;
}

.time-sent {
  color: white !important;
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

.bottom p {
  width: 32.563rem;
}

@media screen and (max-width: 640px) {
  .message {
    background-color: unset;
    width: 25.333rem;
  }

  .message .bottom {
    width: 100%;
  }

  .message .bottom p {
    width: 21.417rem;
    margin-right: 0;
  }
}

@media screen and (max-width: 425px) {
  .my-avatar {
    display: none;
  }

  .message {
    margin-block: 1rem;
    padding-bottom: 1rem;
  }

  .message .bottom p {
    width: 15.417rem;
    margin-right: 0;
  }

  .top {
    flex-direction: column;
    align-items: start;
  }

  .sent {
    padding-right: 0;
    width: 23rem;
  }

  .my-top, .time-received {
    margin-left: 4rem;
  }

}

@media screen and (max-width: 320px) {
  .message .bottom p {
    width: 13.417rem;
  }
}
</style>
