function ponudi(){
    let ponuda=document.getElementById("ponuda").value;
    //provera da li je broj
    ponuda=parseInt(ponuda);
    let indeks=0;
    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
    for(let i=0;i<nizKorisnika.length();i++){
        if(nizKorisnika[i]==username){
            //ispis ako je poslednji element u listi
            if(i==nizKorisnika-1){
                nizKorisnikaPonude.push(ponuda);
                nizBrojevaPonuda[i]++;
            }
            else{
                for(let j=indeks;j<indeks+nizBrojevaPonuda[i];j++){

                }
            }

        }
    }

}