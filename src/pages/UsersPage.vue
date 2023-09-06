<script >
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import PhotosList from '@/components/PhotosList.vue';
  import AddPhotoForm from '@/components/AddPhotoForm.vue';
  import AddUserForm from '@/components/AddUserForm.vue';
  import UsersList from '@/components/UsersList.vue';
  import axios from 'axios';
  
  export default {
    components: {
      HeaderComponent,
      PhotosList,
      AddPhotoForm,
      AddUserForm,
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
        photos: [],
        dialogAddPhotoVisible: false,
        dialogAddUserVisible: false,
        isPhotoLoading: false,
        selectedSort: '',
        page: 1,
        limit: 12,
        totalPage: 5,
        sortOptions: [
          {value: 'name', name: 'По имени'},
          {value: 'country', name: 'По стране'}
        ],
        searchQuery: ''
      }
    },
    methods: {
      createPhoto(photo) {
        this.photos.unshift(photo);
        this.dialogAddPhotoVisible = false;
      },
      createUser(user) {
        this.users.push(user);
        this.dialogAddUserVisible = false;
      },
      openAddPhotoForm() {
        this.dialogAddPhotoVisible = true;
      },
      openAddUserForm() {
        this.dialogAddUserVisible = true;
      },
      async fetchPhotos() {
        try {
          this.isPhotoLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.photos = response.data;
        } catch(e) {
          alert('Ошибка')
        } finally {
          this.isPhotoLoading = false;
        }
      },
      changePage(pageNumber) {
        this.page = pageNumber;
      }
    },
    mounted() {
      this.fetchPhotos();
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
    },
    watch: {
      page() {
        this.fetchPhotos()
      }
    }
  }
</script>

<template>
  <HeaderComponent/>
  <main>
    <section class="profile">
      <div class="buttons">
        <MyButton
          @click="openAddPhotoForm"
        >
          Добавить фото
        </MyButton>
        <MyButton
          @click="openAddUserForm"
        >
          Добавить пользователя
        </MyButton>

        <MySelect 
          v-model="selectedSort"
          :options="sortOptions"
        />
      </div>

      <div class="buttons">
        <MyInput
          v-model="searchQuery"
          placeholder="Поиск..."
        />
      </div>

      <UsersList
        :UsersList="sortedAndSerchedUsers"
      />
    </section>
    <section class="photos">
      
      
      <PhotosList
        v-bind:photosList="photos"
        v-if="!isPhotoLoading"
      />
      <div v-else>
        Идет загрузка...
      </div>

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
    </section>
    <section>
      <MyDialog
        v-model:show="dialogAddPhotoVisible"
        >
        <h2 class="modal__title">Добавить фогографию</h2>
        <AddPhotoForm
          @create="createPhoto"
        />
      </MyDialog>
      <MyDialog
        v-model:show="dialogAddUserVisible"
        >
        <h2 class="modal__title">Создать пользователя</h2>
        <AddUserForm
          @create="createUser"
        />
      </MyDialog>
    </section>
  </main>
  <footer class="footer">
    Подвал страницы
  </footer>
</template>

<style scoped>
  .profile {
    max-width: 1440px;
    width: 100%;
    margin: 50px auto 0;

  }

  .photos {
    max-width: 1440px;
    width: 100%;
    margin: 30px auto 0;
    padding: 20px 45px 45px;
  }

  .buttons {
    display: flex;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
    column-gap: 50px;
  }

  .modal__title {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }

  .profile__wrapper {
    display: flex;
    justify-content: space-between;
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