$(document).ready(() => {
    $.ajax({url:"https://economia.awesomeapi.com.br/json/all"})
        .done((data) => {
            Object.entries(data).forEach((currency) => {
                $('#currencySelect').append(`<option>${currency[0]}</option>`)
            })
        })
});

$("#sendButton").on('click', () => {
    const selectedCurrency = $('#currencySelect').find(":selected").text()
    console.log(selectedCurrency)
    $.ajax({ url: `https://economia.awesomeapi.com.br/json/${selectedCurrency}` })
        .done((data) => {
            $('#result').html(`
                Nome: ${JSON.stringify(data[0].name.split('/')[0])}
                Valor agora: ${JSON.stringify(data[0].bid)}
                `)
                // Nome: ${JSON.stringify(data)}
                // Nome: ${JSON.stringify(data)}
                // Nome: ${JSON.stringify(data)}
                // Nome: ${JSON.stringify(data)}
                // Nome: ${JSON.stringify(data)}
    })
})

