<template>
    <div class="post" >
        <div>
            <div><strong>Name:</strong> {{ post.title }}</div>
            <div><strong>About:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button>delete</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>