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

function sendForms () {
    // variables
    let nome = document.querySelector("#formsName").value;
    let sobrenome = document.querySelector("#formsSurname").value;
    let email = document.querySelector("#formsEmail").value;
    let telefone = document.querySelector("#formsPhone").value;
    let comentario = document.querySelector("#formsComment").value;

    // creating elements
    createElementInside("#destinationContainer", "p", "para1");
    createElementInside("#destinationContainer", "p", "para2");
    createElementInside("#destinationContainer", "p", "para3");
    createElementInside("#destinationContainer", "p", "para4");

    document.querySelector("#para1").innerHTML = "Nome do cliente: ";
    document.querySelector("#para2").innerHTML = "Email: ";
    document.querySelector("#para3").innerHTML = "Telefone: ";
    document.querySelector("#para4").innerHTML = "Comentário: ";

    createElementInside("#para1", "span", "destinationName");
    createElementInside("#para2", "span", "destinationEmail");
    createElementInside("#para3", "span", "destinationPhone");
    createElementInside("#para4", "span", "destinationComments");

    document.querySelector("#destinationName").innerHTML = nome + " " + sobrenome
    document.querySelector("#destinationEmail").innerHTML = email
    document.querySelector("#destinationPhone").innerHTML = telefone
    document.querySelector("#destinationComments").innerHTML = comentario
}
