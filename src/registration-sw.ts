import { EnvironmentInjector, inject, PLATFORM_ID, runInInjectionContext } from '@angular/core'
import { WINDOW } from './app/core/injection-tokens'
import { isPlatformBrowser } from '@angular/common'

export function registrationSw(injector: EnvironmentInjector): void {
  runInInjectionContext(injector, () => {
    const platformId = inject(PLATFORM_ID)
    if (isPlatformBrowser(platformId)) {
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
    }
  })
}
