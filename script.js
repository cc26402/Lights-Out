let lamps=[]
let dif={"easy":3, "med":5, "hard":7}
let size=null
let current_difficulty=null
let lamps_changed=[]
let clicks=0

function generate_grid(size) {
    lamps=[]
    let html=""
    let lamp=0
    let lamp_styles = {
        "easy": {"size": "150px", "margin":"4px"},
        "med": {"size": "100px", "margin":"4px"},
        "hard": {"size": "80px", "margin":"3px"}
    }
    document.documentElement.style.setProperty("--lamp_size", lamp_styles[current_difficulty]["size"])
    document.documentElement.style.setProperty("--lamp_margin", lamp_styles[current_difficulty]["margin"])
    for (let i=1; i<=size; i++) {
        html+=
            `
                <div id="linha${i}" class="linha">
            `
        for (let j=1; j<=size; j++) {
            html+=
                `
                    <div id="${lamp}" class="light_off" onclick="change_states(Number(this.id), true, true)"></div>
                `
            lamps.push({"line":i, "on":false})
            lamp++
        }
        html+="</div>"
    }
    document.getElementById("grid").innerHTML=html
}

function all_lamps_are_off() {
    let lamps_on=0
    lamps.forEach(lamp => {
        if (lamp["on"]) {lamps_on++}
    })
    if (lamps_on>0) {return false}
    else {return true}
}

function change_state(lamp) {
    let lamp_str=String(lamp)
    if (!lamps[lamp]["on"]) {
        document.getElementById(lamp_str).className="light_on"
        lamps[lamp]["on"]=true
    }
    else {
        document.getElementById(lamp_str).className="light_off"
        lamps[lamp]["on"]=false
    }
}

function change_states(lamp, need_verify_lamps, count) {
    if (count) {clicks++}
    change_state(lamp)
    if(lamp-size>=0) {change_state(lamp-size)}
    if(lamp+size<=(size*size)-1) {change_state(lamp+size)}
    if (lamp+1<=(size*size)-1 && lamps[lamp+1]["line"]==lamps[lamp]["line"]) {change_state(lamp+1)}
    if (lamp-1>=0 && lamps[lamp-1]["line"]==lamps[lamp]["line"]) {change_state(lamp-1)}
    if (need_verify_lamps && all_lamps_are_off()) {
        document.getElementById("clicks_win").textContent=`Você ganhou com ${clicks} jogadas`
        document.getElementById("congratulations_back").style.display="block"
    }
}

function shuffle(choice, new_game) {
    clicks=0
    if (new_game) {
        size=dif[choice]
        current_difficulty=choice
        generate_grid(size)
        lamps_changed=[]
        while (lamps_changed.length<size*2) {
            let lamp_to_change=Math.floor(Math.random() * (size*size))
            if (!lamps_changed.includes(lamp_to_change)) {
                lamps_changed.push(lamp_to_change)
                change_states(lamp_to_change, false, false)
            }
            if (lamps_changed.length==size && all_lamps_are_off()) {lamps_changed=[]}
        }
    }
    else {
        generate_grid(size)
        lamps_changed.forEach(lamp => {change_states(lamp, false)})
    }
}

function play_again(id_congrats) {
    document.getElementById(id_congrats).style.display="none"
    shuffle(current_difficulty, true)
}