<script>
    export default {
        
    }
</script>

<template>
    <div class="navigation">
        <h1>PhotoLibrary</h1>
        <div class="navigation__buttons">
            <MyButton @click="$router.push('/users')"> Фотографии </MyButton>
        </div>
    </div>
</template>



<style scoped>
    .navigation {
        padding: 40px 20px;
        background-color: rgba(255, 255, 176, 0.507);
        box-shadow: 2px 2px 4px green;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>