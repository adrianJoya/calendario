import { Injectable, signal, computed } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'app-theme';

  private currentThemeSignal = signal<AppTheme>('light');

  currentTheme = computed(() => this.currentThemeSignal());
  isDark = computed(() => this.currentThemeSignal() === 'dark');

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey) as AppTheme | null;
    const theme: AppTheme = savedTheme === 'dark' ? 'dark' : 'light';
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const nextTheme: AppTheme = this.isDark() ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  setTheme(theme: AppTheme): void {
    this.applyTheme(theme);
  }

  private applyTheme(theme: AppTheme): void {
    this.currentThemeSignal.set(theme);
    localStorage.setItem(this.storageKey, theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }
}