<script>
    export default {
        props: {
            photoItem: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div>
        <li class="item">
            <img :src="photoItem.url" :alt="photoItem.alt" class="item__image">
            <h2 class="item__name">{{ photoItem.title }}</h2>
            <myButton>Подробнее</myButton>
            <p class="item__desc" style="display: none;">
                {{ photoItem.desc }}
            </p>
        </li>
    </div>
</template>

<style>
    .item {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
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