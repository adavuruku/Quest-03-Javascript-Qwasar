'use strict'
function my_hamming_dna(dna_1, dna_2){
    let i=0,count = 0
    if (dna_1.length == dna_2.length){
        let dna1 = dna_1.split("")
        let dna2 = dna_2.split("")
        while(i<dna1.length){
            count+= (dna1[i] != dna2[i]) ? 1:0
            i+=1
        }
    }
    return count
}

console.log(my_hamming_dna("",""));
