import { Component, OnInit } from '@angular/core';
import { Student } from './typeEtudiant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})

export class Etudiant implements OnInit {
  etudiant: Student = {
    id: 1,
    name: 'Ali Ben Saleh',
    lastname: 'Ben Saleh',
    classe: '3ème année',
    average: 15.75,
    birthdate: new Date('2000-05-15'),
    tuition: 5000,
    percentage: 0.8575
  };

  constructor() { }

  ngOnInit(): void {
  }
}