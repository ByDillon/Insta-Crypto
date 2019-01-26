/*var config = {
    apiKey: "AIzaSyCNjzhAfRFzbxL-aQfPmIW6Xyv76r1xnWc",
    authDomain: "cryptodb-85aac.firebaseapp.com",
    databaseURL: "https://cryptodb-85aac.firebaseio.com",
    projectId: "cryptodb-85aac",
    storageBucket: "cryptodb-85aac.appspot.com",
    messagingSenderId: "659868577105"
 };*/
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCz_i1aUkB0XO29cVTBHH6wtEUxW35urG8",
    authDomain: "tasproj-71b1d.firebaseapp.com",
    databaseURL: "https://tasproj-71b1d.firebaseio.com",
    projectId: "tasproj-71b1d",
    storageBucket: "tasproj-71b1d.appspot.com",
    messagingSenderId: "763116673554"
  };
  firebase.initializeApp(config);


  var dataRef = firebase.database();

  // Initial Values
  var name = "";
  var email = "";
  var phone = "";
  var slackuser = "";
  var website = "";
  var errorCode = 0;

  // Capture Button Click
  $("#submit").on("click", function(event) {
    event.preventDefault();
console.log('button clicked')

    // retrieve the values from the fields on the form.
    name = $("#name").val().trim();
    email = $("#email").val().trim();
    phone = $("#phone").val().trim();
    slackuser = $("#slackuser").val().trim();
    website = $("#website").val().trim();
    $("#nameerror").html("");
    $("#emailerror").html("");
     var errorCode = validateEmail(email);
     if(name ==""){
      $("#nameerror").append("Please enter a name"); 
     };
     if (errorCode){
      $("#emailerror").append("Please enter a valid email");     
     }else{
          // Code for the push
    dataRef.ref().push({

      name: name,
      email: email,
      slackuser: slackuser,
      phone: phone,
      website: website,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });//
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#slackuser").val("");
    $("#website").val("");

  }
});

    
  




function validateEmail(eamil){
  console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return(0);
  }
 return(1);
}
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

