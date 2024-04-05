const button_one = document.getElementById('button-one')
let output = document.querySelector('.output')

button_one.addEventListener('click', function Clicker() {
    output.innerText = 'Ты нажмал на кнопку';
    setTimeout(() => {
        output.innerText = 'No orders';
    }, 1000);
})