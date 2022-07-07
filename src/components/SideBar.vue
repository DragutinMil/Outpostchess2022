<template>
    <div class="side-bar">
                    <router-link  to="../Profile" ><img class="logoimg" src="../assets/logo2.png" alt=""></router-link> 
                    <div class="side-options">
                           <div class="flex-center"><img src="../assets/home_24px.png" alt=""></div>
                          <p class="left-sidetext diffcol" >Home</p>
                    </div>
                    <div class="side-options">
                          <div class="flex-center"><img src="../assets/Vector1.png" alt=""></div>
                          <router-link  to="../Profile" style="color:#C7C9D0"><p class="left-sidetext">My profile</p></router-link> 
                    </div>
                    <div class="side-options">
                          <div class="flex-center"><img src="../assets/mail_outline_24px.png" alt=""></div>
                          <router-link to="../chatroom" style="color:#C7C9D0">  <p class="left-sidetext">Inbox</p></router-link>
                    </div>
                    <div class="side-options"> 
                             <div class="flex-center" ><img src="../assets/Vector5.png" alt=""></div>
                              <router-link to="../intsearch" style="color:#C7C9D0"> <p  class="left-sidetext">Intelligent search</p></router-link> 
                    </div>
                    <div class="side-options"> 
                            <div class="flex-center "><img src="../assets/hands.png" alt=""></div>
                             <p class="left-sidetext diffcol">My connections</p>
                    </div>
                    
                    <hr>
                    <div class="side-options"> 
                             <div class="flex-center"><img  src="../assets/book.png" alt=""></div>
                             <p class="left-sidetext diffcol">Blog</p>
                             
                          <!--t <router-link to="../blog" style="color:#C7C9D0" > <p class="left-sidetext" >Blog</p></router-link> 
                           o="../blog" style="color:#C7C9D0"-->
                    </div>

                    <div id="side-flexend">
                        <div id="side-flexend2" >
                        </div>
                            <hr>
                            <div class="side-options" > 
                                    <div style="opacity:0.4" class="flex-center"><img src="../assets/settings_24px_rounded.svg" alt=""></div>
                                    <p class="left-sidetext diffcol">Settings</p>
                            </div>
                            <div  class="side-options"> 
                                    <div style="opacity:0.4" class="flex-center"><img src="../assets/Vector7.png" alt=""></div>
                                    <p class="left-sidetext diffcol">Help</p>
                            </div>
                            <div class="side-options" style="margin-bottom:30px"> 
                                    <div style="opacity:0.4" class="flex-center"><img src="../assets/Vector4.png" alt=""></div>
                                    <p class="left-sidetext diffcol">Contact Us</p>
                            </div>
                            <button class="middle2-buttons" @click="logOut"  type="button" >Sign Out</button>
                    </div>
        </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  msg: String
  },
  methods:{
logOut:function(){
       localStorage.removeItem('token')
        this.$router.push('/login');
    },
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle2-buttons{
    margin-top:0px
}
.side-bar{
    background-color: #202122;
    position:sticky;
    top:0;
    height:100vh; 
}
.logoimg{
    width: 9.375rem;
    padding: 15% 10% 3.125rem 0;
}
.side-options{
display:flex;
color:#C7C9D0;
padding: 0.625rem 0 1rem 3.3125rem;

}
.side-options:hover{
    opacity: 0.7;
}
.left-sidetext{
    padding-left:1rem;
    cursor: pointer;
    margin:0
}
.diffcol{
    color:rgba(199, 201, 208, 0.2);
}
hr{
    border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%;
    margin:5px auto;

}
#side-flexend{
    padding-top:1.875rem;
    

}

@media only screen and (max-width: 1500px) and (min-width: 500px) {
.side-options{

padding: 0.625rem 0 1rem 2rem;
}

}
</style>
