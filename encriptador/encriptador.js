        var input = document.querySelector("textarea#input");

        var encriptarBoton = document.querySelector("button#encriptar");
        var desencriptarBoton = document.querySelector("button#desencriptar");
        var output = document.querySelector("textarea#output")

        var copiarBoton = document.querySelector("button#copiar")

        desencriptarBoton.onclick = desencriptar;
        encriptarBoton.onclick = encriptar;
        copiarBoton.onclick = copiar;

        input.onfocus = function (){
            if (this.value == "Ingrese el texto aquí"){
                this.value = "";
            }

        }

        function encriptar(){

            var cadena = input.value;

            document.getElementById("rectanguloSinMensaje").style.display = "none"


            var nuevoTexto = cadena.replace(/e/gi, "enter").replace(/i/gi, "imes")
                .replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");


            output.textContent = nuevoTexto;


        }

        function desencriptar(){

            document.getElementById("rectanguloSinMensaje").style.display = "none"
            var cadena = input.value;
            var nuevoTexto = cadena.replace(/enter/g,"e" ).replace(/imes/g, "i")
                .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");


            output.textContent = nuevoTexto;
        }

        function copiar(){

            var texto = document.getElementById("output");

            texto.select();
            document.execCommand("copy");
        }


