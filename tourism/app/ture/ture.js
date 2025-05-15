class Ture {
    constructor(naziv, opis, duzinaKm, tagovi) {
        this.naziv = naziv;
        this.opis = opis;
        this.duzinaKm = duzinaKm;
        this.tagovi = tagovi;
    }
}

function InitiliazeTure() {
    let ture = [];
    const sacuvaneTure = localStorage.getItem("ture");
    if (sacuvaneTure) {
        ture = JSON.parse(sacuvaneTure);
    }

    prikaziTure(ture);
    handleFormSubmission(ture); 
}

function prikaziTure(ture) {
    let table = document.getElementById("table");
    table.innerHTML = "";
    let tr1 = document.createElement("tr");

    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");

    th1.textContent = "Naziv";
    th2.textContent = "Opis";
    th3.textContent = "Duzina";
    th4.textContent = "Tagovi";

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);


    table.appendChild(tr1);
    for (let tura of ture) {
        let tr = document.createElement("tr");

        let Naziv = document.createElement("td");
        let Opis = document.createElement("td");
        let Duzina = document.createElement("td");
        let Tagovi = document.createElement("td");

        Naziv.textContent = tura.naziv;
        Opis.textContent = tura.opis;
        Duzina.textContent = tura.duzinaKm;
        Tagovi.textContent = tura.tagovi;

        tr.appendChild(Naziv);
        tr.appendChild(Opis);
        tr.appendChild(Duzina);
        tr.appendChild(Tagovi);

        tr.addEventListener("click", function () {
            prikaziDetaljeTure(tura);
        });

        table.appendChild(tr);
    }
}

function prikaziDetaljeTure(tura) {
    let div = document.getElementById("detalji");
    div.innerHTML = "";

    let pNaziv = document.createElement("p");
    let pOpis = document.createElement("p");
    let pDuzina = document.createElement("p");
    let pTagovi = document.createElement("p");

    pNaziv.textContent = "Naziv: " + tura.naziv;
    pOpis.textContent = "Opis: " + tura.opis;
    pDuzina.textContent = "Dužina: " + tura.duzinaKm + "km";
    pTagovi.textContent = "Tagovi: " + tura.tagovi;

    div.appendChild(pNaziv);
    div.appendChild(pOpis);
    div.appendChild(pDuzina);
    div.appendChild(pTagovi);

    div.style.display = "block";
}

function handleFormSubmission(ture) {
    let submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', function() {


        const forma = document.querySelector('#form');
        const formData = new FormData(forma);

        let naziv = formData.get('naziv');
        let duzinaKm = parseFloat(formData.get('duzina'));
        let opis = formData.get('opis');
        let tagovi = formData.getAll('tagovi');

        for (let i = 0; i < ture.length; i++) {
            if (ture[i].naziv === naziv) {
                alert("Već postoji tura sa ovim nazivom");
                return;
            }
        }

        const novaTura = new Ture(naziv, opis, duzinaKm, tagovi);

        ture.push(novaTura);
        localStorage.setItem("ture", JSON.stringify(ture));
        prikaziTure(ture);
         
    });
}

function addTag() {
  
    let container = document.createElement("div");
    container.classList.add("tag-input-wrapper");  

   
    let input = document.createElement("input");
    input.type = "text";
    input.name = "tagovi"; 
    input.required = true;

   
    let removeBtn = document.createElement("button");
    removeBtn.type = "button";   
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-tag-btn");  

 
    removeBtn.addEventListener("click", function() {
        container.remove();
    });

    container.appendChild(input);
    container.appendChild(removeBtn);

    let unosTaga = document.querySelector("#unos-taga");
    unosTaga.appendChild(container);
}
document.addEventListener("DOMContentLoaded", function () {
    aktivacija();
    InitiliazeTure();
});

function aktivacija() {
    let buttonAdd = document.querySelector("#dodajTag");
    buttonAdd.addEventListener("click", function () {
        addTag();
    });
}
InitiliazeTure();
//localStorage.clear();