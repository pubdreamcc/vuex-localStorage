export default{
  addTodo ({commit, state}, todo) {
    commit('addTodo', todo)
  },
  delTodo ({commit, state}, i) {
    commit('delTodo', i)
  }
}
