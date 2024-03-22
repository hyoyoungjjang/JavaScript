/**
 *  JS => Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다
 * 
 */

// var i = 1000;
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log("i = " + i)

let i = 1000;
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log("i = " + i)