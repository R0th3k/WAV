//guardar en una constante el dominio actual
let url = window.location;
const domain = url.origin + "/";
//Region
let region = localStorage.getItem("region");
//Contadores
// CrewMorale
if (localStorage.getItem('crewMorale') == null) {
    localStorage.setItem('crewMorale', 100);
}
let crewMorale = Number(localStorage.getItem('crewMorale'));
function addCrewMorale(p) {
    localStorage.setItem('crewMorale', crewMorale + p);
}
function substractCrewMorale(p) {
    localStorage.setItem('crewMorale', crewMorale - p);
}
//Subscribers
if (localStorage.getItem('subscribers') == null) {
    localStorage.setItem('subscribers', 0);
}
let subscribers = Number(localStorage.getItem('subscribers'));
function addSubscribers(p) {
    localStorage.setItem('subscribers', subscribers + p);
}
function substractSubscribers(p) {
    localStorage.setItem('subscribers', subscribers - p);
}
//Days Spent
if (localStorage.getItem('daySpent') == null) {
    localStorage.setItem('daySpent', 0);
}
let daySpent = Number(localStorage.getItem('daySpent'));
function addDaySpent(p) {
    localStorage.setItem('daySpent', daySpent + p);
}
function substractDaySpent(p) {
    localStorage.setItem('daySpent', daySpent - p);
}
//Inventory
if (localStorage.getItem('inventory') == null) {
    localStorage.setItem('inventory', 0);
}
let inventory = Number(localStorage.getItem('inventory'));
function addInventory(p) {
    localStorage.setItem('inventory', inventory + p);
}
function substractInventory(p) {
    localStorage.setItem('inventory', inventory - p);
}
//credit
if ( localStorage.getItem('region') != null) {   
    switch(localStorage.getItem('region')){
        case 'canada':
            
            if(localStorage.getItem('credit') == null){
                localStorage.setItem('credit', 2500);
            }
        break
    
        case 'usa-west':
            if(localStorage.getItem('credit') == null){
                localStorage.setItem('credit', 40000);
            }
            
        break
        
        case 'usa-east':
            if(localStorage.getItem('credit') == null){
                localStorage.setItem('credit', 3000);
            }
            
        break
    
        case 'usa-mid-west':
            if(localStorage.getItem('credit') == null){
                localStorage.setItem('credit', 5500);
            }
            
        break
    }
}
let credit = Number(localStorage.getItem('credit'));
console.log('XXX'+credit)
// console.log(typeof(credit))
function addCredit(p) {
    localStorage.setItem('credit', credit + p);
    refreshPage()
}
function subtractCredit(p) {
    if (credit >= 0 && p <= credit) {
        localStorage.setItem('credit', credit - p);
        refreshPage()
    }
}
// credit = credit.toLocaleString('en-US')
// console.log(credit)
// console.log(typeof(credit))
//Cart
if (localStorage.getItem('cartAmount') == null) {
    localStorage.setItem('cartAmount', 0);
}

//let amount = totalTower + totalV5000 + totalV3000 + totalV1000 + totalEPMP3000 + totalEPMPforce300 + totalOutfitTowerClimber + totalOutfitTowerClimber;
//let cartAmount = Number(localStorage.getItem('cartAmount'));
//let cartAmount = Number(localStorage.getItem('totalTower')) + Number(localStorage.getItem('totalV5000') +Number(localStorage.getItem('totalV3000') +Number(localStorage.getItem('totalV1000') +Number(localStorage.getItem('totalEPMP3000') +Number(localStorage.getItem('totalEPMPforce300') +Number(localStorage.getItem('totalOutfitTowerClimber') +Number(localStorage.getItem('totalOutfitTowerClimber0') +);

let cartAmount;
if(region == 'canada' && region != null){
    cartAmount = 
    Number(localStorage.getItem('totalTower')) + 
    Number(localStorage.getItem('totalV5000')) + 
    Number(localStorage.getItem('totalV3000')) + 
    Number(localStorage.getItem('totalV1000')) + 
    Number(localStorage.getItem('totalEPMP3000')) + 
    Number(localStorage.getItem('totalEPMPforce300')) + 
    Number(localStorage.getItem('totalOutfitTowerClimber')) + 
    Number(localStorage.getItem('totalOutfitTowerClimber0'));
}
if(region == 'usa-west' && region != null){
    cartAmount = 
    Number(localStorage.getItem('totalTower')) + 
    Number(localStorage.getItem('totalPtp850')) + 
    Number(localStorage.getItem('totalCnMedusa')) + 
    Number(localStorage.getItem('totalPmp450b')) + 
    Number(localStorage.getItem('totalCnPilot')); 
}

console.log('Cart amount '+cartAmount)

//Remaining Credit
if (localStorage.getItem('remainingCredit') == null && localStorage.getItem('region') != null) {
  
    console.log('****')
    console.log(credit)
    console.log(cartAmount)
    console.log('****')
    console.log(credit - cartAmount)
    console.log(localStorage.getItem('credit') - localStorage.getItem('cartAmount'))
    console.log('****')


    localStorage.setItem('remainingCredit', localStorage.getItem('credit') - localStorage.getItem('cartAmount'));
}

let remainigCredit = Number(localStorage.getItem('remainingCredit'));

console.log('remaing '+remainigCredit)

function saveRemainingCredit() {
    localStorage.setItem('remainingCredit', (credit - cartAmount));
}
function substractRemainingCredit(p) {
    localStorage.setItem('remainingCredit', remainigCredit - p);
}

console.log('Amount:' + cartAmount)
console.log('remainig credit: ' + remainigCredit)

function saveCartAmount() {
    localStorage.setItem('cartAmount', cartAmount);
}


//customerSatisfaction
if (localStorage.getItem('customerSatisfaction') == null) {
    localStorage.setItem('customerSatisfaction', 0);
}
let customerSatisfaction = Number(localStorage.getItem('customerSatisfaction'));
function addCustomerSatisfaction(p) {
    localStorage.setItem('customerSatisfaction', customerSatisfaction + p);
}
function substractCustomerSatisfaction(p) {
    localStorage.setItem('customerSatisfaction', customerSatisfaction - p);
}

//
function substract25Towers(){
//TODO: Revisar que la reasignacion de las variables dentro del scope del if sea correcto
    if(qtyTower <= 25){

        //FIXME: Ajustar para que si la cantidad sea menor a 25 se reste dicha cantidad aunque quede en numeros negativos y solo en cantidad en saldo, son torres que que se perdieron y no se debe de regresar el saldo
        localStorage.setItem('remainingCredit', remainigCredit + totalTower)

        localStorage.setItem('qtyTower',0);
        localStorage.setItem('totalTower',0);
        qtyTower = Number(localStorage.getItem('qtyTower'))
        totalTower = Number(localStorage.getItem('totalTower'))
        

    }else{

        localStorage.setItem('qtyTower', qtyTower - 25);
        qtyTower = Number(localStorage.getItem('qtyTower'))

        let price25Towers = 25 * priceTower;
        
        localStorage.setItem('totalTower',totalTower - price25Towers)
        totalTower = Number(localStorage.getItem('totalTower'))

        // alert(remainigCredit)
        // alert(remainigCredit + price25Towers)
        localStorage.setItem('remainingCredit', remainigCredit + price25Towers)
        remainigCredit = Number(localStorage.getItem('remainigCredit'))

    }
}

function substractCnMedusa(p){
    localStorage.setItem('qtyCnMedusa', qtyCnMedusa - p)
}
function substractPtp850(p){
    localStorage.setItem('qtyPtp850', qtyPtp850 - p)
}
function substractPmp450b(p){
    localStorage.setItem('qtyPmp450b', qtyPmp450b - p)
}
function substractR195Routers(p){
    localStorage.setItem('qtyPmp450b', qtyPmp450b - p)
}


//Generar Numero Aletorio entre 0 y 1
function randomNumberGenerator() {
    let y = Math.random();
    if (y < 0.5) {
        y = 0
    } else {
        y = 1
    }
    return y;
}
let RNG = randomNumberGenerator();
//Funcion para redireccionar
function redirectPage(path) {
    if (!path) {
        window.location.href = domain;
    } else {
        window.location.href = domain + path;
    }
}
//Guardar usuario
let userNameInput = document.getElementById('userName')
if(userNameInput){
    userNameInput.setAttribute('onblur','saveUser()')
}
function saveUser() {    
    if (!userNameInput.value) {
        //alert('Empty Value');
    } else {
        localStorage.setItem('userName', userNameInput.value);
        redirectPage('select-team')
    }
}
function saveCompany() {
    let userCompany = document.getElementById('userCompany').value;
    if (!userCompany) {
        //alert('Empty Value');
    } else {
        localStorage.setItem('userCompany', userCompany);
        redirectPage('empty-lot')
    }
}
function refreshPage() {
    window.location.reload()
}
//obtener datos desde local Storage
//userName
let userName = localStorage.getItem("userName");


//Precios Productos
let priceTower = 200;
let priceV5000 = 30;
let priceV3000 = 14;
let priceV1000 = 6;
let priceEPMP3000 = 30;
let priceEPMPforce300 = 6;
let priceOutfitTowerClimber = 36;
let priceOutfitHomeInstaller;
let pricePtp850 = 84;
let priceCnMedusa = 164;
let pricePmp450b = 8;
let priceCnPilot = 2;
let priceAne501Outdoor = 0;//FIXME: revisar Precios que no especifican en el flujo ya que se crean de la "nada"
let priceR195Routers = 0;//FIXME: revisar Precios que no especifican en el flujo ya que se crean de la "nada"

