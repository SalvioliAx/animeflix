import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  title: string;
  genero: string;
  img: string;
  rate: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {title: 'Castlevania - ', genero:'Aventura', rate:'9.0', cols: 2, rows:2, color: 'white', img: '../../assets/img/anime/castlevania.jpg'},
    {title: 'Ragnarok - ', genero:'Fantasia', rate:'8.0', cols:2, rows: 2, color: 'white', img: '../../assets/img/anime/ragnarok.jpg'},
    {title: 'Trigun - ', genero:'Faroeste', rate:'8.0', cols: 2, rows: 2, color: 'white', img: '../../assets/img/anime/trigun.jpg'},
    {title: 'Berserker - ', genero:'Fantasia', rate:'8.0', cols: 2, rows: 2, color: 'white', img: '../../assets/img/anime/berserker.jpg'},
  ];

  ngOnInit(): void {
  }

}
