
<script>
export default {
    data() {
        return {
            user: {
                name: '',
                url: '',
                country: '',
                city: '',
                exp: '',
                type: ''
            }
        }
    },
    methods: {
        createUser() {
            this.user.id = Date.now();
            this.$emit('create', this.user);
            this.user = {
                name: '',
                url: '',
                country: '',
                city: '',
                exp: '',
                type: ''
            }
        }
    }
}
</script>

<template>
    <form class="form" @submit.prevent>
        <MyInput
            v-model="user.name"
            type="text" 
            name="name" 
            placeholder="Введите имя пользователя"
        />
        <MyInput
            v-model="user.url"
            type="text" 
            name="photo" 
            placeholder="Введите ссылку на фотографию"
        />
        <MyInput
            v-model="user.country"
            type="text" 
            name="country" 
            placeholder="Введите название страны"
        />
        <MyInput
            v-model="user.city"
            type="text" 
            name="city" 
            placeholder="Введите название города"
        />
        <MyInput
            v-model="user.exp"
            type="text" 
            name="exp" 
            placeholder="Какой у вас опыт?"
        />
        <MyInput
            v-model="user.type"
            type="text" 
            name="type" 
            placeholder="Введите жанры фотографий"
        />
        <MyButton
            @click="createUser"
        >
            Создать
        </MyButton>
    </form>
</template>

<style>
    
</style>