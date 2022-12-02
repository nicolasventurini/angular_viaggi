import { Component } from '@angular/core';
import { Localita } from '../localita';
import { ZONE } from './listalocalita.component';

@Component({
  selector: 'app-localita',
  templateUrl: './viaggi.component.html',
  styleUrls: ['./viaggi.component.css'],
})
export class LocalitaComponent {
  localita = ZONE;
}
