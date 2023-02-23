import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card-h',
  templateUrl: './small-card-h.component.html',
  styleUrls: ['./small-card-h.component.css'],
})
export class SmallCardHComponent implements OnInit {

  @Input()
  smallCardPhoto:string = "";

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
