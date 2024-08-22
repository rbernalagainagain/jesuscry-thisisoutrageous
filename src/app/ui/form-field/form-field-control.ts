import { NgControl } from '@angular/forms'
import { Directive } from '@angular/core'
import { HTMLInputTypeAttribute } from './input-type-attribute'

@Directive()
export abstract class FormFieldControl<T> {
  /** The value of the control. */
  value: T | null

  readonly id: string

  readonly placeholder: string

  readonly required: boolean

  readonly ngControl: NgControl | null

  readonly disabled: boolean

  readonly type: HTMLInputTypeAttribute
}
