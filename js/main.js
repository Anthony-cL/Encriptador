// Función para encriptar el texto

function encriptar() {
    const texto = document.getElementById("texto").value;
    const textoEncriptado = encriptarTexto(texto);
    document.getElementById("texto-encriptado").textContent = textoEncriptado;
  }
  
  // Función para desencriptar el texto

  function desencriptar() {
    const textoEncriptado = document.getElementById("texto-encriptado").textContent;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.getElementById("texto-encriptado").textContent = textoDesencriptado;
    document.getElementById("texto").value = textoDesencriptado;
  }
  
  // Función para copiar el texto al portapapeles

  function copiarTexto() {
    const textoEncriptado = document.getElementById("texto-encriptado").textContent;
    navigator.clipboard.writeText(textoEncriptado)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  }
  
  // Función para encriptar el texto según las reglas

  function encriptarTexto(texto) {
    let textoEncriptado = texto.toLowerCase();
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado;
  }
  
  // Función para desencriptar el texto según las reglas

  function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = textoEncriptado;
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    return textoDesencriptado;
  }
  
  // Asignar evento al hacer clic en el h3 para copiar el texto
  
  document.getElementById("texto-encriptado").addEventListener("click", copiarTexto);