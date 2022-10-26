import "./NavBar.css";


export default function NavBar() {
  return (
    <div className="navbar">
      <div  className="container">
        <div  className="logo">
          <img src="img/9camp.png" alt="Logo 9CAMP" />
        </div>
        <div  className="menu">
          <div  className="botao">
            <img src="img/add.png" alt="Botão Adicionar" />
          </div>
          <div  className="botao">
            <img src="img/logout.png" alt="Botão Logout" />
          </div>
        </div>
      </div>
    </div>
  );
}
