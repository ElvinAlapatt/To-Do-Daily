import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [ToolbarModule,ButtonModule,IconFieldModule,InputIconModule,InputTextModule,SplitButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
  items: MenuItem[] = [
    {
      label: 'Completed',
      icon: 'pi pi-refresh',
      command: () => {
        // your action
      }
    },
    {
      label: 'To Complete',
      icon: 'pi pi-times',
      command: () => {
        // your action
      }
    }
  ];
}
