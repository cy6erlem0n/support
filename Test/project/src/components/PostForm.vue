<template>
<form @submit.prevent>
    <h4>Created post</h4>
    <my-input 
        v-model="post.title"
        type="text" 
        placeholder="Name"
    />
    <my-input 
        v-model="post.body"
        type="text" 
        placeholder="About"
    /> 
    <my-button 
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost"
    > 
        Created
    </my-button>
</form>
</template>

<script>
export default {
    data () {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>


<style>
form {
    display:flex;
    flex-direction: column;
}

</style>