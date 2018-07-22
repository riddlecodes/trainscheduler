
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4GeyDZ8cWwIF4Q8VJgoHF5ywzZ1IcsWw",
    authDomain: "myfirstdbproject-eba81.firebaseapp.com",
    databaseURL: "https://myfirstdbproject-eba81.firebaseio.com",
    projectId: "myfirstdbproject-eba81",
    storageBucket: "myfirstdbproject-eba81.appspot.com",
    messagingSenderId: "358467643445"
};
firebase.initializeApp(config);

var database = firebase.database();

// On Click of Button
$("#form-submit").on("click", function () {
    event.preventDefault();
    console.log($("#train-name").val().trim());

    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#trainTimeInput").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        frequency: frequencyInput,
        nextArrival: nextArrival,
        minutesAway: minutesAway

    // console.log(trainName);
    // console.log(destination);
    // console.log(firstTrain);
    // console.log(frequency);
    }

    trainData.push(newTrain);
    database.ref().push({
        trainName: $("#train-name").val().trim(),
        destination: $("#destination").val().trim(),
        firstTrain: $("#first-train").val().trim(),
        frequency: $("#frequency").val().trim()
    }); // end of push

}); // end of button


// trainData.push(newTrain);

$("#trainNameInput").val("");
$("#destination").val("");
$("#trainTimeInput").val("");
$("#frequency").val("");

// return false;

trainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    var firebaseName = childSnapshot.val().name;
    var firebaseLine = childSnapshot.val().line;
    var firebaseDestination = childSnapshot.val().destination;
    var firebaseTrainTimeInput = childSnapshot.val().trainTime;
    var firebaseFrequency = childSnapshot.val().frequency;
    
    var diffTime = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes");
    var timeRemainder = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes") % firebaseFrequency ;
    var minutes = firebaseFrequency - timeRemainder;

    var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 
    

    console.log(minutes);
    console.log(nextTrainArrival);
    console.log(moment().format("hh:mm A"));
    console.log(nextTrainArrival);
    console.log(moment().format("X"));

$("#train-table").append("<div></div>" + firebasetrainName + "</div><div>" + firebaseDestination + "</div><div>" + firebasefirstTrain + "</div><div>" + firebaseFrequency + " mins" + "</div><div>" + nextTrainArrival + "</div><div>" + minutes + "</div><div>");

});

  /*
  // MAIN PROCESS + INITIAL CODE
  // --------------------------------------------------------------------------------

  // Using .on("value", function(snapshot)) syntax will retrieve the data
  // from the database (both initially and every time something changes)
  // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
  database.ref().on("value", function(snapshot) {

  }, function(errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  });


  var randomDate = "02/23/1999";
  var randomFormat = "MM/DD/YYYY";
  var convertedDate = moment(randomDate, randomFormat);
  var todaysDate = moment();

  */