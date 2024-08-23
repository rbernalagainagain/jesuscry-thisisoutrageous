import { Directive } from '@angular/core'

@Directive({
  selector: 'button[duButton]',
  exportAs: 'duButton',
  host: {
    '[class.du-button-base]': 'true',
  },
  standalone: true,
})
export class ButtonComponent {}
