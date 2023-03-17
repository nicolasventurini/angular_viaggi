import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'stella',
  templateUrl: './stella.component.html',
  styleUrls: ['./stella.component.css'],
})
export class StellaComponent implements OnChanges {
  // rating: number = 4;
  @Input() valutazione: number;
  cropWidth: number;

  ngOnChanges(): void {
    this.cropWidth = this.valutazione * (75 / 5);
  }
}
