import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { moonOutline, sunnyOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private themeService = inject(ThemeService);

  readonly isDark = this.themeService.isDark;
  readonly currentIcon = computed(() =>
    this.isDark() ? sunnyOutline : moonOutline,
  );

  constructor() {
    addIcons({ moonOutline, sunnyOutline });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
