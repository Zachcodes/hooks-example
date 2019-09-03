const todos = [
    {
      id: 1,
      todo: 'Get groceries'
    },
    {
      id: 2,
      todo: 'Read book'
    },
    {
      id: 3,
      todo: 'Clean house'
    }
  ];
  
  module.exports = {
    getTodos(req, res) {
      res.send(todos);
    },
    updateTodo(req, res) {
      let { id } = req.params;
      let { newVal } = req.body;
      console.log('id', id);
      console.log('newval', newVal);
      let todo = todos.find(t => t.id === +id);
      todo.todo = newVal;
      res.send(todos);
    }
  };
  