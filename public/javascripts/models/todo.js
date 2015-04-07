(function() {
  var Todo = can.Construct.extend({}, {
    init: function(description, completed) {
      this.description = description;
      this.completed = completed || false;
    },
    isSecret: false,
    allowedToEdit: function() {
      return !this.isSecret;
    }
  });

  var PrivateTodo = Todo.extend({}, {
    init: function(description, completed, isPrivate) {
      Todo.prototype.init.apply(this, arguments);
      this.isSecret = true;
    }
  });
})();

var Todo = can.Model({
  findAll: 'GET http://localhost:1338/todo',
  findOne: 'GET http://localhost:1338/todo/{id}',
  create: 'POST http://localhost:1338/todo',
  update: 'PUT http://localhost:1338/todo/{id}',
  destroy: 'DELETE http://localhost:1338/todo/{id}'
}, {});
