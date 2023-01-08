var operator;

// criando função para calcular
function calculatePrice() {
    // pegando valor selecionado do select
    let selectedPayment = Number(document.getElementById("pagamentos").value)
    // pegando valor do input com o Id (productPrice)
    let productPrice = Number(document.getElementById("productPrice").value)
    // adicionando span que mostrará o resultado a variavel priceResult
    let priceResult = document.getElementById("priceResult")
    
    let percentual = productPrice * selectedPayment / 100
    
    if(operator == "menos") {
        let subTaxa = productPrice -= percentual
        priceResult.innerHTML = "Preço tirando a taxa: R$" + subTaxa.toFixed(2)
    } else {
        let somaTaxa = productPrice += percentual
        priceResult.innerHTML = "Preço com a taxa: R$" + somaTaxa.toFixed(2)
    }

}

function changeOperator() {
        // pegar icone
        let icon = document.getElementById("icone")

        // verificando se tem a classe "fa-plus"
        let havePlus = icon.classList.contains("fa-plus")

        
        if(havePlus) {
            icon.classList.add("fa-minus")
            icon.classList.remove("fa-plus")
            operator = "menos";
        } else {
            icon.classList.add("fa-plus")
            icon.classList.remove("fa-minus")
            operator = "mais";
        }
}

setInterval(() => {
    calculatePrice()
}, 100);