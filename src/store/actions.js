import axios from "axios"

export const getNotification = ({commit}) => {
     
      
        axios.get(process.env.VUE_APP_URL+'/notifications', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
          }
        })
          .then((response) => {
            commit('setNotification',response.data)
          })
        
      
}