import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @Input() chances!: number;
  @Input() tips!: number;
  @Input() tipsMax!: number;
  @Input() point!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
