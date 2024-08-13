import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  imports:[NgIf,NgFor],
  standalone: true,
  providers: [RickAndMortyService],
})
export class ApiDataComponent implements OnInit {
  characters: any[] = [];
  

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(
      (data) => {
        console.log(data);  
        this.characters = data.results;
      },
      (error) => {
        console.error('Error fetching data from API', error);  // Log errors
      }
    );
  }
}
