function prikazPonuda(){

    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));

    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));

    let indeks=0;
    for(let i=0;i<nizKorisnika.length();i++){
        if(nizKorisnika[i]==username){
            for(let j=indeks;j<indeks+nizBrojevaPonuda[i];j++){
                //ispis ponuda na sajtu preko jQuery tovaranje u tabelu nizKorisnikPonuda
            }
        }
    }
    
}