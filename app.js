 
 const students = 
[

'C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack',
"C2456 - Said Ozturk, Istanbul, Full-Stack",
]

console.log(students)
console.log(typeof students)
const tbody = document.querySelector("tbody")

const studentRender = function() {

    const everyStudent = students.map((every) => {

        // let newArr = []
        // newArr.push(every)
        const newArr = every.split(" ")
        console.log(newArr)
         //to get rid of from comma at the end of the 3rd and 4th element
        newArr[3] = newArr[3].slice(0, -1)
        newArr[4] = newArr[4].slice(0, -1)
        //adding table every element
        tbody.innerHTML +=

        `
        <tr class="tr">
                <td >${newArr[0]}</td>
                <td>${newArr[2]}</td>
                <td>${newArr[3]}</td>
                <td>${newArr[4]}</td>
                <td>${newArr[5]}</td>
        </tr>
        `
    })
}

studentRender()


// for (let i =0; i<students.length; i++) {
//     const eachStudent = students[i]
//     console.log(eachStudent)
//     console.log(typeof eachStudent)
// }

// students.forEach((e) => {
//     console.log(e)
//     console.log(typeof e)
// })


// const withoutDash = newArr.map((e) => {
//     console.log("hi",e)
// })