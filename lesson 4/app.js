
// let browser = "apple";

// switch (browser) {
//   case "apple":
//     console.log("You've got the apple");
//     break;

//   case "cherry":
//   case "apple":
//     console.log("you have got two apples");
//     break;

//   default:
//     console.log("We hope ...");
// }
// Ex 2 ------

// let a = 1;

// if (a == 0) {
//   console.log(0);
// }

// if (a == 1) {
//   console.log(1);
// }

// if (a == 2 || a == 3) {
//   console.log("2,3");
// }

// Ex 3 ------ Find Prime Numbers ------

// let num = 20;

// for (let i = 1; i <= num; i++) {
//   let check = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       check = 1;
//       break;
//     }
//   }

//   if (i > 1 && check == 0) {
//     console.log(i);
//   }
// }

// Ex 4 ------ Multiplication table ------

// for (let i = 2; i <= 9; i++) {
//   console.log("===========");
//   console.log(`${i} Karra`);
//   console.log("===========");

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Extra

//  N va K o'zgaruvchilar berilgan. K sonni N marta chiqarish lozim

//   let n = 10
//   let k = 5

//   if (n > 0 && k > 0) {
//       for (let i = 1; i <= n; i++) {
//           console.log(k);
//       }
//   } else {
//       alert('Faqat son kiriting !!!')
//   }