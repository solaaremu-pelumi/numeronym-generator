let btn = document.getElementById("generate-numeronym")
let input = document.getElementById("word-input")
let result_grid = document.getElementById("result-grid")
btn.disabled = true

input.addEventListener("input", stateHandle)
input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        generateNumeronym()
    }
})

function generateNumeronym() {
    let word = input.value
    console.log(word)
    input.value = ''
    let first = word[0]
    let last = word[word.length-1]
    let result = first + (word.length - 2) + last
    result_grid.innerHTML = result
    btn.disabled = true
}

function stateHandle(event) {
    console.log("firing")
    if (input.value === '') {
        btn.disabled = true;
        result_grid.innerHTML = ""
    } else {
        btn.disabled = false
    }
}