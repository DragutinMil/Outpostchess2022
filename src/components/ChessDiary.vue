<template>
  <div class="container">
    <img id="calendarpic" src="@/assets/chess_diary2.png" alt="">
    <p class="rotate">Coming soon</p>
  </div>
</template>



<script> 
export default {
  name: 'ChessDiary',
  props:{
    },
  
    data () {
     return {
         
     }
   }
}
</script>


<style scoped>
  .rotate{
    position: relative;
    bottom:325px;
    
    transform: rotate(-45deg);
    font-size:26px;
    font-weight: 600;
    letter-spacing: 15px;
    
    opacity: 0.8;
    color:#FFFFFF;
    width: 100%;
    height: 100%;
    margin:auto;
}
</style>
