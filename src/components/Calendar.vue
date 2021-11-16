<template>
  <div class="calendar">
      <div class="container flex-center">
            
             <img id="calendarpic" src="@/assets/calendar.svg" alt="">
             <p class="rotate">Coming soon</p>
      </div>
   
  </div>
</template>
<script>
   export default {
  name: 'Calendar',
  
  props: {
    
  },
 
}

</script>



<style>

    .container{
       padding:30px;
       
    }
    #calendarpic{
      width:100%;
      opacity: 0.6;
    }
    #calendarpic:hover{
      opacity: 0.3;
    }
    .calendar{
      margin:auto
    }
    .rotate {
    transform: rotate(-45deg);
    font-size:26px;
    font-weight: 600;
    letter-spacing: 15px;
    position:absolute;
    bottom:275px;
    opacity: 0.8;
    color:#FFFFFF;
    }

 
</style>