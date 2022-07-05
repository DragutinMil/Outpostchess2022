import axios from "axios"

export const getNotification = ({commit}) => {
     
      
        axios.get('https://app.outpostchess.com/api/v2/notifications', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
          }
        })
          .then((response) => {
            commit('setNotification',response.data)
          })
        
      
}