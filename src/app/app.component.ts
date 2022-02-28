import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(translate:TranslateService){
    translate.addLangs(['es','en']);
    translate.setDefaultLang('es')
  }
  title = 'ngrx';
}
