var lists = document.getElementsByClassName("list")
var leftBox = document.getElementById("left")
const rightBox = document.getElementById("right")


for (list of lists){
    list.addEventListener("dragstart", function(element){
        let selected = element.target


        rightBox.addEventListener("dragover", function(element){
            element.preventDefault()

        })
        rightBox.addEventListener("drop", function(element){
            rightBox.appendChild(selected)
            selected = null

        })

        leftBox.addEventListener("dragover", function(element){
            element.preventDefault()

        })
        leftBox.addEventListener("drop", function(element){
            leftBox.appendChild(selected)
            selected = null
            
        })
    })
}