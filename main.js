
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
    if (courseNum == 'COMP 347'){
    formReview = db.child('347_reviews');}
    if (courseNum == 'COMP 348'){
    formReview = db.child('348_reviews');}
    if (courseNum == 'COMP 271'){
    formReview = db.child('271');}
    if (courseNum == 'COMP 310'){
    formReview = db.child('310_reviews');}
    if (courseNum == 'COMP 313'){
    formReview = db.child('313_reviews');}
    if (courseNum == 'COMP 317'){
    formReview = db.child('317_reviews');}
    if (courseNum == 'COMP 322'){
    formReview = db.child('322_reviews');}
    if (courseNum == 'COMP 272'){
    formReview = db.child('272_reviews');}
    if (courseNum == 'COMP 301'){
    formReview = db.child('301_reviews');}
    if (courseNum == 'COMP 305'){
    formReview = db.child('305_reviews');}
    if (courseNum == 'COMP 306'){
    formReview = db.child('306_reviews');}
    if (courseNum == 'COMP 309'){
    formReview = db.child('309_reviews');}
    if (courseNum == 'COMP 312'){
    formReview = db.child('312_reviews');}
    if (courseNum == 'COMP 314'){
    formReview = db.child('314_reviews');}
    if (courseNum == 'COMP 319'){
    formReview = db.child('319_reviews');}
    if (courseNum == 'COMP 323'){
    formReview = db.child('323_reviews');}
    if (courseNum == 'COMP 325'){
    formReview = db.child('325_reviews');}
    if(title == 'COMP 104'){
    formReview = db.child('104_reviews');}
    if (title == 'COMP 120'){
    formReview = db.child('120_reviews');}
    if (title == 'COMP 122'){
    formReview = db.child('122_reviews');}
    if (title == 'COMP 125'){
    formReview = db.child('125_reviews');}
    if (title == 'COMP 150'){
    formReview = db.child('150_reviews');}
    if (title == 'COMP 163'){
    formReview = db.child('163_reviews');}
    if (title == 'COMP 170'){
    formReview = db.child('170_reviews');}
    if (title == 'COMP 171'){
    formReview = db.child('171_reviews');}
    if (title == 'COMP 180'){
    formReview = db.child('180_reviews');}
    if (title == 'COMP 215'){
    formReview = db.child('215_reviews');}
    if (title == 'COMP 231'){
    formReview = db.child('231_reviews');}
    if (title == 'COMP 250'){
    formReview = db.child('250_reviews');}
    if (title == 'COMP 251'){
    formReview = db.child('251_reviews');}
    if (title == 'COMP 264'){
    formReview = db.child('264_reviews');}


  }

  else {
    console.log('wrong course!');
  }

}
check('COMP 324');
check('COMP 328');
check('COMP 347');
check('COMP 348');
check('COMP 271');
check('COMP 310');
check('COMP 313');
check('COMP 317');
check('COMP 322');
check('COMP 272');
check('COMP 301');
check('COMP 305');
check('COMP 306');
check('COMP 309');
check('COMP 312');
check('COMP 314');
check('COMP 319');
check('COMP 323');
check('COMP 325');
check('COMP 104');
check('COMP 120');
check('COMP 122');
check('COMP 125');
check('COMP 150');
check('COMP 163');
check('COMP 170');
check('COMP 171');
check('COMP 180');
check('COMP 215');
check('COMP 231');
check('COMP 250');
check('COMP 251');
check('COMP 264');


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
