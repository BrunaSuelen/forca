import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  @Input() tips!: number;
  @Input() tipsMax!: number;
  @Input() chances!: number;
  @Input() tipsList?: Array<string>;
  @Output() tipsTrigger: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  showMoreTip(): void {
    this.tipsTrigger.emit();
  }
}
