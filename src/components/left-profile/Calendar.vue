<template>
    <div class="calendar">
        <div class="container flex-center">
            <p id="rotate">Coming soon</p>
            <img id="calendarpic" src="@/assets/calendar.svg" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    name: "Calendar",

    props: {},
};
</script>

<style scoped>
#rotate {
    position: absolute;
    transform: rotate(-45deg);
    font-size: 1.625rem;
    font-weight: 600;
    letter-spacing: 1rem;
    opacity: 0.8;
    color: #ffffff;
}
.container {
    padding: 1.875rem;
}
#calendarpic {
    width: 100%;
    opacity: 0.6;
}
#calendarpic:hover {
    opacity: 0.3;
}
.calendar {
    margin: auto;
}
</style>
