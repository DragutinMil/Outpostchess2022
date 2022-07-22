<template>
  <div class="search">
    <input type="search" name="" class="search-profile" placeholder="Go to search..." @click="go_to_search"/>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    go_to_search: function () {
      this.$router.push("../intsearch");
    }
  }
}
</script>

<style scoped>
.search-profile {
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 1.25rem;
  background-color: #1b1c1d;
  display: flex;
  height: 2.0625rem;
  background-image: url(../assets/search_24px.png);
  background-repeat: no-repeat;
  background-position-x: 1.375rem;
  background-position-y: 0.375rem;
  padding-left: 3.75rem;
  font-size: 0.875rem;
  color: #c7c9d0;
  cursor: pointer;
  width: 16.875rem;
}

@media screen and (max-width: 768px) {
  .search {
    display: none;
  }
}

</style>
