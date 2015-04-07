$(function() {
  can.Component.extend({
    tag: 'simple-counter',
    template: can.stache("<h1>Value is: {{value}}</h1><button class='btn btn-success' can-click='{add}'>Add</button><button class='btn btn-danger' can-click='{subtract}'>Subtract</button>"),
    scope: {
      value: 0,
      add: function(context, el, ev) {
        this.attr("value", this.attr("value") + 1);
      },
      subtract: function(context, el, ev) {
        if(this.attr("value") > 0) {
          this.attr("value", this.attr("value") - 1);
        }
      }
    }
  });

  can.view('/views/components/api2/out.html', {}, function(fragment){
    $("#out").html(fragment);
  });
});
