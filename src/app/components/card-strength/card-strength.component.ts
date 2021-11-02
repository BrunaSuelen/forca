import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Letter } from 'src/app/model/letter.model';
import { Word } from 'src/app/model/word.model';
import { ALPHABET } from 'src/assets/data/alphabet';

@Component({
  selector: 'app-card-strength',
  templateUrl: './card-strength.component.html',
  styleUrls: ['./card-strength.component.scss']
})
export class CardStrengthComponent implements OnChanges, OnInit {

  @Input() word?: Word;
  @Input() chances?: number;
  @Input() refreshInput?: Subject<void>;
  @Output() chanceTrigger: EventEmitter<void> = new EventEmitter<void>();
  @Output() gameOverTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() pointTrigger: EventEmitter<void> = new EventEmitter<void>();

  wordInput!: string;
  letters!: Array<string>;
  alphabet: Array<Letter> = [...ALPHABET];

  constructor() { }

  ngOnInit(): void {
    this.refreshInputSubscribe();
  }

  ngOnChanges(): void {
    if (this.word) {
      this.initAlphabet();
      this.updateWordInput();
    }
  }

  public refreshInputSubscribe(): void {
    this.refreshInput?.subscribe(() => {
      this.alphabet = ALPHABET.map((letter: Letter) => {
        letter.select = letter.valid = false;
        return letter;
      });

      this.initAlphabet();
      this.updateWordInput();
    })
  }

  public initAlphabet(): void {
    if (this.word) {
      this.letters = [...this.word.title.toLocaleUpperCase()];
    }

    this.alphabet = this.alphabet
      .map((letter: Letter) => {
        letter.valid = this.letters.includes(letter.char);
        return letter;
      })
  }

  public updateWordInput(): void {
    const LETTERS = this.getLetters(true, true)
      .map((letter: any) => letter.char);

    this.wordInput = this.letters
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

    if (letter.valid) {
      this.updateWordInput();
      const WORD_INPUT = this.wordInput.split(' ').join('');
      const WORD = this.word?.title.toLocaleUpperCase();

      if (WORD == WORD_INPUT) {
        this.gameOverTrigger.emit(true);
        this.pointTrigger.emit();
      }
      return;
    }

    if (!this.chances) this.gameOverTrigger.emit(false);
    this.chanceTrigger.emit();
  }
}
