<template>
<form @submit.prevent>
    <h4>Created post</h4>
    <input 
        v-bind:value="post.title" 
        class="input"
        @input="post.title = $event.target.value" 
        type="text" 
        placeholder="Name"
    >
    <input 
        v-bind:value="post.body"
        @input="post.body = $event.target.value"  
        class="input" 
        type="text" 
        placeholder="About"
    > 
    <button 
        class="btn"
    > 
        Created
    </button>
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
    }
}
</script>


<style>
form {
    display:flex;
    flex-direction: column;
}
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>