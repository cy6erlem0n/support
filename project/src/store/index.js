import {createStore} from "vuex";
import { postModule } from "@/store/postModule";

export default createStore({
    state: {
        isauth: false,
    },
    modules: {
        post: postModule 
    } 
})