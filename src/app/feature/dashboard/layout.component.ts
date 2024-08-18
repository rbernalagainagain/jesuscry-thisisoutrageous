import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardLayoutComponent {}
