let elChangeImg = document.querySelector(".changeImgUrl")
let elRenderImg = document.querySelector(".render-img")
let StudentsArr = JSON.parse(window.localStorage.getItem("studentsList"))
let RenderStudents = document.querySelector(".table-body")
let elSearchInput = document.querySelector(".search-input")

elChangeImg.addEventListener("change", function(e) {
    elRenderImg.src = URL.createObjectURL(e.target.files[0])
})

const userData = JSON.parse(window.localStorage.getItem("loginedUser"))
console.log(userData);

let AdminName = document.querySelector(".adminname")
AdminName.textContent = userData.login


function clickLogout(){
    window.localStorage.clear()
    location.pathname = "/index.html"
}

function renderStudents(arr, list){
    list.innerHTML = ""
    arr.forEach(item => {
        let elTr = document.createElement("tr")
        elTr.className = "bg-white rounded-[10px]"
        elTr.innerHTML = `
        <td class="p-4" > 
        <img src=${item.imgURL} width="65" height="55" class="rounded-lg"/>
        </td>
        <td class="p-4">${item.name}</td>
        <td class="p-4">${item.email}</td>
        <td class="p-4">${item.phone}</td>
        <td class="p-4">${item.enrollnumber}</td>
        <td class="p-4">${item.date}</td>
        <td>
        <div class="flex gap-[15px] items-center">
        <button onclick="moreClick(${item.id})"><img src="./images/more.svg"></button>
        <button><img src="./images/update.svg"></button>
        <button onclick="delateStudent(${item.id})"><img src="./images/delate.svg"></button>
        </div>
        </td>
        `
        list.append(elTr)

    })
}
renderStudents(StudentsArr, RenderStudents)

elSearchInput.addEventListener("keyup", function(e){
    const value = e.target.value
    const filterList = StudentsArr.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    renderStudents(filterList, RenderStudents);
})

function SortClick(){
    const sorted = StudentsArr.sort((a, b) => a.name.localeCompare(b.name))
    renderStudents(sorted, RenderStudents)
}

function delateStudent(id){
    let delateFromIndex = StudentsArr.findIndex(item => item.id == id)
    StudentsArr.splice(delateFromIndex, 1)
    renderStudents(StudentsArr, RenderStudents)
    window.localStorage.setItem("studentsList", JSON.stringify(StudentsArr))
}

function moreClick(id){
     window.localStorage.setItem("moreId", JSON.stringify(id))
     location.pathname = "./more.html"
}