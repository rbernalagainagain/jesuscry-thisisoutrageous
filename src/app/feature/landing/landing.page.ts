import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { FormFieldComponent } from '../../ui/form-field/form-field.component'
import { InputComponent } from '../../ui/input/input.component'
import { LabelComponent } from '../../ui/form-field/label.component'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css',
  standalone: true,
  host: {
    '[class.landingpage]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormFieldComponent, InputComponent, ReactiveFormsModule, LabelComponent],
})
export default class LandingPage {
  private readonly fb = inject(FormBuilder)
  loginForm = this.fb.group({
    emailOrTelephone: [''],
    password: [''],
  })

  onSubmit() {
    console.log(this.loginForm.value)
  }
}
