

let creaArticolo = document.querySelector("#btnCrea");

creaArticolo.addEventListener('click', ()=>{
    
    // Cattura degli elementi
    let titolo = document.querySelector("#titolo").value; 
    let paragrafo = document.querySelector("#paragrafo").value;


 if (!titolo || !paragrafo) {
     
     alert("Attenzione, devi speficare sia il Titolo che il paragrafo!")
    
 } else {

     // Ottieni la data di pubblicazione
     let date = new Date();
     let formatDate = date.toLocaleDateString();
    
   // Crea l'articolo
   let articolo = document.createElement("article");
     
   articolo.innerHTML = `
   <h2>${titolo}</h2>
   <hr>
   <p><strong>Data di pubblicazione:</strong> ${formatDate}</p>
   <p>${paragrafo}</p>
`;
    // Aggiungi l'articolo nel container
    document.getElementById("articoli").appendChild(articolo);

    // Pulisci gli input
    document.querySelector("#titolo").value = "";
    document.querySelector("#paragrafo").value = "";


 }






}); // Fine addEventListener