//Cantidades
let qtyTower;
let qtyV5000
let qtyV3000
let qtyV1000
let qtyEPMP3000
let qtyEPMPforce300
let qtyOutfitTowerClimber
let qtyOutfitHomeInstaller
let qtyPtp850
let qtyCnMedusa
let qtyPmp450b
let qtyCnPilot
let qtyAne501Outdoor;
let qtyR195Routers;
//totales
let totalTower
let totalV5000
let totalV3000
let totalV1000
let totalEPMP3000
let totalEPMPforce300
let totalOutfitTowerClimber
let totalOutfitHomeInstaller
let totalPtp850
let totalCnMedusa
let totalPmp450b
let totalCnPilot
let total501Outdoor;
let totalR195Routers;

//---------------------------//Productos Canada// -----------------------------//
if(region != null){
    if(region == 'canada'){
        //tower
        
        if (localStorage.getItem('qtyTower') == null) {
            localStorage.setItem('qtyTower', 0);
        }
        qtyTower = Number(localStorage.getItem('qtyTower'));
        function saveTower(p) {
            let qty = qtyTower + p;
            localStorage.setItem('qtyTower', qty);
            localStorage.setItem('totalTower', qty * priceTower);
            saveRemainingCredit();
            refreshPage();
        }
        if (localStorage.getItem('totalTower') == null) {
            localStorage.setItem('totalTower', 0);
        }
        totalTower = Number(localStorage.getItem('totalTower'));
        //V5000
        
        if (localStorage.getItem('qtyV5000') == null) {
            localStorage.setItem('qtyV5000', 0);
        }
        qtyV5000 = Number(localStorage.getItem('qtyV5000'));
        function saveV5000(p) {
            let qty = qtyV5000 + p;
            localStorage.setItem('qtyV5000', qty);
            localStorage.setItem('totalV5000', qty * priceV5000);
            //refreshPage();
        }
        if (localStorage.getItem('totalV5000') == null) {
            localStorage.setItem('totalV5000', 0);
        }
        totalV5000 = Number(localStorage.getItem('totalV5000'));
        //V3000
        
        if (localStorage.getItem('qtyV3000') == null) {
            localStorage.setItem('qtyV3000', 0);
        }
        qtyV3000 = Number(localStorage.getItem('qtyV3000'));
        function saveV3000(p) {
            let qty = qtyV3000 + p;
            localStorage.setItem('qtyV3000', qty);
            localStorage.setItem('totalV3000', qty * priceV3000);
            //refreshPage();
        }
        if (localStorage.getItem('totalV3000') == null) {
            localStorage.setItem('totalV3000', 0);
        }
        totalV3000 = Number(localStorage.getItem('totalV3000'));
        //V1000
        
        if (localStorage.getItem('qtyV1000') == null) {
            localStorage.setItem('qtyV1000', 0);
        }
        qtyV1000 = Number(localStorage.getItem('qtyV1000'));
        function saveV1000(p) {
            let qty = qtyV1000 + p;
            localStorage.setItem('qtyV1000', qty);
            localStorage.setItem('totalV1000', qty * priceV1000);
            //refreshPage();
        }
        if (localStorage.getItem('totalV1000') == null) {
            localStorage.setItem('totalV1000', 0);
        }
        totalV1000 = Number(localStorage.getItem('totalV1000'));
        //EPMP3000
        
        if (localStorage.getItem('qtyEPMP3000') == null) {
            localStorage.setItem('qtyEPMP3000', 0);
        }
        qtyEPMP3000 = Number(localStorage.getItem('qtyEPMP3000'));
        function saveEPMP3000(p) {
            let qty = qtyEPMP3000 + p;
            localStorage.setItem('qtyEPMP3000', qty);
            localStorage.setItem('totalEPMP3000', qty * priceEPMP3000);
            //refreshPage();
        }
        if (localStorage.getItem('totalEPMP3000') == null) {
            localStorage.setItem('totalEPMP3000', 0);
        }
        totalEPMP3000 = Number(localStorage.getItem('totalEPMP3000'));
        //EPMPforce300
        
        if (localStorage.getItem('qtyEPMPforce300') == null) {
            localStorage.setItem('qtyEPMPforce300', 0);
        }
        qtyEPMPforce300 = Number(localStorage.getItem('qtyEPMPforce300'));
        function saveEPMPForce300(p) {
            let qty = qtyEPMPforce300 + p;
            localStorage.setItem('qtyEPMPforce300', qty);
            localStorage.setItem('totalEPMPforce300', qty * priceEPMPforce300);
            //refreshPage();
        }
        if (localStorage.getItem('totalEPMPforce300') == null) {
            localStorage.setItem('totalEPMPforce300', 0);
        }
        totalEPMPforce300 = Number(localStorage.getItem('totalEPMPforce300'));
        //OutfitTowerClimb    
        priceOutfitTowerClimber = 36;
        if (localStorage.getItem('qtyOutfitTowerClimber') == null) {
            localStorage.setItem('qtyOutfitTowerClimber', 0);
        }

        qtyOutfitTowerClimber = Number(localStorage.getItem('qtyOutfitTowerClimber'));
        function saveOutfitTowerClimber(p) {
            let qty = qtyOutfitTowerClimber + p;
            localStorage.setItem('qtyOutfitTowerClimber', qty);
            localStorage.setItem('totalOutfitTowerClimber', qty * priceOutfitTowerClimber);
            //refreshPage();
        }
        if (localStorage.getItem('totalOutfitTowerClimber') == null) {
            localStorage.setItem('totalOutfitTowerClimber', 0);
        }

        totalOutfitTowerClimber = Number(localStorage.getItem('totalOutfitTowerClimber'));

        //OutfitHomeInstaller
        priceOutfitHomeInstaller = 10;
        if (localStorage.getItem('qtyOutfitHomeInstaller') == null) {
            localStorage.setItem('qtyOutfitHomeInstaller', 0);
        }

        qtyOutfitHomeInstaller = Number(localStorage.getItem('qtyOutfitHomeInstaller'));
        function saveOutfitHomeInstaller(p) {
            let qty = qtyOutfitHomeInstaller + p;
            localStorage.setItem('qtyOutfitHomeInstaller', qty);
            localStorage.setItem('totalOutfitHomeInstaller', qty * priceOutfitHomeInstaller);
            //refreshPage();
        }


        if (localStorage.getItem('totalOutfitHomeInstaller') == null) {
            localStorage.setItem('totalOutfitHomeInstaller', 0);
        }
        totalOutfitHomeInstaller = Number(localStorage.getItem('totalOutfitHomeInstaller'));
    }
}

//---------------------------//Productos USA WEST// -----------------------------//
//OutfitHomeInstaller

