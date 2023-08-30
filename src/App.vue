<script >
  export default {
    
  }
</script>

<template>
  <header class="header">
    <h1>Библиотека фотографий</h1>
  </header>
  <main>
    <section class="profile">
      <div class="profile__start">
        <img src="" alt="Фото профиля" class="profile__photo">
        <h2 class="profile__title">Данные фотографа</h2>
      </div>
      <ul class="profile__description-list">
        <li class="profile__desc-item">
          <p class="profile__item-title">Страна:</p>
          <p class="profile__item-info"></p>
        </li>
        <li class="profile__desc-item">
          <p class="profile__item-title">Город:</p>
          <p class="profile__item-info"></p>
        </li>
        <li class="profile__desc-item">
          <p class="profile__item-title">Опыт:</p>
          <p class="profile__item-info"></p>
        </li>
        <li class="profile__desc-item">
          <p class="profile__item-title">Тип съемки:</p>
          <p class="profile__item-info"></p>
        </li>
      </ul>
    </section>
    <section class="photos">
      <ul class="photos__list">
        <li class="photos__list-item item">
          <img src="" alt="Фотография" class="item__image">
          <h2 class="item__name">Название фотографии</h2>
          <button class="item__button" type="button"></button>
          <p class="item__desc" style="display: none;">
            Описание картинки
          </p>
        </li>
        <li class="photos__list-item item">
          <img src="" alt="Фотография" class="item__image">
          <h2 class="item__name">Название фотографии</h2>
          <button class="item__button" type="button"></button>
          <p class="item__desc" style="display: none;">
            Описание картинки
          </p>
        </li>
        <li class="photos__list-item item">
          <img src="" alt="Фотография" class="item__image">
          <h2 class="item__name">Название фотографии</h2>
          <button class="item__button" type="button"></button>
          <p class="item__desc" style="display: none;">
            Описание картинки
          </p>
        </li>
      </ul>
    </section>
    <section>
      <div class="modal" id="createPhoto">
        <h2 class="modal__title">Добавить фогографию</h2>
        <form class="form" id="addPhoto">
          <input class="form__input" type="text" name="url" placeholder="Введите url на фото">
          <input class="form__input" type="text" name="name" placeholder="Введите название">
          <input class="form__input form__input_type_desc" type="text" name="desc">
          <button class="form__button" type="submit">Добавить</button>
        </form>
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
          <button class="form__button" type="submit">Создать</button>
        </form>
      </div>
    </section>
  </main>
  <footer class="footer">
    Подвал страницы
  </footer>
</template>

<style scoped>

</style>
