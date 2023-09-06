<script>
    export default {
        props: {
            photoItem: {
                type: Object,
                required: true
            },
            idUser: {
                type: String,
                required: true
            }
        }
    }
</script>

<template>
    <li class="item" v-if="photoItem.idUser === idUser">
        <img :src="photoItem.url" :alt="photoItem.alt" class="item__image">
        <h2 class="item__name">{{ photoItem.title }}</h2>
        <MyButton>Подробнее</MyButton>
        <p class="item__desc" style="display: none;">
            {{ photoItem.desc }}
        </p>
    </li>
</template>

<style>
    .item {
        padding: 15px;
        min-height: 520px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(240, 230, 140, 0.2);
        border-radius: 15px;
    }


    .item__image {
        width: 300px;
        height: 300px;
        border-radius: 20px;
        object-fit: cover;
    }

</style>