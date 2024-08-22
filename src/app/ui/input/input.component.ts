import { afterNextRender, Directive, ElementRef, Input, Optional, Self } from '@angular/core'
import { FormFieldControl } from '../form-field/form-field-control'
import { NgControl, Validators } from '@angular/forms'
import { HTMLInputTypeAttribute } from '../form-field/input-type-attribute'

let nextUniqueId = 0

export function coerceBooleanProperty(value: BooleanInput): boolean {
  return value != null && `${value}` !== 'false'
}

export type BooleanInput = string | boolean | null | undefined

@Directive({
  selector: 'input[duInput]',
  exportAs: 'duInput',
  host: {
    class: 'app-input-element',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.name]': 'name || null',
    '[attr.readonly]': 'readonly || null',
    '[attr.aria-required]': 'required',
    '[attr.id]': 'id',
  },
  standalone: true,
  providers: [{ provide: FormFieldControl, useExisting: InputComponent }],
})
export class InputComponent implements FormFieldControl<unknown> {
  protected _uid = `sw-input-${nextUniqueId++}`
  private _inputValueAccessor: { value: any }

  @Input()
  get id(): string {
    return this._id
  }
  set id(value: string) {
    this._id = value || this._uid
  }
  protected _id: string

  @Input() name: string

  @Input() placeholder: string

  @Input() type: HTMLInputTypeAttribute = 'text'

  @Input({
    transform: coerceBooleanProperty,
  })
  set required(value: boolean) {
    this._required = value
  }
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false
  }
  protected _required: boolean | undefined

  @Input({ transform: coerceBooleanProperty }) disabled = false

  @Input()
  get value(): string {
    return this._inputValueAccessor.value
  }
  set value(value: any) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value
    }
  }

  /** Whether the element is readonly. */
  @Input({
    transform: coerceBooleanProperty,
  })
  readonly: boolean

  constructor(
    protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    afterNextRender(() => {
      if (this.ngControl) {
        this.ngControl.control?.valueChanges.subscribe(console.log)
      }
    })
    this.forceSetterId(this.id)
  }

  private forceSetterId(id: string) {
    this.id = id
  }
}
