// @ts-expect-error: ServiceWorker can only reference by "self"
declare const self: ServiceWorkerGlobalScope

self.addEventListener('install', function () {
  self.skipWaiting()
  console.debug('Service worker has been installed.')
})

self.addEventListener('activate', function (event: ExtendableEvent) {
  event.waitUntil(handleActivation())
})

async function handleActivation() {
  await self.clients.claim()
  console.debug('Service worker has been activated.')
}
