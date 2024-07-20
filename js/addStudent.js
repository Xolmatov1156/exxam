let elCreateForm = document.querySelector(".create-form")
let elChangeAvatar = document.querySelector(".change-avatar")
let elUploadImg = document.querySelector(".upload-img")

let studentsList = JSON.parse(window.localStorage.getItem("studentsList")) || []

elChangeAvatar.addEventListener("change", function(e){
    elUploadImg.src = URL.createObjectURL(e.target.files[0])
})

elCreateForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    const data = {
        id:studentsList.length ? studentsList[studentsList.length -1].id + 1 : 1,
        name:evt.target.name.value,
        email:evt.target.email.value,
        phone:evt.target.phone.value,
        enrollnumber:evt.target.enrollnumber.value,
        date:evt.target.date.value,
        imgURL:elUploadImg.src
    }
    studentsList.push(data)
    window.localStorage.setItem("studentsList", JSON.stringify(studentsList))
    setTimeout(() => {
        location.pathname = "/student.html"
    }, 800)
})