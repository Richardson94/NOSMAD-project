import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nosmad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'News',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'ToDo',
        icon: 'pi pi-fw pi-file-edit',
      },
      {
        label: 'Tools',
        icon: 'pi pi-fw pi-wrench',
      },
      {
        label: 'Schedule',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  }
}
