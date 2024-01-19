const prompt=require("prompt-sync")(); 
  let UserName=prompt("entrer  votre nom  d'utilisateur 6 caractères:");{
  let email=prompt("Entrer votre  email:");
  let password =prompt("entrer votre  password:");
  let passwordConfirmation=prompt("confirmer votre  password:");
}
if(UserName.length<6);{
   console.log("le nom d'utilisateur est ecore 6 caractères");
}
 if(email(0,5) !="kanto");{
   console.log("votre email ne sont pas HEI");
}
if (password !=confirmationMotpasse );{
   console.log("your password do not match");
}