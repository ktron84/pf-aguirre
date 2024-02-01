import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router: Router, private route:ActivatedRoute) { }

  logout() {
    // Remove the token from local storage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    this.router.navigate(['auth', 'login']);
  }
}