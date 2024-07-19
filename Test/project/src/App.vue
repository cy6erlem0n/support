<template>
    <div class="app">
        <h1>Seit with posts</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Search.."
        >

        </my-input>
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Create post
            </my-button>
            <my-select 
            v-model="selectedSort"
            :options="sortOptions"
            >
            </my-select> 
        </div>
         
        <my-dialog v-model:show="dialogVisible">
            <post-form
            @create="createPost"
            />
        </my-dialog>
        <post-list 
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else >Download epta</div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "./components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import MySelect from "./components/UI/MySelect.vue";
import axios from "axios";
export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value: 'title', name: 'for name'},
                {value: 'body', name: 'for about'},
            ]
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post);
            this.dialogVisible = false;            
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (e) {
                alert('Error')
            } finally {
                this.isPostsLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1,post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]) )
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
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
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
</style>