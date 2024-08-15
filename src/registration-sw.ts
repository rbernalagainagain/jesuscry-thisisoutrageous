import { EnvironmentInjector, inject, runInInjectionContext } from '@angular/core'
import { WINDOW } from '@core'

export function registrationSw(injector: EnvironmentInjector): void {
  runInInjectionContext(injector, () => {
    const window = inject(WINDOW)
    if (window && 'navigator' in window) {
      const navigator = window.navigator

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', {
          scope: './',
          updateViaCache: 'none',
        })
      }
    }
  })
}
