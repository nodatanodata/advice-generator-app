let api = '	https://api.adviceslip.com/advice'
let advice = document.querySelector('#advice');
let id = document.querySelector('#id')
let button = document.querySelector('#button');
async function fetchData(){
    let responce = await fetch(api);
    let data = await responce.json();
    advice.innerText = data.slip.advice;
    id.innerText = data.slip.id;
    console.log(advice, id)
}
fetchData()
button.addEventListener('click', fetchData)
