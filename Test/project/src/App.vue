<template>
    <div> 
        <div>
            <button v-on:click="addLike">Like</button>
            <button @click="addDislike">Disike</button>
        </div>
        <div>Count of likes: <strong>{{ likes }}</strong></div>
        <div>Count of dislikes: <strong>{{ dislikes }}</strong></div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.dislikes += 1;
        }
    }
}
</script>


<style>

</style>