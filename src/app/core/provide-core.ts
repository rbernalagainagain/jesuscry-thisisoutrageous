import { provideRouter, Routes, withComponentInputBinding } from '@angular/router'
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'

interface CoreOptions {
  routes: Routes
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([])),
  ]
}
