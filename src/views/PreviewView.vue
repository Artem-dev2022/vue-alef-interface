<template>
  <div v-if="this.$store.state.personName">
    <div class="preview-personal">
      <h2 class="preview-personal__title title-h2">Персональные данные</h2>
      
      <p class="preview-personal__data preview-data">
        {{this.$store.state.personName}}, {{this.$store.state.personAge}} лет
      </p>
    </div>

    <div class="preview-children">
      <h2 class="preview-children__title title-h2">Дети</h2>

      <div class="preview-children__list">
        <p class="preview-children__data preview-data" v-for="(child, index) of children" :key="index">
          {{child.name}}, {{child.age}} лет
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <h2 class="preview-personal__title title-h2">Данных пока нет</h2>
  </div>
</template>

<script>
export default {
  computed: {
    children() {
      return this.$store.state.children
    }
  }
}
</script>