<template>
    <div class="send-message">
        <form>
            <textarea placeholder="Write a message..." class="input" />
            <img class="arrow-up" src="../../assets/arrow-up.svg" alt="expand icon" />
        </form>
        <div>
            <div class="bottom">
                <router-link to="/chatroom">
                    <div class="left">
                        <img src="../../assets/envelope.svg" alt="back to the inbox icon" />
                        <p>Back to inbox</p>
                    </div>
                </router-link>
                <div class="right">
                    <button>
                        <p>Send</p>
                        <img src="../../assets/send.svg" alt="send message" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SendMessage",
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.send-message {
    width: 100%;
    position: relative;
}

.input {
    width: 100%;
    height: 7.875rem;
    resize: none;
    padding-top: 1rem;
    padding-left: 0.25rem;
    background-color: #171819;
    color: white;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 0.5rem;
}

.arrow-up {
    position: absolute;
    top: 2.188rem;
    right: 1.938rem;
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.5s ease;
}

.bottom a:hover {
    text-decoration: none;
}

.left:hover {
    opacity: 0.5;
}

.left p {
    font-weight: 500;
    font-size: 0.875rem;
    margin-left: 0.563rem;
    color: #6f7381;
}

.right button {
    background-color: #6f7381;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding-left: 1.563rem;
    padding-right: 0.938rem;
    padding-block: 0.2rem;
    color: white;
}

.right button img {
    margin-left: 0.969rem;
}

@media screen and (max-width: 1440px) {
    .input {
        font-size: 1rem;
    }
}

@media screen and (max-width: 768px) {
    .input {
        font-size: 1.167rem;
    }
}

@media screen and (max-width: 640px) {
    .send-message {
        height: 7.833rem;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .right button {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        padding: 0;
        justify-content: center;
    }

    .right button img {
        margin-left: 0;
    }

    .right button p {
        display: none;
    }

    .left,
    .arrow-up {
        display: none;
    }

    form {
        width: 90%;
    }

    .input {
        border: none;
        height: 100%;
    }
}

@media screen and (max-width: 425px) {
    .send-message {
        margin-inline: auto;
        width: 90%;
    }
}
</style>
