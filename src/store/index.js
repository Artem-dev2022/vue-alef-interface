import { createStore } from 'vuex'

export default createStore({
  state: {
    personName: '',
    personAge: '',
    children: []
  },
  mutations: {
    updatePerson(state, data){
      state.personName = data.name;
      state.personAge = data.age;
      state.children = data.children
    }
  },
})
