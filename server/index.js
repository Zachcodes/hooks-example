const express = require('express');
const c = require('./controller');

const app = express();

app.use(express.json());

app.get('/api/todos', c.getTodos);
app.put('/api/todos/:id', c.updateTodo);

app.listen(4000, () => console.log('Listening on port 4000'));