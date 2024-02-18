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
function addTicket(){
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    if (!validateFilm(film, "film")) return;
    if (!validateAntall(antall, "antall")) return;
    if (!validateFornavn(fornavn, "fornavn")) return;
    if (!validateEtternavn(etternavn, "etternavn")) return;
    if (!validateTelefonnr(telefonnr, "telefonnr")) return;
    if (!validateEpost(epost)) return;
    objArray.push({filmKey:film, antallKey:antall, fornavnKey:fornavn, etternavnKey:etternavn, telefonnrKey:telefonnr, epostKey:epost})
    console.log(objArray);
    populateHTML(objArray);

    //Reset the form fields after adding the film
    resetForm();
}

//List purchased movie tickets
function populateHTML(objArr){
    let html = "<ol>";
    console.log(objArr)
    for(let i in objArr){
        console.log(objArr[i].fornavnKey)
        html += "<li>" + objArr[i].filmKey+ " " + objArr[i].antallKey+ " " +objArr[i].fornavnKey+ " " + objArr[i].etternavnKey+ " " + objArr[i].telefonnrKey+ " " + objArr[i].epostKey+ "</li>"
    }
    html+="</ol>"
    document.getElementById("resultObject").innerHTML = html;
    console.log(html)
}

// Reset form input fields
function resetForm() {
    document.getElementById('Kinobillet').reset();
}

//Delete all tickets
function emptyArray() {
    objArray.length = 0;
    document.getElementById('resultObject').innerHTML = '';
}
