$(function() {
  var viewState = can.Map.extend({
    init: function(value) {
      this.attr('meetupName', value);
      this.attr('backup', this.attr('meetupName'));
    },
    saving: false,
    promptSave: function(context, el, ev) {
      $("#modal").html(can.view('/views/components/api1/modal.html', this));
    },
    save: function() {
      $("#modal").empty();
      var self = this;
      self.attr("saving", true);
      setTimeout(function() {
        self.attr({
          saving: false,
          backup: self.attr("meetupName")
        });
      }, 1000);
    },
    cancel: function() {
      $("#modal").empty();
      this.attr("saving", false);
    },
  });

  can.Component.extend({
    tag: 'input-form',
    template: can.stache("<label>Enter Meetup name:&nbsp</label><input type='text' can-value='{meetupName}'>&nbsp<button class='btn btn-success' can-click='{promptSave}'>Save</button>"),
    scope: new viewState('CanJs Chennai')
  });

  can.Component.extend({
    tag: 'confirm-modal',
    template: can.stache("<h3>{{title}}</h3><br><content></content>"),
    scope: {
      title: "Saemikkalama?"
    }
  })

  $("#out").html(can.view('/views/components/api1/out.html'));
});
