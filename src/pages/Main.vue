<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import UsersList from '@/components/UsersList.vue';
    export default {
        components: {
            HeaderComponent,
            UsersList
        },
        data() {
            return {
                users: [
                {
                    id: '1', 
                    name: 'Иван Белянин', 
                    url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663659739_4-mykaleidoscope-ru-p-professionalnaya-gordost-instagram-4.jpg', 
                    country: 'Россия', 
                    city: 'Саратов', 
                    exp: '5', 
                    type: 'Пейзажи, Макро, Ч/Б'
                },
                {
                    id: '2', 
                    name: 'Иммануил Поло', 
                    url: 'https://espanarusa.com/files/autoupload/42/9/18/0enrafao66963.jpg', 
                    country: 'Испания', 
                    city: 'Мадрид', 
                    exp: '2', 
                    type: 'Портреты, Животные'
                },
                {
                    id: '3', 
                    name: 'Адам Круз', 
                    url: 'https://images.squarespace-cdn.com/content/v1/5b670534b98a78d5e84a7d19/1681119069675-WPVGBWOG3N0C16CM2OCU/TreyDontNeedNoStinkingProcessing.jpg', 
                    country: 'США', 
                    city: 'Нью-Йорк', 
                    exp: '25', 
                    type: 'Ч/Б, Животные'
                }
                ],
                selectedSort: '',
                page: 1,
                limit: 10,
                totalPage: 5,
                sortOptions: [
                    {value: 'name', name: 'По имени'},
                    {value: 'country', name: 'По стране'}
                ],
                searchQuery: ''
            }
        },
        methods: {
            changePage(pageNumber) {
                this.page = pageNumber;
            }
        },
        computed: {
            sortedUsers() {
                return [...this.users].sort((user1, user2) => {
                return user1[this.selectedSort]?.localeCompare(user2[this.selectedSort])
                })
            },
            sortedAndSerchedUsers() {
                return this.sortedUsers.filter(user => user.type.toLowerCase().includes(this.searchQuery))
            }
        }
    }
</script>

<template>
    <HeaderComponent/>
    <main>
      <section class="profile">
        <div class="buttons">
          <MyInput
            v-model="searchQuery"
            placeholder="Поиск..."
          />

          <MySelect 
            v-model="selectedSort"
            :options="sortOptions"
          />
        </div>

        <UsersList
            :UsersList="sortedAndSerchedUsers"
        />
        </section>
    </main>
</template>

<style scoped>
    .profile {
        max-width: 1440px;
        width: 100%;
        margin: 50px auto 0;
    }

    .buttons {
        display: flex;
        max-width: 800px;
        margin: 0 auto 40px;
        align-items: center;
        justify-content: center;
        column-gap: 50px;
    }
</style>