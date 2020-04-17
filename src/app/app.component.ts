import { Component } from '@angular/core';
import * as csv from "csvtojson";


@Component({
  selector: 'csvr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  json: any[];
  filename: string;
  constructor() { }

  fileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.filename = file.name;
    file.text().then(content => {
      csv().fromString(content).then(json => {
        this.json = json;
      });
    })
  }
}
