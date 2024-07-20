const moreId = JSON.parse(window.localStorage.getItem("moreId"))
let studentArr = JSON.parse(window.localStorage.getItem("studentsList"))


const findSingleData = studentArr.find(item => item.id == moreId)
