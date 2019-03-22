export default{
  addTodo (state, todo) {
    state.todos.unshift(todo)
    localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  delTodo (state, i) {
    state.todos.splice(i, 1)
    localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  ref (state) {
    state.todos = JSON.parse(localStorage.getItem('todos'))
  }
}
