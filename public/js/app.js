console.log('client side js is loaded')

fetch('http://puzzle.mead.io/puzzle').then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')
const search = document.querySelector('#search')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e) => {
    e.preventDefault(); 
    messageOne.textContent = 'Loading...';
    fetch(`/weather?address=${search.value}`).then((res) => {
        res.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error;
                messageTwo.textContent = '';
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }

        })
    })
})