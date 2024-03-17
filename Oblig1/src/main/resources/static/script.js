//Validate input
function validateFilm(film) {
    const filmValid = document.getElementById("errorFilm");

    if (film === "Velg film her") {
        filmValid.innerText = "Velg en film";
        return false;
    } else {
        filmValid.innerText = "";
        return true;
    }
}

function validateAntall(antall) {
    const check = /^[1-9]$/;
    const ok = check.test(antall);
    const antallValid = document.getElementById("errorAntall");

    if (!ok) {
        antallValid.innerText = "Velg antall billeter";
        return false;
    } else {
        antallValid.innerText = "";
        return true;
    }
}

function validateFornavn(fornavn) {
    const check = /^[a-zA-ZæøåÆØÅ.\-]{2,10}$/;
    const ok = check.test(fornavn);
    const fornavnValid = document.getElementById("errorFornavn");

    if (!ok) {
        fornavnValid.innerText = "Fyll inn fornavn";
        return false;
    } else {
        fornavnValid.innerText = "";
        return true;
    }
}

function validateEtternavn(etternavn) {
    const check = /^[a-zA-ZæøåÆØÅ.\-]{2,10}$/;
    const ok = check.test(etternavn);
    const etternavnValid = document.getElementById("errorEtternavn");

    if (!ok) {
        etternavnValid.innerText = "Fyll inn etternavn";
        return false;
    } else {
        etternavnValid.innerText = "";
        return true;
    }
}

function validateTelefonnr(telefonnr) {
    const check = /[0-9]{8}/
    const ok = check.test(telefonnr);
    const telefonnrValid = document.getElementById("errorTelefonnr");

    if (!ok) {
        telefonnrValid.innerText = "Telefonnr må ha 8 siffer";
        return false;
    } else {
        telefonnrValid.innerText = "";
        return true;
    }
}

function validateEpost(epost) {
    const check = /[a-z0-9._%+\-]+@[a-z.\-]+\.[a-z]{2,}/
    const ok = check.test(epost);
    const epostValid = document.getElementById("errorEpost");

    if (!ok) {
        epostValid.innerText = "Skriv gyldig epost";
        return false;
    } else {
        epostValid.innerText = "";
        return true;
    }
}

//Purchase movie ticket
objArray= [];
function addTicket() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    // Validate input fields
    if (!validateFilm(film, "film")) return;
    if (!validateAntall(antall, "antall")) return;
    if (!validateFornavn(fornavn, "fornavn")) return;
    if (!validateEtternavn(etternavn, "etternavn")) return;
    if (!validateTelefonnr(telefonnr, "telefonnr")) return;
    if (!validateEpost(epost)) return;
    // Object with data
    let ticket = {
        "film": document.getElementById("film").value,
        "antall": document.getElementById("antall").value,
        "fornavn": document.getElementById("fornavn").value,
        "etternavn": document.getElementById("etternavn").value,
        "telefonnr": document.getElementById("telefonnr").value,
        "epost": document.getElementById("epost").value,
    }

    // Send the data to the server using $.post
    console.log(ticket);
    $.post("http://localhost:8080/receiveTicket", ticket, function (data) {
        fetchAll();
    });

    //Reset the form fields after adding the film
    resetForm();
}
function fetchAll() {
    $.get("/fetchAll", function (ticket) {
        updateTable(ticket);
    });
}

function updateTable(ticket) {
    let output = "<table class=\"table table-hover\"><thead><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr></thead><tbody>";

    for (const data of ticket) {
        output += "<tr><td>" + data.film + "</td><td>" + data.antall + "</td><td>" + data.fornavn + "</td>" +
            "<td>" + data.etternavn + "</td><td>" + data.telefonnr + "</td><td>" + data.epost + "</td></tr>";
    }
    output += "</tbody></table>";
    $("#resultObject").html(output);
}

// Reset form input fields
function resetForm() {
    document.getElementById('Kinobillet').reset();
}

//Delete all tickets
function deleteAll() {
    $.get( "/deleteAll", function() {
        fetchAll();
    });
}
