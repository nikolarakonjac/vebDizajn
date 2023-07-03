$(document).ready(function() {
    $("#tableBody").on("click", ".remove-btn", function() {
        // Pronalazimo roditeljski red dugmeta
        let username=JSON.parse(localStorage.getItem("username"));
        
        let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
        let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
        let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
        let nizSlikaZaPonudu=JSON.parse(localStorage.getItem("nizSlikaPonuda"));
        // kad se obrise neka ponuda treba da se obrise i iz nizova za sve ponude i za sve slike
        let nizSvihPonuda=JSON.parse(localStorage.getItem("nizSvihPonuda"));
        let nizSvihSlika=JSON.parse(localStorage.getItem("nizSvihSlika"));
        
        let row = $(this).closest("tr");
        let tdClassName = row.find("td").attr("class");
        
        let ime=row.find("td." + tdClassName).text();   //ako je ponuda 100 onda je ime = 100
        //alert(ime);
        for(let i=0;i<nizKorisnika.length;i++){
            if(nizKorisnika[i]==username){
                for(j=0;j<nizKorisnikaPonude[i].length;j++){
                    if(ime==nizKorisnikaPonude[i][j]){
                        nizKorisnikaPonude[i].splice(j, 1);
                        nizSlikaZaPonudu[i].splice(j, 1);
                        nizBrojevaPonuda[i]--;

                        //brisanje iz nizova sa svim ponudama i svim slikama
                        let index = nizSvihPonuda.indexOf(ime);
                        alert(index);
                        if(index != -1){
                            nizSvihPonuda.splice(index, 1);
                            nizSvihSlika.splice(index, 1);
                        }

                    }
                }


            }
        }
        row.remove();
        localStorage.setItem("nizSvihSlika", JSON.stringify(nizSvihSlika));
        localStorage.setItem("nizSvihPonuda",JSON.stringify(nizSvihPonuda));
        
        localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
        localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
        localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
        localStorage.setItem("nizSlikaPonuda", JSON.stringify(nizSlikaZaPonudu));
        
        // Uklanjamo red iz tabele

    });
});