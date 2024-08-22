import { Directive } from '@angular/core'

@Directive({
  selector: 'label[duLabel]',
  exportAs: 'duLabel',
  standalone: true,
})
export class LabelComponent {}
