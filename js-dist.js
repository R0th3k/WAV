let url=window.location;const domain=url.origin+"/";null==localStorage.getItem("crewMorale")&&localStorage.setItem("crewMorale",100);let crewMorale=Number(localStorage.getItem("crewMorale"));function addCrewMorale(e){localStorage.setItem("crewMorale",crewMorale+e)}function substractCrewMorale(e){localStorage.setItem("crewMorale",crewMorale-e)}null==localStorage.getItem("subscribers")&&localStorage.setItem("subscribers",0);let subscribers=Number(localStorage.getItem("subscribers"));function addSubscribers(e){localStorage.setItem("subscribers",subscribers+e)}function substractSubscribers(e){localStorage.setItem("subscribers",subscribers-e)}null==localStorage.getItem("daySpent")&&localStorage.setItem("daySpent",0);let daySpent=Number(localStorage.getItem("daySpent"));function addDaySpent(e){localStorage.setItem("daySpent",daySpent+e)}function substractDaySpent(e){localStorage.setItem("daySpent",daySpent-e)}null==localStorage.getItem("inventory")&&localStorage.setItem("inventory",0);let inventory=Number(localStorage.getItem("inventory"));function addInventory(e){localStorage.setItem("inventory",inventory+e)}function substractInventory(e){localStorage.setItem("inventory",inventory-e)}if(null!=localStorage.getItem("region"))switch(localStorage.getItem("region")){case"canada":null==localStorage.getItem("credit")&&localStorage.setItem("credit",2500);break;case"usa-west":null==localStorage.getItem("credit")&&localStorage.setItem("credit",4e4);break;case"usa-east":null==localStorage.getItem("credit")&&localStorage.setItem("credit",3e3);break;case"usa-mid-west":null==localStorage.getItem("credit")&&localStorage.setItem("credit",5500)}let credit=Number(localStorage.getItem("credit"));function addCredit(e){localStorage.setItem("credit",credit+e),refreshPage()}function subtractCredit(e){credit>=0&&e<=credit&&(localStorage.setItem("credit",credit-e),refreshPage())}console.log("XXX"+credit),null==localStorage.getItem("cartAmount")&&localStorage.setItem("cartAmount",0);let cartAmount=Number(localStorage.getItem("totalTower"))+Number(localStorage.getItem("totalV5000"))+Number(localStorage.getItem("totalV3000"))+Number(localStorage.getItem("totalV1000"))+Number(localStorage.getItem("totalEPMP3000"))+Number(localStorage.getItem("totalEPMPforce300"))+Number(localStorage.getItem("totalOutfitTowerClimber"))+Number(localStorage.getItem("totalOutfitTowerClimber0"));console.log("Cart amount "+cartAmount),null==localStorage.getItem("remainingCredit")&&null!=localStorage.getItem("region")&&(console.log("****"),console.log(credit),console.log(cartAmount),console.log("****"),console.log(credit-cartAmount),console.log(localStorage.getItem("credit")-localStorage.getItem("cartAmount")),console.log("****"),localStorage.setItem("remainingCredit",localStorage.getItem("credit")-localStorage.getItem("cartAmount")));let remainigCredit=Number(localStorage.getItem("remainingCredit"));function saveRemainingCredit(){localStorage.setItem("remainingCredit",credit-cartAmount)}function substractRemainingCredit(e){localStorage.setItem("remainingCredit",remainigCredit-e)}function saveCartAmount(){localStorage.setItem("cartAmount",cartAmount)}console.log("remaing "+remainigCredit),console.log("Amount:"+cartAmount),console.log("remainig credit: "+remainigCredit),null==localStorage.getItem("customerSatisfaction")&&localStorage.setItem("customerSatisfaction",0);let customerSatisfaction=Number(localStorage.getItem("customerSatisfaction"));function addCustomerSatisfaction(e){localStorage.setItem("customerSatisfaction",customerSatisfaction+e)}function substractCustomerSatisfaction(e){localStorage.setItem("customerSatisfaction",customerSatisfaction-e)}let priceTower=200;null==localStorage.getItem("qtyTower")&&localStorage.setItem("qtyTower",0);let qtyTower=Number(localStorage.getItem("qtyTower"));function saveTower(e){let t=qtyTower+e;localStorage.setItem("qtyTower",t),localStorage.setItem("totalTower",t*priceTower),saveRemainingCredit(),refreshPage()}null==localStorage.getItem("totalTower")&&localStorage.setItem("totalTower",0);let totalTower=Number(localStorage.getItem("totalTower")),priceV5000=30;null==localStorage.getItem("qtyV5000")&&localStorage.setItem("qtyV5000",0);let qtyV5000=Number(localStorage.getItem("qtyV5000"));function saveV5000(e){let t=qtyV5000+e;localStorage.setItem("qtyV5000",t),localStorage.setItem("totalV5000",t*priceV5000)}null==localStorage.getItem("totalV5000")&&localStorage.setItem("totalV5000",0);let totalV5000=Number(localStorage.getItem("totalV5000")),priceV3000=14;null==localStorage.getItem("qtyV3000")&&localStorage.setItem("qtyV3000",0);let qtyV3000=Number(localStorage.getItem("qtyV3000"));function saveV3000(e){let t=qtyV3000+e;localStorage.setItem("qtyV3000",t),localStorage.setItem("totalV3000",t*priceV3000)}null==localStorage.getItem("totalV3000")&&localStorage.setItem("totalV3000",0);let totalV3000=Number(localStorage.getItem("totalV3000")),priceV1000=6;null==localStorage.getItem("qtyV1000")&&localStorage.setItem("qtyV1000",0);let qtyV1000=Number(localStorage.getItem("qtyV1000"));function saveV1000(e){let t=qtyV1000+e;localStorage.setItem("qtyV1000",t),localStorage.setItem("totalV1000",t*priceV1000)}null==localStorage.getItem("totalV1000")&&localStorage.setItem("totalV1000",0);let totalV1000=Number(localStorage.getItem("totalV1000")),priceEPMP3000=30;null==localStorage.getItem("qtyEPMP3000")&&localStorage.setItem("qtyEPMP3000",0);let qtyEPMP3000=Number(localStorage.getItem("qtyEPMP3000"));function saveEPMP3000(e){let t=qtyEPMP3000+e;localStorage.setItem("qtyEPMP3000",t),localStorage.setItem("totalEPMP3000",t*priceEPMP3000)}null==localStorage.getItem("totalEPMP3000")&&localStorage.setItem("totalEPMP3000",0);let totalEPMP3000=Number(localStorage.getItem("totalEPMP3000")),priceEPMPforce300=6;null==localStorage.getItem("qtyEPMPforce300")&&localStorage.setItem("qtyEPMPforce300",0);let qtyEPMPforce300=Number(localStorage.getItem("qtyEPMPforce300"));function saveEPMPForce300(e){let t=qtyEPMPforce300+e;localStorage.setItem("qtyEPMPforce300",t),localStorage.setItem("totalEPMPforce300",t*priceEPMPforce300)}null==localStorage.getItem("totalEPMPforce300")&&localStorage.setItem("totalEPMPforce300",0);let totalEPMPforce300=Number(localStorage.getItem("totalEPMPforce300")),priceOutfitTowerClimber=36;null==localStorage.getItem("qtyOutfitTowerClimber")&&localStorage.setItem("qtyOutfitTowerClimber",0);let qtyOutfitTowerClimber=Number(localStorage.getItem("qtyOutfitTowerClimber"));function saveOutfitTowerClimber(e){let t=qtyOutfitTowerClimber+e;localStorage.setItem("qtyOutfitTowerClimber",t),localStorage.setItem("totalOutfitTowerClimber",t*priceOutfitTowerClimber)}null==localStorage.getItem("totalOutfitTowerClimber")&&localStorage.setItem("totalOutfitTowerClimber",0);let totalOutfitTowerClimber=Number(localStorage.getItem("totalOutfitTowerClimber")),priceOutfitHomeInstaller=10;null==localStorage.getItem("qtyOutfitHomeInstaller")&&localStorage.setItem("qtyOutfitHomeInstaller",0);let qtyOutfitHomeInstaller=Number(localStorage.getItem("qtyOutfitHomeInstaller"));function saveOutfitHomeInstaller(e){let t=qtyOutfitHomeInstaller+e;localStorage.setItem("qtyOutfitHomeInstaller",t),localStorage.setItem("totalOutfitHomeInstaller",t*priceOutfitHomeInstaller)}null==localStorage.getItem("totalOutfitHomeInstaller")&&localStorage.setItem("totalOutfitHomeInstaller",0);let totalOutfitHomeInstaller=Number(localStorage.getItem("totalOutfitHomeInstaller"));function randomNumberGenerator(){let e=Math.random();return e=e<.5?0:1,e}let RNG=randomNumberGenerator();function redirectPage(e){window.location.href=e?domain+e:domain}let userNameInput=document.getElementById("userName");function saveUser(){userNameInput.value?(localStorage.setItem("userName",userNameInput.value),redirectPage("select-team")):alert("Empty Value")}function saveCompany(){let e=document.getElementById("userCompany").value;e?(localStorage.setItem("userCompany",e),redirectPage("empty-lot")):alert("Empty Value")}function refreshPage(){window.location.reload()}userNameInput&&userNameInput.setAttribute("onblur","saveUser()");let userName=localStorage.getItem("userName"),region=localStorage.getItem("region"),character=localStorage.getItem("character"),userCompany=localStorage.getItem("userCompany"),theUserTag=document.getElementById("theUser");theUserTag&&(theUserTag.innerHTML=`<b>${userName}</b>`);let theDaysSpent=document.getElementById("theDaysSpent");theDaysSpent&&(theDaysSpent.innerHTML=`<b>${daySpent}</b>`);let qtyTowers=document.getElementById("qtyTowers");qtyTowers&&(qtyTowers.innerHTML=`<b>${qtyTower}</b>`);let screenTop=document.getElementById("screenTop"),screenBottom=document.getElementById("screenBottom");switch(region){case"canada":"gameHome"==section||"gameStartConstruction"==section?(screenTop.classList.add("screen_top_default"),screenBottom.classList.add("screen_bottom_default")):(screenTop.classList.add("screen_top_canada"),screenBottom.classList.add("screen_bottom_canada"));break;case"usa-west":"gameHome"==section||"gameStartConstruction"==section?(screenTop.classList.add("screen_top_default"),screenBottom.classList.add("screen_bottom_default")):(screenTop.classList.add("screen_top_canyon"),screenBottom.classList.add("screen_bottom_canyon"));break;case"usa-east":"gameHome"==section||"gameStartConstruction"==section?(screenTop.classList.add("screen_top_default"),screenBottom.classList.add("screen_bottom_default")):(screenTop.classList.add("screen_top_usa-east"),screenBottom.classList.add("screen_bottom_usa-east"));break;case"usa-mid-west":"gameHome"==section||"gameStartConstruction"==section?(screenTop.classList.add("screen_top_default"),screenBottom.classList.add("screen_bottom_default")):(screenTop.classList.add("screen_top_usa-mid-west"),screenBottom.classList.add("screen_bottom_usa-mid-west"));break;case"city":"gameHome"==section||"gameStartConstruction"==section?(screenTop.classList.add("screen_top_default"),screenBottom.classList.add("screen_bottom_default")):(screenTop.classList.add("screen_top_city"),screenBottom.classList.add("screen_bottom_factory"));break;default:console.log("no region"),screenTop.classList.add("screen_top_default"),screenBottom.classList.add("screen_bottom_default")}let characterImgTag=document.getElementById("character");if(characterImgTag)switch(character){case"1":characterImgTag.setAttribute("src","https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b77018bcfd036f7911ac_1.png");break;case"2":characterImgTag.setAttribute("src","https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b770595b03ebd249ce4e_2.png");break;case"3":characterImgTag.setAttribute("src","https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b7702ff74a22d8ffc0a5_3.png");break;case"4":characterImgTag.setAttribute("src","https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b7701142ab3c6a177928_4.png");break;default:console.log("no character"),characterImgTag.setAttribute("src","https://uploads-ssl.webflow.com/62fbe0aea45a87eebed65ef5/6307b77018bcfd036f7911ac_1.png")}let $memberCrew1=document.getElementById("memberCrewA"),$memberCrew2=document.getElementById("memberCrewB"),$memberCrew3=document.getElementById("memberCrewC"),$memberCrew4=document.getElementById("memberCrewD");function saveMembers(){$memberCrew1.value?localStorage.setItem("memberCrew1",$memberCrew1.value):""==localStorage.getItem("memberCrew1")&&localStorage.setItem("memberCrew1","Member Crew 1"),$memberCrew2.value?localStorage.setItem("memberCrew2",$memberCrew2.value):""==localStorage.getItem("memberCrew2")&&localStorage.setItem("memberCrew2","Member Crew 2"),$memberCrew3.value?localStorage.setItem("memberCrew3",$memberCrew3.value):""==localStorage.getItem("memberCrew3")&&localStorage.setItem("memberCrew3","Member Crew 3"),$memberCrew4.value?localStorage.setItem("memberCrew4",$memberCrew4.value):""==localStorage.getItem("memberCrew4")&&localStorage.setItem("memberCrew4","Member Crew 4")}let crewMemberTag=document.getElementById("crewMember");if(crewMemberTag)switch(character){case"1":crewMemberTag.innerHTML=localStorage.getItem("memberCrew1");break;case"2":crewMemberTag.innerHTML=localStorage.getItem("memberCrew2");break;case"3":crewMemberTag.innerHTML=localStorage.getItem("memberCrew3");break;case"4":crewMemberTag.innerHTML=localStorage.getItem("memberCrew4")}let crewMember1Tag=document.getElementById("crewMember1");crewMember1Tag&&(crewMember1Tag.innerHTML=localStorage.getItem("memberCrew1"));let crewMember2Tag=document.getElementById("crewMember2");crewMember2Tag&&(crewMember2Tag.innerHTML=localStorage.getItem("memberCrew2"));let crewMember3Tag=document.getElementById("crewMember3");crewMember3Tag&&(crewMember3Tag.innerHTML=localStorage.getItem("memberCrew3"));let crewMember4Tag=document.getElementById("crewMember4");crewMember4Tag&&(crewMember4Tag.innerHTML=localStorage.getItem("memberCrew4"));let $city=document.getElementById("city");if(console.log(region),$city&&null!=localStorage.getItem("region"))switch(region){case"canada":$city.innerHTML="CITY of Mapleton";break;case"usa-west":$city.innerHTML="Zuni Pueblo";break;case"usa-east":$city.innerHTML="Oakdale School District";break;case"usa-mid-west":$city.innerHTML="Wisco Cherry School District"}let $messageSelectTask=document.getElementById("messageSelectTask");if($messageSelectTask&&null!=localStorage.getItem("region"))switch(region){case"canada":$messageSelectTask.innerHTML='<p class="game-font text-center">You\'ve arrived at the fiber core in the middle of the village of Mapleton and need to connect -350 people across 190 homes and businesses with gigabit connectivity. The total village area is roughly 1 square mile. You have 45 days to complete the network build-out.</p><p class="game-font text-center"> What would you like to do?</p>';break;case"usa-west":$messageSelectTask.innerHTML='<p class="game-font text-center">You\'ve arrived at the fiber core in the middle of the Zuni Pueblo and need to connect ~1,000 people across 490 homes and businesses with gigabit connectivity. You have a 10GB fiber line and the total area needing coverage is spread out across roughly 300 square miles. You have 90 days to complete the network build-out.</p><p class="game-font text-center"> What would you like to do?</p>';break;case"usa-east":$messageSelectTask.innerHTML="<p class=\"game-font text-center\">You've arrived at Oakdale School District offices after the city received CARES Act funding and were able to lease 1Gb fiber connections to each of the 3 schools in the area. You've been tasked with providing internet connectivity to the 28 unserved students at their homes to ensure remote learning capabilities. You'll also need to upgrade the school's network for when students are on-premise. You have 90-Days to complete the network buildout.</p><p class=\"game-font text-center\"> What would you like to do?</p>";break;case"usa-mid-west":$messageSelectTask.innerHTML='<p class="game-font text-center">You\'ve arrived at the Wisco Cherry School District offices and need to connect a network to support\n            ~3,000 concurrent users across 5 campuses. The district is also requesting outdoor Wi-Fi capabilities to allow students to connect within the campus parking lots. Each campus has a leased 5GB fiber back bone to the premise. You have 90 days to complete the network build-out.</p><p class="game-font text-center"> What would you like to do?</p>'}document.addEventListener("keydown",(function(e){if(e.altKey&&"R"==String.fromCharCode(e.keyCode)&&(localStorage.clear(),refreshPage()),"gameHome"==section)switch(e.keyCode){case 49:redirectPage("start-construction");break;case 50:redirectPage("game-learn");break;case 51:alert("See Top Ten List");break;default:console.log("invalid option")}if("gameLearn"==section&&32==e.keyCode&&redirectPage(),"gameStartConstruction"==section)switch(e.keyCode){case 49:localStorage.setItem("region","canada"),redirectPage("enter-name");break;case 50:localStorage.setItem("region","usa-west"),redirectPage("enter-name");break;case 51:localStorage.setItem("region","usa-east"),alert("USA East");break;case 52:localStorage.setItem("region","usa-mid-west"),alert("USA Mid-West");break;default:console.log("invalid option")}if("enterName"==section&&13==e.keyCode&&saveUser(),"nameCompany"==section&&13==e.keyCode&&saveCompany(),"selectTeam"==section)switch(e.keyCode){case 49:console.log("memberCrew1"),localStorage.setItem("character","1"),redirectPage("name-company");break;case 50:console.log("memberCrew2"),localStorage.setItem("character","2"),redirectPage("name-company");break;case 51:console.log("memberCrew3"),localStorage.setItem("character","3"),redirectPage("name-company");break;case 52:console.log("memberCrew4"),localStorage.setItem("character","4"),redirectPage("name-company");break;case 13:saveMembers(),alert("Saved");break;default:console.log("invalid option")}if("emptyLot"==section&&32==e.keyCode&&redirectPage("city-details"),"cityDetails"==section&&32==e.keyCode&&redirectPage("select-task"),"selecTask"==section)switch(e.keyCode){case 49:redirectPage("trench-fiber");break;case 50:addDaySpent(1),redirectPage("survey");break;case 51:redirectPage("start-tower");break;case 52:redirectPage("ask-wav");break;default:console.log("invalid option")}if("trenchFiber"==section&&32==e.keyCode&&redirectPage("select-task"),"survey"==section)switch(e.keyCode){case 49:redirectPage("leverage-existing-estructure");break;case 50:redirectPage("start-tower");break;default:console.log("invalid option")}if("leverageExistingEstructure"==section&&32==e.keyCode&&redirectPage("purchase"),"purchase"==section)switch(e.keyCode){case 49:cartAmount<=credit&&remainigCredit>=priceTower&&(saveTower(1),refreshPage());break;case 50:cartAmount<=credit&&remainigCredit>=priceV5000&&(saveV5000(1),refreshPage());break;case 51:cartAmount<=credit&&remainigCredit>=priceV3000&&(saveV3000(1),refreshPage());break;case 52:cartAmount<=credit&&remainigCredit>=priceV1000&&(saveV1000(1),refreshPage());break;case 53:cartAmount<=credit&&remainigCredit>=priceEPMP3000&&(saveEPMP3000(1),refreshPage());break;case 54:cartAmount<=credit&&remainigCredit>=priceEPMPforce300&&(saveEPMPForce300(1),refreshPage());break;case 55:cartAmount<=credit&&remainigCredit>=priceOutfitTowerClimber&&(saveOutfitTowerClimber(1),refreshPage());case 56:cartAmount<=credit&&remainigCredit>=priceOutfitHomeInstaller&&(saveOutfitHomeInstaller(1),refreshPage());break;case 57:redirectPage("ask-advice");break;case 32:saveCartAmount(),saveRemainingCredit(),refreshPage(),redirectPage("build-your-network");break;default:console.log("invalid option")}if("ask-advice"==section)switch(e.keyCode){case 49:saveCartAmount(),saveRemainingCredit(),redirectPage("build-your-network");break;case 50:redirectPage("purchase");break;default:console.log("invalid option")}if("ask-wav"==section)switch(e.keyCode){case 49:addDaySpent(1),redirectPage("survey");break;case 50:redirectPage("select-task");break;default:console.log("invalid option")}if("start-tower"==section)switch(e.keyCode){case 49:priceTower<=remainigCredit&&saveTower(1),console.log(remainigCredit),console.log(qtyTower);break;case 32:priceTower<=remainigCredit&&(saveRemainingCredit(),substractCrewMorale(10),addDaySpent(3),redirectPage("dropped-a-bolt"));break;default:console.log("invalid option")}if("dropped-a-bolt"==section)if(32===e.keyCode)addDaySpent(2),redirectPage("towers-built");else console.log("invalid option");if("towers-built"==section&&32==e.keyCode&&redirectPage("punish-path"),"punish-path"==section&&32==e.keyCode&&(addDaySpent(4),substractCrewMorale(10),redirectPage("install-distribution-nodes")),"build-your-network"==section&&32==e.keyCode&&(1==RNG?(addDaySpent(1),redirectPage("install-distribution-nodes")):redirectPage("lesser-path")),"lesser-path"==section&&32==e.keyCode&&(addDaySpent(2),substractCrewMorale(5),redirectPage("install-distribution-nodes")),"install-distribution-nodes"==section&&32==e.keyCode&&(addDaySpent(1),redirectPage("installed-remaining")),"installed-remaining"==section&&32==e.keyCode&&(addDaySpent(1),addCustomerSatisfaction(30),addSubscribers(130),redirectPage("installations-subscribers")),"installations-subscribers"==section&&32==e.keyCode&&(addDaySpent(1),addCustomerSatisfaction(20),addSubscribers(60),redirectPage("successfully-installed ")),"successfully-installed"==section)switch(e.keyCode){case 49:redirectPage("linkplanner");break;case 50:addDaySpent(1),saveV1000(3),redirectPage("purchase-3-additional-v1000");break;case 51:redirectPage("ask-wav-for-advice");break;default:console.log("invalid option")}if("purchase-3-additional-v1000"==section)if(32===e.keyCode)redirectPage("run-linkplanner");else console.log("invalid option");if("ask-wav-for-advice"==section)if(32===e.keyCode)redirectPage("linkplanner");else console.log("invalid option");if("run-linkplanner"==section)if(32===e.keyCode)redirectPage("linkplanner");else console.log("invalid option");if("linkplanner"==section)if(32===e.keyCode)addDaySpent(1),addSubscribers(3),addCustomerSatisfaction(25),substractRemainingCredit(48),redirectPage("connectivity-to-the-farms");else console.log("invalid option");if("connectivity-to-the-farms"==section)if(32===e.keyCode)localStorage.setItem("region","city"),redirectPage("village");else console.log("invalid option");if("village"==section)switch(e.keyCode){case 49:addDaySpent(3),redirectPage("manual-cnarcher");break;case 50:addDaySpent(1),addCustomerSatisfaction(10),redirectPage("run-cnarcher");break;case 51:addDaySpent(1),addCustomerSatisfaction(15),redirectPage("run-cnmaestro");break;case 52:redirectPage("ask-wav-for-advice-2");break;case 53:substractCustomerSatisfaction(10),redirectPage("great-job");break;default:console.log("invalid option")}if("manual-cnarcher"==section&&32==e.keyCode&&redirectPage("ask-wav-for-advice-2"),"ask-wav-for-advice-2"==section)switch(e.keyCode){case 49:addDaySpent(1),addCustomerSatisfaction(15),redirectPage("run-cnmaestro");break;case 50:addDaySpent(1),addCustomerSatisfaction(10),redirectPage("run-cnarcher");break;default:console.log("invalid option")}if("run-cnarcher"!=section&&"run-cnmaestro"!=section||32==e.keyCode&&redirectPage("nice"),"nice"==section&&32==e.keyCode&&redirectPage("current-network-generates"),"current-network-generates"==section&&32==e.keyCode&&redirectPage("missed-out"),"great-job"==section&&32==e.keyCode&&redirectPage("cng"),"cng"==section&&32==e.keyCode&&redirectPage("missed-out"),"missed-out"==section&&32==e.keyCode&&redirectPage("witty-ending"),"witty-ending"==section&&32==e.keyCode&&redirectPage("end"),"end"==section)switch(e.keyCode){case 49:redirectPage("image-stats");break;case 50:case 51:case 54:break;case 52:redirectPage("stats");break;case 53:redirectPage("about-our-products");break;default:console.log("invalid option")}if("stats"!=section&&"about-our-products"!=section||32==e.keyCode&&redirectPage("end"),"image-stats"==section)switch(e.keyCode){case 49:document.getElementById("download").click();break;case 32:redirectPage("end");break;default:console.log("invalid option")}}));let crewMoraleTag=document.getElementById("crewMorale"),subscribersTag=document.getElementById("subscribers"),daySpentTag=document.getElementById("daySpent"),inventoryTag=document.getElementById("inventory"),creditTag=document.getElementById("credit"),customerSatisfactionTag=document.getElementById("customerSatisfaction");"start-tower"==section&&(document.getElementById("towerQty").innerText=localStorage.getItem("qtyTower")),"cityDetails"==section&&(crewMoraleTag.innerText=crewMorale,subscribersTag.innerText=subscribers,daySpentTag.innerText=daySpent,inventoryTag.innerText=inventory,creditTag.innerText=credit,customerSatisfactionTag.innerText=customerSatisfaction);let purchaseDiv=document.getElementById("purchase");purchaseDiv&&(purchaseDiv.innerHTML=`\n    <div class="game-font text-center">\n    <p>[1] Tower ₩${priceTower} ${qtyTower>0?"--- "+qtyTower:""}</p>\n    <p>[2] V5000 --- ₩${priceV5000} ${qtyV5000>0?"--- "+qtyV5000:""}</p>\n    <p>[3] V3000 --- ₩${priceV3000} ${qtyV3000>0?"--- "+qtyV3000:""}</p>\n    <p>[4] V1000 --- ₩${priceV1000} ${qtyV1000>0?"--- "+qtyV1000:""}</p>\n    <p>[5] ePMP 3000 --- ₩${priceEPMP3000} ${qtyEPMP3000>0?"--- "+qtyEPMP3000:""}</p>\n    <p>[6] ePMP Force 300 --- ₩${priceEPMPforce300} ${qtyEPMPforce300>0?"--- "+qtyEPMPforce300:""}</p>\n    <p>[7] Outfit Tower Climber ----- ₩${priceOutfitTowerClimber} ${qtyOutfitTowerClimber>0?"--- "+qtyOutfitTowerClimber:""}</p>\n    <p>[8] Outfit Home Installer ₩${priceOutfitHomeInstaller} ${qtyOutfitHomeInstaller>0?"--- "+qtyOutfitHomeInstaller:""}</p>\n    <p>[9] Ask Advice-------₩0</p>\n    <p>Amount: ₩${cartAmount}</p>\n    </div>`);let towerDiv=document.getElementById("towerDiv"),V5000Div=document.getElementById("V5000Div"),V3000Div=document.getElementById("V3000Div"),V1000Div=document.getElementById("V1000Div"),EPMP3000Div=document.getElementById("EPMP3000Div"),EPMPForce300Div=document.getElementById("EPMPForce300Div"),otcDiv=document.getElementById("otcDiv"),ohiDiv=document.getElementById("ohiDiv"),totalDiv=document.getElementById("total"),balanceDiv=document.getElementById("balance");"ask-advice"==section&&(qtyTower>0&&(towerDiv.innerHTML=`${qtyTower} Tower: <span style="text-decoration:line-through;">₩</span>${totalTower}`),qtyV5000>0&&(V5000Div.innerHTML=`${qtyV5000} V5000: <span style="text-decoration:line-through;">₩</span>${totalV5000}`),qtyV3000>0&&(V3000Div.innerHTML=`${qtyV3000} V3000: <span style="text-decoration:line-through;">₩</span>${totalV3000}`),qtyV1000>0&&(V1000Div.innerHTML=`${qtyV1000} V1000: <span style="text-decoration:line-through;">₩</span>${totalV1000}`),qtyEPMP3000>0&&(EPMP3000Div.innerHTML=`${qtyEPMP3000} EPMP3000: <span style="text-decoration:line-through;">₩</span>${totalEPMP3000}`),qtyEPMPforce300>0&&(EPMPForce300Div.innerHTML=`${qtyEPMPforce300} EPMPForce300: <span style="text-decoration:line-through;">₩</span>${totalEPMPforce300}`),qtyOutfitTowerClimber>0&&(otcDiv.innerHTML=`${qtyOutfitTowerClimber} Outfit Tower Climber: <span style="text-decoration:line-through;">₩</span>${totalOutfitTowerClimber}`),qtyOutfitHomeInstaller>0&&(ohiDiv.innerHTML=`${qtyOutfitHomeInstaller} Outfit Home Installer: <span style="text-decoration:line-through;">₩</span>${totalOutfitHomeInstaller}`),totalDiv.innerHTML=` Total: <span style="text-decoration:line-through;">₩</span>${cartAmount}`,balanceDiv.innerHTML=` Your Balance: <span style="text-decoration:line-through;">₩</span>${remainigCredit}`),"build-your-network"!=section&&"lesser-path"!=section&&"install-distribution-nodes"!=section&&"installed-remaining"!=section&&"installations-subscribers"!=section&&"dropped-a-bolt"!=section&&"towers-built"!=section&&"punish-path"!=section&&"connectivity-to-the-farms"!=section&&"run-cnarcher"!=section&&"run-cnmaestro"!=section&&"stats"!=section&&"image-stats"!=section||(crewMoraleTag.innerText=crewMorale,subscribersTag.innerText=subscribers,daySpentTag.innerText=daySpent,inventoryTag.innerText=inventory,creditTag.innerText=remainigCredit,customerSatisfactionTag.innerText=customerSatisfaction);let purchasedProducts=document.getElementById("purchasedProducts");purchasedProducts&&(purchasedProducts.innerHTML=`<span>${qtyTower>0?qtyTower+" Tower":""}</span><span>${qtyV5000>0?qtyV5000+" V5000":""}</span><span>${qtyV3000>0?qtyV3000+" V3000":""}  </span><span>${qtyV1000>0?qtyV1000+" V1000":""}  </span><span>${qtyEPMP3000>0?qtyEPMP3000+" ePMP 3000":""}</span><span>${qtyEPMPforce300>0?qtyEPMPforce300+" ePMP Force 300":""}  </span><span>${qtyOutfitTowerClimber>0?qtyOutfitTowerClimber+" Outfit Tower Climber":""} </span><span>${qtyOutfitHomeInstaller>0?NaN:""}</span>`);let statsTag=document.getElementById("stats");function downloadImage(){html2canvas(statsTag,{onrendered:function(e){let t=e.toDataURL("image/jpg").replace(/^data:image\/jpg/,"data:application/octet-stream");$("#download").attr("download",`image_${userName}.jpg`).attr("href",t)}})}"image-stats"==section&&downloadImage();