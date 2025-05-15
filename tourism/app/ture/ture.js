class Ture{
    constructor(naziv,opis,duzinaKm,tagovi){
        this.naziv=naziv
        this.opis=opis
        this.duzinaKm=duzinaKm
        this.tagovi=tagovi
    }
}



function InitiliazeTure(){

let tura1 = new Ture("Naziv1","Opis1",123,["tagovi1", "tagovi2", 3]); 
let tura2 = new Ture("Naziv2","Opis2",123, ["tagovi1", "tagovi2", 3]);
let tura3 = new Ture("Naziv3","Opis3",123, ["tagovi1", "tagovi2", 3]);
let tura4 = new Ture("Naziv4","Opis4",123, ["tagovi1", "tagovi2", 3]);

let ture = [tura1,tura2,tura3,tura4];

prikaziTure(ture)
}



function prikaziTure(ture){
    let table = document.getElementById("table");
    for(let tura of ture)
    {

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
    
    tr.addEventListener("click", function(){
        prikaziDetaljeTure(tura);
    });
    table.appendChild(tr);
    }
}

function prikaziDetaljeTure(tura)
{
    let div = document.getElementById("detalji");
    div.innerHTML = "";

    let pNaziv = document.createElement("p");
    let pOpis = document.createElement("p");
    let pDuzina = document.createElement("p");
    let pTagovi = document.createElement("p");

    pNaziv.textContent = "Naziv: "+tura.naziv;
    pOpis.textContent = "Opis: "+tura.opis;
    pDuzina.textContent = "Duzina: "+tura.duzinaKm+"km";
    pTagovi.textContent = "Tagovi: "+tura.tagovi;

    div.appendChild(pNaziv);
    div.appendChild(pOpis);
    div.appendChild(pDuzina);
    div.appendChild(pTagovi);

    div.style.display = "block";
}

InitiliazeTure();