if(region != null){
    if(region == 'usa-west'){
        //tower
        
        if (localStorage.getItem('qtyTower') == null) {
            localStorage.setItem('qtyTower', 0);
        }
        qtyTower = Number(localStorage.getItem('qtyTower'));
        function saveTower(p) {
            let qty = qtyTower + p;
            localStorage.setItem('qtyTower', qty);
            localStorage.setItem('totalTower', qty * priceTower);
            saveRemainingCredit();
            refreshPage();
        }
        if (localStorage.getItem('totalTower') == null) {
            localStorage.setItem('totalTower', 0);
        }
        totalTower = Number(localStorage.getItem('totalTower'));
        //PTP850
        
        if (localStorage.getItem('qtyPtp850') == null) {
            localStorage.setItem('qtyPtp850', 0);
        }

        qtyPtp850 = Number(localStorage.getItem('qtyPtp850'));
        function savePtp850(p) {
            let qty = qtyPtp850 + p;
            localStorage.setItem('qtyPtp850', qty);
            localStorage.setItem('totalPtp850', qty * pricePtp850);
            //refreshPage();
        }


        if (localStorage.getItem('totalPtp850') == null) {
            localStorage.setItem('totalPtp850', 0);
        }
        totalPtp850 = Number(localStorage.getItem('totalPtp850'));
        //5Ghz cnMedusa
        
        if (localStorage.getItem('qtyCnMedusa') == null) {
            localStorage.setItem('qtyCnMedusa', 0);
        }

        qtyCnMedusa = Number(localStorage.getItem('qtyCnMedusa'));
        function saveCnMedusa(p) {
            let qty = qtyCnMedusa + p;
            localStorage.setItem('qtyCnMedusa', qty);
            localStorage.setItem('totalCnMedusa', qty * priceCnMedusa);
            //refreshPage();
        }


        if (localStorage.getItem('totalCnMedusa') == null) {
            localStorage.setItem('totalCnMedusa', 0);
        }
        totalCnMedusa = Number(localStorage.getItem('totalCnMedusa'));
        //Pmp450b
        
        if (localStorage.getItem('qtyPmp450b') == null) {
            localStorage.setItem('qtyPmp450b', 0);
        }

        qtyPmp450b = Number(localStorage.getItem('qtyPmp450b'));
        function savePmp450b(p) {
            let qty = qtyPmp450b + p;
            localStorage.setItem('qtyPmp450b', qty);
            localStorage.setItem('totalPmp450b', qty * pricePmp450b);
            //refreshPage();
        }


        if (localStorage.getItem('totalPmp450b') == null) {
            localStorage.setItem('totalPmp450b', 0);
        }
        totalPmp450b = Number(localStorage.getItem('totalPmp450b'));
        
        //CnPilot
        if (localStorage.getItem('qtyCnPilot') == null) {
            localStorage.setItem('qtyCnPilot', 0);
        }

        qtyCnPilot = Number(localStorage.getItem('qtyCnPilot'));
        function saveCnPilot(p) {
            let qty = qtyCnPilot + p;
            localStorage.setItem('qtyCnPilot', qty);
            localStorage.setItem('totalCnPilot', qty * priceCnPilot);
            //refreshPage();
        }


        if (localStorage.getItem('totalCnPilot') == null) {
            localStorage.setItem('totalCnPilot', 0);
        }
        totalCnPilot = Number(localStorage.getItem('totalCnPilot'));

        //Ane501Outdoor
        if (localStorage.getItem('qtyAne501Outdoor') == null) {
            localStorage.setItem('qtyAne501Outdoor', 0);
        }

        qtyAne501Outdoor = Number(localStorage.getItem('qtyAne501Outdoor'));
        function saveAne501Outdoor(p) {
            let qty = qtyAne501Outdoor + p;
            localStorage.setItem('qtyAne501Outdoor', qty);
            localStorage.setItem('totalAne501Outdoor', qty * priceAne501Outdoor);
            //refreshPage();
        }


        if (localStorage.getItem('totalAne501Outdoor') == null) {
            localStorage.setItem('totalAne501Outdoor', 0);
        }
        totalAne501Outdoor = Number(localStorage.getItem('totalAne501Outdoor'));
        //R195Routers
        if (localStorage.getItem('qtyR195Routers') == null) {
            localStorage.setItem('qtyR195Routers', 0);
        }

        qtyR195Routers = Number(localStorage.getItem('qtyR195Routers'));
        function saveR195Routers(p) {
            let qty = qtyR195Routers + p;
            localStorage.setItem('qtyR195Routers', qty);
            localStorage.setItem('totalR195Routers', qty * priceR195Routers);
            //refreshPage();
        }


        if (localStorage.getItem('totalR195Routers') == null) {
            localStorage.setItem('totalR195Routers', 0);
        }
        totalR195Routers = Number(localStorage.getItem('totalR195Routers'));

    }
    
}
//---------------------------//Productos USA EAST// -----------------------------//
if(region != null){
    if(region == 'usa-east'){

    }
}
//---------------------------//Productos USA MID WEST// -----------------------------//
if(region != null){
    if(region == 'usa-mid-west'){

    }
}
//----------------
//Personaje
let character = localStorage.getItem("character");
//userName
let userCompany = localStorage.getItem("userCompany");
//Obtener e imprimir usuario
let theUserTag = document.getElementById("theUser");
if (theUserTag) {
    theUserTag.innerHTML = `<b>${userName}</b>`;
}
let theDaysSpent = document.getElementById("theDaysSpent");
if (theDaysSpent) {
    theDaysSpent.innerHTML = `<b>${daySpent}</b>`;
}
let qtyTowers = document.getElementById("qtyTowers");
if (qtyTowers) {
    qtyTowers.innerHTML = `<b>${qtyTower}</b>`;
}
//poner fondos segun la region
let screenTop = document.getElementById("screenTop");
let screenBottom = document.getElementById("screenBottom");

switch (region) {
    case "canada":
        if(section == 'gameHome' || section == 'gameStartConstruction'){
            screenTop.classList.add("screen_top_default");
            screenBottom.classList.add("screen_bottom_default");
        }
        // else if(section == 'emptyLot'){
        //     screenTop.classList.add("screen_top_city");
        //     screenBottom.classList.add("screen_bottom_factory");
        // }
        else if(section == 'connectivity-to-the-farms'){
            screenTop.classList.add("screen_top_city");
            screenBottom.classList.add("screen_bottom_factory")
        }
        else{
            screenTop.classList.add("screen_top_canada");
            screenBottom.classList.add("screen_bottom_canada");
        }
    break
    case "usa-west":
        if(section == 'gameHome' || section == 'gameStartConstruction'){
            screenTop.classList.add("screen_top_default");
            screenBottom.classList.add("screen_bottom_default");
        }
        // else if(section == 'emptyLot'){
        //     screenTop.classList.add("screen_top_city");
        //     screenBottom.classList.add("screen_bottom_factory");
        // }
        else if(section == 'connectivity-to-the-farms'){
            screenTop.classList.add("screen_top_city");
            screenBottom.classList.add("screen_bottom_factory")
        }
        else{
            screenTop.classList.add("screen_top_canyon");
            screenBottom.classList.add("screen_bottom_canyon");    
        }
    break
    case "usa-east":
        if(section == 'gameHome' || section == 'gameStartConstruction'){
            screenTop.classList.add("screen_top_default");
            screenBottom.classList.add("screen_bottom_default");
        }
        else if(section == 'connectivity-to-the-farms'){
            screenTop.classList.add("screen_top_city");
            screenBottom.classList.add("screen_bottom_factory")
        }else{
            screenTop.classList.add("screen_top_usa-east");
            screenBottom.classList.add("screen_bottom_usa-east");  
        }
    break
    case "usa-mid-west":
        if(section == 'gameHome' || section == 'gameStartConstruction'){
            screenTop.classList.add("screen_top_default");
            screenBottom.classList.add("screen_bottom_default");
        }else if(section == 'connectivity-to-the-farms'){
            screenTop.classList.add("screen_top_city");
            screenBottom.classList.add("screen_bottom_factory")
        }
        else{
            screenTop.classList.add("screen_top_usa-mid-west");
            screenBottom.classList.add("screen_bottom_usa-mid-west");   
        }
    break
    case "city":
        if(section == 'gameHome' || section == 'gameStartConstruction'){
            screenTop.classList.add("screen_top_default");
            screenBottom.classList.add("screen_bottom_default");
        }else{
            screenTop.classList.add("screen_top_city");
            screenBottom.classList.add("screen_bottom_factory"); 
        }
    break
    default:
        console.log('no region')
        screenTop.classList.add("screen_top_default");
        screenBottom.classList.add("screen_bottom_default");
}
//Cambiar el personaje elejido
let characterImgTag = document.getElementById("character");
if (characterImgTag) {
    switch (character) {
        case "1":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b77018bcfd036f7911ac_1.png');
            break
        case "2":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b770595b03ebd249ce4e_2.png');
            break
        case "3":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b7702ff74a22d8ffc0a5_3.png');
            break
        case "4":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b7701142ab3c6a177928_4.png');
            break
        default:
            console.log('no character')
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b77018bcfd036f7911ac_1.png');
    }
}
//guardar nombres de personajes


let $memberCrew1 = document.getElementById('memberCrewA')
let $memberCrew2 = document.getElementById('memberCrewB')
let $memberCrew3 = document.getElementById('memberCrewC')
let $memberCrew4 = document.getElementById('memberCrewD')

// if($memberCrew1){
//     $memberCrew1.setAttribute('onblur','saveMembers()')
// }
function saveMembers() {    
    if (!$memberCrew1.value ) {
        if(localStorage.getItem('memberCrew1') == ''){
            localStorage.setItem('memberCrew1', 'Member Crew 1');
        } 
    } else {
        localStorage.setItem('memberCrew1', $memberCrew1.value);  
    }
    if (!$memberCrew2.value) {
        if(localStorage.getItem('memberCrew2') == ''){
            localStorage.setItem('memberCrew2', 'Member Crew 2');
        } 
    } else {
        localStorage.setItem('memberCrew2', $memberCrew2.value);  
    }
    if (!$memberCrew3.value) {
        if(localStorage.getItem('memberCrew3') == ''){
            localStorage.setItem('memberCrew3', 'Member Crew 3');
        }
    } else {
        localStorage.setItem('memberCrew3', $memberCrew3.value);  
    }
    if (!$memberCrew4.value) {
        if(localStorage.getItem('memberCrew4') == ''){
            localStorage.setItem('memberCrew4', 'Member Crew 4');
        }
    } else {
        localStorage.setItem('memberCrew4', $memberCrew4.value);  
    }
}

//imprimir nombre del miembro
let crewMemberTag = document.getElementById("crewMember");
if (crewMemberTag) {
    switch (character) {
        case "1":
            crewMemberTag.innerHTML = localStorage.getItem('memberCrew1')
            break
        case "2":
            crewMemberTag.innerHTML = localStorage.getItem('memberCrew2')
            break
        case "3":
            crewMemberTag.innerHTML = localStorage.getItem('memberCrew3')
            break
        case "4":
            crewMemberTag.innerHTML = localStorage.getItem('memberCrew4')
            break
        default:
           
    }
}
let crewMember1Tag = document.getElementById("crewMember1");
if(crewMember1Tag){
    crewMember1Tag.innerHTML = localStorage.getItem('memberCrew1');
}

let crewMember2Tag = document.getElementById("crewMember2");
if(crewMember2Tag){
    crewMember2Tag.innerHTML = localStorage.getItem('memberCrew2');
}

