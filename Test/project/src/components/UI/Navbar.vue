<template>
    <div class="navbar">
        <div @click="$router.push('/')"> Anything </div>
        <div
        class="navbar__btns">
        <my-button @click="$router.push('/post')"> Posts </my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 10px "> About </my-button>
        <my-button @click="$router.push('/store')" style="margin-left: 10px "> Store </my-button>
        <my-button @click="$router.push('/comp')" style="margin-left: 10px "> Composition </my-button>
        </div>
    </div>
</template>
    
<script>

</script>
    
    
<style>
.navbar {
    height: 50px;
    background-color:lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    margin-left: auto;
} 
</style>