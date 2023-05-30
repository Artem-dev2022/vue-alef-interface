<template>
  <div class="personal">
    <h2 class="personal__title title-h2">Персональные данные</h2>
    <div class="personal__field input-field">
      <span
        class="personal__placeholder input-placeholder"
        :class="{'input-placeholder--active': personName !== '' || personNameFocus}"
        >Имя</span>
      <input 
        v-model="personName"
        class="personal__input input"
        :class="{'input--error': nameError}"
        type="text"
        @input="nameError = false"
        @focus="personNameFocus = true"
        @blur="personNameFocus = false">
      <span v-show="nameError" class="input-error">Заполните поле</span>
    </div>

    <div class="personal__field input-field">
      <span 
        class="personal__placeholder input-placeholder"
        :class="{'input-placeholder--active': personAge !== '' || personAgeFocus}"
      >Возраст</span>
      <input
        v-model="personAge"
        class="personal__input input"
        :class="{'input--error': ageError}"
        type="number"
        @input="ageError = false"
        @focus="personAgeFocus = true"
        @blur="personAgeFocus = false">
        <span v-show="ageError" class="input-error">Заполните поле</span>
    </div>
  </div>

  <div class="children">
    <div class="children__top">
      <h2 class="children__title title-h2">Дети (макс. 5)</h2>
      <button v-show="children.length < 5" v-on:click="addChildren()" class="children__btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill="#01A7FD"/>
        </svg>
        Добавить ребенка
      </button>
    </div>
    <div class="children__list">
      <ChildrenItem
        :checkErrors="checkErrors"
        v-for="(item, index) of children" :key="item"
        :update="updateData"
        :index="index"
        :remove="removeChildren"/>
    </div>

    <button v-on:click="submit()" class="children__btn-save">Сохранить</button>
  </div>
</template>

<script>
import ChildrenItem from '../components/ChildrenItem.vue'

export default {
  components: {ChildrenItem},
  data() {
    return {
      personName: this.$store.state.personName,
      personAge: this.$store.state.personAge,
      children: this.$store.state.children,

      personNameFocus: false,
      personAgeFocus: false,

      nameError: false,
      ageError: false,

      checkErrors: false
    }
  },
  methods: {
    addChildren(){
      this.children.push({name: '', age: ''});
    },
    removeChildren(index){
      this.children.splice(index, 1)
    },
    updateData(index, name, age){
      this.children[index].name = name;
      this.children[index].age = age;
    },
    submit(){
      if (this.personName === '') {
        this.nameError = true
        return
      }
      if (this.personAge === '') {
        this.ageError = true
        return
      }
      for (let i of this.children){
        if (i.name === '' || i.age === '') {
          this.checkErrors = true
          return
        }
      }
      this.$store.commit('updatePerson', {name: this.personName, age: this.personAge, children: this.children})
      this.$router.push({ path: 'preview' })
    }
  }
}
</script>
