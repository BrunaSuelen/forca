import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Letter } from 'src/app/model/letter.model';
import { Word } from 'src/app/model/word.model';
import { ALPHABET } from 'src/assets/data/alphabet';

@Component({
  selector: 'app-card-strength',
  templateUrl: './card-strength.component.html',
  styleUrls: ['./card-strength.component.scss']
})
export class CardStrengthComponent implements OnInit, OnChanges {

  @Input() word?: Word;

  letters!: Array<string>;
  alphabet: Array<Letter> = ALPHABET;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (this.word) {
      this.initAlphabet();
      this.updateWordInput();
    }
  }

  ngOnInit(): void {
    console.log(this.word);
  }

  public initAlphabet(): void {
    if (this.word) {
      this.letters = [...this.word.title.toLocaleUpperCase()];
    }

    this.alphabet = this.alphabet
      .map((letter: Letter) => {
        letter.valid = this.letters.includes(letter.char);
        console.log(this.letters.includes(letter.char), this.letters)
        return letter;
      })
  }

  public updateWordInput(): any {
    const LETTERS = this.getLetters(true, true)
      .map((letter: any) => letter.char);

    return this.letters
      .map((letter: string) => LETTERS.includes(letter) ? letter : '_')
      .join(' ');
  }

  public getLetters(valid: boolean, select: boolean): Array<Letter> {
    return this.alphabet
      .filter((letter: Letter) => letter.valid == valid)
      .filter((letter: Letter) => letter.select == select);
  }

  public validateLetter(letter: Letter) {
    letter.select = true;
    this.updateWordInput();
  }
}
