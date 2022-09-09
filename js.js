//guardar en una constante el dominio actual
let url = window.location;
const domain = url.origin + "/";
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
if (localStorage.getItem('credit') == null) {
    localStorage.setItem('credit', 2500);
}
let credit = Number(localStorage.getItem('credit'));
// console.log(credit)
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
let cartAmount = Number(localStorage.getItem('totalTower')) + Number(localStorage.getItem('totalV5000')) + Number(localStorage.getItem('totalV3000')) + Number(localStorage.getItem('totalV1000')) + Number(localStorage.getItem('totalEPMP3000')) + Number(localStorage.getItem('totalEPMPforce300')) + Number(localStorage.getItem('totalOutfitTowerClimber')) + Number(localStorage.getItem('totalOutfitTowerClimber0'));
//Remaining Credit
if (localStorage.getItem('remainingCredit') == null) {
    localStorage.setItem('remainingCredit', credit - cartAmount);
}
let remainigCredit = Number(localStorage.getItem('remainingCredit'));
function saveRemainimgCredit() {
    localStorage.setItem('remainingCredit', credit - cartAmount);
}
function substractRemainimgCredit(p) {
    localStorage.setItem('remainingCredit', remainingCredit - p);
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
//Products
//tower
let priceTower = 200;
if (localStorage.getItem('qtyTower') == null) {
    localStorage.setItem('qtyTower', 0);
}
let qtyTower = Number(localStorage.getItem('qtyTower'));
function saveTower(p) {
    let qty = qtyTower + p;
    localStorage.setItem('qtyTower', qty);
    localStorage.setItem('totalTower', qty * priceTower);
    saveRemainimgCredit();
    refreshPage();
}
if (localStorage.getItem('totalTower') == null) {
    localStorage.setItem('totalTower', 0);
}
let totalTower = Number(localStorage.getItem('totalTower'));
//V5000
let priceV5000 = 30;
if (localStorage.getItem('qtyV5000') == null) {
    localStorage.setItem('qtyV5000', 0);
}
let qtyV5000 = Number(localStorage.getItem('qtyV5000'));
function saveV5000(p) {
    let qty = qtyV5000 + p;
    localStorage.setItem('qtyV5000', qty);
    localStorage.setItem('totalV5000', qty * priceV5000);
    //refreshPage();
}
if (localStorage.getItem('totalV5000') == null) {
    localStorage.setItem('totalV5000', 0);
}
let totalV5000 = Number(localStorage.getItem('totalV5000'));
//V3000
let priceV3000 = 14;
if (localStorage.getItem('qtyV3000') == null) {
    localStorage.setItem('qtyV3000', 0);
}
let qtyV3000 = Number(localStorage.getItem('qtyV3000'));
function saveV3000(p) {
    let qty = qtyV3000 + p;
    localStorage.setItem('qtyV3000', qty);
    localStorage.setItem('totalV3000', qty * priceV3000);
    //refreshPage();
}
if (localStorage.getItem('totalV3000') == null) {
    localStorage.setItem('totalV3000', 0);
}
let totalV3000 = Number(localStorage.getItem('totalV3000'));
//V1000
let priceV1000 = 6;
if (localStorage.getItem('qtyV1000') == null) {
    localStorage.setItem('qtyV1000', 0);
}
let qtyV1000 = Number(localStorage.getItem('qtyV1000'));
function saveV1000(p) {
    let qty = qtyV1000 + p;
    localStorage.setItem('qtyV1000', qty);
    localStorage.setItem('totalV1000', qty * priceV1000);
    //refreshPage();
}
if (localStorage.getItem('totalV1000') == null) {
    localStorage.setItem('totalV1000', 0);
}
let totalV1000 = Number(localStorage.getItem('totalV1000'));
//EPMP3000
let priceEPMP3000 = 30;
if (localStorage.getItem('qtyEPMP3000') == null) {
    localStorage.setItem('qtyEPMP3000', 0);
}
let qtyEPMP3000 = Number(localStorage.getItem('qtyEPMP3000'));
function saveEPMP3000(p) {
    let qty = qtyEPMP3000 + p;
    localStorage.setItem('qtyEPMP3000', qty);
    localStorage.setItem('totalEPMP3000', qty * priceEPMP3000);
    //refreshPage();
}
if (localStorage.getItem('totalEPMP3000') == null) {
    localStorage.setItem('totalEPMP3000', 0);
}
let totalEPMP3000 = Number(localStorage.getItem('totalEPMP3000'));
//EPMPforce300
let priceEPMPforce300 = 6;
if (localStorage.getItem('qtyEPMPforce300') == null) {
    localStorage.setItem('qtyEPMPforce300', 0);
}
let qtyEPMPforce300 = Number(localStorage.getItem('qtyEPMPforce300'));
function saveEPMPForce300(p) {
    let qty = qtyEPMPforce300 + p;
    localStorage.setItem('qtyEPMPforce300', qty);
    localStorage.setItem('totalEPMPforce300', qty * priceEPMPforce300);
    //refreshPage();
}
if (localStorage.getItem('totalEPMPforce300') == null) {
    localStorage.setItem('totalEPMPforce300', 0);
}
let totalEPMPforce300 = Number(localStorage.getItem('totalEPMPforce300'));
//OutfitTowerClimber
let priceOutfitTowerClimber = 36;
if (localStorage.getItem('qtyOutfitTowerClimber') == null) {
    localStorage.setItem('qtyOutfitTowerClimber', 0);
}
let qtyOutfitTowerClimber = Number(localStorage.getItem('qtyOutfitTowerClimber'));
function saveOutfitTowerClimber(p) {
    let qty = qtyOutfitTowerClimber + p;
    localStorage.setItem('qtyOutfitTowerClimber', qty);
    localStorage.setItem('totalOutfitTowerClimber', qty * priceOutfitTowerClimber);
    //refreshPage();
}
if (localStorage.getItem('totalOutfitTowerClimber') == null) {
    localStorage.setItem('totalOutfitTowerClimber', 0);
}
let totalOutfitTowerClimber = Number(localStorage.getItem('totalOutfitTowerClimber'));
//OutfitHomeInstaller
let priceOutfitHomeInstaller = 10;
if (localStorage.getItem('qtyOutfitHomeInstaller') == null) {
    localStorage.setItem('qtyOutfitHomeInstaller', 0);
}
let qtyOutfitHomeInstaller = Number(localStorage.getItem('qtyOutfitHomeInstaller'));
function saveOutfitHomeInstaller(p) {
    let qty = qtyOutfitHomeInstaller + p;
    localStorage.setItem('qtyOutfitHomeInstaller', qty);
    localStorage.setItem('totalOutfitHomeInstaller', qty * priceOutfitHomeInstaller);
    //refreshPage();
}
if (localStorage.getItem('totalOutfitHomeInstaller') == null) {
    localStorage.setItem('totalOutfitHomeInstaller', 0);
}
let totalOutfitHomeInstaller = Number(localStorage.getItem('totalOutfitHomeInstaller'));
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
function saveUser() {
    let userName = document.getElementById('userName').value;
    if (!userName) {
        alert('Empty Value');
    } else {
        localStorage.setItem('userName', userName);
        redirectPage('select-team')
    }
}
function saveCompany() {
    let userCompany = document.getElementById('userCompany').value;
    if (!userCompany) {
        alert('Empty Value');
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
//Region
let region = localStorage.getItem("region");
//Personaje
let character = localStorage.getItem("character");
//userName
let userCompany = localStorage.getItem("userCompany");
//Obtener e imprimir usuario
let theUserTag = document.getElementById("theUser");
if (userName && section == 'selectTeam') {
    theUserTag.innerText = userName;
}
//poner fondos segun la region
let screenTop = document.getElementById("screenTop");
let screenBottom = document.getElementById("screenBottom");
switch (region) {
    case "canada":
        screenTop.classList.add("screen_top_canada");
        screenBottom.classList.add("screen_bottom_canada");
        break
    case "usa-west":
        screenTop.classList.add("screen_top_usa-west");
        screenBottom.classList.add("screen_bottom_usa-west");
        break
    case "usa-east":
        screenTop.classList.add("screen_top_usa-east");
        screenBottom.classList.add("screen_bottom_usa-east");
        break
    case "usa-mid-west":
        screenTop.classList.add("screen_top_usa-mid-west");
        screenBottom.classList.add("screen_bottom_usa-mid-west");
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
        case "Marcus":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b77018bcfd036f7911ac_1.png');
            break
        case "Conan":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b770595b03ebd249ce4e_2.png');
            break
        case "Dominic":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b7702ff74a22d8ffc0a5_3.png');
            break
        case "Miranda":
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b7701142ab3c6a177928_4.png');
            break
        default:
            console.log('no character')
            characterImgTag.setAttribute('src', 'https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b77018bcfd036f7911ac_1.png');
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
                console.log("opcion invalida")
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
                alert('USA West')
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
                console.log("opcion invalida")
        }
    }//fin gameStartConstruction
    if (section == 'selectTeam') {
        switch (event.keyCode) {
            case 49:
                console.log("Marcus")
                localStorage.setItem('character', 'Marcus')
                redirectPage('name-company')
                break
            case 50:
                console.log("Conan")
                localStorage.setItem('character', 'Conan')
                redirectPage('name-company')
                break
            case 51:
                console.log("Dominic")
                localStorage.setItem('character', 'Dominic')
                redirectPage('name-company')
                break
            case 52:
                console.log("Miranda")
                localStorage.setItem('character', 'Miranda')
                redirectPage('name-company')
                break
            default:
                console.log("opcion invalida")
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
                console.log("opcion invalida")
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
                redirectPage('build-your-own-towers')
                break
            default:
                console.log("opcion invalida")
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
        switch (event.keyCode) {
            case 49://add Tower
                refreshPage();
                if (cartAmount <= credit && remainigCredit >= priceTower) {
                    saveTower(1);
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
                saveRemainimgCredit();
                refreshPage()
                redirectPage('build-your-network')
                break
            default:
                console.log("opcion invalida")
        }
    }//Fin Purchase
    //ask-advice
    if (section == 'ask-advice') {
        switch (event.keyCode) {
            case 49:
                saveCartAmount();
                saveRemainimgCredit();
                redirectPage('build-your-network');
                //alert('purshased')
                //refreshPage();
                //document.getElementById('balance').classList.remove("hidden")
                break
            case 50:
                redirectPage('purchase')
                break
            default:
                console.log("opcion invalida")
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
                console.log("opcion invalida")
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
                    saveTower(1)
                    saveRemainimgCredit()
                }
                break
            default:
                console.log("opcion invalida")
        }
    }//Fin start-tower
    if (section == 'build-your-network') {
        if (event.keyCode == 32) {
            if (RNG == 1) {
                addDaySpent(1)
                redirectPage('install-distribution-nodes')
            } else {
                redirectPage('lesser-path');
            }
        }
    }//Fin build-your-network
    if (section == 'lesser-path') {
        if (event.keyCode == 32) {
            addDaySpent(2)
            substractCrewMorale(5)
            redirectPage('install-distribution-nodes')
        }
    }//Fin lesser-path
    if (section == 'install-distribution-nodes') {
        if (event.keyCode == 32) {
            addDaySpent(1)
            redirectPage('installed-remaining')
        }
    }//Fin install-distribution-nodes
    if (section == 'installed-remaining') {
        if (event.keyCode == 32) {
            addDaySpent(1)
            addCustomerSatisfaction(30)
            addSubscribers(130)
            redirectPage('installations-subscribers')
        }
    }//Fin installed-remaining
    if (section == 'installations-subscribers') {
        if (event.keyCode == 32) {
            addDaySpent(1)
            addCustomerSatisfaction(20)
            addSubscribers(60)
            redirectPage('successfully-installed ')
        }
    }//Fin installations-subscribers
})//Fin eventos del teclado
//eventos clic
if (section == 'gameHome') {
    document.getElementById("startConstruction").addEventListener("click", function () {
        redirectPage("start-construction");
    });
    document.getElementById("learn").addEventListener("click", function () {
        redirectPage("game-learn");
    });
    document.getElementById("seeTopList").addEventListener("click", function () {
        alert("See Top Ten List");
    });
}
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
if (section == 'ask-advice') {
    if (qtyTower > 0) {
        towerDiv.innerHTML = `${qtyTower} Tower: <span style="text-decoration:line-through;">W</span>${totalTower}`
    }
    if (qtyV5000 > 0) {
        V5000Div.innerHTML = `${qtyV5000} V5000: <span style="text-decoration:line-through;">W</span>${totalV5000}`
    }
    if (qtyV3000 > 0) {
        V3000Div.innerHTML = `${qtyV3000} V3000: <span style="text-decoration:line-through;">W</span>${totalV3000}`
    }
    if (qtyV1000 > 0) {
        V1000Div.innerHTML = `${qtyV1000} V1000: <span style="text-decoration:line-through;">W</span>${totalV1000}`
    }
    if (qtyEPMP3000 > 0) {
        EPMP3000Div.innerHTML = `${qtyEPMP3000} EPMP3000: <span style="text-decoration:line-through;">W</span>${totalEPMP3000}`
    }
    if (qtyEPMPforce300 > 0) {
        EPMPForce300Div.innerHTML = `${qtyEPMPforce300} EPMPForce300: <span style="text-decoration:line-through;">W</span>${totalEPMPforce300}`
    }
    if (qtyOutfitTowerClimber > 0) {
        otcDiv.innerHTML = `${qtyOutfitTowerClimber} Outfit Tower Climber: <span style="text-decoration:line-through;">W</span>${totalOutfitTowerClimber}`
    }
    if (qtyOutfitHomeInstaller > 0) {
        ohiDiv.innerHTML = `${qtyOutfitHomeInstaller} Outfit Home Installer: <span style="text-decoration:line-through;">W</span>${totalOutfitHomeInstaller}`
    }
    totalDiv.innerHTML = ` Total: <span style="text-decoration:line-through;">W</span>${cartAmount}`
    balanceDiv.innerHTML = ` Your Balance: <span style="text-decoration:line-through;">W</span>${remainigCredit}`
}
if (section == 'build-your-network' || section == 'lesser-path' || section == 'install-distribution-nodes' || section == 'installed-remaining' || section == 'installations-subscribers' || section == 'successfully-installed') {
    crewMoraleTag.innerText = crewMorale;
    subscribersTag.innerText = subscribers;
    daySpentTag.innerText = daySpent;
    inventoryTag.innerText = inventory;
    creditTag.innerText = remainigCredit;
    customerSatisfactionTag.innerText = customerSatisfaction;
}
console.log('RNG:' + RNG)
//Mostrar Variables 
console.log('Section: ' + section);
console.log('Url: ' + domain);
//Mostrar datos por consola del Local Storage
console.log('>>>>>>>>>>Data in Local Storage<<<<<<<<<<')
console.log('crewMorale:' + crewMorale)
//console.log(typeof(crewMorale))
console.log('subscribers:' + subscribers)
//console.log(typeof(subscribers))
console.log('daySpent:' + daySpent)
//console.log(typeof(daySpent))
console.log('inventory:' + inventory)
//console.log(typeof(inventory))
console.log('credit:' + credit)
//console.log(typeof(credit))
console.log('customerSatisfaction:' + customerSatisfaction)
//console.log(typeof(customerSatisfaction))
console.log('--------------------------')
console.log('userName: ' + userName);
console.log("region: " + region);
console.log('character: ' + character);
console.log('company: ' + userCompany);
