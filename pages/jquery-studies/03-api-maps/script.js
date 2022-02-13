$("#search-button").on('click', () => {
    const apiURL = "https://cep.awesomeapi.com.br/json/"
    const zipCode = $("#zipcode-input").val();
    console.log(zipCode)
    if (zipCode.length > 7) {
        $.ajax(apiURL+zipCode)
        .done((res) => {
            $("#res-address").html(res.address);
            $("#res-zipcode").html(res.cep);
            $("#res-district").html(res.district);
            $("#res-city").html(res.city);
            $("#res-state").html(res.state);
            $("#res-ddd").html(res.ddd);
            $("#res-ibge").html(res.city_ibge);
            $("#res-lat").html(res.lat);
            $("#res-lng").html(res.lng);
            $("#iframe-container").html(`
                <iframe src="https://www.google.com/maps?api=1&q=${res.lat}%2C${res.lng}&hl=es;z=14&output=embed
                " frameborder="0"></iframe>
            `)
        })
    } else {
        alert('Digite um CEP válido')
    }
})

// address: "Rua Saldanha Marinho"
// address_name: "Saldanha Marinho"
// address_type: "Rua"
// cep: "24030040"
// city: "Niterói"
// city_ibge: "3303302"
// ddd: "21"
// district: "Centro"
// lat: "-22.88699"
// lng: "-43.12211"
// state: "RJ" 
