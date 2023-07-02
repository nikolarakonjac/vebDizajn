
function prikazPonuda(){

    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));

    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
    let nizSlikaZaPonudu=JSON.parse(localStorage.getItem("nizSlikaPonuda"));

    
    for(let i=0;i<nizKorisnikaPonude.length;i++){
        if(nizKorisnika[i]==username){
            for(let j=0 ; j<nizKorisnikaPonude[i].length;j++){
                
                let row = $("<tr>").attr("id", j);
                $("<td>").text(nizKorisnikaPonude[i][j]).attr("class", j).appendTo(row);
                $("<td>").text(nizSlikaZaPonudu[i][j]).appendTo(row);
                $("<td>").append("<button class='remove-btn'>Ukloni</button>").appendTo(row);
                row.appendTo("#tableBody");
            }

        }
        
    }
    localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
    localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
    localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
    localStorage.setItem("nizSlikaPonuda", JSON.stringify(nizSlikaZaPonudu));
    
}



