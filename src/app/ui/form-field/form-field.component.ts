import { ChangeDetectionStrategy, Component, computed, ContentChild, contentChild } from '@angular/core'
import { LabelComponent } from './label.component'
import { FormFieldControl } from './form-field-control'
import { AbstractControlDirective } from '@angular/forms'

@Component({
  selector: 'app-form-field',
  styleUrl: './form-field.component.css',
  templateUrl: './form-field.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ng-untouched]': 'shouldForward("untouched")',
    '[class.ng-search]': 'shouldReturnType("search")',
    '[class.ng-touched]': 'shouldForward("touched")',
    '[class.ng-pristine]': 'shouldForward("pristine")',
    '[class.ng-dirty]': 'shouldForward("dirty")',
    '[class.ng-valid]': 'shouldForward("valid")',
    '[class.ng-invalid]': 'shouldForward("invalid")',
    '[class.ng-pending]': 'shouldForward("pending")',
  },
})
export class FormFieldComponent {
  private readonly _labelChild = contentChild(LabelComponent)
  @ContentChild(FormFieldControl) _formFieldControl: FormFieldControl<any>

  /** Gets the current form field control */
  get _control(): FormFieldControl<any> {
    return this._formFieldControl
  }

  hasLabel = computed(() => !!this._labelChild())

  shouldForward(prop: keyof AbstractControlDirective): boolean {
    const control = this._control ? this._control.ngControl : null
    return control && control[prop]
  }

  shouldReturnType(type: 'text' | 'search'): boolean {
    return this._control.type === type
  }
}
