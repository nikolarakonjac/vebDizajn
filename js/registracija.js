function registrujSe(){
    alert("Usao sam");
    let korisnickoIme=document.getElementById("korisnickoIme").value;
    let lozinka=document.getElementById("lozinka").value;
    let lozinkaPotvrda=document.getElementById("lozinkaPotvrda").value;
    let ime=document.getElementById("ime").value;
    alert("prosao");
    if(lozinka!=lozinkaPotvrda){
        alert("Lozinka i potvrda lozinke nisu isti.");
        return;
    }


    let nizKorisnika=localStorage.getItem("korisniciIme");
    alert(nizKorisnika);
    if(nizKorisnika==null){

        let username="";
        let password="";
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));
        let nizKorisnika=[];
        let nizKorisnikaLozinka=[];
        let nizKorisnikaPonude=[[]];
        let nizBrojevaPonuda=[];
        //dodavanje novog korisnika takodje je on i prvi
        nizKorisnika.push(korisnickoIme);//dodavanje korisnickog imena
        nizKorisnikaLozinka.push(lozinka);//dodavanje lozinke
        nizBrojevaPonuda.push(0);//dodavanje broja ponuda koje korisnik ima
        //dodavanje u localStorage
        localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
        localStorage.setItem("korisniciLozinka", JSON.stringify(nizKorisnikaLozinka));
        localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
        localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
        alert("Uspesno registracija");
        return;
    }
    let nizKorisnikaLozinka=JSON.parse(localStorage.getItem("korisniciLozinka"));
    let nizKorisnikaPonude=JSON.parse(localStorage.getItem("korisniciPonude"));
    let nizBrojevaPonuda=JSON.parse(localStorage.getItem("korisniciBrojPonuda"));
    nizKorisnika=JSON.parse(nizKorisnika);
    for (let i=0;i<nizKorisnika.length;i++){
        if (nizKorisnika[i]==korisnickoIme){
            alert("Korisnicko ime vec postoji");
            return;
        }
    }
    nizKorisnika.push(korisnickoIme);
    nizKorisnikaLozinka.push(lozinka);
    nizBrojevaPonuda.push(0);
    nizKorisnikaPonude.push([]);
    
    localStorage.setItem("korisniciIme", JSON.stringify(nizKorisnika));
    localStorage.setItem("korisniciLozinka", JSON.stringify(nizKorisnikaLozinka));
    localStorage.setItem("korisniciPonude", JSON.stringify(nizKorisnikaPonude));
    localStorage.setItem("korisniciBrojPonuda", JSON.stringify(nizBrojevaPonuda));
    alert("Uspesno ste registrovani");
}