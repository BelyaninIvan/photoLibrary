<script>
    export default {
        name: 'MyPageWrapper',
        data() {
            return {
                page: 1,
                limit: 9
            }
        },
        props: {
            totalPage: {
                type: Number,
                required: true
            }
        },
        methods: {
            changePage(pageNumber) {
                this.page = pageNumber;
            },
        }
    }
</script>

<template>
    <div class="profile__wrapper">
        <div 
          v-for="pageNumb in totalPage" 
          :key="pageNumb"
          class="profile__wrapper-item"
          :class="{
            'profile__wrapper-item_current': page === pageNumb
          }"
          @click="changePage(pageNumb)"
        >
          {{ pageNumb }}
        </div>
      </div>
</template>

<style scoped>
    
    .profile__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        flex-wrap: wrap;
        max-width: 450px;
        margin: 30px auto 0;
    }

    .profile__wrapper-item {
        margin: 0;
        padding: 10px;
        font-size: 22px;
        font-weight: 700;
        text-align: center;
        border: 1px solid rgb(240, 230, 140);
    }

    .profile__wrapper-item_current {
        border: 2px solid green;
        background-color: rgba(72, 100, 72, 0.7);
    }
</style>