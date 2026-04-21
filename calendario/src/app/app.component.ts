import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from './theme.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,HeaderComponent],
})
export class AppComponent {
  private themeService = inject(ThemeService);

  constructor() {
    this.themeService.initTheme();
  }}
