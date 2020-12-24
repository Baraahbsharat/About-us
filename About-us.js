 var name = prompt("Enter your name: ");
alert("Your name is " + name);
    var age = prompt("Enter your age:");



while (age === '') {
    age = prompt('Enter your age');  
  }
  alert("Your age is " + age);
  if(age > 16){
    alert('You can buy');
}
else{
    alert("You are not allow to buy");
}
var order = prompt("Each box of chocolate had 24 piece, How many box do you want ?")  
for ( var i = 0 ; i<6 ; i = i + 1 ) {
    document.write( '<img src="box.jpg">' )
}

