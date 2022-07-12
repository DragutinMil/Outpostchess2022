<template>
  <div class="parent">
    <SideBar/>
    <div class="main-div">
      <ChatInnerHeader/>
      <div class="user-details">
        <div class="left">
          <p>Title: </p>
          <div class="pill">
          </div>
        </div>
      </div>
    </div>
    <ChatInnerContact/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import ChatInnerHeader from "@/components/Chatroom/ChatInnerHeader";
import ChatInnerContact from "@/components/Chatroom/ChatInnerContact";

export default {
  name: "ChatInner",
  components: {ChatInnerContact, ChatInnerHeader, SideBar}
}
</script>

<style scoped>
.parent {
  display: flex;
  background-color: #171819;
  justify-content: space-between;
}

.main-div {
  width: 61rem;
  margin-left: 10.563rem;
  margin-right: 9.313rem;
}

.user-details {
  width: 60.938rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2.938rem;
  margin-top: 2.438rem;
}
</style>
