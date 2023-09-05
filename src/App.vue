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
            name: 'Белянин Иван', 
            url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663659739_4-mykaleidoscope-ru-p-professionalnaya-gordost-instagram-4.jpg', 
            country: 'Россия', 
            city: 'Саратов', 
            exp: '5', 
            type: 'Пейзажи, Макро'
          },
          {
            id: '1', 
            name: 'Белянин Иван', 
            url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663659739_4-mykaleidoscope-ru-p-professionalnaya-gordost-instagram-4.jpg', 
            country: 'Россия', 
            city: 'Саратов', 
            exp: '5', 
            type: 'Пейзажи, Макро'
          },
          {
            id: '1', 
            name: 'Белянин Иван', 
            url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663659739_4-mykaleidoscope-ru-p-professionalnaya-gordost-instagram-4.jpg', 
            country: 'Россия', 
            city: 'Саратов', 
            exp: '5', 
            type: 'Пейзажи, Макро'
          }
        ],
        photos: [],
        dialogAddPhotoVisible: false,
        dialogAddUserVisible: false,
        isPhotoLoading: false
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
          const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=12');
          this.photos = response.data;
        } catch(e) {
          alert('Ошибка')
        } finally {
          this.isPhotoLoading = false;
        }
      }
    },
    mounted() {
      this.fetchPhotos();
    }
  }
</script>

<template>
  <HeaderComponent/>
  <main>
    <section class="profile">
      <UsersList
        :UsersList="users"
      />
    </section>
    <section class="photos">
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
      </div>
      
      <PhotosList
        v-bind:photosList="photos"
        v-if="!isPhotoLoading"
      />
      <div v-else>
        Идет загрузка...
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

 
</style>
