const $game = document.getElementById("game");

const imgs = [
    ["cross", "img/cross.png"],
    ["circle", "img/circle.png"]
]

const notification = {
    won: document.getElementById("notification__won"),
    lost: document.getElementById("notification__lost"),
    draw: document.getElementById("notification__draw")
}

let round = 1;



const whoWon = () => {
    const box1 = document.getElementById("box-1")
    const box2 = document.getElementById("box-2")
    const box3 = document.getElementById("box-3")
    const box4 = document.getElementById("box-4")
    const box5 = document.getElementById("box-5")
    const box6 = document.getElementById("box-6")
    const box7 = document.getElementById("box-7")
    const box8 = document.getElementById("box-8")
    const box9 = document.getElementById("box-9")

    const allBoxs = document.querySelectorAll(".box")

    if ( (box1.getAttribute("name") === "cross" && box2.getAttribute("name") === "cross" && box3.getAttribute("name") === "cross") || (box1.getAttribute("name") === "cross" && box4.getAttribute("name") === "cross" && box7.getAttribute("name") === "cross") || (box1.getAttribute("name") === "cross" && box5.getAttribute("name") === "cross" && box9.getAttribute("name") === "cross") || (box2.getAttribute("name") === "cross" && box5.getAttribute("name") === "cross" && box8.getAttribute("name") === "cross") || (box3.getAttribute("name") === "cross" && box6.getAttribute("name") === "cross" && box9.getAttribute("name") === "cross") || (box3.getAttribute("name") === "cross" && box5.getAttribute("name") === "cross" && box7.getAttribute("name") === "cross") || (box4.getAttribute("name") === "cross" && box5.getAttribute("name") === "cross" && box6.getAttribute("name") === "cross") || (box7.getAttribute("name") === "cross" && box8.getAttribute("name") === "cross" && box9.getAttribute("name") === "cross") ) {


        notification.draw.style.display = "none";
        round = 5;
        console.log("Cross won")

        notification.won.style.display = "block";
        setTimeout(() => {
            notification.won.style.display = "none"
        }, 3000)
    }

    else if ( (box1.getAttribute("name") === "circle" && box2.getAttribute("name") === "circle" && box3.getAttribute("name") === "circle") || (box1.getAttribute("name") === "circle" && box4.getAttribute("name") === "circle" && box7.getAttribute("name") === "circle") || (box1.getAttribute("name") === "circle" && box5.getAttribute("name") === "circle" && box9.getAttribute("name") === "circle") || (box2.getAttribute("name") === "circle" && box5.getAttribute("name") === "circle" && box8.getAttribute("name") === "circle") || (box3.getAttribute("name") === "circle" && box6.getAttribute("name") === "circle" && box9.getAttribute("name") === "circle") || (box3.getAttribute("name") === "circle" && box5.getAttribute("name") === "circle" && box7.getAttribute("name") === "circle") || (box4.getAttribute("name") === "circle" && box5.getAttribute("name") === "circle" && box6.getAttribute("name") === "circle") || (box7.getAttribute("name") === "circle" && box8.getAttribute("name") === "circle" && box9.getAttribute("name") === "circle") ) {

        notification.draw.style.display = "none";
        round = 5;
        
        allBoxs.forEach(e => {
            e.setAttribute("name", "ended")
        })

        notification.lost.style.display = "block";

        setTimeout(() => {
            notification.lost.style.display = "none";
        }, 3000)
    }
}


$game.addEventListener("click", e => {
    const $boxs = document.querySelectorAll(".box")
    try {
        if (e.target.attributes.name.value === "empty") {
            e.target.innerHTML = `<img src="${imgs[0][1]}" alt="${imgs[0][0]}">`
            e.target.attributes.name.value = imgs[0][0]

            whoWon()
            if (round < 5) {
                for (let i = 0; i < 1; i++) {
                    const generatingNumberRandom = Math.floor(Math.random() * 9) + 1;
    
                    const botPlay = document.getElementById(`box-${generatingNumberRandom}`)
    
                    if (botPlay.getAttribute("name") === "empty") {
                        $boxs.forEach(e => {
                            if (e.getAttribute("name") === "empty") {
                                e.setAttribute("name", "bot-turn")
                            }
                        })

                        botPlay.setAttribute("name", imgs[1][0])

                        setTimeout(() => {
                            botPlay.innerHTML = `<img src="${imgs[1][1]}" alt="${imgs[1][0]}">`
                            round++
                            $boxs.forEach(e => {
                                if (e.getAttribute("name") === "bot-turn") {
                                    e.setAttribute("name", "empty")
                                }
                            })

                            whoWon()
                            i++
                        }, 2000)
                        
                    }
    
                    else {
                        console.log("RestartingXd")
                        i--
                    }
                }
            }

            else {
                notification.draw.style.display = "block";

                setTimeout(() => {
                    notification.draw.style.display = "none"
                }, 3000)

                whoWon()

                $boxs.forEach(e => {
                    e.setAttribute("name", "ended")
                })
            }
            
        }
    }

    catch (err) {
        console.log("Error LOL:" + err)
    }
})