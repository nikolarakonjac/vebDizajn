$(document).ready(function() {
    $("#tableBody").on("click", ".remove-btn", function() {
        // Pronalazimo roditeljski red dugmeta
        let username=JSON.parse(localStorage.getItem("username"));
        
        let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
        let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
        let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
        let nizSlikaZaPonudu=JSON.parse(localStorage.getItem("nizSlikaPonuda"));
        
        let row = $(this).closest("tr");
        let tdClassName = row.find("td").attr("class");
        
        let ime=row.find("td." + tdClassName).text();
        alert(ime);
        for(let i=0;i<nizKorisnika.length;i++){
            if(nizKorisnika[i]==username){
                for(j=0;j<nizKorisnikaPonude[i].length;j++){
                    if(ime==nizKorisnikaPonude[i][j]){
                        nizKorisnikaPonude[i].splice(j, 1);
                        nizSlikaZaPonudu[i].splice(j, 1);
                        nizBrojevaPonuda[i]--;
                    }
                }


            }
        }
        row.remove();
        localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
        localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
        localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
        localStorage.setItem("nizSlikaPonuda", JSON.stringify(nizSlikaZaPonudu));
        
        // Uklanjamo red iz tabele

    });
});