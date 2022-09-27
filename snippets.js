//Mensaje successfully-installed
let $message = document.getElementById('message');

if($message && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $message.innerHTML = `<p class="game-font text-center"> </p></br>`
        break
    
        case 'usa-west':
            $message.innerHTML = `<p class="game-font text-center"> </p></br>`
        break
        
        case 'usa-east':
            $message.innerHTML = `<p class="game-font text-center"> </p></br>`
        break
    
        case 'usa-mid-west':
            $message.innerHTML = `<p class="game-font text-center"> </p></br>`
        break
    }
}

if(region == 'canada'){}
if(region == 'usa-west'){}
if(region == 'usa-east'){}
if(region == 'usa-mid-west'){}

${localStorage.getItem('memberCrew1')}