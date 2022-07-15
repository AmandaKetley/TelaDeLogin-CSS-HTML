function fazPost(url,body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        let data = JSON.parse(request.response)
        verificaUsuario(data)

        
    }
   return request.responseText
}

function verificaUsuario(data){
   if(data.existeUsuario == true & data.usuarioValido == false){
    alert("Usuario ou senha incorretos")
   }else if(data.existeUsuario == false & data.usuarioValido == false){
    alert("Usuario não encontrado")
   }else if(data.existeUsuario == true & data.usuarioValido == true){
    redirecionamentoParaHome()
   }
}

function logar(){
event.preventDefault()
let url = "http://localhost:8484/pessoa/verificaUsuario"
let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

if(usuario != "" & senha != ""){
    body={
        "email": usuario,
        "senha": senha
    }
     
    fazPost(url,body) 

} else{
    alert("Todos os campos precisam ser preenchidos")
}
}

function cadastrar(){
    event.preventDefault()
    let url = "http://localhost:8484/pessoa/cadastrar"
    let nome =  document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha2 = document.getElementById("senha2").value
    let senha = document.getElementById("senha").value

    if(nome != "" & email != "" & senha != "" & senha2 != ""){
        
        if(senha == senha2){
            body={
                "nome": nome,
                "email": email,
                "senha": senha
            }
    
            fazPost(url,body)
            redirecionamentoParaLogin()

        }else{
            alert("Senhas precisam ser iguais")
        }
    }else{
        alert("Todos os campos precisam ser preenchidos")
    }  
}

function redirecionamentoParaLogin(){
    alert("Cadastro feito com sucesso")
    window.location.replace("index.html")
}

function redirecionamentoParaHome(){
    window.location.replace("home.html")
}

