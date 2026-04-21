import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  imports: [IonContent, IonItem, IonInput, IonButton],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

}
