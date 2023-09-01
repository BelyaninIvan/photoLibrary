<script >
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import PhotosList from '@/components/PhotosList.vue';
  import AddPhotoForm from '@/components/AddPhotoForm.vue';
  
  export default {
    components: {
      HeaderComponent, PhotosList, AddPhotoForm
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
          }
        ],
        photos: [
          {
            id: '1',
            url: 'https://tsaritsyno-museum.ru/uploads/2023/02/sady-2023-5.jpg',
            alt: 'Фрагмент сада',
            title: 'Фрагмент сада',
            desc: 'На фотографии изображен фрагмент одного из садов представленных на конкурсе в музее-заповеднике "Царицыно"'
          },
          {
            id: '2',
            url: 'https://tsaritsyno-museum.ru/uploads/2023/02/sady-2023-5.jpg',
            alt: 'Фрагмент сада',
            title: 'Фрагмент сада',
            desc: 'На фотографии изображен фрагмент одного из садов представленных на конкурсе в музее-заповеднике "Царицыно"'
          },
          {
            id: '3',
            url: 'https://tsaritsyno-museum.ru/uploads/2023/02/sady-2023-3.jpg',
            alt: 'Фрагмент сада',
            title: 'Фрагмент сада',
            desc: 'На фотографии изображен фрагмент одного из садов представленных на конкурсе в музее-заповеднике "Царицыно"'
          }
        ]
      }
    },
    methods: {
      createPhoto(photo) {
        this.photos.push(photo);
      }
    }
  }
</script>

<template>
  <HeaderComponent/>
  <main>
    <section class="profile" v-for="user in users">
      <div class="profile__start">
        <img :src="user.url" alt="Фото профиля" class="profile__photo">
        <h2 class="profile__title">{{ user.name }}</h2>
      </div>
      <ul class="profile__description-list">
        <li class="profile__desc-item">
          <p class="profile__item-title">Страна:</p>
          <p class="profile__item-info">{{ user.country }}</p>
        </li>
        <li class="profile__desc-item">
          <p class="profile__item-title">Город:</p>
          <p class="profile__item-info">{{ user.city }}</p>
        </li>
        <li class="profile__desc-item">
          <p class="profile__item-title">Опыт:</p>
          <p class="profile__item-info">{{ user.exp }} лет</p>
        </li>
        <li class="profile__desc-item">
          <p class="profile__item-title">Тип съемки:</p>
          <p class="profile__item-info">{{ user.type }}</p>
        </li>
      </ul>
    </section>
    <section class="photos">
      <PhotosList
        v-bind:photosList="photos"
      />
    </section>
    <section>
      <div class="modal" id="createPhoto">
        <h2 class="modal__title">Добавить фогографию</h2>
        <AddPhotoForm
          @create="createPhoto"
        />
      </div>
      <div class="modal" id="createUser">
        <h2 class="modal__title">Создать пользователя</h2>
        <form class="form">
          <input class="form__input" type="text" name="name" placeholder="Введите имя пользователя">
          <input class="form__input" type="text" name="photo" placeholder="Введите ссылку на фотографию">
          <input class="form__input" type="text" name="country" placeholder="Введите название страны">
          <input class="form__input" type="text" name="city" placeholder="Введите название города">
          <input class="form__input" type="number" name="exp" placeholder="Какой у вас опыт?">
          <input class="form__input" type="text" name="type" placeholder="Введите жанры фотографий">
          <myButton>Создать</myButton>
        </form>
      </div>
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

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
  }

  .profile__start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;
  }

  .profile__photo {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
  }

  .profile__description-list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  .profile__desc-item {
    display: flex;
    align-items: center;
    column-gap: 20px;

    font-size: 22px;
    font-weight: 400;
  }

  .profile__item-title {
    margin: 0;
    font-weight: 700;
  }

  .profile__item-info {
    margin: 0;
  }

  .photos {
    max-width: 1440px;
    width: 100%;
    margin: 30px auto 0;
    padding: 45px;
  }

  .modal {
    padding: 25px;
    max-width: 520px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(240, 230, 140, 0.2);
    border-radius: 15px;
  }

  .modal__title {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }

 
</style>
