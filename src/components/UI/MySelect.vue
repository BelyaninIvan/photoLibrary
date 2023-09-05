<script>
    export default {
        name: 'MySelect',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<template>
    <select class="select" :value="modelValue" @change="changeOption">
        <option class="select__option" disabled value="">Выберите из списка</option>
        <option
            class="select__option"
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
  </select>
</template>

<style>
    .select {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;

        padding: 15px 20px;
        background-color: rgba(240, 230, 140, 0.5);
        border-radius: 10px;

        font-size: 20px;
        font-weight: 700;
        color: rgb(255, 255, 255);
    }

    .select:hover {
        cursor: pointer;
    }

    .select__option {
        font-family: 'Montserrat', 'Arial', sans-serif;
        color: rgb(99, 92, 92);
    }
</style>