const listaUsuario = []
class Usuario {
    constructor (nombre, apellido, edad, email, clave){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.email = email
        this.clave = clave
    }
}

let usuario = new Usuario("Solid", "Snake", 42, "metalgear@gmail.com", "lalilulelo")
listaUsuario.push(usuario)

usuario = new Usuario("Sam", "Porter", 40, "deathstranding@gmail.com", "Luden")
listaUsuario.push(usuario)

usuario = new Usuario("Dante", "Sparda", 45, "dmc@gmail.com", "Nero")
listaUsuario.push(usuario)

usuario = new Usuario("Sebastian", "Castellanos", 38, "theevilwithin@gmail.com", "Lily")
listaUsuario.push(usuario)

do {
    choice = prompt("¿Ya posee usuario para ingresar? De ser así ingrese el número 1.\n Caso contrario, para proceder al registro ingrese el número 2.")
    if (choice == 1 ){
        let user = login()
        alert("Bienvenido " + user.nombre + " " + user.apellido + ".\nSu edad es " + user.edad + ". \nSu usario es " + user.email + " y su clave... ¡Eso no se puede mostrar!")
    } else if (choice == 2){
        registro()
    }else{
        alert("La opción ingresada no es correcta. Vuelva a inenarlo")
    }    
} while (choice != 1);


function login() {

    let tries = 3

    do{
        let loginOk = false

        correo = prompt("Favor de ingresar su correo.")
        clave = prompt("Favor de ingresar su clave.")

        listaUsuario.forEach(element => {
            if (correo.toLowerCase() == element.email.toLowerCase()){
                if(clave == element.clave){
                    loginOk = true
                }
            }
        });
    
        if (loginOk) {
            alert("Inicio sesion correctamente.")
            for (let i = 0; i < listaUsuario.length; i++) {
                if (correo.toLowerCase() == listaUsuario[i].email.toLowerCase()){
                    return listaUsuario[i]
                }
            }
            break
        }else{
            tries-=1
            alert("Los datos ingresados no son correctos favor de volver a intentar. (" + tries + ")")
        }
    }while(tries > 0 )

    if (tries == 0 ) {
        alert("Por motivos de seguridad no se puede seguir intentando. Favor de recargar la pagina y volver a intentar.")
        exit
    }
}

function registro() {
    let correo = prompt("Favor de ingresar su correo.")
    let correoExist = false
    listaUsuario.forEach(element => {
        if (correo.toLowerCase() == element.email.toLowerCase()){
            correoExist = true
        }
    });
    if (correoExist) {
        alert("El correo ingresado ya se encuentra registrado.\n Favor de probar ingresar o utilizar otro correo.")
        exit
    }
    let pwMatch = false
    let clave 
    let repetirClave
    do {
        clave = prompt("Favor de ingresar una clave.")
        repetirClave = prompt("Favor de ingresar nuevamente la clave.")
        if (clave == repetirClave) {
            pwMatch = true
        } else {
            alert ("Las claves no coinciden favor de volver a intentar")
        }
    } while (!pwMatch);

    let nombre = prompt("Favor de ingresar su nombre.")
    let apellido = prompt("Favor de ingresar su apellido.")
    let continuar = true
    let edad
    do {
        edad = prompt("Favor de ingresar su edad.")
        if(isNaN(edad) || edad < 5 || edad > 105){
            alert("Favor de ingresar una edad valida.")
            continuar = true
        }else{
            continuar = false
        }
    } while (continuar);
    
    usuario = new Usuario (nombre, apellido, edad, correo, clave)
    listaUsuario.push(usuario)

    alert("Usuario creado correctamente.")

}
