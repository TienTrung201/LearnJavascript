
/*Array methods:
    forEach
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'ruby',
        coin: 250
    },
    {
        id: 3,
        name: 'php',
        coin: 250
    },
    {
        id: 4,
        name: 'react',
        coin: 250
    },
    {
        id: 5,
        name: 'c',
        coin: 250

    }
]
//   kiểm tra  chỉ cần 1 thằng sai đầu tiên dùng luôn
var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});
console.log(isFree);
// some() chỉ cần 1 cái đúng thì dừng thường kết hợp với filter

// find() trả về 1 phần tử duy nhất đầu tiên thỏa mãn điều kiện 
var course = courses.find(function (course, index) {
    return course.name === 'Ruby';
})

// filter trả về mảng tất cả thỏa mãn điều kiện như find()
// Map() trả vể mảng mới với kết quả mình yêu cầu
function courseHandler(course, index) {
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc:${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses,
    }
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

function courseHandler(course, index) {
    // console.log(course);
    return `<h2>${course.name}</h2>`;
}
var newCourses = courses.map(courseHandler);
console.log(newCourses.join(''));

var totalCoin = courses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);// initial valueI
console.log(totalCoin);


// include
//neu include dữ liệu rỗng thì trả về true thì lấy toàn bộ dữ liệu

var title = 'Responsive web design';
// console.log(title.includes('web'));//trả về true fale
// console.log(title.includes('web', 2));//tim kiem tu vi tri 2

var courses = ['Javascript', 'PHP', 'Dart'];
// 3+-1= vị trí 2
// console.log(courses.includes('Javascript', -1));

var mangmoi = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'ruby',
        coin: 250
    },
    {
        id: 3,
        name: 'php',
        coin: 250
    },
    {
        id: 4,
        name: 'react',
        coin: 250
    },
    {
        id: 5,
        name: 'c',
        coin: 250

    }
]
var coursess = mangmoi.reduce(function (accumulator, currentValue) {
    // console.log({...accumulator})
    return {...accumulator,[currentValue.name]:currentValue};
}, {});// initial valueI
console.log(coursess);
// {Javascript: {…}, ruby: {…}, php: {…}, react: {…}, c: {…}}
// Javascript: {id: 1, name: 'Javascript', coin: 250}
// c: {id: 5, name: 'c', coin: 250}
// php: {id: 3, name: 'php', coin: 250}
// react: {id: 4, name: 'react', coin: 250}
// ruby: {id: 2, name: 'ruby', coin: 250}
// [[Prototype]]: Object
Object.values(coursess)
console.log(Object.values(coursess))
var ArrayNew=Object.values(coursess).reduce((accumulator,currentValue)=>{
    return [...accumulator,currentValue]
},[])
console.log(ArrayNew);
