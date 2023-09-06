<script>
    export default {
        props: {
            userItem: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="card">
        <div class="profile__start">
            <img :src="userItem.url" alt="Фото профиля" class="profile__photo">
            <h2 class="profile__title">{{ userItem.name }}</h2>
        </div>
        <ul class="profile__description-list">
            <li class="profile__desc-item">
                <p class="profile__item-title">Страна:</p>
                <p class="profile__item-info">{{ userItem.country }}</p>
            </li>
            <li class="profile__desc-item">
                <p class="profile__item-title">Город:</p>
                <p class="profile__item-info">{{ userItem.city }}</p>
            </li>
            <li class="profile__desc-item">
                <p class="profile__item-title">Опыт:</p>
                <p class="profile__item-info">{{ userItem.exp }} лет</p>
            </li>
            <li class="profile__desc-item">
                <p class="profile__item-title">Тип съемки:</p>
                <p class="profile__item-info">{{ userItem.type }}</p>
            </li>
        </ul>
        <MyButton
            @click="$router.push(`/users/${userItem.id}`)"
        >
            Перейти к фотографиям
        </MyButton>
    </div>
    
</template>

<style scoped>

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 100px;

        padding: 15px;
        background-color: rgba(240, 230, 140, 0.2);
        border-radius: 15px;
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
    min-width: 500px;

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

</style>