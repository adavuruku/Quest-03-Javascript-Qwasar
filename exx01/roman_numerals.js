'use strict'
function roman_numerals(number){
    let value = number.toString().split("").map((k)=>parseInt(k))
    let ones = {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX" , 0:""}
    let tens = {1:"X", 2:"XX", 3:"XXX", 4:"XL", 5:"L", 6:"LX", 7:"LXX", 8:"LXXX", 9:"XC" , 0:""}
    let hundred = {1:"C", 2:"CC", 3:"CCC", 4:"CD", 5:"D", 6:"DC", 7:"DCC", 8:"DCCC", 9:"CM" , 0:""}
    let thousand = {1:"M", 2:"MM", 3:"MMM" , 4:"MMMM"}
    if (value.length==4)
        return thousand[value[0]].concat(hundred[value[1]]).concat(tens[value[2]]).concat(ones[value[3]])
    else if (value.length ==3)
        return hundred[value[0]].concat(tens[value[1]]).concat(ones[value[2]])
    else if (value.length==2)
        return tens[value[0]].concat(ones[value[1]])
    else if (value.length==1)
        return ones[value[0]]
    else
        return "Can't handle this!!"
    end
}

console.log(roman_numerals(13));
