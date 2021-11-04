import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Word } from 'src/app/model/word.model';
import { WordService } from 'src/app/service/word-service.service';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss']
})

export class StrengthComponent implements OnInit {
  public word?: Word;
  public words!: Array<Word>;
  public remainingWords!: Array<Word>;
  public uncoveredWordsId: Array<number> = [];
  public chanceMarker: number = 500;
  public victory!: boolean;
  public activeGame: boolean = true;
  public chancesMax: number = 5;
  public chances!: number;
  public tips!: number;
  public tipsMax!: number;
  public point: number = 0;
  public refreshInput: Subject<void> = new Subject();

  constructor(private wordService: WordService) { }

  async ngOnInit(): Promise<any> {
    this.chances = this.chancesMax;
    await this.findAll();

    if (this.words) this.newRound();
  }

  public findAll(): Promise<Array<Word>> {
    return this.wordService
      .findAll()
      .toPromise()
      .then((words: Array<Word>) => this.words = words);
  }

  public async newRound(): Promise<any> {
    this.remainingWords = this.getRemainingWords();
    await this.getWork();
    this.refreshInput.next();
  }

  public getRemainingWords(): Array<Word> {
    return this.words
      .filter((word: Word) => !this.uncoveredWordsId.includes(word.id));
  }

  public getRandomId(): number {
    let length: number = this.remainingWords?.length;

    return this.wordService.getRandomId(0, length - 1);
  }

  public getWork(): void {
    let wordId: number = this.getRandomId();

    this.word = this.remainingWords[wordId];
    this.tips = this.tipsMax = this.word?.tips.length || 0;

    this.uncoveredWordsId.push(this.word.id);
  }

  public gameOverTrigger(event: any): void {
    this.pointTrigger();
    this.remainingWords = this.getRemainingWords();
    this.activeGame = event && (this.remainingWords?.length > 0);
    this.victory = event;

    if (this.victory && this.remainingWords?.length) {
      this.newRound();
    }
  }

  public pointTrigger(): void {
    if (this.word) this.point += this.word?.point;
    if (this.chanceMarker <= this.point) {
      this.chanceMarker += 500;
      this.chances += 1;
    }
  }

  public chancesTrigger(): void {
    if (this.word) this.chances -= 1;
  }

  public tipsTrigger(): void {
    if (this.tips !== this.tipsMax) this.chancesTrigger();
    this.tips -= 1;

    if (this.chances < 1) {
      setTimeout(() => this.gameOverTrigger(false), 500);
    }
  }
}
