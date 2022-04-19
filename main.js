ScrollReveal().reveal('.Proyectos_Presentacion');
ScrollReveal().reveal('.contenedor_formulario', {delay: 500});
ScrollReveal().reveal('.Proyects', {delay: 500});
ScrollReveal().reveal('footer', {delay: 500});

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
  event.preventDefault()  
  const form= new FormData(this)
  const response= await fetch(this.action, {
      method: this.method,
      body: form,
      header: {
          'Accept': 'application/json'
      }
  })
  if (response.ok){
        this.reset()
        alert('Gracias por contactarnos, te escribiremos pronto.')
  }
}