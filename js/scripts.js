function handleSubmit(e) {
    // Get the values of the form fields
    var nombre = document.getElementById("nombre").value;
    var  email= document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Do something with the data
    console.log(nombre);
    // <a href="mailto:gachi3k@gmail.com?subject=Asunto%20del%20correo&body=Cuerpo%20del%20correo%20aquí">
  
    // Prevent the form from submitting
    e.preventDefault();
  }
  
  // Add an event listener to the form submit button
  document.getElementById("contacto").submit.addEventListener("click", handleSubmit);






  // Obtener referencia al formulario
const formulario = document.getElementById('contacto');

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  // Hacer algo con los datos obtenidos
  console.log('Nombre:', nombre);
  console.log('Email:', email);

  // Restablecer el formulario
  formulario.reset();

}


<form id="myForm" method="post">
  <input type="text" name="name" />
  <input type="submit" value="Submit" />
</form>


function handleSubmit(e) {
  // Get the values of the form fields
  var name = document.getElementById("myForm").name.value;

  // Send the data to the server
  document.getElementById("myForm").submit();
}

// Add an event listener to the form submit button
document.getElementById("myForm").submit.addEventListener("click", handleSubmit);


