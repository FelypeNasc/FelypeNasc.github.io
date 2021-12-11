function createElementInside(location, elementType, elementID, elementClass) {
    let elementCreated = document.createElement(elementType);
    if (elementID != undefined) {
        elementCreated.setAttribute("id", elementID);
    }
    if (elementClass != undefined) {
        elementCreated.setAttribute("class", elementClass);
    }
    document.querySelector(location).appendChild(elementCreated);
}

let orderCount = 0;

function sendForms() {
    let billTotal,
    selectedBread,
    selectedBurguer, 
    selectedSalad, 
    selectedCheese;
    
    function breadType() {
        let paoFrances = document.getElementById("bread-paoFrances");
        let paoAustraliano = document.getElementById("bread-paoAustraliano");
        let paoBrioche = document.getElementById("bread-paoBrioche");
    
        if (paoFrances.checked) {
            selectedBread = "Francês";
            billTotal = parseFloat(3.00);
        } else if (paoAustraliano.checked) {
            selectedBread = "Australiano";
            billTotal = parseFloat(8.00);
        } else if (paoBrioche.checked) {
            selectedBread = "Brioche";
            billTotal = parseFloat(6.00);
        }
    }
    breadType();

    function burguerType() {
        let burguerPicanha = document.getElementById("burguer-picanha");
        let burguerCostela = document.getElementById("burguer-costela");
        let burguerVegano = document.getElementById("burguer-vegano");
        
        if (burguerPicanha.checked) {
            selectedBurguer = "Picanha";
            billTotal += 13;
        } else if (burguerCostela.checked) {
            selectedBurguer = "Costela";
            billTotal += 10;
        } else if (burguerVegano.checked) {
            selectedBurguer = "Vegano";
            billTotal += 12;
        }
    }
    burguerType();

    function saladType() {
        let saladAlface = document.getElementById("salad-Alface");
        let saladTomate = document.getElementById("salad-Tomate");
        let saladaSem = document.getElementById("salad-sem");

        if (saladAlface.checked) {
            selectedSalad = "Alface";
            billTotal += 1.5;
        } else if (saladTomate.checked) {
            selectedSalad = "Tomate";
            billTotal += 1.5;

        } else if (saladaSem.checked) {
            selectedSalad = "Sem salada";
        }
    }
    saladType();


    function cheeseType() {
        let cheeseMussarela = document.getElementById("cheese-Mussarela");
        let cheesePrato = document.getElementById("cheese-Prato");
        let cheeseCheddar = document.getElementById("cheese-Cheddar"); 

        if (cheeseMussarela.checked) {
            selectedCheese = "Mussarela";
            billTotal += 3;
        } else if (cheesePrato.checked) {
            selectedCheese = "Prato";
            billTotal += 3;
        } else if (cheeseCheddar.checked) {
            selectedCheese = "Cheddar";
            billTotal += 5;
        }
    }
    cheeseType();

    orderCount += 1;

    //criando o container das ordens
    function createOrderContainer () {
        createElementInside("#ordersContainer", "div", "order"+orderCount);
        createElementInside("#order"+orderCount, "h4", "orderH4"+orderCount);
        document.querySelector("#orderH4"+orderCount).innerHTML = "Pedido nº"+orderCount;

        // linha do pão
        createElementInside("#order"+orderCount, "p", "breadP"+orderCount);
        document.querySelector("#breadP"+orderCount).innerHTML = "Pão: ";
        createElementInside("#breadP"+orderCount, "span", "breadSpan"+orderCount);
        document.querySelector("#breadSpan"+orderCount).innerHTML = selectedBread;

        // linha do hamburguer
        createElementInside("#order"+orderCount, "p", "hamburguerP"+orderCount);
        document.querySelector("#hamburguerP"+orderCount).innerHTML = "Hamburguer: ";
        createElementInside("#hamburguerP"+orderCount, "span", "hamburguerSpan"+orderCount);
        document.querySelector("#hamburguerSpan"+orderCount).innerHTML = selectedBurguer;

        // linha da salada
        createElementInside("#order"+orderCount, "p", "saladP"+orderCount);
        document.querySelector("#saladP"+orderCount).innerHTML = "Salada: ";
        createElementInside("#saladP"+orderCount, "span", "saladSpan"+orderCount);
        document.querySelector("#saladSpan"+orderCount).innerHTML = selectedSalad;

        // linha do queijo
        createElementInside("#order"+orderCount, "p", "cheeseP"+orderCount);
        document.querySelector("#cheeseP"+orderCount).innerHTML = "Queijo: ";
        createElementInside("#cheeseP"+orderCount, "span", "cheeseSpan"+orderCount);
        document.querySelector("#cheeseSpan"+orderCount).innerHTML = selectedCheese;

        //linha do total
        createElementInside("#order"+orderCount, "p", "orderTotal"+orderCount, "orderTotal");
        document.querySelector("#orderTotal"+orderCount).innerHTML = "Total: R$"+billTotal.toFixed(2);

    }
    createOrderContainer();
}

