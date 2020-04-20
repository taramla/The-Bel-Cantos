
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
    // KYRA
    if (courseNum == 'COMP 266'){
    formReview = db.child('266_reviews');}
    if (courseNum == 'COMP 271'){
    formReview = db.child('271_reviews');}
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
    if (courseNum == 'COMP 310'){
    formReview = db.child('310_reviews');}
    if (courseNum == 'COMP 312'){
    formReview = db.child('312_reviews');}
    if (courseNum == 'COMP 313'){
    formReview = db.child('313_reviews');}
    if (courseNum == 'COMP 314'){
    formReview = db.child('314_reviews');}
    if (courseNum == 'COMP 317'){
    formReview = db.child('317_reviews');}
    if (courseNum == 'COMP 319'){
    formReview = db.child('319_reviews');}
    if (courseNum == 'COMP 322'){
    formReview = db.child('322_reviews');}
    if (courseNum == 'COMP 323'){
    formReview = db.child('323_reviews');}
    if (courseNum == 'COMP 324'){
    formReview = db.child('324_reviews');}
    if (courseNum == 'COMP 325'){
    formReview = db.child('325_reviews');}

  // NADYA

    if (courseNum == 'COMP 328'){
    formReview = db.child('328_reviews');}
    if (courseNum == 'COMP 329'){
     formReview = db.child('329_reviews');}
     if (courseNum == 'COMP 330'){
     formReview = db.child('330_reviews');}
     if (courseNum == 'COMP 331'){
     formReview = db.child('331_reviews');}
     if (courseNum == 'COMP 332'){
     formReview = db.child('332_reviews');}
     if (courseNum == 'COMP 333'){
     formReview = db.child('333_reviews');}
     if (courseNum == 'COMP 335'){
     formReview = db.child('335_reviews');}
     if (courseNum == 'COMP 336'){
     formReview = db.child('336_reviews');}
     if (courseNum == 'COMP 337'){
     formReview = db.child('337_reviews');}
     if (courseNum == 'COMP 338'){
     formReview = db.child('338_reviews');}
     if (courseNum == 'COMP 339'){
     formReview = db.child('339_reviews');}
     if (courseNum == 'COMP 340'){
     formReview = db.child('340_reviews');}
     if (courseNum == 'COMP 341'){
     formReview = db.child('341_reviews');}
     if (courseNum == 'COMP 342'){
     formReview = db.child('342_reviews');}
     if (courseNum == 'COMP 343'){
     formReview = db.child('343_reviews');}
     if (courseNum == 'COMP 345'){
     formReview = db.child('345_reviews');}
     if (courseNum == 'COMP 346'){
     formReview = db.child('346_reviews');}

     // TARA

     if (courseNum == 'COMP 347'){
     formReview = db.child('347_reviews');}
     if (courseNum == 'COMP 348'){
     formReview = db.child('348_reviews');}
     if (courseNum == 'COMP 349'){
     formReview = db.child('349_reviews');}
     if (courseNum == 'COMP 351'){
     formReview = db.child('351_reviews');}
     if (courseNum == 'COMP 352'){
     formReview = db.child('352_reviews');}
     if (courseNum == 'COMP 353'){
     formReview = db.child('353_reviews');}
     if (courseNum == 'COMP 356'){
     formReview = db.child('356_reviews');}
     if (courseNum == 'COMP 362'){
     formReview = db.child('362_reviews');}
     if (courseNum == 'COMP 363'){
     formReview = db.child('363_reviews');}
     if (courseNum == 'COMP 364'){
     formReview = db.child('364_reviews');}
     if (courseNum == 'COMP 366'){
     formReview = db.child('366_reviews');}
     if (courseNum == 'COMP 367'){
     formReview = db.child('367_reviews');}
     if (courseNum == 'COMP 369'){
     formReview = db.child('369_reviews');}
     if (courseNum == 'COMP 370'){
     formReview = db.child('370_reviews');}
     if (courseNum == 'COMP 371'){
     formReview = db.child('371_reviews');}
     if (courseNum == 'COMP 373'){
     formReview = db.child('373_reviews');}
     if (courseNum == 'COMP 376'){
     formReview = db.child('376_reviews');}

     // NICK
     if (courseNum == 'COMP 377'){
     formReview = db.child('377_reviews');}
     if (courseNum == 'COMP 378'){
     formReview = db.child('378_reviews');}
     if (courseNum == 'COMP 379'){
     formReview = db.child('379_reviews');}
     if (courseNum == 'COMP 380'){
     formReview = db.child('380_reviews');}
     if (courseNum == 'COMP 381'){
     formReview = db.child('381_reviews');}
     if (courseNum == 'COMP 382'){
     formReview = db.child('382_reviews');}
     if (courseNum == 'COMP 383'){
     formReview = db.child('383_reviews');}
     if (courseNum == 'COMP 386'){
     formReview = db.child('386_reviews');}
     if (courseNum == 'COMP 388'){
     formReview = db.child('388_reviews');}
     if (courseNum == 'COMP 390'){
     formReview = db.child('390_reviews');}
     if (courseNum == 'COMP 391'){
     formReview = db.child('391_reviews');}
     if (courseNum == 'COMP 392'){
     formReview = db.child('392_reviews');}
     if (courseNum == 'COMP 395'){
     formReview = db.child('395_reviews');}
     if (courseNum == 'COMP 397'){
     formReview = db.child('397_reviews');}
     if (courseNum == 'COMP 398'){
     formReview = db.child('398_reviews');}
     if (courseNum == 'COMP 399'){
     formReview = db.child('399_reviews');}

     // IK
    if(courseNum == 'COMP 104'){
    formReview = db.child('104_reviews');}
    if (courseNum == 'COMP 120'){
    formReview = db.child('120_reviews');}
    if (courseNum == 'COMP 122'){
    formReview = db.child('122_reviews');}
    if (courseNum == 'COMP 125'){
    formReview = db.child('125_reviews');}
    if (courseNum == 'COMP 150'){
    formReview = db.child('150_reviews');}
    if (courseNum == 'COMP 163'){
    formReview = db.child('163_reviews');}
    if (courseNum == 'COMP 170'){
    formReview = db.child('170_reviews');}
    if (courseNum == 'COMP 171'){
    formReview = db.child('171_reviews');}
    if (courseNum == 'COMP 180'){
    formReview = db.child('180_reviews');}
    if (courseNum == 'COMP 215'){
    formReview = db.child('215_reviews');}
    if (courseNum == 'COMP 231'){
    formReview = db.child('231_reviews');}
    if (courseNum == 'COMP 250'){
    formReview = db.child('250_reviews');}
    if (courseNum == 'COMP 251'){
    formReview = db.child('251_reviews');}
    if (courseNum == 'COMP 264'){
    formReview = db.child('264_reviews');}

  }

  else {
    console.log('wrong course!');
  }
}

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

