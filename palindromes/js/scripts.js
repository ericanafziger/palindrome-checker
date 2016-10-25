var input = prompt("Enter a word:");
input = input.toLowerCase();
input = input.replace(/[^a-zA-Z0-9 ]/g, "");
var array = input.split('');
array = array.filter(function(str) {
    return /\S/.test(str);
});


alert(array);

// if (array.length % 2 === 0){
//   var iterations = array.length / 2;
// } else if (array.length % 2 === 1) {
//   var iterations = (array.length - 1)/2;
// }
//
// for(var index = 0; index < iterations; index += 1 ) {
//   if (array[0] != array[array.length - 1]) {
//     alert("This ain't a palindrome. Try again");
//     break;
//   } else if (index === iterations-1){
//     alert("This is a palindrome!")
//   } else {
//     array.splice(array.length - 1, 1);
//     array.splice(0, 1);
//   }
// }
$(document).ready(function(){
  if (array.length % 2 === 0){
    var iterations = array.length / 2;
  } else if (array.length % 2 === 1) {
    var iterations = (array.length - 1)/2;
  }

  for(var index = 0; index < iterations; index += 1 ) {
    if (array[0] != array[array.length - 1]) {
      $("h2").text("This is not a palindrome!");
      alert("This ain't a palindrome. Try again");
      break;
    } else if (index === iterations-1){
      $("h2").text("This is a palindrome!");
      alert("This is a palindrome!")
    } else {
      array.splice(array.length - 1, 1);
      array.splice(0, 1);
    }
  }


});
