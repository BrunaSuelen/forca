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
  public victory!: boolean;
  public activeGame: boolean = true;
  public chances: number = 5;
  public tips: number = 3;
  public point: number = 0;

  public refreshInput: Subject<void> = new Subject();

  constructor(
    private wordService: WordService
  ) { }

  ngOnInit(): void {
    this.getWork();
  }

  public findAll(): Promise<Array<Word>> {
    return this.wordService
      .findAll()
      .toPromise()
      .then(
        (works: Array<Word>) => this.words = works
      )
  }

  public async getWork(): Promise<any> {
    await this.findAll();

    if (this.words) {
      const WORD_ID = this.wordService.getRandomId(1, this.words.length);
      this.word = this.words.find((word: Word) => word.id == WORD_ID);
    }
  }

  public gameOverTrigger(event: any): void {
    this.activeGame = event;
    this.victory = event;

    if (this.victory) { this.newWork(); }
  }

  public pointTrigger(): void {
    this.point += this.word?.point || 0;
  }

  public async newWork(): Promise<any> {
    await this.getWork();
    this.chances = 5;
    this.tips = 3;
    this.refreshInput.next();
  }
}
