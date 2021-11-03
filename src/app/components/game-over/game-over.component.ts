import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  @Input() title!: string;
  @Input() point!: number;
  @Input() subtitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

  refresh() {
    location.reload()
  }

}
