$(function() {
  can.Component.extend({
    tag: 'pretty-counter',
    template: can.view('/views/components/api3/prettyCounter.html'),
    scope: {
      total: 0,
      numbers: [1, 2, 3, 4, 5],
      numberWords: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
      add: function(context, el, ev) {
        this.attr("total", this.attr("total") + context);
      },
      prettyDisplay: function(context, scope) {
        if(this.attr("numberWords").length >= this.attr("total")) {
          return this.attr("numberWords")[this.attr("total")];
        } else {
          return "Too Much to count " + this.attr("total").toString();
        }
      }
    }
  });

  can.Component.extend({
    tag: 'pretty-good-counter',
    template: can.view('/views/components/api3/prettyGoodCounter.html'),
    scope: {
      total: 0,
      advancedNumbers: [
        { value : 1, clicked: 0},
        { value : 2, clicked: 0},
        { value : 3, clicked: 0},
        { value : 4, clicked: 0},
        { value : 5, clicked: 0},
      ],
      numberWords: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
      advancedAdd: function(context, el, ev){
        context.attr("clicked", context.attr("clicked") + 1);
        this.attr("total", this.attr("total") + context.value);
      },
      prettyDisplay: function(context, scope) {
        if(this.attr("numberWords").length >= this.attr("total")) {
          return this.attr("numberWords")[this.attr("total")];
        } else {
          return "Too Much to count " + this.attr("total").toString();
        }
      }
    }
  });

  can.view('/views/components/api3/out.html', {}, function(fragment) {
    $("#out").html(fragment);
  });
  $('body').on('mouseenter', 'li', function(ev) {
    $(this).addClass("active");
  });
  $('body').on('mouseout', 'li', function(ev) {
    $(this).removeClass("active");
  });
});
