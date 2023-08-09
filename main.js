const form = document.getElementById('my-form');
const button = document.querySelector('.contact-now');

button.addEventListener('click', ()=> {
    form.style.display = 'block'
    form.style.margin = 'auto'

});

// button.addEventListener('click', function() {
//     if (form.style.display = 'flex') {
//         form.style.display = 'none'
//     }
    
// });