let lamps=[]
let dif={"easy":3, "med":5, "hard":7}
let size=null
let current_difficulty=null

function generate_grid(size) {
    lamps=[]
    let html=""
    let lamp=0
    for (let i=1; i<=size; i++) {
        html+=
            `
                <div id="linha${i}" class="linha">
            `
        for (let j=1; j<=size; j++) {
            html+=
                `
                    <div id="${lamp}" class="light_off" onclick="change_states(Number(this.id))"></div>
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

function congratulations() {
    console.log("ebaa")
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

function change_states(lamp) {
    change_state(lamp)
    if(lamp-size>=0) {change_state(String(lamp-size))}
    if(lamp+size<=(size*size)-1) {change_state(String(lamp+size))}
    if (lamp+1<=(size*size)-1 && lamps[lamp+1]["line"]==lamps[lamp]["line"]) {change_state(String(lamp+1))}
    if (lamp-1>=0 && lamps[lamp-1]["line"]==lamps[lamp]["line"]) {change_state(String(lamp-1))}
    if (all_lamps_are_off()) {congratulations()}
}

function shuffle(choice) {
    size=dif[choice]
    current_difficulty=choice
    generate_grid(size)
    let lamps_changed=[]
    while (lamps_changed.length<size) {
        lamp_to_change=Math.floor(Math.random() * (size*size))
        if (!lamps_changed.includes(lamp_to_change)) {
            lamps_changed.push(lamp_to_change)
            change_states(lamp_to_change)
        }
    }
}