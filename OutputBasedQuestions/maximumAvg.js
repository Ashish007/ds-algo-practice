function maxAvg(arr){
    let obj = {}
    for(let i=0; i<arr.length; i++){
            if(obj[arr[i][0]]){
                obj[arr[i][0]].push(arr[i][1])
            }
            else{
                obj[arr[i][0]] = [arr[i][1]]
            }
    }
}

let arr = [["A",23],["B",45],["A",41],["C",39],["A",31],["B",26],["C",42]]
maxAvg(arr)


let species = [{'species':'A'},{'species':'B'},{'species':'C'},{'species':'C'},{'species':'B'},{'species':'A'},{'species':'C'},{'species':'B'},{'species':'A'},{'species':'A'}]
let finalObj = {}
for(let i=0; i<species.length; i++){
    if(finalObj["species"]){
        finalObj["species"].push(species[i]["species"])
    }
    else{
        finalObj["species"] = []
    }
}
finalObj["species"] = [...new Set(finalObj["species"])]
console.log(finalObj)
