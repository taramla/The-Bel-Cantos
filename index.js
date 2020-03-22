function myFunction(){
  var input, filter, ul, li, a i, txtValue;
  input = document.getElementById('search')
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementByTagName('li');


  for (i=0; i< li.length; i++){
    a = lu[i].getElementByTagName("a")[0];
    txtValue = a.textContent || a.innerTExt;
    if (txtValue.toUpperCase().indexOf(filter) > -1){
      li[i].self.display = "";
    }
      else{
        li[i].style.display = "No course found"
      }

  }

}
