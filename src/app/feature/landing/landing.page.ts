import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { FormFieldComponent } from '../../ui/form-field/form-field.component'
import { InputComponent } from '../../ui/input/input.component'
import { LabelComponent } from '../../ui/form-field/label.component'
import { ButtonComponent } from '../../ui/button/button.component'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css',
  standalone: true,
  host: {
    '[class.landingpage]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormFieldComponent, InputComponent, ReactiveFormsModule, LabelComponent, ButtonComponent],
})
export default class LandingPage {
  private readonly fb = inject(FormBuilder)
  loginForm = this.fb.nonNullable.group({
    emailOrTelephone: this.fb.control({ value: '', disabled: false }),
    password: this.fb.control({ value: '', disabled: false }),
  })

  onSubmit() {
    console.log(this.loginForm.value)
  }
}
