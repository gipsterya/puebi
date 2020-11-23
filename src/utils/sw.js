import {registerRoute} from 'workbox-routing'
import {StaleWhileRevalidate} from 'workbox-strategies'

function swCustom(params) {
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: running swCustom code', params)
  }

  registerRoute((context) => {
    return [
      /netlify\.com\/img/,
    ].some((regex) => context.url.href.match(regex))
  }, new StaleWhileRevalidate())
}

export default swCustom
