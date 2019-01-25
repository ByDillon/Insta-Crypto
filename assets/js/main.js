var config = {
    apiKey: "AIzaSyCNjzhAfRFzbxL-aQfPmIW6Xyv76r1xnWc",
    authDomain: "cryptodb-85aac.firebaseapp.com",
    databaseURL: "https://cryptodb-85aac.firebaseio.com",
    projectId: "cryptodb-85aac",
    storageBucket: "cryptodb-85aac.appspot.com",
    messagingSenderId: "659868577105"
  };

  firebase.initializeApp(config);

  var dataRef = firebase.database();

  // Initial Values
  var name = "";
  var email = "";
  var slackuser = "";
  var website = "";

  // Capture Button Click
  $("#submit").on("click", function(event) {
    event.preventDefault();
console.log('button clicked')

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#name").val().trim();
    email = $("#email").val().trim();
    slackuser = $("#slackuser").val().trim();
    website = $("#website").val().trim();

    // Code for the push
    dataRef.ref().push({

      name: name,
      email: email,
      slackuser: slackuser,
      website: website,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

  // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value") to use in the email server
  // TODO work on automatically emailing new customers.
  //dataRef.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    //console.log(childSnapshot.val().name);
    //console.log(childSnapshot.val().email);
    //console.log(childSnapshot.val().slackuser);
    //console.log(childSnapshot.val().website);
   

    // full list of items to the use for the email server

    // call backend to send the email to invite the new customer to use the slack bot

    // Handle the errors
 // }, function(errorObject) {
  //  console.log("Errors handled: " + errorObject.code);
 // });

