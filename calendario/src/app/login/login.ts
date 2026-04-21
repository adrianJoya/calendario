import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonContent, IonItem, IonInput, IonButton, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService);

  email = '';
  password = '';
  message = '';

  async onLogin() {
    this.message = '';

    try {
      const result = await this.authService.login(this.email, this.password);
      this.message = `Login correcto: ${result.user.email}`;
      console.log('Login correcto', result.user);
    } catch (error: any) {
      this.message = this.getFirebaseErrorMessage(error?.code);
      console.error('Error en login', error);
    }
  }

  async onRegister() {
    this.message = '';

    try {
      const result = await this.authService.register(this.email, this.password);
      this.message = `Usuario creado correctamente: ${result.user.email}`;
      console.log('Registro correcto', result.user);
    } catch (error: any) {
      this.message = this.getFirebaseErrorMessage(error?.code);
      console.error('Error en registro', error);
    }
  }

  private getFirebaseErrorMessage(code?: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Ese correo ya está en uso.';
      case 'auth/invalid-email':
        return 'El correo no es válido.';
      case 'auth/weak-password':
        return 'La contraseña es demasiado débil.';
      case 'auth/invalid-credential':
        return 'Credenciales incorrectas.';
      case 'auth/missing-password':
        return 'Falta la contraseña.';
      default:
        return 'Ha ocurrido un error. Revisa la consola.';
    }
  }
}