let lamps={}
let dif={"easy":"3", "med":"5", "hard":"7"}

function gerar_grid(choice) {
    lamps={}
    size=dif[choice]
    let html=""
    for (let i=1; i<=size; i++) {
        html+=
            `
                <div id="linha${i}" class="linha">
            `
        for (let j=1; j<=size; j++) {
            html+=
                `
                    <div id="col${j}_li${i}" class="light_off" onclick="mudar_estados(this.id)"></div>
                `
            let id=`col${j}_li${i}`
            lamps[id]="off"
        }
        html+="</div>"
    }
    document.getElementById("grid").innerHTML=html
}

function mudar_estado(id) {
    if (lamps[id]=="off") {
        document.getElementById(id).className="light_on"
        lamps[id]="on"
    }
    else {
        document.getElementById(id).className="light_off"
        lamps[id]="off"
    }
}

function mudar_estados(id) {
    let col= Number(id[3])
    let li=Number(id[7])
    let lamps_to_change=[]
    lamps_to_change.push(id)
    lamps_to_change.push(`col${col-1}_li${li}`)
    lamps_to_change.push(`col${col+1}_li${li}`)
    lamps_to_change.push(`col${col}_li${li-1}`)
    lamps_to_change.push(`col${col}_li${li+1}`)
    lamps_to_change.forEach(lamp => {
        if (lamp in lamps) {
            mudar_estado(lamp)
        }
    })
}

function embaralhar() {
    let teste=0
}