check('COMP 266');
check('COMP 271');
check('COMP 272');
check('COMP 301');
check('COMP 305');
check('COMP 306');
check('COMP 309');
check('COMP 310');
check('COMP 312');
check('COMP 313');
check('COMP 314');
check('COMP 317');
check('COMP 319');
check('COMP 322');
check('COMP 323');
check('COMP 324');
check('COMP 325');

check('COMP 328');
check('COMP 329');
check('COMP 330');
check('COMP 331');
check('COMP 332');
check('COMP 333');
check('COMP 335');
check('COMP 336');
check('COMP 337');
check('COMP 338');
check('COMP 339');
check('COMP 340');
check('COMP 341');
check('COMP 342');
check('COMP 343');
check('COMP 345');
check('COMP 346');

check('COMP 347');
check('COMP 348');
check('COMP 349');
check('COMP 351');
check('COMP 352');
check('COMP 353');
check('COMP 356');
check('COMP 362');
check('COMP 363');
check('COMP 364');
check('COMP 366');
check('COMP 367');
check('COMP 369');
check('COMP 370');
check('COMP 371');
check('COMP 373');
check('COMP 376');

check('COMP 377');
check('COMP 378');
check('COMP 379');
check('COMP 380');
check('COMP 381');
check('COMP 382');
check('COMP 383');
check('COMP 386');
check('COMP 388');
check('COMP 390');
check('COMP 391');
check('COMP 392');
check('COMP 395');
check('COMP 397');
check('COMP 398');
check('COMP 399');


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
