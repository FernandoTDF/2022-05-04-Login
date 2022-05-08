document.getElementById("text1").innerHTML = "Por favor ingrese el usuario: ";
document.getElementById("text2").innerHTML = "Por favor ingrese la clave: ";

let btnEvn = document.getElementById("boton");

btnEvn?.addEventListener("click", () => {
  let usuario: string = "Juan";
  let clave: string = "claveJuan";
  let userIngresado: string = dato1.value;
  let claveIngresada: string = dato2.value;
  if (usuario == userIngresado && clave == claveIngresada) {
    console.log("Bienvenido");
  } else {
    console.log("El usuario o la clave son incorrectos");
  }
});
