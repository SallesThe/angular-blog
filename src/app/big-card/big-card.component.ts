import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  cardTitle:string = "Titulo"
  cardDescription:string = "Descrição da noticia"

  constructor() {}

  ngOnInit(): void {}
}
