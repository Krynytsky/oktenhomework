let min = prompt("Pleace anter the number in the range 0-59:");
//
// if (min>=0 && min<14) {
//     console.log(min, " situated in the first quarter" );
// }
//     else if (min>=15 && min<29) {
//         console.log(min,"situated in the second quarter");
//     }
//         else if (min>=30 && min<44) {
//         console.log(min," situated in the third quarter");
//     }
//             else if (min>=45 && min<){
//         console.log( min, " situated in the fourth quarter");
//    }
// else{
//     console.log("pleace, enter the number in the range 0-59");
// }

switch (min>0) {
    case min <= 15:
        console.log(min, " situated in the first quarter");
        break;
    case min <= 30:
        console.log(min, "situated in the second quarter");
        break;
    case min <= 45:
        console.log(min, " situated in the third quarter");
        break;
    case min < 60:
        console.log(min, " situated in the fourth quarter");
        break;
    default:
        console.log("pleace, enter the number in the range 0-59");
        break;

}