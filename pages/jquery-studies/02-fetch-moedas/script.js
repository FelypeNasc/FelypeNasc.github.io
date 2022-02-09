$(document).ready(() => {
    $.ajax({url:"https://economia.awesomeapi.com.br/json/all"})
        .done((data) => {
            $('#currency-select-from').append(`<option>BRL</option>`);
            $('#currency-select-to').append(`<option selected>BRL</option>`);
            Object.entries(data).forEach((currency) => {
                $('#currency-select-from').append(`<option>${currency[0]}</option>`);
                $('#currency-select-to').append(`<option>${currency[0]}</option>`);
            })
            $('#currency-select-from').val("USD");
            $.ajax({ url: `https://economia.awesomeapi.com.br/json/USD-BRL` })
                .done((data) => {
                    const currencyFrom = JSON.stringify(data[0].code).replace(/"/g, '');
                    const currencyTo = JSON.stringify(data[0].codein).replace(/"/g, '');
                    const currencyToValue = parseFloat(JSON.stringify(data[0].bid).replace(/"/g, ''));
                    console.log(currencyFrom, currencyTo, currencyToValue.toFixed(2).replace(".", ","))
                    $('#code').html(` 1 ${currencyFrom}`);
                    $('#codein').html(`${currencyToValue.toFixed(2).replace(".", ",")} ${currencyTo}`);
                })
        })
});

$("#send-button").on('click', () => {
    const selectedCurrencyFrom = $('#currency-select-from').find(":selected").text();
    const selectedCurrencyTo = $('#currency-select-to').find(":selected").text();
    $.ajax({ url: `https://economia.awesomeapi.com.br/json/${selectedCurrencyFrom}-${selectedCurrencyTo}` })
        .done((data) => {
            const currencyFrom = JSON.stringify(data[0].code).replace(/"/g, '');
            const currencyTo = JSON.stringify(data[0].codein).replace(/"/g, '');
            const currencyToValue = parseFloat(JSON.stringify(data[0].bid).replace(/"/g, ''));
            console.log(currencyFrom, currencyTo, currencyToValue.toFixed(2).replace(".", ","))
            $('#code').html(` 1 ${currencyFrom}`);
            $('#codein').html(`${currencyToValue.toFixed(2).replace(".", ",")} ${currencyTo}`);
        })
})

