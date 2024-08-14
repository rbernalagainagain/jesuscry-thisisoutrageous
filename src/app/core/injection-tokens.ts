import { inject, InjectionToken, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

export const WINDOW = new InjectionToken<Window & typeof globalThis | null>('Window', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    if(isPlatformBrowser(platformId)){
      return window
    }

    return null;

  }
})

export const LOCAL_STORAGE = new InjectionToken<Storage | null>('Local Storage', {
  providedIn: 'root',
  factory: ():Storage | null => {
    const platformId = inject(PLATFORM_ID);
    if(isPlatformBrowser(platformId)){
      return localStorage
    }
    return null;
  }
})


