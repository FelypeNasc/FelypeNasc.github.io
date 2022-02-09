const apiURL = "https://economia.awesomeapi.com.br/json/" // link da api https://docs.awesomeapi.com.br/api-de-moedas

$(document).ready(() => {
    $.ajax({url:`${apiURL}all`})
        .done((data) => {
            Object.entries(data).forEach((currency) => {
                $('#currency-select-from').append(`<option>${currency[0]}</option>`);
            }) // adiciona ao select as moedas disponíveis na API
            $('#currency-select-from').val("USD");
            $.ajax({ url: `${apiURL}USD` })
                .done((data) => {
                    const currencyFrom = JSON.stringify(data[0].code).replace(/"/g, '');
                    const currencyToValue = parseFloat(JSON.stringify(data[0].bid).replace(/"/g, ''));
                    $('#code').html(` 1 ${currencyFrom}`);
                    $('#codein').html(`${currencyToValue.toFixed(2).replace(".", ",")} BRL`);
                })
        })
});

$("#currency-select-from").on('change', () => {
    const selectedCurrency = $('#currency-select-from').find(":selected").text();
    $.ajax({ url: `${apiURL}${selectedCurrency}` })
        .done((data) => {
            const currencyFrom = JSON.stringify(data[0].code).replace(/"/g, '');
            const currencyToValue = parseFloat(JSON.stringify(data[0].bid).replace(/"/g, ''));
            $('#code').html(` 1 ${currencyFrom}`);
            $('#codein').html(`${currencyToValue.toFixed(2).replace(".", ",")} BRL`);
        })
})

$("#send-button").on('click', () => {
    $('#tbody').html('')
    const selectedCurrency = $('#currency-select-from').find(":selected").text();
    const initialDate = new Date($('#date-start').val());
    const finalDate = new Date($('#date-final').val());
    let currDate = initialDate

    function addToTable(data) { // adicionar dados a tabela
        const currency = JSON.stringify(data[0].code).split('/')[0].replace(/"/g, '');
        const dayValue = JSON.stringify(data[0].bid).replace(/"/g, '');
        const minVal = JSON.stringify(data[0].low).replace(/"/g, '');
        const maxVal = JSON.stringify(data[0].high).replace(/"/g, '');
        const variation = JSON.stringify(data[0].pctChange).replace(/"/g, '');
        const date = JSON.stringify(data[0].create_date).replace(/"/g, '');
        $('#tbody').append(`        
        <tr>
            <td>${currency}</td>
            <td>R$${dayValue}</td>
            <td style="color: #ff5d5d;">R$${minVal}</td>
            <td style="color: #36ca62;">R$${maxVal}</td>
            <td>${variation}%</td>
            <td>${date}</td>
        </tr>
        `)
    }
        
    while(currDate <= finalDate){ // a API não tem um método para passar o valor final de cada dia, com isso optei por fazer uma requisição pra cada dia mesmo sabendo da possibilidade de overload da API
        const initialDateParse = currDate.toISOString().split('T')[0].replaceAll('-','');       
        $.ajax({url: `${apiURL}${selectedCurrency}?start_date=${initialDateParse}&end_date=${initialDateParse}`})
        .done((data) => {
            addToTable(data) 
        });
        currDate.setDate(currDate.getDate() + 1) // adiciona mais 1 dia
    }   
})
