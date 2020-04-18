
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDXl_85e6eARo1GNsQY3KOyNRlMzjOYEyY",
    authDomain: "comp324-course-review.firebaseapp.com",
    databaseURL: "https://comp324-course-review.firebaseio.com",
    projectId: "comp324-course-review",
    storageBucket: "comp324-course-review.appspot.com",
    messagingSenderId: "1055573790361",
    appId: "1:1055573790361:web:1f97d3cbe622b8a21df208",
    measurementId: "G-8BTF52D0W6"
  };
  // Initialize  Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

 var db = firebase.database().ref();
 var formReview;
 var title = document.title;

function check(courseNum){
  if (courseNum == title){
    if (title == 'COMP 324'){
    formReview = db.child('324_reviews');}
    if (courseNum == 'COMP 328'){
    formReview = db.child('328_reviews');}
    if (courseNum == 'COMP 329'){
    formReview = db.child('329_reviews');}
    if (courseNum == 'COMP 330'){
    formReview = db.child('330_reviews');}
    if (courseNum == 'COMP 331'){
    formReview = db.child('331_reviews');}
    if (courseNum == 'COMP 347'){
    formReview = db.child('347_reviews');}
    if (courseNum == 'COMP 348'){
    formReview = db.child('348_reviews');}
    if (courseNum == 'COMP 349'){
    formReview = db.child('349_reviews');}
  }

  else {
    console.log('wrong course!');
  }

}

check('COMP 324');
check('COMP 328');
check('COMP 329');
check('COMP 330');
check('COMP 331');
check('COMP 347');
check('COMP 348');
check('COMP 349');

//const formReview = firebase.database().ref().child('324_reviews'); // creates and names collection of reviews of particular class

document.getElementById('reviewForm').addEventListener('submit', formSubmit);
//this would change second parameter to review


//write data
function formSubmit(e){
  e.preventDefault();
//gets each variable from DOM
  let major= document.querySelector('#major').value;
  let course= document.querySelector('#course').value;
  let courseTaken= document.querySelector('#courseTaken').value;
  let prof= document.querySelector('#prof').value;
  let grade= document.querySelector('#grade').value;
  let review= document.querySelector('#review').value;

  sendMessage(major, course, courseTaken, prof, grade, review);
  // readData();
// shows alert after submission
  document.querySelector('.alert').style.display = 'block';

 //after submission alert pops up, hides alert after 7 secs
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },7000);

  document.getElementById('reviewForm').reset();
}

function sendMessage(major, course, courseTaken, prof, grade, review){
  let newFormReview = formReview.push();
    newFormReview.set({
    major: major,
    course: course,
    courseTaken: courseTaken,
    prof: prof,
    grade: grade,
    review: review
  });

}

//function readData(){
// reads data
formReview.on('child_added', snap => {
  var theMajor = snap.child("major").val();
  var theCourse = snap.child("course").val();
  var theCourseTaken = snap.child("courseTaken").val();
  var theProf = snap.child("prof").val();
  var theGrade = snap.child("grade").val();
  var theReview = snap.child("review").val();

  var table = document.getElementById('table');
  tableChild = document.createElement('tr');
  tableChild.innerHTML = "<td>" + theMajor + "</td><td>" + theCourse + "</td><td>" + theCourseTaken + "</td><td>" + theProf + "</td><td>" + theGrade + "</td><td>" + theReview + "</td>";
  table.appendChild(tableChild);
});


formReview.on('child_changed', snap => {
  var theMajor = snap.child("major").val();
  var theCourse = snap.child("course").val();
  var theCourseTaken = snap.child("courseTaken").val();
  var theProf = snap.child("prof").val();
  var theGrade = snap.child("grade").val();
  var theReview = snap.child("review").val();

  var table = document.getElementById('table');
  tableChild = document.createElement('tr');
  tableChild.innerHTML = "<td>" + theMajor + "</td><td>" + theCourse + "</td><td>" + theCourseTaken + "</td><td>" + theProf + "</td><td>" + theGrade + "</td><td>" + theReview + "</td>";
  table.appendChild(tableChild);
});
//}
