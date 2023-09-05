<script>
    import UsersListItem from '@/components/UsersListItem.vue';
    export default {
        components: {
            UsersListItem
        },
        props: {
            UsersList: {
                type: Array,
                required: true
            }
        }
    }
</script>

<template>
    <h2 class="profile__title">Профили фотографов</h2>
    <ul class="profile__list">
        <UsersListItem
            v-for="userItem in UsersList"
            :userItem="userItem"
            @key="userItem.id"
        />
    </ul>
</template>

<style scoped>
    .profile__title {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
    }

    .profile__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 35px;
    }
</style>