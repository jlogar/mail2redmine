/**
 * Mail2Redmine namespace.
 */
if ("undefined" == typeof(Mail2Redmine)) {
  var Mail2Redmine = {};
};

/**
 * Controls the messenger overlay for the Hello World extension.
 */
Mail2Redmine.MessengerOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("mail2redmine-string-bundle");
    let message = stringBundle.getString("mail2redmine.greeting.label");

    window.alert(message);
  }
};
