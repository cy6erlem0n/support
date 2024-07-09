<template>
    <div>
        <h3>List users</h3>
        <post-item  
        v-for="post in posts"
        :post="post"
        />
    </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>


<style>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>