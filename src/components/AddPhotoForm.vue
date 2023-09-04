<script>
    export default {
        data() {
            return {
                photo: {
                    url: '',
                    alt: 'Фотография',
                    title: '',
                    desc: ''
                }
                
            }
        },
        methods: {
            createPhoto() {
                this.photo.id = Date.now();
                this.$emit('create', this.photo);
                this.photo = {
                    url: '',
                    alt: 'Фотография',
                    title: '',
                    desc: ''
                }
            }
        }
    }
</script>

<template>
    <form class="form" @submit.prevent>
        <MyInput
            v-model="photo.url" 
            type="text" 
            name="url" 
            placeholder="Введите url на фото"  
        />
        <MyInput
            v-model="photo.title" 
            type="text" 
            name="name" 
            placeholder="Введите название"  
        />
        <MyInput
            v-model="photo.desc" 
            type="text" 
            name="desc" 
            placeholder="Введите описание"  
        />
        <MyButton
            @click="createPhoto"
        >
        Добавить
        </MyButton>
    </form>
</template>

<style>
     .form {
        margin-top: 25px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
</style>