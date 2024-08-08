<template>
    <div >
        <h1>Seit with posts</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Search.."
            v-focus
        >

        </my-input>
        <div class="app__btns">
            <my-button
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

            />
        </my-dialog>
        <post-list 
            :posts="sortedAndSearchedPosts"
            v-if="!isPostsLoading"
        />
        <div v-else >Download epta</div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useSortedPosts from "@/hooks/useSortedPosts"
export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'for name'},
                {value: 'body', name: 'for about'},
            ]
        }
    },
    setup(props) {
        const {posts, totalPages, isPostsLoading} = usePosts(10);
        const {sortedPosts, selectedSort} = useSortedPosts(posts);
        const {searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts, 
            totalPages, 
            isPostsLoading,
            sortedPosts, 
            selectedSort,
            searchQuery, 
            sortedAndSearchedPosts
        }
    }
}
</script>


<style>
.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 8px solid teal;
}
.observer {
    height: 30px;
    background: green;
}
</style>