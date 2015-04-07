$(function(){
  can.Component.extend({
    tag: 'single-tabs',
    template: can.view('/views/components/api5/tabs.html'),
    scope: {
    },
    events: {
      'li click': function(el, ev){
        ev.preventDefault();
        var anchor = $(el).find('a'),
            href = anchor.attr('href'),
            hSubStr = href.substr(1);
        console.log(href);
        console.log(hSubStr);
        can.route.attr("devType", hSubStr);
      }
    }
  });

  can.view('/views/components/api5/out.html', {}, function(fragment){
    $("#out").html(fragment);
  });

  can.route.bind("devType", function(ev, newVal, oldVal){
    can.view('/views/components/api5/' + newVal + '.html', {}, function(fragment){
      $("#tabsOut").html(fragment);
    });
  });

  can.route("/components/api5/#:devType");
  can.route.ready();
});