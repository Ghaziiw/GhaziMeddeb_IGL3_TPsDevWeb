import { book,User } from "../models/index";
export class library{
    livres: book[];
    constructor(livres: book[]){
        this.livres = livres;
    }

    addBook(livre: book): void {
        livre.empruteur = null;
        this.livres.push(livre);
    }
    removeBook(id: number): void {
        this.livres = this.livres.filter(livre => livre.id != id);
    }
    findBookByTitle(title: string): book| undefined {
        return this.livres.find(livre => livre.title == title);
    }

    emprunterLivre(id: number, user: User): void {
        const livre = this.livres.find(livre => livre.id == id);
        if (livre) {
            console.log(`${user.name} a emprunté le livre "${livre.title}".`);
            livre.empruteur = user;
        } else {
            console.log(`Livre non trouvé.`);
        }
    }

    retournerLivre(id: number): void {
        const livre = this.livres.find(livre => livre.id == id);
        if (livre && livre.empruteur) {
            console.log(`Le livre "${livre.title}" a été retourné par ${livre.empruteur.name}.`);
            livre.empruteur = null;
        } else {
            console.log(`Livre non trouvé ou n'a pas été emprunté.`);
        }
    }
}