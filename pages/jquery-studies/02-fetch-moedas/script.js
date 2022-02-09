const apiURL = "https://economia.awesomeapi.com.br/json/"

$(document).ready(() => {
    $.ajax({url:`${apiURL}all`})
        .done((data) => {
            Object.entries(data).forEach((currency) => {
                $('#currency-select-from').append(`<option>${currency[0]}</option>`);
            })
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
    const selectedCurrency = $('#currency-select-from').find(":selected").text();
    const initialDate = new Date($('#date-start').val());
    const finalDate = new Date($('#date-final').val());
    let currDate = initialDate
        
    while(currDate <= finalDate){
        const initialDateParse = currDate.toISOString().split('T')[0].replaceAll('-','');       
        $.ajax({url: `${apiURL}${selectedCurrency}?start_date=${initialDateParse}&end_date=${initialDateParse}`})
        .done((data) => {
            console.log(data)
            
        });
        currDate.setDate(currDate.getDate() + 1)
    }   
})


// function addToTable() {

//     `
//     <tr>
//         <th>Moeda</th>
//         <th>Cotação Dia</th>
//         <th>Mínima</th>
//         <th>Máxima</th>
//         <th>Variação</th>
//         <th>Data e hora</th>
//     </tr>
//     `   
// }