let crewMember3Tag = document.getElementById("crewMember3");
if(crewMember3Tag){
    crewMember3Tag.innerHTML = localStorage.getItem('memberCrew3');
}

let crewMember4Tag = document.getElementById("crewMember4");
if(crewMember4Tag){
    crewMember4Tag.innerHTML = localStorage.getItem('memberCrew4');
}

//Imprimir ciudad correspondiente a la region
let $city = document.getElementById('city')
console.log(region)

if($city && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
            $city.innerHTML = 'CITY of Mapleton'
        break
    
        case 'usa-west':
            $city.innerHTML = 'Zuni Pueblo'
        break
        
        case 'usa-east':
            $city.innerHTML = 'Oakdale School District'
        break
    
        case 'usa-mid-west':
            $city.innerHTML = 'Wisco Cherry School District'
        break
    }
}
//TODO:Mensajes
//Mensaje por region/ciudad al seleccionar Tarea
let $messageSelectTask = document.getElementById('messageSelectTask');

if($messageSelectTask && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageSelectTask.innerHTML = `<p class="game-font text-center">You've arrived at the fiber core in the middle of the village of Mapleton and need to connect -350 people across 190 homes and businesses with gigabit connectivity. The total village area is roughly 1 square mile. You have 45 days to complete the network build-out.</p><p class="game-font text-center"> What would you like to do?</p>`
        break
    
        case 'usa-west':
            $messageSelectTask.innerHTML = `<p class="game-font text-center">You've arrived at the fiber core in the middle of the Zuni Pueblo and need to connect ~1,000 people across 490 homes and businesses with gigabit connectivity. You have a 10GB fiber line and the total area needing coverage is spread out across roughly 300 square miles. You have 90 days to complete the network build-out.</p><p class="game-font text-center"> What would you like to do?</p>`
        break
        
        case 'usa-east':
            $messageSelectTask.innerHTML = `<p class="game-font text-center">You've arrived at Oakdale School District offices after the city received CARES Act funding and were able to lease 1Gb fiber connections to each of the 3 schools in the area. You've been tasked with providing internet connectivity to the 28 unserved students at their homes to ensure remote learning capabilities. You'll also need to upgrade the school's network for when students are on-premise. You have 90-Days to complete the network buildout.</p><p class="game-font text-center"> What would you like to do?</p>`
        break
    
        case 'usa-mid-west':
            $messageSelectTask.innerHTML = `<p class="game-font text-center">You've arrived at the Wisco Cherry School District offices and need to connect a network to support
            ~3,000 concurrent users across 5 campuses. The district is also requesting outdoor Wi-Fi capabilities to allow students to connect within the campus parking lots. Each campus has a leased 5GB fiber back bone to the premise. You have 90 days to complete the network build-out.</p><p class="game-font text-center"> What would you like to do?</p>`
        break
    }
}

//Mensaje Droped a bolt
let $messageDroppedBolt = document.getElementById('messageDroppedBolt');

if($messageDroppedBolt && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageDroppedBolt.innerHTML = `<p class="game-font text-center">${localStorage.getItem('memberCrew2')} dropped a bolt from the mounting bracket. Luckily, WAV had spare bolts they overnighted you but you still lost 2 days.</p></br>`
        break
    
        case 'usa-west':
            $messageDroppedBolt.innerHTML = `<p class="game-font text-center">${localStorage.getItem('memberCrew2')} arrived late and realized he also forgot to bring along his harness. You lost an additional day waiting for him to retrieve the forgotten harness.</p></br>`
        break
        
        case 'usa-east':
            $messageDroppedBolt.innerHTML = `<p class="game-font text-center">${localStorage.getItem('memberCrew2')}, your only certified tower climber, met the woman of his dreams at the hotel you all are staying at and spontaneously drove off into the Pennsylvania sunset. You've lost a day, but he just texted you that they got into a fight and will be at work tomorrow</p></br>`
        break
    
        case 'usa-mid-west':
            $messageDroppedBolt.innerHTML = `<p class="game-font text-center">${localStorage.getItem('memberCrew2')} arrived late and realized he also forgot to bring along his harness. You lost an additional day waiting for him to retrieve the forgotten harness.</p></br>`
        break
    }
}
//Mensaje Punish path
let $messagePunishPath = document.getElementById('messagePunishPath');

if($messagePunishPath && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messagePunishPath.innerHTML = `<p class="game-font text-center">Unfortunately a large storm with high winds has rolled in requiring you to postpone your distribution node install 3 days.</p></br>`
        break
    
        case 'usa-west':
            $messagePunishPath.innerHTML = `<p class="game-font text-center">Since you already built your towers you're good to go. That said, a large ceremony was planned causing a complete shut down of work on the reservation. You'll have to wait 3 days until you can resume work. The chief was gracious enough to invite you and the crew to the ceremonial proceedings to show his appreciation for your work.</p></br>`
        break
        
        case 'usa-east':
            $messagePunishPath.innerHTML = `<p class="game-font text-center">Last night's crew dinner was not cooked properly. You and your crew have food poisoning.</p></br>`
        break
    
        case 'usa-mid-west':
            $messagePunishPath.innerHTML = `<p class="game-font text-center">A teachers conference was scheduled at each of the schools delaying work for 3 days</p></br>`
        break
    }
}

//Mensaje Install distribution nodes
let $messageIDN = document.getElementById('messageIDN');

if($messageIDN && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageIDN.innerHTML = `<p class="game-font text-center">Great, you were able to install 22 of the V5000 distribution nodes and 2 V3000. You'll install the remaining V5000 & V3000 tomorrow.</p></br>`
        break
    
        case 'usa-west':
            $messageIDN.innerHTML = `<p class="game-font text-center">Great, looks like the towers went up without a problem. You've installed 25 towers across the reservation. It's time to get the distribution nodes up.</p></br>`
        break
        
        case 'usa-east':
            $messageIDN.innerHTML = `<p class="game-font text-center">Great, looks like the 3 cnMedusa's went up easily. Its time to get the subscriber modules up.</p></br>`
        break
    
        case 'usa-mid-west':
            $messageIDN.innerHTML = `<p class="game-font text-center">Great, looks like the [first steps] have been completed. Time to install the other Access Points.</p></br>`
        break
    }
}
//Mensaje lesser-path
let $messageLesserPath = document.getElementById('messageLesserPath');

if($messageLesserPath && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageLesserPath.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew2')} & ${localStorage.getItem('memberCrew4')} had long night and did not show up for work delaying the install by 1 day</p></br>`
        break
    
        case 'usa-west':
            $messageLesserPath.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew2')} & ${localStorage.getItem('memberCrew4')} have fallen ill. Luckily for the rest of the crew it is not contagious. </p></br>`
        break
        
        case 'usa-east':
            $messageLesserPath.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew2')} & ${localStorage.getItem('memberCrew4')} have fallen ill. Luckily for the rest of the crew it is not contagious.</p></br>`
        break
    
        case 'usa-mid-west':
            $messageLesserPath.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew2')} & ${localStorage.getItem('memberCrew4')} ate some cafeteria food and got food poisoning. Luckily for the rest of the crew they only had chocolate milk.</p></br>`
        break
    }
}
//Mensaje installed-remaining
let $messageInstalledRemaining = document.getElementById('messageInstalledRemaining');

if($messageInstalledRemaining && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageInstalledRemaining.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew1')} came in clutch and installed the remaining 13 V5000s and the last V3000, finishing the entire distribution node build-out. All in one day!! Time for a nice dinner before starting on subscriber modules tomorrow.
           </p></br>`
        break
    
        case 'usa-west':
            $messageInstalledRemaining.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew1')} & ${localStorage.getItem('memberCrew3')}  came in clutch and installed all of the cnMedusa nodes in 3 days. Meanwhile ${localStorage.getItem('memberCrew2')} & ${localStorage.getItem('memberCrew4')} installed all of the PTP systems. Time for a nice dinner before starting on the installation of the subscriber modules and routers tomorrow.</p></br>`
        break
        
        case 'usa-east':
            $messageInstalledRemaining.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew1')} came in clutch and installed all of the PMP 450i Subscriber Modules in 3 days bringing 25Mbps down and 5Mbps up connectivity to 90 homes in near and non-line of sight of the 3 school locations. Time for a nice dinner before starting on the school's Access Points tomorrow.</p></br>`
        break
    
        case 'usa-mid-west':
            $messageInstalledRemaining.innerHTML = `<p class="game-font text-center">  ${localStorage.getItem('memberCrew1')} came in clutch and installed 180 XV2 access points for the entire highschool in one day. You think to yourself about  ${localStorage.getItem('memberCrew1')} and quickly understand that the ease of Cambium's self-deployment is the real hero here.  ${localStorage.getItem('memberCrew2')} &  ${localStorage.getItem('memberCrew3')} &  ${localStorage.getItem('memberCrew4')} were able to install an additional 140 XV2 APs at the 2 elementary schools, leaving just the middle school to connect tomorrow.</p></br>`
        break
    }
}
//Mensaje installed-remaining
let $messageInstallationSubscriptors = document.getElementById('messageInstallationSubscriptors');

