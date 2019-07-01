// const bandsState = [{
//     title: 'Radiohead',
//     striked: false
// }, {
//     title: 'Porcupine Tree',
//     striked: true
// }]

let bandsState = []

const render = (state) => {
    return state.reduce((acc, todo, index) => {
        const classString = todo.striked ? 'class = "striked"': ''
        const sc = todo.striked ? 'style= "text-decoration: line-through"' : ''
        return acc + `<li ${classString} ${sc} data-index="${index}" > ${todo.title} </li>`
    }, '')
}

const paint = function () {
    const html = render(bandsState)
    document.getElementById('id1').innerHTML = html
}

document.getElementById('add').addEventListener('click', e => {
    const inputText = document.getElementById('input').value
    bandsState.push({
        title: inputText,
        striked: false
    })
    paint()
})

document.getElementById('id1').addEventListener('click', e => {
    const index = e.target.dataset.index
    bandsState[index].striked = !bandsState[index].striked
    paint()
})

document.getElementById('clear').addEventListener('click', e => {
    bandsState = bandsState.filter(band => !band.striked)
    paint()
})