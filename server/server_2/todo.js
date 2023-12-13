let todoform = document.getElementById("todoform")
let list = document.getElementById("list")
todoform.addEventListener("submit", event => {
    event.preventDefault()

    let form = new FormData(event.target)
    let name = form.get("taskname")
    if (localStorage.getItem("todos")) {
        let todos = JSON.parse(localStorage.getItem("todos"))
        todos.push(name)
        localStorage.setItem("todos", JSON.stringify(todos))
    } else {
        localStorage.setItem("todos", JSON.stringify([name]))
    }
    document.getElementById('todoinput').value = ''
    document.location.reload()
})


document.addEventListener("DOMContentLoaded", () => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    for (const index in todos) {
        let pElement = document.createElement('p')
        pElement.addEventListener("click", () => {
            let copy = [...todos]
            copy.splice(index,1)
            localStorage.setItem("todos", JSON.stringify(copy))
            document.location.reload()

            
        })
        pElement.textContent = todos[index]

        list.appendChild(pElement)

    }
})