if($messageInstallationSubscriptors && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageInstallationSubscriptors.innerHTML = `<p class="game-font text-center"> Your crew manages to knock out 130 subscriber installs in one day. With smiles all around at dinner, ${localStorage.getItem('memberCrew2')} mentions how quick and easy the V1000 is to deploy.</p></br>`
        break
    
        case 'usa-west':
            $messageInstallationSubscriptors.innerHTML = `<p class="game-font text-center">Your crew manages to knock out 632 PMP450b subscriber modules and 632 cnPilot R195 routers at customers' homes in three days. </p></br>`
        break
        
        case 'usa-east':
            $messageInstallationSubscriptors.innerHTML = `<p class="game-font text-center"> Your crew manages to knock out the 72 XV2 access point installations across all three schools in three days. With smiles all around at dinner, ${localStorage.getItem('memberCrew2')} mentions how easy they are to install and get up and running. Now you just need to get switches in tomorrow and we'll be well on our way to a completed network.</p></br>`
        break
    
        case 'usa-mid-west':
            $messageInstallationSubscriptors.innerHTML = `<p class="game-font text-center"> You install the last 80 XV2 access points at the middle school, all before lunch. With smiles all around you take a well deserved half-day before returning to do the outdoor APs tomorrow.</p></br>`
        break
    }
}
//Mensaje successfully-installed
let $messageSuccessfullyInstalled = document.getElementById('messageSuccessfullyInstalled');
let $messageSuccessfullyInstalled2 = document.getElementById('messageSuccessfullyInstalled2');


if($messageSuccessfullyInstalled && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageSuccessfullyInstalled.innerHTML = `<p class="game-font text-center"> You successfully installed the remaining cnWave V1000 subscriber modules for the rest of the village residents totaling 190 V1000 installs over the last two days. The village is over the moon but have mentioned that there are three remote farms approximately 6 miles away on the outskirts of the city that need connectivity.</p></br>`
           $messageSuccessfullyInstalled2.innerHTML = `2.Purchase 3 additional V1000`
        break
    
        case 'usa-west':
            $messageSuccessfullyInstalled.innerHTML = `<p class="game-font text-center"> In two days, your crew has finished installing the remaining 368 subscriber modules and routers for the Pueblo. Everyone is pleased but the chief has mentioned there is an additional community of 20 unserved residents at the outermost edges of the Pueblo about a half-mile away from the nearest tower.</p></br>`
            $messageSuccessfullyInstalled2.innerHTML = `2- Purchase ane501 Outdoor Wi-Fi Access Point`
        break
        
        case 'usa-east':
            $messageSuccessfullyInstalled.innerHTML = `<p class="game-font text-center"> You and the crew successfully installed the 3 cnMatrix switches at each of the school building locations. The network is lightning fast and everyone is pumped, although the district Super Intendant mentioned that an under-privileged rural family located in the bottom of a valley 3.3 miles away is in desperate need of connectivity to ensure the residing student has the infrastructure needed for remote learning. They have line of sight to the top of the middle school.</p></br>`
            $messageSuccessfullyInstalled2.innerHTML = `2- Purchase VI 000`
        break
    
        case 'usa-mid-west':
            $messageSuccessfullyInstalled.innerHTML = `<p class="game-font text-center"> You successfully installed the 22 e501 Outdoor Access Points across the 5 school campuses. The district CTO is pleased but the super intendant has mentioned that he'd like to leverage the newly installed network for his remote cabin 2.2 miles away atop the hill behind the high school. While a little unorthodox, the super intendant is a family friend.</p></br>`
            $messageSuccessfullyInstalled2.innerHTML = `2- Purchase Medusa 3.65Ghz AP and Subscriber Module`
        break
    }
}
//Mensaje linkplanner
let $messageLinkplanner = document.getElementById('messageLinkplanner');

if($messageLinkplanner && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageLinkplanner.innerHTML = `<p class="game-font text-center"> LINKPlanner has suggested running an ePMP 3000 from the main fiber core and placing Force 300 Subscriber Modules at each farm location to complete the connection.</p></br>`
        break
    
        case 'usa-west':
            $messageLinkplanner.innerHTML = `<p class="game-font text-center"> LINKPlanner has suggested running a V3000 at the closest tower to the community and installing V1000s at each homeowner location. V3000 will support up to 30 subscriber modules so you're good to go.</p></br>`
        break
        
        case 'usa-east':
            $messageLinkplanner.innerHTML = `<p class="game-font text-center"> LINKPlanner has suggested running an ePMP 3000 from the main fiber core at the middle school and installing a Force 300 subscriber module at the student's location.</p></br>`
        break
    
        case 'usa-mid-west':
            $messageLinkplanner.innerHTML = `<p class="game-font text-center"> Run Cambium's LINKPlanner to see what gear is needed to extend the network and make the connection.</p></br>`
        break
    }
}

//Mensaje connectivity-to-the-farms
let $messageConnectivityFarms = document.getElementById('messageConnectivityFarms');

if($messageConnectivityFarms && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageConnectivityFarms.innerHTML = `<p class="game-font text-center"> You've installed the ePMP 3000 on the clock tower at the Village Square and the 3 ePMP Force 300s at customer sites providing connectivity to the farms 6.3 miles away.</p></br>`
        break
    
        case 'usa-west':
            $messageConnectivityFarms.innerHTML = `<p class="game-font text-center"> You've installed the V3000 and the 20 V1000s in the remote community about a half-mile away.</p></br>`
        break
        
        case 'usa-east':
            $messageConnectivityFarms.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    
        case 'usa-mid-west':
            $messageConnectivityFarms.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    }
}

//MensajeVillage
let $messageVillage = document.getElementById('messageVillage');

if($messageVillage && localStorage.getItem('region') != null){
   console.log(region)
   console.log($messageVillage)
    switch(region){
        case 'canada':
           $messageVillage.innerHTML = `<p class="game-font text-center"> Great job. The village of Mapleton is connected and everyone is enjoying Netflix, Video Games, and uploading moose videos. The only thing left to do is optimize the network and make sure Mapleton is taking full advantage of the available bandwidth.</p></br>`
        break
    
        case 'usa-west':
            
            $messageVillage.innerHTML = `<p class="game-font text-center"> Great job. The Zuni Pueblo is connected and everyone is enjoying Netflix & Video Games. The only thing left to do is optimize the network and make sure the Pueblo is taking full advantage of the available bandwidth.</p></br>`
        break
        
        case 'usa-east':
            $messageVillage.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    
        case 'usa-mid-west':
            $messageVillage.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    }
}
//Compra prod adicional
let $messagePurchaseAditionalProd = document.getElementById('messagePurchaseAditionalProd');

if($messagePurchaseAditionalProd && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messagePurchaseAditionalProd.innerHTML = `<p class="game-font text-center"> While the V1000 certainly has the bandwidth capabilities necessary, it does not have the range required to make this link. The V1000 subscriber modules are great for shorter distances but are not the best option for this particular situation.</p></br>`
        break
    
        case 'usa-west':
            $messagePurchaseAditionalProd.innerHTML = `<p class="game-font text-center"> Unfortunately, only 6 of the 20 households in that community are within the range of the e501 Outdoor AP. You'll have to find another way to bring connectivity to the area.</p></br>`
        break
        
        case 'usa-east':
            $messagePurchaseAditionalProd.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    
        case 'usa-mid-west':
            $messagePurchaseAditionalProd.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    }
}


let $messageRunLinkplanner = document.getElementById('messageRunLinkplanner');

if($messageRunLinkplanner && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageRunLinkplanner.innerHTML = `<p class="game-font text-center"> Run Cambium's LINKPlanner to see what gear is needed to extend the network and make the connection.</p></br>`
        break
    
        case 'usa-west':
            $messageRunLinkplanner.innerHTML = `<p class="game-font text-center"> Run Cambium's LINKPlanner to see what gear is needed to extend the network and make the connection.</p></br>`
        break
        
        case 'usa-east':
            $messageRunLinkplanner.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    
        case 'usa-mid-west':
            $messageRunLinkplanner.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    }
}


let $messageRunCnMaestro = document.getElementById('messageRunCnMaestro');

if($messageRunCnMaestro && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageRunCnMaestro.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew3')} has reduced truck rolls by 30% because of remote troubleshooting made possible by cnMaestro's robust analytics dashboard. ‍</p></br>`
        break
    
        case 'usa-west':
            $messageRunCnMaestro.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew3')} was able to prioritize devices and optimize traffic on the network to increase throughput for more critical devices on the network.</p></br>`
        break
        
        case 'usa-east':
            $messageRunCnMaestro.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    
        case 'usa-mid-west':
            $messageRunCnMaestro.innerHTML = `<p class="game-font text-center"> No data</p></br>`
        break
    }
}

let $messageRunCnArcher = document.getElementById('messageRunCnArcher');

