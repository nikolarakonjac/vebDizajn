function logovanje(){
    alert("Usao sam");
    let korisnickoIme=document.getElementById("korisncikoIme").value;
    let lozinka=document.getElementById("lozinka").value;
    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));
    if (username==korisnickoIme){
        alert("Vec ste ulogovani");
        return;
    }
    let nizKorisnika=JSON.parse(localStorage.getItem("korisniciIme"));   
    for (let i =0;nizKorisnika.length();i++){
        if(nizKorisnika[i]==korisnickoIme){
            username=korisnickoIme;
            password=lozinka;
            localStorage.setItem("username", JSON.stringify(username));
            localStorage.setItem("password", JSON.stringify(password));
            //Dodaj samo redirect na drugu stranicu
            return;
        }
    }


}