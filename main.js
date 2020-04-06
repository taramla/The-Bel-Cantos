
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


let formReview = firebase.database().ref('reviews');
document.getElementById('reviewForm').addEventListener('submit', formSubmit);

function formSubmit(e){
  e.preventDefault();

  let major= document.querySelector('#major').value;
  let course= document.querySelector('#course').value;
  let courseTaken= document.querySelector('#courseTaken').value;
  let prof= document.querySelector('#prof').value;
  let grade= document.querySelector('#grade').value;
  let review= document.querySelector('#review').value;

  sendMessage(major, course, courseTaken, prof, grade, review);

// shows alert
  document.querySelector('.alert').style.display = 'block';

 //after submission alert pops up, hides alert after three secs
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
