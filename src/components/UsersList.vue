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
        <transition-group name="users-list">
            <UsersListItem
                v-for="userItem in UsersList"
                :userItem="userItem"
                :key="userItem.id"
            />
        </transition-group>
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
        margin-top: 50px;
        flex-direction: column;
        align-items: center;
        row-gap: 35px;
    }

    .users-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .users-list-enter-active,
    .users-list-leave-active {
        transition: all 1s ease;
    }
    .users-list-enter-from,
    .users-list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .users-list-move {
        transition: transform 0.4s ease;
    }
</style>