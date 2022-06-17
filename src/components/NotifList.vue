<template>
   <div>
        <div v-if="notif.n_type.length==20">
            <a  href="">{{notif.name_first || notif.from_user_object.name_first}} {{ notif.name_last || notif.from_user_object.name_last }} is interested in you </a>
        </div>
        <div v-else-if="notif.n_type.length==27">
            <a  href="">{{notif.name_first || notif.from_user_object.name_first}} {{  notif.name_last || notif.from_user_object.name_last }} is no longer interested </a>
        </div>
        <div v-if="notif.n_type.length==25">
            <a  href="">{{notif.name_first || notif.from_user_object.name_first}} {{notif.name_last || notif.from_user_object.name_last}} is no longer interested in club </a>
        </div>
        <div v-if="notif.n_type.length==18">
            <a  href="">{{notif.name_first || notif.from_user_object.name_first}} {{notif.name_last || notif.from_user_object.name_last}} is interested in your club </a>
        </div>
        <div v-if="notif.n_type.length==19">
            <a  href="">{{notif.name_first || notif.from_user_object.name_first}} {{notif.name_last || notif.from_user_object.name_last}} wants to connect </a>
        </div> 
    </div>
         
</template>
<script>
export default {
    props: ['notif'],
    data(){
      return{

    }
  }
}

</script>