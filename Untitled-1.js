
 console.log(section);
 const domain = 'https://wav-trail.webflow.io/';
  
 function redirectPage(page){
   if(!page){
   	window.location.href = domain;
   }else{
     window.location.href = domain+page;
   }
 }
  
 function saveUser(){	
   let userName = document.getElementById('userName').value;
   
   	if(!userName){
    	alert('Empty Value');
    }else{
     localStorage.setItem('userName', userName);
     redirectPage('canada/team')
    } 
 }
 
 
  
 let theUserTag = document.getElementById("theUser");
 let userName = localStorage.getItem("userName");
 console.log(userName);
  
  if(userName && section == 'canadaTeam'){  
  	theUserTag.innerText=userName;
  }
  
 

 

  
document.addEventListener("keydown",function(event){
    
  //console.log(event.key + ':' + event.keyCode);
  
  	
  
    if(section == 'gameHome'){
      if (event.keyCode == 49) {
          redirectPage("start-construction");
      }
       if (event.keyCode == 50) {
          redirectPage("game-learn");
      }
       if (event.keyCode == 51) {
          alert('See Top Ten List')
      }
    }
  	
  if(section == 'gameLearn'){
      if (event.keyCode == 32) {
          redirectPage();
      }
    }
  
  if(section == 'gameStartConstruction'){
      if (event.keyCode == 49) {
          redirectPage('canada/home');
      }
    if (event.keyCode == 50) {
          alert('USA West')
      }
    if (event.keyCode == 51) {
          alert('USA East')
      }
    if (event.keyCode == 52) {
          alert('USA Mid-West')
      }
    }
  
  
  if(section == 'canadaHome'){
      
    }
  
})
