function registrujSe(){
    alert("Usao sam");
    let korisnickoIme=document.getElementById("korisncikoIme").value;
    let lozinka=document.getElementById("lozinka").value;
    let lozinkaPotvrda=document.getElementById("lozinkaPotvrda").value;
    let ime=document.getElementById("ime").value;

    if(lozinka!=lozinkaPotvrda){
        alert("Lozinka i potvrda lozinke nisu isti.");
        return;
    }
    alert("Uspesno logovanje");

    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));
    if(nizKorisnika==null){
        username="";
        password="";
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));
        nizKorisnika=[];
        nizKorisnikaLozinka=[];
        nizKorisnikaPonude=[];
        nizBrojevaPonuda=[];
        //dodavanje novog korisnika takodje je on i prvi
        nizKorisnika.push(korisnickoIme);//dodavanje korisnickog imena
        nizKorisnikaLozinka.push(lozinka);//dodavanje lozinke
        nizBrojevaPonuda.push(0);//dodavanje broja ponuda koje korisnik ima
        //dodavanje u localStorage
        localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
        localStorage.setItem("korisniciLozinka", JSON.stringify(nizKorisnikaLozinka));
        localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
        localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
    }
    let nizKorisnikaLozinka=JSON.parse(localStorage.getItem("korisniciLozinka"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
    
    for (let i=0;i<nizKorisnika.length();i++){
        if (nizKorisnika[i]==korisnickoIme){
            alert("Korisnicko ime vec postoji");
            return;
        }
    }
    nizKorisnika.push(korisnickoIme);
    nizKorisnikaLozinka.push(lozinka);
    nizBrojevaPonuda.push(0);
    
    localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
    localStorage.setItem("korisniciLozinka", JSON.stringify(nizKorisnikaLozinka));
    localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
    localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
    alert("Uspesno ste registrovani");
}