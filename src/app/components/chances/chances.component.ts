import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chances',
  templateUrl: './chances.component.html',
  styleUrls: ['./chances.component.scss']
})
export class ChancesComponent implements OnInit {
  @Input() chances!: number;

  constructor() { }

  ngOnInit(): void {
  }

  public getImage(): string {
    const URL = 'assets/images/chances/';
    const IMAGE = this.chances == undefined || this.chances < 0 || this.chances > 5 ? 'default' : this.chances;
    return `${URL}${IMAGE}.png`;
  }
}
