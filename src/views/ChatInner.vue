<template>
  <div class="parent">
    <SideBar/>
    <div class="main-div">
      <ChatInnerHeader/>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import ChatInnerHeader from "@/components/Chatroom/ChatInnerHeader";

export default {
  name: "ChatInner",
  components: {ChatInnerHeader, SideBar}
}
</script>

<style scoped>
.parent {
  display: flex;
  background-color: #171819;
}

.inner-cont {
  width: 61rem;
}

.main-div {
  width: 61rem;
  padding-left: 10.563rem;
  padding-right: 9.313rem;
}

</style>
