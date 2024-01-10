if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href="file:///C:/Users/berna/OneDrive/Área%20de%20Trabalho/saude%20site/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Bem Vindo(a) ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "file:///C:/Users/berna/OneDrive/Área%20de%20Trabalho/saude%20site/signin.html";
  }