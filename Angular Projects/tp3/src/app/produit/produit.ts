import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produit',
  imports: [NgClass,CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  @Input() nomProduit: string = 'Produit Exemple';
  
  @Output() ajouterAuPanier = new EventEmitter<string>();

  imageUrl = 'assets/iphone.jpg';
  prix = 1299;
  enStock = true;

  afficherAlerte() {
    alert('Produit ajouté au panier');
  }

  ajouterProduit() {
    this.ajouterAuPanier.emit(this.nomProduit);
  }

  toggleStock() {
    this.enStock = !this.enStock;
  }
}
