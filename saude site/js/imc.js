const form = document.querySelector('#formulario');
const resultado = document.querySelector('.resultado');

function resultadoFormulario(event) {

  event.preventDefault();

  const inputIdade = document.querySelector('#idade').value;
  const inputPeso = document.querySelector('#peso').value;
  const inputAltura = document.querySelector('#altura').value;
  var imagem = document.createElement('img');
  imagem.setAttribute('id', 'foto');

  const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false
);

  const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
  
   if (imcTotal >= 0.00 && imcTotal <= 18.49){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que você é muito magro. É recomendável procurar assistência médica.  </p>`
  }

   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Seu IMC é considerado "Normal".</p>`
  }

   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você está classificado como "Sobrepeso".</p>`
  }

   else if (imcTotal >= 30.00 && imcTotal <= 34.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obesidade nível 1". É recomendável procurar assistência médica.</p>`
  } 

  else if (imcTotal >= 35.00 && imcTotal <= 39.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obesidade nível 2". É recomendável procurar assistência médica.</p>`
  } 

   else if (imcTotal >= 40.00) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Urgente Sua classificação é "Obesidade nível 3", 
    em um terceiro grau de obesidade. É recomendável procurar assistência médica.</p>`
  }

   else {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> 0 </strong> - Há algo de errado`
  }

   
      if (inputIdade <= 12) 
    {
      setTimeout(function() {
        window.location.href = "file:///C:/Users/berna/OneDrive/%C3%81rea%20de%20Trabalho/ll/OMS._Altura_para_Idade__Meninas_._5-19_anos._Em_Percentil..pdf";
        window.location.href = "file:///C:/Users/berna/OneDrive/%C3%81rea%20de%20Trabalho/ll/OMS._Altura_para_Idade__Meninos_._5-19_anos._Em_Z_score..pdf";
      },4800);
}
}
form.addEventListener('submit', resultadoFormulario)
