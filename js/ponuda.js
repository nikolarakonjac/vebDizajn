function ponudi(){
    let ponuda=document.getElementById("ponuda").value;
    //provera da li je broj
    ponuda=parseInt(ponuda);

    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));

    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
    let nizSlikaZaPonudu=JSON.parse(localStorage.getItem("nizSlikaPonuda"));
    
    for(let i=0;i<nizKorisnikaPonude.length;i++){
        if(nizKorisnika[i]==username){
            nizKorisnikaPonude[i].push("45");//dodavanje ponude
            nizBrojevaPonuda[i]++;
            nizSlikaZaPonudu[i].push("slika");//dodavanje ime slike za ponudu

            //ovde samo promeni vrednost ponude stavio sam da je 45

        }
        
    }
    localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
    localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
    localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
    localStorage.setItem("nizSlikaPonuda", JSON.stringify(nizSlikaZaPonudu));

}