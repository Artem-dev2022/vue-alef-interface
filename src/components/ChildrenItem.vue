<template>
    <div class="children__item">
        <div class="children__field input-field">
          <span class="children__placeholder input-placeholder" :class="{'input-placeholder--active': name !== '' || nameFocus}">Имя</span>
          <input 
            :on-change="update(index, name, age)" 
            v-model="name" 
            class="children__input input"
            :class="{'input--error': checkErrors && name == ''}"
            type="text" 
            @focus="nameFocus = true" 
            @blur="nameFocus = false">
          <span v-show="checkErrors && name == ''" class="input-error">Заполните поле</span>
        </div>

        <div class="children__field input-field">
          <span class="children__placeholder input-placeholder" :class="{'input-placeholder--active': age !== '' || ageFocus}">Возраст</span>
          <input 
            :on-change="update(index, name, age)" 
            v-model="age" 
            class="children__input input"
            :class="{'input--error': checkErrors && age == ''}"
            type="number" 
            @focus="ageFocus = true" 
            @blur="ageFocus = false">
          <span v-show="checkErrors && age == ''" class="input-error">Заполните поле</span>
        </div>

        <button v-on:click="remove(index)" class="children__btn-remove">
          Удалить
        </button>
    </div>
</template>

<script>
export default {
    props: ['index', 'remove', 'update', 'checkErrors'],
    data(){
        return {
            name: this.$store.state.children[this.index].name,
            age: this.$store.state.children[this.index].age,
            nameFocus: false,
            ageFocus: false,
        }
    }
}
</script>