<template>
  <div class="parent">
    <SideBar/>
    <div class="main-div">
      <div class="chat">
        <ChatInnerHeader/>
        <div class="user-details">
          <div>
            <p class="details-title">
              Title:
            </p>
            <div class="pill">
              <p>GM</p>
            </div>
            <div class="pill">
              <p>IO</p>
            </div>
            <div class="pill">
              <p>FA</p>
            </div>
            <div class="pill">
              <p>FI</p>
            </div>
          </div>
          <div>
            <p class="details-title">
              Rating :
            </p>
            <div class="pill">
              <p><span>Standard:</span> 2100</p>
            </div>
            <div class="pill">
              <p><span>Rapid :</span> 2100</p>
            </div>
            <div class="pill">
              <p><span>Blitz :</span> 2100</p>
            </div>
          </div>
        </div>
        <OneMessage message-type="received"/>
        <OneMessage message-type="sent"/>
        <OneMessage message-type="received"/>
      </div>
      <!--      <div class="send-message">-->
      <!--        -->
      <!--      </div>-->
    </div>
    <ChatInnerContact/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import ChatInnerHeader from "@/components/Chatroom/ChatInnerHeader";
import ChatInnerContact from "@/components/Chatroom/ChatInnerContact";
import OneMessage from "@/components/Chatroom/OneMessage";

export default {
  name: "ChatInner",
  components: {OneMessage, ChatInnerContact, ChatInnerHeader, SideBar}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.parent {
  display: flex;
  background-color: #171819;
  justify-content: space-between;
  overflow-y: clip;
  height: 100vh;
}

.main-div {
  width: 61rem;
  margin-left: 10.563rem;
  margin-right: 9.313rem;
}

.chat {
  height: 80vh;
  overflow-y: auto;
}

.user-details {
  width: 60.938rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2.938rem;
  margin-top: 2.438rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-details div {
  display: flex;
  align-items: center;
}

.details-title {
  font-size: 1rem;
  color: #6F7381;
  font-weight: 500;
  margin-right: 2rem;
}

.pill {
  color: white;
  padding: 0.438rem 0.75rem;
  border: 2px solid #C8A07D;
  border-radius: 20px;
  margin-right: 0.875rem;
}

</style>
