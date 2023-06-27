function prikazPonuda(){

    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));

    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));

    
    for(let i=0;i<nizKorisnikaPonude.length;i++){
        if(nizKorisnika[i]==username){
            for(let j=0 ; j<nizKorisnikaPonude[i].length;j++){
                //ispis njegovih ponuda
            }

        }
        
    }
    
}