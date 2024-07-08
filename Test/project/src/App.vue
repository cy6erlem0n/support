<template>
    <div class="app"> 
        <post-form/>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "./components/PostList.vue";
export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'Javacript1', body: '1About post'},
                {id: 2, title: 'Javacript2', body: '2About post'},
                {id: 3, title: 'Javacript3', body: '3About post'},
            ],
            title:'',
            body:''
        }
    },
    methods: {
        createPost(){
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
        },
    }
}
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
 padding: 20px;   
}

</style>