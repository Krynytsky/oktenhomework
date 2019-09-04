// let students = ["Nik", "Max","Sem","Peeter","John"];
// students[7]= "devid";
//
//
// students.forEach(function(element) {
//     console.log(element);
// });
//
// console.log('for');
// for ( let i=0; i<students.length-1; ++i){
//     console.log(students[i]);
// }
// let i = 0;
// while ( i < students.length){
//     console.log(students[i]);
//     i++;
// }


// console.log('doWhile');
// i = 0;
// do {
//     console.log(students[i]);
//     i++;
// } while ( i < students.length);

// let matrixRow = [];
// let matrixColl = [];
//  for (let i = 0; i < 10; ++i){
//     for( let j = 0; j < 10; ++j){
//         matrix.
//     }
//  }
// for
function Figure ( _name, _color, _size){
    this.name = _name;
    this.color = _color;
    this.size = _size;


    this.outputPoperty = function(){
        console.log(this.name + " "+ this.color +" "+ this.size);
    }

    Figure.prototype.example = function(){
        console.log("this is"+" "+ this.name+" "+"year");
    }
}

let Square = new Figure ("Square", "White", "21x40");

Square.example();
