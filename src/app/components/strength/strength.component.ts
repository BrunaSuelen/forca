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
  public victory!: boolean;
  public activeGame: boolean = true;
  public chances: number = 5;
  public tips!: number;
  public point: number = 0;

  public refreshInput: Subject<void> = new Subject();

  constructor(private wordService: WordService) { }

  async ngOnInit(): Promise<any> {
    await this.findAll();

    if (this.words) this.newWheel();
  }

  public findAll(): Promise<Array<Word>> {
    return this.wordService
      .findAll()
      .toPromise()
      .then((words: Array<Word>) => this.words = words);
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
    this.tips = this.word?.tips.length || 0;

    this.uncoveredWordsId.push(this.word.id);
  }

  public gameOverTrigger(event: any): void {
    this.remainingWords = this.getRemainingWords();
    this.activeGame = event && (this.remainingWords?.length > 0);
    this.victory = event;

    if (this.victory && this.remainingWords?.length) {
      this.newWheel();
    }
  }

  public pointTrigger(): void {
    this.point += this.word?.point || 0;
  }

  public async newWheel(): Promise<any> {
    this.activeGame = true;
    this.remainingWords = this.getRemainingWords();
    await this.getWork();
    this.refreshInput.next();
  }
}
