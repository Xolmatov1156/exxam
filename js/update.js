let upDateId = JSON.parse(window.localStorage.getItem("updateId"))
let StudentsArr = JSON.parse(window.localStorage.getItem("studentsList"))
let elUpdateForm = document.querySelector(".update-form")

let elName = document.querySelector(".name")
let elEnrollnumber = document.querySelector(".enrollnumber")
let elPhone = document.querySelector(".phone")
let elEmail = document.querySelector(".email")
let elDateadmission = document.querySelector(".dateadmission")
let elChangeimg = document.querySelector(".changeimg")

const getsingleObj = StudentsArr.find(item => item.id == upDateId)

elName.value = getsingleObj.name
elEnrollnumber.value = getsingleObj.enrollnumber
elPhone.value = getsingleObj.phone
elEmail.value = getsingleObj.email
elDateadmission.value = getsingleObj.date

elUpdateForm.addEventListener("submit", function(e){
    e.preventDefault()
    getsingleObj.name = elName.value 
    getsingleObj.enrollnumber = elEnrollnumber.value    
    getsingleObj.phone = elPhone.value  
    getsingleObj.email = elEmail.value  
    getsingleObj.date = elDateadmission.value

    window.localStorage.setItem("studentsList", JSON.stringify(StudentsArr))
        location.pathname = "student.html"
})