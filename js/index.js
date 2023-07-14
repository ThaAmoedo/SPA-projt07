

//Um exemplo: aqui eu estou dirigindo o carro
import { Router } from "./router.js"


const router = new Router()

router.add('/', "/pages/home.html")
router.add('/about', "/pages/about.html")
router.add("/contato", "/pages/contato.html")
router.add('404', "/pages/404.html")




router.handle()

 window.onpopstate = () => router.handle() 
//eu poderia usar tb o addEventListener em vez do onpopstate

window.route = () => router.route()
//na minha window, route vai disparar uma função chamata route 
/*
Eu podeia colocar direto no htlm assim:
<a href="/about" onclick="window.route()"> Sobre </a>

mais deixei aqui mesmo
*/









//mapeamento da minha rota
/*const routes = {   // criando um objt
    
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contato": "/pages/contato.html",
    404: "/pages/404.html",
}

    /* ali em cima está entre "" pois ele não aceita só / e o nome
    Para acessar:
    console.log(routes["/about"])*/



         