if($messageRunCnArcher && localStorage.getItem('region') != null){
    switch(region){
        case 'canada':
           $messageRunCnArcher.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew3')} ran cnArcher at the top of the clocktower to ensure the ePMP was optimized. A slight tuning based on the cnArcher data increased throughput for the three remote farms</p></br>`
        break
    
        case 'usa-west':
            $messageRunCnArcher.innerHTML = `<p class="game-font text-center"> ${localStorage.getItem('memberCrew3')} [Crew Member 1] ran cnArcher at the top of the furthest tower to ensure optimal placement for the V3000. A slight adjustment based on the cnArcher data increased throughput for the twenty VI OCIOS in the remote community.</p></br>`
        break
        
        case 'usa-east':
            $messageRunCnArcher.innerHTML = `<p class="game-font text-center"> </p></br>`
        break
    
        case 'usa-mid-west':
            $messageRunCnArcher.innerHTML = `<p class="game-font text-center"> </p></br>`
        break
    }
}


//detectar eventos del teclado
document.addEventListener("keydown", function (event) {
    if (event.altKey && String.fromCharCode(event.keyCode) == 'R') {
        localStorage.clear();
        refreshPage()
    }
    if (section == 'gameHome') {
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
                console.log("invalid option")
        }
    }//fin gameHome
    if (section == 'gameLearn') {
        if (event.keyCode == 32) {
            redirectPage();
        }
    }//Fin gameLearn
    if (section == 'gameStartConstruction') {
        switch (event.keyCode) {
            case 49:
                localStorage.setItem('region', 'canada')
                redirectPage('enter-name');
                break
            case 50:
                localStorage.setItem('region', 'usa-west')
                redirectPage('enter-name');
                break
            case 51:
                localStorage.setItem('region', 'usa-east')
                alert('USA East')
                break
            case 52:
                localStorage.setItem('region', 'usa-mid-west')
                alert('USA Mid-West')
                break
            default:
                console.log("invalid option")
        }
    }//fin gameStartConstruction
    if (section == 'enterName') {
        if (event.keyCode == 13) {
            saveUser();
        }
    }//Fin enterName
    if (section == 'nameCompany') {
        if (event.keyCode == 13) {
            saveCompany();
        }
    }//Fin enterCompany
    if (section == 'selectTeam') {
        switch (event.keyCode) {
            case 49:
                console.log("memberCrew1")
                localStorage.setItem('character', '1')
                redirectPage('name-company')
                break
            case 50:
                console.log("memberCrew2")
                localStorage.setItem('character', '2')
                redirectPage('name-company')
                break
            case 51:
                console.log("memberCrew3")
                localStorage.setItem('character', '3')
                redirectPage('name-company')
                break
            case 52:
                console.log("memberCrew4")
                localStorage.setItem('character', '4')
                redirectPage('name-company')
                break
            case 13:
                saveMembers();
                alert('Saved');
            break;
            default:
                console.log("invalid option")
        }
    }//fin Select team
    //emptyLot
    if (section == 'emptyLot') {
        if (event.keyCode == 32) {
            redirectPage('city-details');
        }
    }//Fin emptylot
    //cityDetails
    if (section == 'cityDetails') {
        if (event.keyCode == 32) {
            redirectPage('select-task');
        }
    }//Fin cityDetails
    if (section == 'selecTask') {
        switch (event.keyCode) {
            case 49:
                redirectPage('trench-fiber')
                break
            case 50:
                addDaySpent(1);
                redirectPage('survey')
                break
            case 51:
                redirectPage('start-tower')
                break
            case 52:
                redirectPage('ask-wav')
                break
            default:
                console.log("invalid option")
        }
    }//fin Select task
    //trenchFiber
    if (section == 'trenchFiber') {
        if (event.keyCode == 32) {
            redirectPage('select-task');
        }
    }//Fin trenchFiber
    //survey
    if (section == 'survey') {
        switch (event.keyCode) {
            case 49:
                redirectPage('leverage-existing-estructure')
                break
            case 50:
                redirectPage('start-tower')
                break
            default:
                console.log("invalid option")
        }
    }//Fin survey
    //leverageExistingEstructure
    if (section == 'leverageExistingEstructure') {
        if (event.keyCode == 32) {
            redirectPage('purchase');
        }
    }//Fin leverageExistingEstructure
    //Purchase

    if (section == 'purchase') {
        
        if(region == 'canada'){
            switch (event.keyCode) {
                case 49://add Tower
                    
                    if (cartAmount <= credit && remainigCredit >= priceTower) {
                        saveTower(1);
                        refreshPage();
                    }
                    break
                case 50://add V5000
                    if (cartAmount <= credit && remainigCredit >= priceV5000) {
                        saveV5000(1);
                        refreshPage();
                    }
                    break
                case 51://add V3000
                    if (cartAmount <= credit && remainigCredit >= priceV3000) {
                        saveV3000(1);
                        refreshPage();
                    }
                    break
                case 52://add V1000
                    if (cartAmount <= credit && remainigCredit >= priceV1000) {
                        saveV1000(1);
                        refreshPage();
                    }
                    break
                case 53://add ePMP 3000
                    if (cartAmount <= credit && remainigCredit >= priceEPMP3000) {
                        saveEPMP3000(1);
                        refreshPage();
                    }
                    break
                case 54://add ePMP Force 300
                    if (cartAmount <= credit && remainigCredit >= priceEPMPforce300) {
                        saveEPMPForce300(1);
                        refreshPage();
                    }
                    break
                case 55://add Outfit Tower Climber
                    if (cartAmount <= credit && remainigCredit >= priceOutfitTowerClimber) {
                        saveOutfitTowerClimber(1);
                        refreshPage();
                    }
                case 56://add Outfit Home Installer
                    if (cartAmount <= credit && remainigCredit >= priceOutfitHomeInstaller) {
                        saveOutfitHomeInstaller(1);
                        refreshPage();
                    }
                    break
                case 57:
                    redirectPage('ask-advice');
                    break
                case 32:
                    
                    saveCartAmount();
                    saveRemainingCredit();
                    refreshPage()
                    redirectPage('build-your-network')
                    break
                default:
                    console.log("invalid option")
            }
        }

        if(region == 'usa-west'){
            switch (event.keyCode) {
                case 49://add Tower
                    if (cartAmount <= credit && remainigCredit >= priceTower) {
                        saveTower(1);
                        refreshPage();
                    }
                break
                case 50://add Ptp850
                    if (cartAmount <= credit && remainigCredit >= pricePtp850) {
                        savePtp850(1);
                        refreshPage();
                    }
                break
                case 51://add CnMedusa
                    if (cartAmount <= credit && remainigCredit >= priceCnMedusa) {
                        saveCnMedusa(1);
                        refreshPage();
                    }
                break
                case 52://add Pmp450b
                    if (cartAmount <= credit && remainigCredit >= pricePmp450b) {
                        savePmp450b(1);
                        refreshPage();
                    }
                break
                case 53://add Cnpilot
                    if (cartAmount <= credit && remainigCredit >= priceCnPilot) {
                        saveCnPilot(1);
                        refreshPage();
                    }
                break
                case 54://add Cnpilot
                    redirectPage('ask-advice');
                break
                case 32:
                    saveCartAmount();
                    saveRemainingCredit();
                    refreshPage()
                    redirectPage('build-your-network')
                break
            }
        }

        if(region == 'usa-east'){}

        if(region == 'usa-mid-west'){}
        

    }//Fin Purchase
    //ask-advice
    if (section == 'ask-advice') {
        switch (event.keyCode) {
            case 49:
                saveCartAmount();
                saveRemainingCredit();
                redirectPage('build-your-network');
                //alert('purshased')
                //refreshPage();
                //document.getElementById('balance').classList.remove("hidden")
                break
            case 50:
                redirectPage('purchase')
                break
            default:
                console.log("invalid option")
        }
    }//Fin ask-advice
    //ask-wav
    if (section == 'ask-wav') {
        switch (event.keyCode) {
            case 49:
                addDaySpent(1);
                redirectPage('survey')
                break
            case 50:
                redirectPage('select-task')
                break
            default:
                console.log("invalid option")
        }
    }//Fin ask-wav
    //start-tower
    if (section == 'start-tower') {
        switch (event.keyCode) {
            case 49:
                if (priceTower <= remainigCredit) {
                    saveTower(1)
                }
                //alert('you bought a Tower W200')
                console.log(remainigCredit);
                console.log(qtyTower);
                break
            case 32:
                if (priceTower <= remainigCredit) {
                    saveRemainingCredit()
                    substractCrewMorale(10)
                    if(region == 'canada'){
                        addDaySpent(3)
                    }
                    if(region == 'usa-west'){
                        addDaySpent(2)
                    }
                    redirectPage('dropped-a-bolt')
                }
                break
            default:
                console.log("invalid option")
        }
    }//Fin start-tower
    //dropped-a-bolt
    if (section == 'dropped-a-bolt') {
        switch (event.keyCode) {
            case 32:
                    if(region == 'canada'){
                        addDaySpent(2)
                    }
                    if(region == 'usa-west'){
                        addDaySpent(5)
                        substract25Towers()//FIXME: revisar que realmente haya que restar en cantidad
                    }
                    redirectPage('towers-built')
                break
            default:
                console.log("invalid option")
        }
    }//Fin start-tower
    if (section == 'towers-built') {
        if (event.keyCode == 32) {
            redirectPage('punish-path')
        }
    }//Fin towers-built
    if (section == 'punish-path') {
        if (event.keyCode == 32) {
            if(region == 'canada'){
                addDaySpent(4)
                substractCrewMorale(10)
            }
            if(region == 'usa-west'){
                addDaySpent(3)
                substractCrewMorale(10)
            }
            if(region == 'usa-east'){}
            if(region == 'usa-mid-west'){}

            redirectPage('install-distribution-nodes')
        }
    }//Fin punish-path
    if (section == 'build-your-network') {
        if (event.keyCode == 32) {
            if (RNG == 1) {
                console.log('1')
                if(region ='canada'){
                    addDaySpent(1)
                }
                if(region ='usa-west'){
                    addDaySpent(5)
                    substract25Towers()//FIXME: revisar que realmente haya que restar en cantidad
                }
                if(region ='usa-east'){}
                if(region ='usa-mid-west'){}
                redirectPage('install-distribution-nodes')
            } else {
                 console.log('0')
                redirectPage('lesser-path');
            }
        }
    }//Fin build-your-network
    if (section == 'lesser-path') {
        if (event.keyCode == 32) {
            if(region == 'canada'){
                addDaySpent(2)
                substractCrewMorale(5)
            }
            if(region == 'usa-west'){
                addDaySpent(6)
                substractCrewMorale(5)
                substract25Towers()//FIXME: revisar que realmente haya que restar en cantidad;
            }
            if(region == 'usa-east'){}
            if(region == 'usa-mid-west'){}
            redirectPage('install-distribution-nodes')
        }
    }//Fin lesser-path
    if (section == 'install-distribution-nodes') {
        if (event.keyCode == 32) {
            if(region == 'canada'){
                addDaySpent(1)
            }
            if(region == 'usa-west'){
                addDaySpent(3)
                substractCnMedusa(65)
                substractPtp850(66)
                substractPmp450b(66)//FIXME: esta en duda si pmp450 es el mismo que PTP 850 11Ghz 
            }
            if(region == 'usa-east'){}
            if(region == 'usa-mid-west'){}
            redirectPage('installed-remaining')
        }
    }//Fin install-distribution-nodes
    if (section == 'installed-remaining') {
        if (event.keyCode == 32) {
            

            if(region == 'canada'){
                addDaySpent(1)
                addCustomerSatisfaction(30)
                addSubscribers(130)
            }
            if(region == 'usa-west'){
                addDaySpent(3)
                addCustomerSatisfaction(50)
                addSubscribers(632)
                substractPmp450b(632)
                substractR195Routers(632)
            }
            if(region == 'usa-east'){}
            if(region == 'usa-mid-west'){}

            redirectPage('installations-subscribers')
        }
    }//Fin installed-remaining
    if (section == 'installations-subscribers') {
        if (event.keyCode == 32) {
            
            if(region == 'canada'){
                addDaySpent(1)
                addCustomerSatisfaction(20)
                addSubscribers(60)
            }
            if(region == 'usa-west'){
                addDaySpent(2)
                addCustomerSatisfaction(25)
                addSubscribers(368)
                substractPmp450b(368)
                substractR195Routers(368)
            }
            if(region == 'usa-east'){}
            if(region == 'usa-mid-west'){}
            
            redirectPage('successfully-installed ')
        }
    }//Fin installations-subscribers
    if(section == 'successfully-installed'){
        switch (event.keyCode) {
            case 49:
                redirectPage('linkplanner')
                break
            case 50:
                if(region == 'canada'){
                    addDaySpent(1)
                    saveV1000(3)
                }
                if(region == 'usa-west'){
                    addDaySpent(1)
                    saveAne501Outdoor(1)
                }
                if(region == 'usa-east'){}
                if(region == 'usa-mid-west'){}
                redirectPage('purchase-3-additional-v1000')
            break
            case 51:
                redirectPage('ask-wav-for-advice')
                break
            default:
                console.log("invalid option")
        }
    }//successfully-installed
    if(section == 'purchase-3-additional-v1000'){
        switch (event.keyCode) {
            case 32:
                redirectPage('run-linkplanner')
                break
            default:
                console.log("invalid option")
        }
    }//Fin ask-wav-for-advice
    if(section == 'ask-wav-for-advice'){
        switch (event.keyCode) {
            case 32:
                redirectPage('linkplanner')
                break
            default:
                console.log("invalid option")
        }
    }//Fin run-linkplanner
    if(section == 'run-linkplanner'){
        switch (event.keyCode) {
            case 32:
                redirectPage('linkplanner')
                break
            default:
                console.log("invalid option")
        }
    }//Fin run-linkplanner
    if(section == 'linkplanner'){
        switch (event.keyCode) {
            case 32:
                if(region == 'canada'){
                    addDaySpent(1)
                    addSubscribers(3)
                    addCustomerSatisfaction(25)
                    substractRemainingCredit(48)
                }
                if(region == 'usa-west'){
                    addDaySpent(1)
                    substractRemainingCredit(134)
                    addSubscribers(20)
                    addCustomerSatisfaction(25)
                }
                if(region == 'usa-east'){}
                if(region == 'usa-mid-west'){}
                
                redirectPage('connectivity-to-the-farms')
                break
            default:
                console.log("invalid option")
        }
    }//Fin link planner
    if(section == 'connectivity-to-the-farms'){
        switch (event.keyCode) {
            case 32:
                //localStorage.setItem('region','city')
                redirectPage('village')
                break
            default:
                console.log("invalid option")
        }
    }//Fin connectivity-to-the-farms
    if(section == 'village'){
        switch (event.keyCode) {
            case 49:
                addDaySpent(3)
                redirectPage('manual-cnarcher')
            break
            case 50:
                addDaySpent(1)
                addCustomerSatisfaction(10)
                redirectPage('run-cnarcher')
            break
            case 51:
                addDaySpent(1)
                addCustomerSatisfaction(15)
                redirectPage('run-cnmaestro')
            break
            case 52:
                redirectPage('ask-wav-for-advice-2')
            break
            case 53:
                substractCustomerSatisfaction(10)
                redirectPage('great-job')
            break
            default:
                console.log("invalid option")
        }
    }//Fin village
    if(section == 'manual-cnarcher'){
        if(event.keyCode == 32){
            redirectPage('ask-wav-for-advice-2')
        }
    }//Fin ask-wav-for-advice-2
    if(section == 'ask-wav-for-advice-2'){
        switch (event.keyCode) {
            case 49:
                addDaySpent(1)
                addCustomerSatisfaction(15)
                redirectPage('run-cnmaestro')
            break
            case 50:
                addDaySpent(1)
                addCustomerSatisfaction(10)
                redirectPage('run-cnarcher')
            break
            default:
                console.log("invalid option")
        }
    }//Fin ask-wav-for-advice-2
    if(section == 'run-cnarcher' || section == 'run-cnmaestro'){
        if(event.keyCode == 32){
            redirectPage('nice')
        }
    }//fin run-cnarcher - run-cnmaestro
    if(section == 'nice'){
        if(event.keyCode == 32){
            redirectPage('current-network-generates')
        }
    }//fin nice
    if(section == 'current-network-generates'){
        if(event.keyCode == 32){
            redirectPage('missed-out')
        }
    }//fin current-network-generates
    if(section == 'great-job'){
        if(event.keyCode == 32){
            redirectPage('cng')
        }
    }//fin nice
    if(section == 'cng'){
        if(event.keyCode == 32){
            redirectPage('missed-out')
        }
    }//fin cng
    if(section == 'missed-out'){
        if(event.keyCode == 32){
            redirectPage('witty-ending')
        }
    }//fin missed-out
    if(section == 'witty-ending'){
        if(event.keyCode == 32){
            redirectPage('end')
        }
    }//fin witty-ending

    if(section == 'end'){
        switch (event.keyCode) {
            case 49:
                redirectPage('image-stats')
            break
            case 50:
            break
            case 51:
            break
            case 52:
                redirectPage('stats')
            break
            case 53:
                redirectPage('about-our-products')
            break
            case 54:
            break
            default:
                console.log("invalid option")
        }
    }//Fin end
    if(section == 'stats' || section == 'about-our-products'){
        if(event.keyCode == 32){
            redirectPage('end')
        }
    }//fin missed-out
    if(section == 'image-stats'){
        switch (event.keyCode) {
            case 49:
                document.getElementById('download').click();
            break
            case 32:
                redirectPage('end')
            break
            default:
                console.log("invalid option")
        }
    }//fin missed-out
})//Fin eventos del teclado
//eventos clic
//imprimir puntaje
let crewMoraleTag = document.getElementById("crewMorale");
let subscribersTag = document.getElementById("subscribers");
let daySpentTag = document.getElementById("daySpent");
let inventoryTag = document.getElementById("inventory");
let creditTag = document.getElementById("credit");
let customerSatisfactionTag = document.getElementById("customerSatisfaction");
if (section == 'start-tower') {
    document.getElementById('towerQty').innerText = localStorage.getItem('qtyTower');
}
if (section == 'cityDetails') {
    crewMoraleTag.innerText = crewMorale;
    subscribersTag.innerText = subscribers;
    daySpentTag.innerText = daySpent;
    inventoryTag.innerText = inventory;
    creditTag.innerText = credit;
    customerSatisfactionTag.innerText = customerSatisfaction;
}


