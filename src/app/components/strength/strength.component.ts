import { Component, OnInit } from '@angular/core';
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
  public chances: number = 5;
  public tips: number = 3;
  public point: number = 0;

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
      this.word = this.words.find((word: Word) => word.id = WORD_ID);
    }
  }

  teste() {
    this.tips -= 1;
  }
}
