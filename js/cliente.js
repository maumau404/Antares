const enderecoForm = document.querySelector(".form-body")
const cepInput = document.querySelector("#cep")
const ruaInput = document.querySelector("#rua")
const bairroInput = document.querySelector("#bairro")
const ruaInput = document.querySelector("#rua")
const cidadeInput = document.querySelector("#cidade")
const estadoInput = document.querySelector("#estado")

cepInput.addEventListener("keypress", (é) => {


const onlyNumbers = /[0-9]/;
const tecla = String.fromCharCode(e.keyCode);

if(onlyNumbers.test(tecla)){
    e.preventDefault();
    return;
}


});

cepInput.addEventListener("keyup", (e) =>{

const inputValue = e.target.value;
if (inputValue.length === 8){
    getEndereco(InputValue);
   //fazer alguma coisa - rodar a aplicaçao
}

});

const getEndereco = async (cep) => {
    const apiUrl = `https://viacep.com.br/ws/01001000/${cep}/json/`;
    const response = await fetch(apiURL)
    const data = await response.json();
    console.log(data);

}



