<script>
import PhotosListItem from '@/components/PhotosListItem.vue'

    export default {
        components: {
            PhotosListItem
        },
        props: {
            photosList: {
                type: Array,
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
    <div>
        <h2 class="photos__title">Каталог фотографий</h2>
        <ul class="photos__list">
            <transition-group name="photos-list">
                <PhotosListItem
                    v-for="photoItem in photosList"
                    v-bind:photoItem="photoItem"
                    :idUser="idUser"
                />
            </transition-group>
            
        </ul>
    </div>
</template>

<style>
    .photos__title {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
    }

    .photos__list {
        margin: 0;
        margin-top: 50px;
        padding: 0;
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(3, 370px);
        column-gap: 100px;
        row-gap: 35px;
        justify-content: center;
    }

    .photos-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .photos-list-enter-active,
    .photos-list-leave-active {
        transition: all 1s ease;
    }
    .photos-list-enter-from,
    .photos-list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>