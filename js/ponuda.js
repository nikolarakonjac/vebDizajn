function ponudi(){
    let ponuda=document.getElementById("ponuda").value;
    //provera da li je broj
    ponuda=parseInt(ponuda);

    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));

    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));

    
    for(let i=0;i<nizKorisnikaPonude.length;i++){
        if(nizKorisnika[i]==username){
            nizKorisnikaPonude[i].push("45");
            //ovde samo promeni vrednost ponude stavio sam da je 45

        }
        
    }

}