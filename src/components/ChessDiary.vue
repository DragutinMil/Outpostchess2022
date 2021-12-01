<template>
  <div class="container">
    <p id="rotate">Coming soon</p>
    <img id="calendarpic" src="@/assets/chess_diary2.png" alt="">
    
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
  #rotate{
    transform: rotate(-45deg);
    font-size:26px;
    font-weight: 600;
    letter-spacing: 15px;
    position: absolute;
    bottom:200px;
    left:520px;
    opacity: 0.8;
    color:#FFFFFF;
}
#calendarpic{
  opacity: 0.8;
  width:90%;
}
#calendarpic:hover{
  opacity: 0.5;
}
</style>
