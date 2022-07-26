<template>
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
</template>

<script>
export default {
  name: "Notifications"
}
</script>

<style scoped>
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

@media screen and (max-width: 768px) {
  .notifications {
    display: none;
  }
}
</style>