let purchaseDiv = document.getElementById('purchase');

console.log(priceTower)

if(region == 'canada'){
    if(purchaseDiv){
        purchaseDiv.innerHTML = `
        <div class="game-font text-center">
        <p>[1] Tower ₩${priceTower} ${(qtyTower > 0) ? '--- ' + qtyTower : ''}</p>
        <p>[2] V5000 --- ₩${priceV5000} ${ (qtyV5000 > 0) ? '--- ' +qtyV5000: '' }</p>
        <p>[3] V3000 --- ₩${priceV3000} ${(qtyV3000 > 0)?'--- '+qtyV3000:''}</p>
        <p>[4] V1000 --- ₩${priceV1000} ${(qtyV1000 > 0)?'--- '+qtyV1000:''}</p>
        <p>[5] ePMP 3000 --- ₩${priceEPMP3000} ${(qtyEPMP3000 > 0)?'--- '+qtyEPMP3000:''}</p>
        <p>[6] ePMP Force 300 --- ₩${priceEPMPforce300} ${(qtyEPMPforce300 > 0)?'--- '+qtyEPMPforce300:''}</p>
        <p>[7] Outfit Tower Climber ----- ₩${priceOutfitTowerClimber} ${(qtyOutfitTowerClimber > 0)?'--- '+qtyOutfitTowerClimber:''}</p>
        <p>[8] Outfit Home Installer ₩${priceOutfitHomeInstaller} ${(qtyOutfitHomeInstaller > 0)?'--- '+qtyOutfitHomeInstaller:''}</p>
        <p>[9] Ask Advice-------₩0</p>
        <p>Amount: ₩${cartAmount}</p>
        </div>`;
    }
}
if(region == 'usa-west'){
    if(purchaseDiv){
        purchaseDiv.innerHTML = `
        <div class="game-font text-center">
        <p>[1] Tower ₩${priceTower} ${(qtyTower > 0) ? '--- ' + qtyTower : ''}</p>
        <p>[2] PTP850 ₩${pricePtp850} ${(qtyPtp850 > 0) ? '--- ' + qtyPtp850 : ''}</p>
        <p>[3] 5Ghz cnMedusa ₩${priceCnMedusa} ${(qtyCnMedusa > 0) ? '--- ' + qtyCnMedusa : ''}</p>
        <p>[4] PMP450b ₩${pricePmp450b} ${(qtyPmp450b > 0) ? '--- ' + qtyPmp450b : ''}</p>
        <p>[5] cnPilot ₩${priceCnPilot} ${(qtyCnPilot > 0) ? '--- ' + qtyCnPilot : ''}</p>
        <p>[6] Ask Advice --- Complimentary</p>
        <p>Amount: ₩${cartAmount}</p>
        </div>`;
    }
}

