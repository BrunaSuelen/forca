import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Word } from 'src/app/model/word.model';

@Component({
  selector: 'app-card-strength',
  templateUrl: './card-strength.component.html',
  styleUrls: ['./card-strength.component.scss']
})
export class CardStrengthComponent implements OnInit, AfterViewInit {

  @Input() word?: Word;

  constructor() { }

  ngOnInit(): void {
    console.log(this.word);
  }

  ngAfterViewInit(): void {
    this.updateWordInput();
  }

  public updateWordInput(): any {
    if (this.word) {
      const word = [...this.word.title];
      return word
        .map(() => '_')
        .join(' ');
    }
  }
}
