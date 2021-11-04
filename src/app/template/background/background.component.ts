import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/service/word-service.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  public darkMode!: boolean;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.darkMode
      .subscribe((darkMode: boolean) => this.darkMode = darkMode);
  }
}
