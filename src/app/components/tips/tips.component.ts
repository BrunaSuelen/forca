import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  @Input() tips!: number;
  @Input() chances!: number;
  @Input() tipsList?: Array<string>;
  @Output() tipsTrigger: EventEmitter<void> = new EventEmitter<void>();
  @Output() chancesTrigger: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  showMoreTip(): void {
    this.tips -= 1;
    this.chancesTrigger.emit();
    this.tipsTrigger.emit();
    console.log(this.tipsList?.slice(0, 3 - this.tips))
  }
}
