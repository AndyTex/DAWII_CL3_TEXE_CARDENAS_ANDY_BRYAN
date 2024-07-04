import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './angular-material/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DAWII_CL3_TEXE_CARDENAS_ANDY_BRYAN';

  constructor(private router:Router, private activatedRoute: ActivatedRoute){}

  Pregunta2() {
    this.router.navigate(['/pregunta02']);
  }

  Pregunta3() {
    this.router.navigate(['/pregunta03']);
  }

  Bienvenido() {
    this.router.navigate(['/']);
  }

}
