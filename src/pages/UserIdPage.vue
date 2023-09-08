<script>
    import UsersListItem from '@/components/UsersListItem.vue';
    import PhotosList from '@/components/PhotosList.vue';
    import AddPhotoForm from '@/components/AddPhotoForm.vue';
    import axios from 'axios';
    export default {
        components: {
            UsersListItem,
            PhotosList,
            AddPhotoForm
        },
        data() {
            return {
                photos: [
                    {
                        id: '1',
                        idUser: '1',
                        url: 'https://i.pinimg.com/originals/d5/24/65/d52465aaf2af54f0c5cca33351b83415.jpg',
                        alt: 'Фотография',
                        title: 'Озеро в Канаде',
                        desc: 'Озеро в Канаде'
                    },
                    {
                        id: '2',
                        idUser: '1',
                        url: 'https://s1.1zoom.ru/big3/241/431666-Kysb.jpg',
                        alt: 'Фотография',
                        title: 'Поляна цветов в горах',
                        desc: 'Поляна цветов в горах'
                    },
                    {
                        id: '3',
                        idUser: '1',
                        url: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1649120109_26-vsegda-pomnim-com-p-krasivie-prirodnie-mesta-foto-30.jpg',
                        alt: 'Фотография',
                        title: 'Озеро в Европе',
                        desc: 'Озеро в Европе'
                    },
                    {
                        id: '4',
                        idUser: '2',
                        url: 'https://funik.ru/wp-content/uploads/2018/10/22e3f65d28e16f0d1a16.jpeg',
                        alt: 'Фотография',
                        title: 'Озеро в Азии',
                        desc: 'Озеро в Азии'
                    },
                    {
                        id: '5',
                        idUser: '3',
                        url: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-sakura-28.jpg',
                        alt: 'Фотография',
                        title: 'Сакуры в Японии',
                        desc: 'Сакуры в Японии'
                    },
                    {
                        id: '6',
                        idUser: '3',
                        url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666362550_25-mykaleidoscope-ru-p-vodopadi-krasivo-26.jpg',
                        alt: 'Фотография',
                        title: 'Водопад в Америке',
                        desc: 'Водопад в Америке'
                    }
                ],
                dialogAddPhotoVisible: false,
                isPhotoLoading: false,
                totalPage: 2
            }
        },
        methods: {
            createPhoto(photo) {
                this.photos.unshift(photo);
                this.dialogAddPhotoVisible = false;
            },
            openAddPhotoForm() {
                this.dialogAddPhotoVisible = true;
            },
        }
    }
</script>

<template>
    <h1>{{ $route.params.id }}</h1>
    
    <section class="photos">
      <PhotosList
        :photosList="photos"
        :idUser="$route.params.id"
      />

      <MyPageWrapper
        :totalPage="totalPage"
      />
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
    </section>
</template>

<style scoped>
    .photos {
        max-width: 1440px;
        width: 100%;
        margin: 30px auto 0;
        padding: 20px 45px 45px;
    }

    .modal__title {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
    }

</style>