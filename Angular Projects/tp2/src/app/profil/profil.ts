import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports:[FormsModule],
  templateUrl: './profil.html',
  styleUrls: ['./profil.css']
})

export class Profil {
  utilisateur = {
    prenom: '',
    age: 0
  };
}
