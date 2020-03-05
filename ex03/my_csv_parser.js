'use strict'
const fs = require('fs');
function my_csv_parser(filename, separator=","){
    let row = []
    let allData = fs.readFileSync(filename, 'utf-8').split("\n").map(d => d.replace("\r","").trim());
    allData.forEach((element)=>{
        row.push(element.split(separator))
    })
    return row;
    
}

console.log(my_csv_parser('ex03/data.csv'))