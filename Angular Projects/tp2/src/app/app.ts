import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from './utilisateur/utilisateur';
import { FormsModule } from '@angular/forms';
import { Profil } from './profil/profil';
import { Addresse } from './addresse/addresse';
import { Etudiant } from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Utilisateur,FormsModule,Profil,Addresse,Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'IGL3 are Angular Heroes';
  myname = 'Ghazi';
}

