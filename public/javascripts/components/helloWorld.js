$(function() {
  can.Component.extend({
    tag: 'hello-world',
    // template: can.stache('<h1>Hello World</h1>'),
    template: can.view('/views/components/helloWorld/helloWorld.html'),
    scope: {
      salutation: "Hello",
      subject: "",
      isSubjectValid: function(context, el, ev) {
        return this.attr("subject");
      },
      checkVisibility: function(context, el, ev) {
        // if(this.attr("subject")) {
        //   el.closest("div").find("h1").removeClass("hidden")
        // } else {
        //   el.closest("div").find("h1").addClass("hidden")
        // }
      },
      changeSalutation: function(context, el, ev) {
        if (this.attr("salutation") === "Hello") {
          this.attr("salutation", "Goodbye");
        } else if (this.attr("salutation") === "Goodbye") {
          this.attr("salutation", "Hello");
        }
      }
    }
  });

  can.view('/views/components/helloWorld/out.html', {}, function(fragment) {
    $("#out").html(fragment);
  });
});
