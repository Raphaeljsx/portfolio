import { useState } from "react";

export default function Form() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState(''); 

  return (
    <div className="bg-inherit flex flex-col">
      <h3 className="text-white text-2xl font-bold text-center mb-4 md:text-3xl">Ficou interessado? Entre em contato</h3>
      <form className="mt-10 flex flex-col" onSubmit={()=>{}}>
        <label className="text-white" htmlFor="nome">Nome</label>
        <input className="border-b-2 pb-2 bg-inherit text-white outline-none mt-2" name="nome" id="nome" type="text" placeholder="Entre com o seu nome" onChange={(e)=>{
          setNome(e.target.value);
        }} />
        <label className="text-white mt-5" htmlFor="email">Email</label>
        <input className="border-b-2 pb-2 bg-inherit text-white outline-none mt-2" name="email" id="email" type="text" placeholder="Entre com o seu email" onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
        <label className="text-white mt-5" htmlFor="mensagem">Mensagem</label>
        <textarea className="outline-none h-52 mt-2 p-2" name="mensagem" id="mensagem" onChange={(e) => {
          setMensagem(e.target.value);
        }}></textarea>
      </form>
      {console.log(nome,email,mensagem)}
    </div>
  );
}
