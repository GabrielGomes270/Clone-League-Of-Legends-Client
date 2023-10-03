import "./App.css";
import zedwallp from "./Icons/zedwallp.png";
import riotlogo from "./Icons/logo.png";

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <img src={riotlogo} alt="Riot Logo"></img>
        <h1>Fazer login</h1>
        <div className="input-container-usuario">
          <input type="text" class="inputText" required />
          <span class="floating-label">Nome de Usuário</span>
        </div>
        <div className="input-container-senha">
          <input type="text" class="inputText" required />
          <span class="floating-label">Senha</span>
        </div>
      </div>
      <div className="container-image">
        <img src={zedwallp} alt="Zed Wallpaper"></img>
      </div>
    </div>
  );
}

export default App;
