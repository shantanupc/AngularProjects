import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, StaffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NonModular';
}
