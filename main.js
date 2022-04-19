ScrollReveal().reveal('.Proyectos_Presentacion');
ScrollReveal().reveal('.contenedor_formulario', {delay: 500});
ScrollReveal().reveal('.Proyects', {delay: 500});
ScrollReveal().reveal('footer', {delay: 500});

/**var inputs = document.getElementsByClassName('Formulario_Contacto');

for (var i = 1; i <= inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        }
    })
}**/

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:trimetriastudio@gmail.com?subject=${form.get('name')}{form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}
