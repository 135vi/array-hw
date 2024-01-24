// №1
// let shoppList = [
//     {name: 'milk', count: 1, bought: true,},
//     {name: 'cheese', count: 1, bought: true,},
//     {name: 'eggs', count: 10, bought: true,},
//     {name: 'sugar', count: 4, bought: false,},
//     {name: 'tomato', count: 8, bought: false,},
//     {name: 'butter', count: 1, bought: false,},
// ]
// let sortByFalse = (a, b) => a.bought > b.bought ? 1 : -1;
// // shoppList = shoppList.concat([
// //     {name: 'apple', count: 4, bought: false},
// //     {name: 'chocolate', count: 2, bought: true},
// // ])
// shoppList.sort(sortByFalse);
// console.log(shoppList)

// №2
// let shoppList = [
//     {name: 'milk', count: 1, price: 75,},
//     {name: 'cheese', count: 1, price: 150,},
//     {name: 'eggs', count: 10, price: 10,},
//     {name: 'sugar', count: 4, price: 15,},
//     {name: 'butter', count: 2, price: 120,},
// ]
// console.log(shoppList);
// function totalAmount(arr) {
//     let total = 0;
//     for(item of shoppList) {
//         total += item.price * item.count;
//     }
//     console.log(`Total amount: ${total}`);
// }
// totalAmount(arr)
// const maxCount = [1, 1, 10, 4, 2];
// const maxValue = Math.max(...maxCount);
// console.log(`Max count: ${maxValue}`);
// function averageCost(arr) {
//     let average = 0;
//     for(item of shoppList) {
//         average += (item.price * item.count) / 5;
//     }
//     console.log(`Average cost: ${average}`);
// }
// averageCost(arr)

//№3
// document.write('<p>Array-hw</p>')
// document.write('<style>p { color: green; text-align: center; border: 1px solid green; } </style>');

// №4
// const classRoom = [
//     { 
//         name: "105", 
//         places: "24", 
//         faculty: "Software" 
//     },
//     { 
//         name: "112", 
//         places: "12", 
//         faculty: "Cybernetics" 
//     },
//     { 
//         name: "113", 
//         places: "20", 
//         faculty: "Techical Cybernetics" 
//     },
//     { 
//         name: "118", 
//         places: "14", 
//         faculty: "Engineering" 
//     },
//     { 
//         name: "117", 
//         places: "25", 
//         faculty: "Economic cybernetics" 
//     },
//     { 
//         name: "115", 
//         places: "20", 
//         faculty: "Software" 
//     },
//     { 
//         name: "100", 
//         places: "15", 
//         faculty: "Languages" 
//     },
//     { 
//         name: "110", 
//         places: "10", 
//         faculty: "Techical Cybernetics" 
//     },
//     { 
//         name: "120", 
//         places: "28", 
//         faculty: "Software" 
//     },
// ];
// const group = {
//     name: "SW-2019",
//     count: "25",
//     faculty: "Software",
// };
// const showClassRoom = (arr = []) => {
//     let classRooms = [];
//     for (let i of arr) {
//         classRooms.push(i.name);
//     }
//     return `All rooms: ${classRooms.join('; ')}.`;
// }
// console.log(showClassRoom(classRoom));
// const showFacultyRooms = (arr = [], faculty = '') => {
//     let facultyRooms = [];
//     for (const i of arr) {
//         if (i.faculty.toLowerCase() === faculty.toLowerCase()) {
//             facultyRooms.push(i.name);
//         }
//     }
//     return `All rooms for "${faculty}" faculty: ${facultyRooms.join('; ')}.`;
// }
// console.log(showFacultyRooms(classRoom, 'Software'));
// const showGroupRooms = (arr = [], group = {}) => {
//     let groupRooms = [];
//     for (const i of arr) {
//         if (i.places >= group.count) {
//             groupRooms.push(i.name);
//         }
//     }
//     return `All rooms for "${group.name}": ${groupRooms.join('; ')}`;  
// }
// console.log(showGroupRooms(classRoom, group));
// const arrSortPlace = (arr = []) => {
//     let arr1 = [...arr];
//     arr1.sort((a, b) => a.places - b.places);
//     return arr1;
// };
// const arrSortName = (arr = []) => {
//     let arr2 = [...arr];
//     arr2.sort( (a, b) => a.name - b.name );
//     return arr2;
// };                  
// console.log(arrSortName(classRoom));
// console.log(arrSortPlace(classRoom));