import { Component } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  personne: personne = {
    nom: "",
    prenom: ""
  };
}

export class personne{
  nom!: string;
  prenom?: string;
}
