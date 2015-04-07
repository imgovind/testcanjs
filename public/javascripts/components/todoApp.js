$(function() {
  can.Component.extend({
    tag: 'new-todo',
    template: can.view('/views/components/todoApp/newTodo.html'),
    scope: {
      todo: new Todo(),
      createTodo: function(context, el, ev) {
        ev.preventDefault();
        var createdTodo = context.todo;
        createdTodo.save();
        $("list-todo").scope().attr("todos").push(createdTodo);
        this.attr("todo", new Todo());
      }
    },
    events: {
      'form submit': function(el, ev) {
        ev.preventDefault();
      }
    }
  });



  var allTodos = Todo.findAll();

  allTodos.then(function(todos) {
    can.Component.extend({
      tag: 'list-todo',
      template: can.view('/views/components/todoApp/listTodo.html'),
      scope: {
        todos: todos
      },
      events: {
        'tr hover': function(el, ev) {
          consoe.log(el.attr('class'));
        },
        'input:checkbox change': function(el, ev) {
          console.log('You changed' + el.closest("tr").find("input:text").val());
          var row = el.closest('tr'),
            todo = row.find('input:hidden').data('todo');
          todo.save();
        },
        'input:text change': function(el, ev) {
          var row = el.closest('tr'),
            todo = row.find('input:hidden').data('todo');
          todo.save();
        },
        'button.todoDestroy click': function(el, ev) {
          console.log("destroy button clicked");
          var row = el.closest('tr'),
            todo = row.find('input:hidden').data('todo');
          todo.destroy();
        }
      },
      helpers: {
        isChecked: function(completed) {
          return completed() ? "checked" : "";
        },
        uppercase: function(str) {
          return str().toUpperCase();
        }
      }
    });
    can.view('/views/components/todoApp/out.html', {}, function(fragment) {
      $("#out").html(fragment);
    });
  });

  // var TodosController = can.Control({
  //   defaults: {
  //     view: '/views/components/todoApp/listTodo.html'
  //   }
  // }, {
  //   init: function(el, options) {
  //     var self = this;
  //     can.view(this.options.view, {
  //       todos: Todo.findAll()
  //     }, {

  //     }).then(function(fragment) {
  //       self.element.html(fragment);
  //     });
  //   },
  //   'tr hover': function(el, ev) {
  //     consoe.log(el.attr('class'));
  //   },
  //   'input:checkbox change': function(el, ev) {
  //     console.log('You changed' + el.closest("tr").find("input:text").val());
  //     var row = el.closest('tr'),
  //       todo = row.find('input:hidden').data('todo');
  //     todo.save();
  //   },
  //   'input:text change': function(el, ev) {
  //     var row = el.closest('tr'),
  //       todo = row.find('input:hidden').data('todo');
  //     todo.save();
  //   },
  //   'button.todoDestroy click': function(el, ev) {
  //     console.log("destroy button clicked");
  //     var row = el.closest('tr'),
  //       todo = row.find('input:hidden').data('todo');
  //     todo.destroy();
  //   }
  // });

  // var todosList = new TodosController('.todoListContainer');

});
