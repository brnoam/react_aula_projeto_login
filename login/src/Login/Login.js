import React from "react";
import "./Login.css";


export default function Login (){

    function mostrarMensagem (){
        alert(" O nome do usuário e/ou senha está inválido.")
    }

    return(
      <div>
         <form className= "form">
          
          

           <div>
                  <p className= "p1" >Member Login</p>
           </div>  

           <div>
               <img className="iconelogin" src="https://cdn-icons.flaticon.com/png/512/2337/premium/2337781.png?token=exp=1634594626~hmac=6e6a1149acb203d64d1062adb8b5ab05"/>
          </div>
              
          <div className="usuario">

             
              <input type="text" name= "username" placeholder="Nome do usuário"/>

          </div>
           
          
          <div className="senha">

              
              <input type="password" name= "senha" placeholder="Senha"/>

         </div>

         
           <button className="botao" onClick={()=> mostrarMensagem()}>LOGIN</button>
          <p className="esqueceu">Esqueceu sua senha ? <a target="_blank" href="http://google.com" >Clique aqui</a></p>
 
          

        </form>


         




    </div>
    )
}