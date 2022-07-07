export const setNotification = (state,notif_arr) => {
    state.notif_arr=notif_arr
    if(state.notif_arr.length!=0){
    state.counterNot=state.notif_arr.length
   }
  }
  
export const receiveNotif =(state,payload) => {
    state.notif_arr=[payload,...state.notif_arr]
    state.counterNot=state.notif_arr.length
    
    }

export const  seen_notification=(state)=>{
  //state.notif_arr=[]
   state.counterNot=''
   
}
