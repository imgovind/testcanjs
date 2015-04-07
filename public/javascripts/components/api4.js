$(function() {
  var Person = can.Map.extend({
    init: function(name) {
      this.attr("name", name);
      this.attr("oneofour", {
        salutation: "Ms.",
        firstName: "Katy",
        lastName: "Perry"
      });
    },
    name: '',
    oneofour: null
  });
  can.Component.extend({
    tag: 'hello-world',
    template: can.view('/views/components/api4/helloWorld.html'),
    scope: {
      changeSubject: function(context, el, ev) {
        if (this.attr("subject") === "World") {
          this.attr("subject", "Earth");
        } else {
          this.attr("subject", "World");
        }
      },
    }
  });
  can.view('/views/components/api4/out.html', {
    data: new Person('Robot Overlords')
  }, function(fragment) {
    $("#out").html(fragment);
  });
});
