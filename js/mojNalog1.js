$(document).ready(function() {
    $("#tableBody").on("click", ".remove-btn", function() {
        // Pronalazimo roditeljski red dugmeta
        let username=JSON.parse(localStorage.getItem("username"));
        
        let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
        let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
        let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
        let nizSlikaZaPonudu=JSON.parse(localStorage.getItem("nizSlikaPonuda"));
        
        let row = $(this).closest("tr");
        var rowId = parseInt(row.attr("id"));

        for(let i=0;i<nizKorisnikaPonude.length;i++){
            if(nizKorisnika[i]==username){
                nizKorisnikaPonude[i].splice(rowID, 1);
                nizSlikaZaPonudu[i].splice(rowID, 1);
                nizBrojevaPonuda[i]--;

            }
        }
        localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
        localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
        localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
        localStorage.setItem("nizSlikaPonuda", JSON.stringify(nizSlikaZaPonudu));
        
        // Uklanjamo red iz tabele
        row.remove();
    });
});