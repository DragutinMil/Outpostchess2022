<template>
  <div class="parent">
    <SideBar/>
    <div class="main-div">
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "Wallet",
  components: {SideBar},
}
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: space-between;
  background-color: #171819;
}
</style>
