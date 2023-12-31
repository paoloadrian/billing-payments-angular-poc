import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Billing Payments POC';

  constructor(private router: Router) { }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
