import { afterNextRender, Directive, DoCheck, ElementRef, Input, Optional, Self } from '@angular/core'
import { FormFieldControl } from '../form-field/form-field-control'
import { NgControl, Validators } from '@angular/forms'
import { HTMLInputTypeAttribute } from '../form-field/input-type-attribute'

let nextUniqueId = 0

export function coerceBooleanProperty(value: BooleanInput): boolean {
  return value != null && `${value}` !== 'false'
}

export type BooleanInput = string | boolean | null | undefined

@Directive({
  selector: 'input[duInput], textarea[duInput], select[duInput]',
  exportAs: 'duInput',
  host: {
    class: 'app-input-element',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.name]': 'name || null',
    '[attr.readonly]': 'readonly || null',
    '[attr.aria-required]': 'required',
    '[attr.id]': 'id ',
  },
  standalone: true,
  providers: [{ provide: FormFieldControl, useExisting: InputComponent }],
})
export class InputComponent implements FormFieldControl<unknown>, DoCheck {
  protected _uid = `sw-input-${nextUniqueId++}`
  private _inputValueAccessor: { value: any }
  private readonly _isTextarea: boolean = false

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

  @Input()
  get type(): HTMLInputTypeAttribute {
    return this._type
  }

  set type(value: HTMLInputTypeAttribute) {
    this._type = value || 'text'

    if (!this._isTextarea) {
      ;(this._elementRef.nativeElement as HTMLInputElement).type = this._type
    }
  }

  private _type: HTMLInputTypeAttribute = 'text'

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

    const nodeName = this._elementRef.nativeElement.nodeName.toLowerCase()
    this._isTextarea = nodeName === 'textarea'

    this.forceSetterId(this.id)
  }

  ngDoCheck() {
    if (this.ngControl)
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled
      }
  }

  private forceSetterId(id: string) {
    this.id = id
  }
}