let towerDiv = document.getElementById('towerDiv');
let V5000Div = document.getElementById('V5000Div');
let V3000Div = document.getElementById('V3000Div');
let V1000Div = document.getElementById('V1000Div');
let EPMP3000Div = document.getElementById('EPMP3000Div');
let EPMPForce300Div = document.getElementById('EPMPForce300Div');
let otcDiv = document.getElementById('otcDiv');
let ohiDiv = document.getElementById('ohiDiv');
let totalDiv = document.getElementById('total');
let balanceDiv = document.getElementById('balance');

let $askAdvice = document.getElementById('askAdvice')

if (section == 'ask-advice') {

    if(region == 'canada'){
        if(qtyTower > 0){$askAdvice.innerHTML = `<p>${qtyTower} Tower: <span style="text-decoration:line-through;">₩</span>${totalTower}</p>`}
        if(qtyV5000 > 0){$askAdvice.innerHTML += `<p>${qtyV5000} V5000: <span style="text-decoration:line-through;">₩</span>${totalV5000}</p>`}
        if(qtyV3000 > 0){$askAdvice.innerHTML += `<p>${qtyV3000} V3000: <span style="text-decoration:line-through;">₩</span>${totalV3000}</p>`}
        if(qtyV1000 > 0){$askAdvice.innerHTML += `<p>${qtyV1000} V1000: <span style="text-decoration:line-through;">₩</span>${totalV1000}</p>`}
        if(qtyEPMP3000 > 0){$askAdvice.innerHTML += `<p>${qtyEPMP3000} EPMP3000: <span style="text-decoration:line-through;">₩</span>${totalEPMP3000}</p>`}
        if(qtyEPMPforce300 > 0){$askAdvice.innerHTML += `<p>${qtyEPMPforce300} EPMPforce300: <span style="text-decoration:line-through;">₩</span>${totalEPMPforce300}</p>`}
        if(qtyOutfitTowerClimber > 0){$askAdvice.innerHTML += `<p>${qtyOutfitTowerClimber} Outfit Tower Climber: <span style="text-decoration:line-through;">₩</span>${totalOutfitTowerClimber}</p>`}
        if(qtyOutfitHomeInstaller > 0){$askAdvice.innerHTML += `<p>${qtyOutfitHomeInstaller} Outfit Home Installer: <span style="text-decoration:line-through;">₩</span>${totalOutfitHomeInstaller}</p>`}
        $askAdvice.innerHTML += `</br></br>Total: <span style="text-decoration:line-through;">₩</span>${cartAmount}</p>`
        $askAdvice.innerHTML += `<p>Your Balance: <span style="text-decoration:line-through;">₩</span>${remainigCredit}</p>`
        
    }
    if(region == 'usa-west'){
        if(qtyTower > 0){$askAdvice.innerHTML = `<p>${qtyTower} Tower: <span style="text-decoration:line-through;">₩</span>${totalTower}</p>`}
        if(qtyPtp850 > 0){$askAdvice.innerHTML += `<p>${qtyPtp850} PTP850: <span style="text-decoration:line-through;">₩</span>${totalPtp850}</p>`}
        if(qtyCnMedusa > 0){$askAdvice.innerHTML += `<p>${qtyCnMedusa} cnMedusa: <span style="text-decoration:line-through;">₩</span>${totalCnMedusa}</p>`}
        if(qtyPmp450b > 0){$askAdvice.innerHTML += `<p>${qtyPmp450b} PMP450b: <span style="text-decoration:line-through;">₩</span>${totalPmp450b}</p>`}
        if(qtyCnPilot > 0){$askAdvice.innerHTML += `<p>${qtyCnPilot} cnPilot: <span style="text-decoration:line-through;">₩</span>${totalCnPilot}</p>`}
        $askAdvice.innerHTML += `</br></br>Total: <span style="text-decoration:line-through;">₩</span>${cartAmount}</p>`
        $askAdvice.innerHTML += `<p>Your Balance: <span style="text-decoration:line-through;">₩</span>${remainigCredit}</p>`
    }
    if(region == 'usa-east'){}
    if(region == 'usa-mid-west'){}
}

if (section == 'build-your-network' 
    || section == 'lesser-path' 
    || section == 'install-distribution-nodes' 
    || section == 'installed-remaining' 
    || section == 'installations-subscribers'  
    || section == 'dropped-a-bolt'
    || section == 'towers-built'
    || section == 'punish-path'
    || section == 'connectivity-to-the-farms'
    || section == 'run-cnarcher'
    || section == 'run-cnmaestro'
    || section == 'stats'
    || section == 'image-stats'
    || section == 'cng'
    ) {
    crewMoraleTag.innerText = crewMorale;
    subscribersTag.innerText = subscribers;
    daySpentTag.innerText = daySpent;
    inventoryTag.innerText = inventory;
    creditTag.innerText = remainigCredit;
    customerSatisfactionTag.innerText = customerSatisfaction;
}
let purchasedProducts = document.getElementById('purchasedProducts')
if(purchasedProducts){
    purchasedProducts.innerHTML = `<span>${(qtyTower > 0) ? qtyTower+' Tower': ''}</span><span>${(qtyV5000 > 0) ? qtyV5000+' V5000':''}</span><span>${(qtyV3000 > 0) ? qtyV3000+' V3000': ''}  </span><span>${(qtyV1000 > 0) ? qtyV1000+' V1000': ''}  </span><span>${(qtyEPMP3000 > 0)? qtyEPMP3000+' ePMP 3000' : ''}</span><span>${(qtyEPMPforce300 > 0)? qtyEPMPforce300+' ePMP Force 300' : ''}  </span><span>${(qtyOutfitTowerClimber > 0) ? qtyOutfitTowerClimber+' Outfit Tower Climber':''} </span><span>${(qtyOutfitHomeInstaller > 0)?+' Outfit Home Installer':''}</span>`;
}
let statsTag = document.getElementById('stats');
function downloadImage(){
    html2canvas(statsTag, {
        onrendered: function(canvas) {
        let imageData = canvas.toDataURL("image/jpg");
        let newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
        $("#download").attr("download", `image_${userName}.jpg`).attr("href", newData);
    }
});
}
if(section == 'image-stats'){
    downloadImage();
}
// let imgCanvas = document.getElementById('canvas').getContext('2d'),
//     image = document.getElementById('image');
// let cadena = `
// ${userName}
// ${crewMorale}
// ${subscribers}
// ${daySpent}
// ${customerSatisfaction}
// `;
// imgCanvas.canvas.width = imgCanvas.measureText(cadena).width;
// imgCanvas.fillText(cadena, 0, 10);
// image.src = imgCanvas.canvas.toDataURL();
// function shareLI(){
// let url = "holamundo.net";
// let title = "Stats";
// let text = "My Stats On WAV Trail.";
// window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
// }
