const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function password1() {
  let newpassword=""
  for (let i = 0; i < 16; i++) {
    newpassword += characters[Math.floor(Math.random() * characters.length)];
  }
  let password1= document.getElementById("btn1");
  password1.textContent = newpassword;
  password2()
}

function password2() {
  let newpassword=""
  for (let i = 0; i < 16; i++) {
    newpassword += characters[Math.floor(Math.random() * characters.length)];
  }
  let password2= document.getElementById("btn2");
  password2.textContent = newpassword;
}