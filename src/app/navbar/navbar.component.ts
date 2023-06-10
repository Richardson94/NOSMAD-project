import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  disabledIconConfig: NbIconConfig = {
    icon: 'settings-2-outline',
    pack: 'eva',
  };
}
