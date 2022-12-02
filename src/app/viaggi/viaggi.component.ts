import { Component } from '@angular/core';
import { Localita } from '../localita';
import { ZONE } from './listalocalita.component';

@Component({
  selector: 'app-viaggi',
  templateUrl: './viaggi.component.html',
  styleUrls: ['./viaggi.component.css'],
})
export class LocalitaComponent {
  localita = ZONE;
  localitaSelezionata?: Localita;

  onSelect(loc: Localita) {
    this.localitaSelezionata = loc;
  }
}

/**mostraNascondiImg() void {
  this.mostraImmagine = !this.mostraImmagine;
}*/
