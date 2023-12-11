function boards() { 
    let boardUser = document.querySelector(".playboardUser");
    let boardComputer = document.querySelector(".playboardComputer");
    let army = [
        "./1.png",
        "./2.png",
        "./3.png",
        "./4.png",
        "./5.png",
        "./6.png",
        "./7.png",
        "./8.png",
        "./9.png",
        "./10.png",
        "./11.png",
        "./12.png",
        "./13.png",
        "./14.png",
        "./15.png",
        "./16.png",
        "./17.png",
        "./18.png",
        "./19.png",
        "./20.png",
    ]
    let cellList1 = []
    function user() {
        let cell;
        for (let i = 0; i < 100; i++){
            cell = document.createElement("div");
            cell.className = "cell";
            cell.innerHTML = "<button></button>";
            cellList1.push(cell)
            boardUser.appendChild(cell)
            let randomOrder = Math.floor(Math.random() * 100);
            cell.style.order = randomOrder;
        }
        for (let i = 0; i < 20; i++){
            let randomOrder = Math.floor(Math.random() * 100);
            let randomArmy = Math.floor(Math.random() * 20);
            cellList1[randomOrder].innerHTML = `<p><img src="${army[randomArmy]}" alt="t34"></p>
                                                <button><i></i></button>`;
        }
        
    }
    let cellList2 = []
    function computer() {
        let cell;
        for (let i = 0; i < 100; i++){
            cell = document.createElement("div");
            cell.className = "cell";
            let randomOrder = Math.floor(Math.random() * 100);
            cell.style.order = randomOrder;
            
            cell.innerHTML = "<button></button>";
            cellList2.push(cell)
            boardComputer.appendChild(cell)
        }
        for (let i = 0; i < 20; i++){
            let randomOrder = Math.floor(Math.random() * 100);
            let randomArmy = Math.floor(Math.random() * 20);
            cellList2[randomOrder].innerHTML = `<p><img src="${army[randomArmy]}" alt="t34"></p>
                                                <button><i></i></button>`;
            // console.log(randomOrder);
        }

        let sonlar = []
        for (let i = 0; i < 100; i++){
            sonlar.push(i)
        }
        let userTotal = 0, compTotal = 0;
        let buttonsComp = document.querySelectorAll(".playboardComputer .cell button");
        let buttonsUser = document.querySelectorAll(".playboardUser .cell button");
        let armyCountUser = []
        let armyCountComp = []
        for (let i = 0; i < buttonsComp.length; i++){
            buttonsComp[i].disabled = true
        }
        for (let i = 0; i < buttonsUser.length; i++){
            buttonsUser[i].disabled = true
        }
        let startBtn = document.querySelector("#start")
        let changeBtn = document.querySelector("#change")
        startBtn.onclick = () => {
            for (let i = 0; i < buttonsComp.length; i++){
                buttonsComp[i].disabled = false
            }
            for (let i = 0; i < buttonsUser.length; i++){
                buttonsUser[i].disabled = false
            }
            changeBtn.disabled = true;
            changeBtn.style.opacity = 0.4;
        }
        for (let i = 0; i < buttonsComp.length; i++){
            if (buttonsComp[i].innerHTML === "<i></i>") {
                armyCountComp.push(buttonsComp[i])
            }
        }
        for (let i = 0; i < buttonsUser.length; i++){
            if (buttonsUser[i].innerHTML === "<i></i>") {
                armyCountUser.push(buttonsUser[i])
                buttonsUser[i].style.opacity = 0;
            }
        }


        let repeatBtn = document.querySelector("#repeat");
        repeatBtn.disabled = true;
        repeatBtn.style.opacity = 0.4;


        let p=0, q=0;
        document.querySelector(".userArmy").innerText = `Armiya soni ${armyCountUser.length} ta.`
        document.querySelector(".compArmy").innerText = `Armiya soni ${armyCountComp.length} ta.`
        buttonsComp.forEach((e,i) => {
            e.onclick = () => {
                if (e.innerHTML === "<i></i>") {
                    p++;
                    e.classList.add("boomed")  
                    cellList2[i].style.background = "rgb(255,100,100)";
                    document.querySelector(".compArmy").innerText = `Armiya soni ${armyCountComp.length - p} / ${armyCountComp.length}.`
                    userTotal++;                    
                } else {
                    e.classList.add("plch")                      
                    cellList2[i].style.background = "#000016";
                }
                buttonsComp.forEach(e => {
                    e.disabled = true;
                })
                setTimeout(() => {
                    buttonsComp.forEach(e => {
                        e.disabled = false;
                    })
                }, 3000)
                setTimeout(() => {
                    if (buttonsUser[sonlar[i]].innerHTML === "<i></i>") {
                        q++;
                        buttonsUser[sonlar[i]].classList.add("boomed")  
                        cellList1[sonlar[i]].style.background = "rgb(255,100,100)";
                        document.querySelector(".userArmy").innerText = `Armiya soni ${armyCountUser.length - q} / ${armyCountUser.length}.`
                        compTotal++;
                    } else {
                        buttonsUser[sonlar[i]].classList.add("plch")                      
                        cellList1[sonlar[i]].style.background = "#000016";
                    }
                }, 2000)
                
                
                setTimeout(() => {
                    e.disabled = true;
                }, 1650);

                
                if (userTotal === armyCountComp.length) {
                    setTimeout(() => {
                        buttonsComp.forEach(e => {
                            e.disabled = true;
                            e.style.opacity = 0;
                        })
                        buttonsUser.forEach(e => {
                            e.disabled = true
                            e.style.opacity = 0;
                        })
                    }, 1300);
                    alert("Siz g'alaba qozondingiz!");
                    let repeatBtn = document.querySelector("#repeat");
                    repeatBtn.disabled = false;
                    repeatBtn.style.opacity = 1;
                    repeatBtn.onclick = () => {
                        location.reload()
                    }
                }
                if (compTotal === armyCountUser.length) {
                    setTimeout(() => {
                        buttonsComp.forEach(e => {
                            if (e.disabled == false) {
                                e.style.background = "red";
                            }
                            e.disabled = true;
                            e.style.opacity = 0;
                        })
                        buttonsUser.forEach(e => {
                            if (e.disabled == false) {
                                e.style.background = "red";
                            }
                            e.disabled = true
                            e.style.opacity = 0;
                        })
                        alert("Siz mag'lub bo'ldingiz");
                    }, 1300);
                    let repeatBtn = document.querySelector("#repeat")
                    repeatBtn.disabled = false;
                    repeatBtn.style.opacity = 1;
                    repeatBtn.onclick = () => {
                        location.reload()
                    }
                }
                console.log(userTotal);
            }
        })
        console.log(armyCountComp);
    }
    user()
    computer()


    


}
boards()

function change() {
    let changeBtn = document.querySelector("#change")
    changeBtn.onclick = () => {
        location.reload()
    }
}
change()
function aboutGame() {
    let j = 0;
    let body = document.querySelector("body")
    let div = document.createElement("span");
    div.className = "advertice";
    div.innerHTML = "<h1 class='qoida'>O'yin qoidasi</h1>\
    <p>\"Army Battle\" o'yiniga xush kelibsiz! <br> Bu o'yin hammaga biladigan \"Морской бой\" ning klonlangan va boshqacha varianti. Qoidalar huddi \"Морской бой\" nikiga o'xshash farqli tomoni faqat bitta-bitta katak bosiladi va har bir katak ortida bitta harbiylar yoki harbiy texnika bor. Maqsad kompyuterdan oldin shu texnikalarni topib yo'q qilish. <br> Omad! <br> Yaratuvchi: IDD Coder. <br> asd23 </p><i class=\"fa fa-close\"></i>";
    body.appendChild(div)
    
    let i = document.querySelector(".advertice i")
    i.addEventListener("click", () => {
        div.classList.remove("advertice");
        div.innerHTML = "";
    })
}
