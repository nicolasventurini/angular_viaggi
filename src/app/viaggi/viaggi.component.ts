import { Component } from '@angular/core';
import { ILocalita } from './localita';

@Component({
  selector: 'app-viaggi',
  templateUrl: './viaggi.component.html',
  styleUrls: ['./viaggi.component.css'],
})
export class LocalitaComponent {
  paese: string;
  nazione: string;
  immagine: string;
  mostraImmagine: boolean = false;

}

localita: ILocalita[] = [
  {
    paese: 'Riva del Garda',
    stato: 'Italia',
    immagine:
      'https://www.gardatrentino.it/website_images/Guida/MICE/image-thumb__5065__navigationBackground/Fiere_Congressi_RFC_Mice_Aperitivo_Riva_del_Garda.jpg',
  },
  {
    paese: 'Halifax',
    stato: 'Canada',
    immagine:
      'https://upload.travelawaits.com/ta/uploads/2021/04/2b2cac9334d02796fc53224800ba02b2cac.jpg',
  },
  {
    paese: 'Berlino',
    stato: 'Germania',
    immagine:
      'https://i0.wp.com/hierdadort.de/wp-content/uploads/2020/03/mural-oranienstra%C3%9Fe-berlin.jpg?resize=1024%2C851&ssl=1',
  },
];

mostraNascondiImg(): void {
  this.mostraImmagine = !this.mostraImmagine
}
