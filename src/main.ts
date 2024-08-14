import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'
import { registrationSw } from './registration-sw'

bootstrapApplication(AppComponent, appConfig)
  .then(({ injector }) => registrationSw(injector))
  .catch((err) => console.error(err))
