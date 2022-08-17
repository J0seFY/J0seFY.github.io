

    var cadena ="fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober";

    var nuevoTexto = cadena.replace(/e/gi, "enter").replace(/i/gi, "imes")
        .replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    var desencriptar  = cadena.replace(/enter/g,"e" ).replace(/imes/g, "i")
        .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    console.log(desencriptar);


