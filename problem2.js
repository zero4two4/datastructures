
//create a procedure that calculates in the variable ps, the dot scalar product of v1 & v2
// check if the length of the two vectors are equal, if not throw an error
// create a new array to store values
//multiply every index in the array v1 with the equavalent index in v2 and store in new array
// add the values in the new array and store the result in ps
function dot_product(v1, v2){
    const array3 = []; 
    if(v1.length !== v2.length){
        throw new Error('make sure the length of both vectors are equal');
    }
    else{
        for (i=0; i < v1.length; i++){
            array3.push(v1[i] * v2[i]);
        }
    }
    const ps = array3.reduce((acc, current) => acc + current, 0);
    return ps;
}

//Algorithm to determine whether two vectors are orthogonal

//create a function to deteremine whether a pair of vectors are orthogonal
//call the 'dot_product' procedure and use pair of vectors as argument
//assign the return value of the procedure to the variable dotProduct
//if the value of ps now in dotProduct is equal to zero print 'the two pairs are orthogonal'
//if not print 'the two pair are not orthogonal'

const orthogonal = (v1, v2) => {
  const dotProduct = dot_product(v1, v2);
  if (dotProduct === 0) {
    return 'The vector pair is orthogonal!!';
  } else {
    return 'The vector pair is NOT orthogonal';
  }
};

let c1 = [2,4,6];
let c2 = [1,2,3];
const d1 = [1, 0, 0];
const d2 = [0, 1, 0];

orthogonal(d1, d2);