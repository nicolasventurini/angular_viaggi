import { Component, OnInit } from '@angular/core';
import { ILocalita } from './localita';

@Component({
  selector: 'app-viaggi',
  templateUrl: './viaggi.component.html',
  styleUrls: ['./viaggi.component.css'],
})
export class LocalitaComponent implements OnInit {
  paese: string;
  nazione: string;
  immagine: string;
  mostraImmagine: boolean = false;
  localitaSelezionata: ILocalita;
  //listaFilter: string = '';
  prezzo: number;
  private _listaFilter: string = '';
  //array vuoto che conterrà le località filtrate
  localitaFiltrate: ILocalita[] = [];

  get listaFilter(): string {
    return this._listaFilter;
  }

  set listaFilter(value: string) {
    this._listaFilter = value;
    console.log(value);
  }

  localita: ILocalita[] = [
    {
      paese: 'Riva del Garda',
      nazione: 'Italia',
      immagine:
        'https://www.gardatrentino.it/website_images/Guida/MICE/image-thumb__5065__navigationBackground/Fiere_Congressi_RFC_Mice_Aperitivo_Riva_del_Garda.jpg',
      prezzo: 50,
      valutazione: 3.9,
    },
    {
      paese: 'Halifax',
      nazione: 'Canada',
      immagine:
        'https://upload.travelawaits.com/ta/uploads/2021/04/2b2cac9334d02796fc53224800ba02b2cac.jpg',
      prezzo: 50,
      valutazione: 1.3,
    },
    {
      paese: 'Berlino',
      nazione: 'Germania',
      immagine:
        'https://i0.wp.com/hierdadort.de/wp-content/uploads/2020/03/mural-oranienstra%C3%9Fe-berlin.jpg?resize=1024%2C851&ssl=1',
      prezzo: 50,
      valutazione: 5,
    },
  ];

  mostraNascondiImg(): void {
    this.mostraImmagine = !this.mostraImmagine;
  }

  datiFiltrati(filtratoPer: string): ILocalita[] {
    filtratoPer = filtratoPer.toLocaleLowerCase();

    return this.localita.filter((prodottiFiltrati: ILocalita) =>
      prodottiFiltrati.paese.toLocaleLowerCase().includes(filtratoPer)
    );
  }

  ngOnInit() {
    console.log('lista creata.');
    this.listaFilter = '';
  }
}
