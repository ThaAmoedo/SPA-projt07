
//aqui eu estou criando toda a mecanica do carro
export class Router{
    routes = {}
   
    add(routeName, page){
        this.routes[routeName] = page
    }

 route(event){
        event = event || window.event
        event.preventDefault() // não redirecioar (evite o padrão)
         
        //histórico dele    //State-Estado   Push-Coloque = Coloque o estado no histórico
        window.history.pushState({}, "", event.target.href ) //quem desparou o target é o "a" (evento clicar,quem disparou ele? o "a" e ele tem a propriedade href, ent eu quero pegar e colocar no meu historico)
             //{}-Dados (nesse caso nn tenho nehum), ""- unused-String (nesse caso nn tenho nada para colocar ali), e no final a url que você quer colocar

        this.handle() //sempre que eu clicar ele vai executar o route e vai fazer o handle
     }

   handle(){ //handle-manipular

        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html  //innerHTML - html interno
        })
            //window - contem tudo / locatin
        //const pathname = window.location.pathname

        //console.log(pathname)
     }


}

//export default new Router()