
import { strictEqual } from 'assert';

function capitalizeFirstLetters(input){
    const output= output
    if (input = ''){
        
        return ''
    }
    else{
for(let word in input){

                    return word[0].toUpperCase()+word.slice(1);
    }}
}



// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

assert.strictEqual(capitalizeFirstLetters('resiste prouve que tu existe'), 'Resiste Prouve Que Tu Existe');


// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');


// Check that it works for an empty string

assert.strictEqual(capitalizeFirstLetters(''), '');
