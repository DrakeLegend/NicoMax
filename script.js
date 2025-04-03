// Carregar o arquivo JSON e exibir na página
fetch('PV BACKREDIRECT NICOMAX ATUALIZADA.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("jsonDisplay").textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => {
        document.getElementById("jsonDisplay").textContent = "Erro ao carregar JSON: " + error;
    });
