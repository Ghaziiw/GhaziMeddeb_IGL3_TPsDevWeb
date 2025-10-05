//exercice 5
let livre = {
    titre: "Book Title",
    auteur: "Author Name",
    annee: 2023,
    getinfo(){
        return `${this.titre}, ${this.auteur}, ${this.annee}`;
    }
}

//exercice 6
class Etudiant {
    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    getMention(){
        if(this.note<10)    return "Echec";
        else if(this.note<14) return "Passable";
        else if(this.note<16) return "Bien";
        else return "Très Bien";
    }
}

let etudiant1 = new Etudiant("Doe", "John", 20);
let etudiant2 = new Etudiant("Smith", "Jane", 22);
let etudiant3 = new Etudiant("Brown", "Mike", 19);

console.log(etudiant1.getMention());
console.log(etudiant2.getMention());
console.log(etudiant3.getMention());


//exercice 7
const notes = [12, 5, 17, 9, 20];

const moyenne = notes.reduce((acc, val) => acc + val, 0) / notes.length;
console.log("Moyenne:", moyenne);

const notesTriees = [...notes].sort();
notesTriees.reverse();
console.log("Notes triées (décroissant):", notesTriees);

const notesFiltrees = notes.filter(note => note >= 10);
console.log("Notes ≥10:", notesFiltrees);