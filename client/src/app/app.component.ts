/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
//import { TranslateService } from 'ng2-translate/ng2-translate';
import './rxjs-operators';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  private nameApp: string = 'Datastore';

  public url = 'https://twitter.com/AngularClass';

  isDarkTheme: boolean = false;

  private menu = [
    {name: 'menu.mFile', icon: 'file', content: 'file', checked: false, disabled: false, order: 1},
    {name: 'menu.mEdit', icon: 'edit', content: 'edit', checked: false, disabled: false, order: 2},
    {name: 'menu.mView', icon: 'view', content: 'view', checked: false, disabled: false, order: 3},
    {name: 'menu.mHelp', icon: 'help', content: 'help', checked: false, disabled: false, order: 4},
  ];

  private dataObjectTransport = [
    {name: 'data.dExploitant', description: '', icon: 'file', link: 'operator', checked: false, disabled: false, order: 1},
    {name: 'data.dReseau', description: '', icon: 'file', link: 'network', checked: false, disabled: false, order: 2},
    {name: 'data.dTransporteur', description: 'toto', icon: 'transporter', link: 'edit', checked: false, disabled: false, order: 3},
    {name: 'data.dPeriode', description: '', icon: 'view', link: 'calendar', checked: false, disabled: false, order: 4},
    {name: 'data.dPOI', description: '', icon: 'help', link: 'poi', checked: false, disabled: false, order: 5},
    {name: 'data.dArret', description: '', icon: 'help', link: 'stop', checked: false, disabled: false, order: 6},
    {name: 'data.dLigne', description: '', icon: 'help', link: 'line', checked: false, disabled: false, order: 7},
    {name: 'data.dHoraire', description: '', icon: 'help', link: 'hour', checked: false, disabled: false, order: 8},
  ];

 /* constructor(private translate: TranslateService) {
      translate.addLangs(["en", "fr"]);
      translate.setDefaultLang('fr');

      let browserLang: string = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }*/

  public getMenu() {
    return this.menu;    
  }

  public getName() {
    return this.nameApp;    
  }
  public getDataObjectTransport = function() {
    return this.dataObjectTransport;    
  }
  public ngOnInit() {
  } 

}