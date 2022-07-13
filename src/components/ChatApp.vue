<template>
  <div>
    <div class="parent-container">
       <div class="name-container">
     <!--   <input
          v-model="not_massage"
          type="text"
          name=""
          class="user-name"
        >
        <button class="join-button">
          Fake
        </button>
        <button class="join-button" @click="join">Join</button>  -->
      </div>
    </div>
  </div>
</template>

<script>
  

  export default {
    name:"ChatApp",
    
    data(){
        return{
            not_massage: '',
            notif_arr : []
            
        }
    },
  ///   created () {
    //   this.$socket.on( 'tb_notification' , this.receiveNotif )
   //     },
  //  destroyed () {
         //   this.$socket.removeAllListeners('message')
  //      },
 //   methods: {
//sendNotif(payload){
     //       fetch(`https://api.outpostchess.com/api/v2/create_fake_notification `, {
        //        method: 'POST',
        //        headers: {
         //           'Content-Type': 'application/json',
        //             "authorization":`Bearer ${localStorage.getItem('token')}`
        //             },
        //    })
        //    this.$socket.emit('tb_notification', payload)},

      //  receiveNotif(payload){
      //        console.log('received a notif', payload)
      //        console.log(this.notif_arr)
      //        this.notif_arr=[payload,...this.notif_arr]
//}  
   // },
}

</script>


<style scoped>
   body{
       color:#ffffff
   }
   .parent-container{
       width:100%;
       display:flex;
       justify-content: center;
       padding-top: 100px;
   }
   .name-container{
       display:flex;
       flex-direction: column;
   }
  
</style>