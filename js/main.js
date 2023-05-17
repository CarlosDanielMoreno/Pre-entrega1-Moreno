function tipoUsuario(){
    let usuario = prompt("¿Usted esta Registrado?");
    usuario = usuario.toLowerCase();
    while(usuario !=="si" && usuario !=="no"){
        alert("usuario invalido")
        usuario = prompt("¿Usted esta Registrado?")
        usuario = usuario.toLowerCase();
    }
    console.log("usuario:", usuario);
    return usuario;
}
    let usuario = tipoUsuario();

if (usuario == "si") {
    let genero = prompt("¿Que genero quieres ver? Acción , Ciencia ficcion , Deportes, Fantacia ");
    genero = genero.toLocaleLowerCase();
    while(genero !=="Acción" && genero !=="Ciencia ficcion" && genero !=="Deportes" && genero !=="Fantacia"){
        alert("Genero invalido")
        genero = prompt("¿Que genero quieres ver? Acción , Ciencia ficcion , Deportes, Fantacia ");
    }
    switch (genero) {
        case "Acción":
            alert("besto genero")
            break;
        case " Ciencia ficcion":
            alert("besto genero")
            break;
        case "Deportes":
            alert("besto genero")
            break;
            case "Fantacia":
            alert("besto genero")
            break;
    }
}
else if(usuario == "no"){
    alert("Necesitas Registrarse ");

}

