export const setNotification = (state, notif_arr) => {
    state.notif_arr = notif_arr;
    if (state.notif_arr.length != 0) {
        state.counterNot = state.notif_arr.length;
    }
};

export const receiveNotif = (state, payload) => {
    state.notif_arr = [payload, ...state.notif_arr];
    state.counterNot++;
};

export const seen_notification = state => {
    //state.notif_arr=[]
    state.counterNot = "";
};

export const receiveMessage = (state, payload) => {
    if (state.message_arr[state.message_arr.length - 1].msg_id != payload.msg_id) {
        state.message_arr = [...state.message_arr, payload];
        console.log("mutacija", payload);
    }
};

export const setMessage = (state, message_arr) => {
    state.message_arr = message_arr;
};
