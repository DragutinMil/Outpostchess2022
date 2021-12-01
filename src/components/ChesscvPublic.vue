<template>
    <div class="chesscv">
      
      <div id="about-me">
        <div id="about-edit">
          <p style="padding-right:10px">About Me</p> 
          
        </div >
            <div  >
            <p  style="white-space: pre-line;"   v-bind:class="{'about-text3':editable,'about-text':isActive,}"  >{{user.about_me}} </p>
            </div>
            <div>
              <button class="middle2-buttons"   v-if="editable" @click="editconfirm"  type="button" >Confirm changes</button>
              <button class="middle2-buttons" @click="editable=!editable"  v-if="editable"  type="button" >Cancel</button>
            </div>
     <!--    <input  type="text" class="about-text" v-if="editable"   v-model="aboutme"   placeholder='about me'>
        <p v-else class="about-text">tekst  {{user.about_me}} </p>-->
        <hr>
        <div>
          <p>My CV: </p>
          <div >
            <p id="opencv" @click="newopenwindow()"   >{{user.cv.file_name}}</p> 
            <input   type="file"  style="display:none;"  title=""  id="fileUpload"  />
          </div>
          
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'Chesscv',
  props:{
    user:Object,
    },
  data () {
      return {
         isActive:true,
         editable:false
         
      }
    },
    methods:{  
      newopenwindow:function(){
     window.open(this.user.cv.file_url);
   },
    }
}



 
   





</script>


<style>
   hr{
   border: 0.5px solid  rgba(199, 201, 208, 0.2);
    width:80%;
}
.chesscv{
  display:block;
  align-items: left;
  text-align: left;
   margin:30px
}
 
      
    
.about-me{
  padding-top:30px;
 
}
#about-edit{
  display: flex;
}
a{
  color:#C8A07D
}
i:hover{
   opacity:0.7
}
.about-text{
 color:#6F7381;
 margin-right:20px;
 
}


.about-text3{
 color:#6F7381;
 margin-right:20px;
 background-color:rgba(27, 28, 29, 1);
 padding:10px;
 border-radius:5px
}

.file-input::before {
  content: 'Upload CV file';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}
.file-input:hover::before {
  opacity: 0.7;
}
.file-input::-webkit-file-upload-button {
  visibility: hidden;

}
#opencv{
  color:#6F7381;
}
#opencv:hover{
  cursor: pointer;
  color:#FFFFFF;
  text-decoration: underline;
}

.middle2-buttons{
  border: 0.5px solid #5C5E64;
  box-sizing: border-box; 
  background-color:#202122 ;
  color:#FFFFFF;
  font-size: 12px;
  width: 120px;
  height: 24px;
  margin:0 20px 35px 0; 
}
.fontawesome{
  color:#C8A07D;
  cursor: pointer;
}



.middle2-buttons:hover{
    opacity: 0.7;
}


</style>
