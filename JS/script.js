/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
 * Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
 * MILESTONE 0:
 * Creare l’array di oggetti con le informazioni fornite.
 * MILESTONE 1:
 * Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 * MILESTONE 2:
 * Stampare le stesse informazioni su DOM sottoforma di stringhe
 * BONUS 1:
 * Trasformare la stringa foto in una immagine effettiva
 * BONUS 2:
 * Organizzare i singoli membri in card/schede
*/


// MILESTONE 0

const team = [

    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrad",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];

// MILESTONE 1

for (const teamMember of team) {

    console.log("Nome: " + teamMember.nome)
    console.log("Ruolo: " + teamMember.ruolo)
    console.log("Foto: " + teamMember.foto)
}

// MILESTONE 2 + BONUS

const stringContainer = document.getElementById("mega-string");
const containerToWrite = document.getElementById("main-container");


/**
 *  // PRIMO MODO

for (let i = 0; i < team.length; i++) {

    let stringToWrite = document.createElement("div");
    stringToWrite.innerHTML += `
        <h4>Nome: ${team[i].nome}</h4>
        <h5>Ruolo: ${team[i].ruolo}</h5>
        <span><img src="./img/${team[i].foto}"></span>
    `
    stringContainer.appendChild(stringToWrite);

    containerToWrite.innerHTML += `
    <div class="card my-5 m-3">
        <img src="./img/${team[i].foto}">
            <div class="card-body">
                <h5 class="card-title">${team[i].nome}</h5>
                    <p class="card-text">${team[i].ruolo}</p>
            </div>
    </div>`
};

 *  // SECONDO MODO

for (const teamMember of team) {

    const stringToWrite = document.createElement("div");
     stringToWrite.innerHTML += `
         <h4>Nome: ${teamMember.nome}</h4>
         <h5>Ruolo: ${teamMember.ruolo}</h5>
         <span><img src="./img/${teamMember.foto}"></span>
     `
     stringContainer.appendChild(stringToWrite);

     containerToWrite.innerHTML += `
     <div class="card my-5 m-3">
         <img src="./img/${teamMember.foto}">
             <div class="card-body">
                 <h5 class="card-title">${teamMember.nome}</h5>
                     <p class="card-text">${teamMember.ruolo}</p>
             </div>
     </div>`
}
*/

// TERZO MODO -- il più corretto ?

for (let i in team) {
    let members = team[i];
    const stringToWrite = document.createElement("div");
      stringToWrite.innerHTML += `
          <h4>Nome: ${members.nome}</h4>
          <h5>Ruolo: ${members.ruolo}</h5>
          <span><img src="./img/${members.foto}"></span>
      `
      stringContainer.appendChild(stringToWrite);

          containerToWrite.innerHTML += `
      <div class="card my-5 m-3">
          <img src="./img/${members.foto}">
              <div class="card-body">
                  <h5 class="card-title">${members.nome}</h5>
                      <p class="card-text">${members.ruolo}</p>
              </div>
      </div>`
    
}