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
        switch (event.keyCode) { 
            case 49: 
                redirectPage("start-construction");
            break 
            case 50: 
                redirectPage("game-learn");
            break 
            case 51: 
                alert('See Top Ten List')
            break 
            default: 
            console.log("opcion invalida") 
        }
    }
  	
  if(section == 'gameLearn'){
      if (event.keyCode == 32) {
          redirectPage();
      }
    }
  
  if(section == 'gameStartConstruction'){
   
      switch (event.keyCode) { 
        case 49: 
            redirectPage('canada/home');
        break 
        case 50: 
            alert('USA West')
        break 
        case 51: 
            alert('USA East')
        break 
        case 52: 
            alert('USA Mid-West')∫
        break 
        default: 
        console.log("opcion invalida") 
    }
      
    }
  
  
  if(section == 'canadaTeam'){
    switch (event.keyCode) { 
        case 49: 
           console.log("Marcus") 
           localStorage.setItem('character', 'Marcus')
           break 
        case 50: 
           console.log("Conan")
           localStorage.setItem('character', 'Conan')
           break 
        case 51: 
           console.log("Dominic") 
           localStorage.setItem('character', 'Dominic')
           break 
        case 52: 
           console.log("Miranda") 
           localStorage.setItem('character', 'Miranda')
           break
        default: 
           console.log("opcion invalida") 
    }

    let character = localStorage.getItem("character");
    console.log('LS: '+character);      
  }

  if(section == 'canadaYourCompany'){

  }

  
})





//cart
if(localStorage.getItem('cart') == null){
  localStorage.setItem('cart', 0);
}

let cart = Number(localStorage.getItem('cart'));



function saveCart() {
  let total = totalTower + totalV5000 + totalV3000 + totalV1000 + totalEPMP3000 + totalEPMPforce300 + totalOutfitTowerClimber + totalOutfitTowerClimber;

  if(total <= money){
      localStorage.setItem('cart', total);
  }
  
}