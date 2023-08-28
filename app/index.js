const button = document.getElementById('bt-show-modal')
const modal =  document.querySelector('component-modal')
console.log(button)

button.addEventListener('click', ()=>{
    modal.style.display = 'block'
})