<template>
  <div>
    <div v-if="notif.n_type.length==20">
      <!--   <router-link
                  :user_uuid="usersrc.user_uuid"
                  :to="{
                    name: 'Publicprofile',
                    params: { id: usersrc.user_uuid },
                  }"
                >
                  {{ usersrc.name_first }} {{ usersrc.name_last }}
                </router-link>  -->
      <a @click="trt">{{ notif.name_first || notif.from_user_object.name_first }} {{ notif.name_last || notif.from_user_object.name_last }} is interested in you </a>
    </div>
    <div v-else-if="notif.n_type.length==27">
      <a @click="trt">{{ notif.name_first || notif.from_user_object.name_first }} {{ notif.name_last || notif.from_user_object.name_last }} is no longer interested </a>
    </div>
    <div v-if="notif.n_type.length==25">
      <a @click="trt">{{ notif.name_first || notif.from_user_object.name_first }} {{ notif.name_last || notif.from_user_object.name_last }} is no longer interested in club </a>
    </div>
    <div v-if="notif.n_type.length==18">
      <a @click="trt">{{ notif.name_first || notif.from_user_object.name_first }} {{ notif.name_last || notif.from_user_object.name_last }} is interested in your club </a>
    </div>
    <div v-if="notif.n_type.length==19">
      <a @click="trt">{{ notif.name_first || notif.from_user_object.name_first }} {{ notif.name_last || notif.from_user_object.name_last }} wants to connect </a>
    </div> 
  </div>
</template>
<script>
export default {
    props: ['notif'],
    data(){
      return{
    
    }
  },
  methods:{
    trt:function(){
      //  console.log(this.notif.from_user_object.name_first)
       // console.log(this.notif.from_user_object.from_user_uuid)
    }
  }
}

</script>
<style>
a{
    color:white;
}
</style>