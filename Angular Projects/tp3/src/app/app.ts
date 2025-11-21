import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './bienvenue/bienvenue';
import { Produit } from './produit/produit';
import { Utilisateur } from './utilisateur/utilisateur';
import { Panier } from './panier/panier';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenue, Produit, Utilisateur,Panier],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  panier: any;
  recevoirAjoutPanier(nom: string) {
    this.panier.push(nom);
    alert(`${nom} ajouté au panier !`);
  }
}
