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

console.log(team);

// MILESTONE 2

const stringToWrite = document.getElementById("mega-string");

for (let i = 0; i < team.length; i++) {

    console.log(team[i]);
    stringToWrite.innerText += team[i].nome;
    stringToWrite.innerText += team[i].ruolo;
    stringToWrite.innerText += team[i].foto;
};


// MILESTONE 2.1

const firstMemberName = document.getElementById("first-member-name");
const firstMemberRole = document.getElementById("first-member-role");
const firstMemberPic = document.getElementById("first-member-pic");

const secondMemberName = document.getElementById("second-member-name");
const secondMemberRole = document.getElementById("second-member-role");
const secondMemberPic = document.getElementById("second-member-pic");

const thirdMemberName = document.getElementById("third-member-name");
const thirdMemberRole = document.getElementById("third-member-role");
const thirdMemberPic = document.getElementById("third-member-pic");

firstMemberName.innerText = team[0].nome;
firstMemberRole.innerText = team[0].ruolo;
firstMemberPic.innerText = team[0].foto;

secondMemberName.innerText = team[1].nome;
secondMemberRole.innerText = team[1].ruolo;
secondMemberPic.innerText = team[1].foto;

thirdMemberName.innerText = team[2].nome;
thirdMemberRole.innerText = team[2].ruolo;
thirdMemberPic.innerText = team[2].foto;

