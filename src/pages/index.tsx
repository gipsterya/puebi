import { Fragment } from 'react'
import Container from 'components/container'
import SEO from 'components/seo'
import Link from 'components/link'
import routes from 'data/routes'
import config from 'utils/config'

export default function Index() {
  return (
    <Container>
      <SEO />
      <div className="prose mx-auto w-full bg-light pt-8 dark:bg-dark dark:prose-dark md:prose-lg">
        <h1>PUEBI Daring</h1>
        <p>
          PUEBI Daring adalah versi aplikasi/web ramah gawai dari{' '}
          <em>Pedoman Umum Ejaan Bahasa Indonesia</em> Permendikbud 50/2015. Isi
          PUEBI Daring diperkaya dengan beberapa catatan tambahan yang belum
          dinyatakan secara eksplisit pada dokumen asli Permendikbud 50/2015.
        </p>
        <hr />
        <h2>Daftar Isi</h2>
        {routes
          .filter((routesOnly) => routesOnly.title !== 'Beranda')
          .map((route) => (
            <Fragment key={route.title}>
              <h3>{route.title}</h3>
              <ul>
                {route.tree &&
                  route.tree.map((routeTree) => (
                    <li key={routeTree.title}>
                      <Link href={route.path + routeTree.path}>
                        {routeTree.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Fragment>
          ))}
        <hr />
        <h2>Hak Cipta dan Lisensi</h2>
        <p>
          Hak cipta PUEBI dimiliki oleh Badan Pengembangan dan Pembinaan Bahasa
          Republik Indonesia. Seluruh konten dalam situs web ini dilisensikan di
          bawah CC BY-SA 4.0 dan kode sumber dilisensikan di bawah Lisensi MIT
          oleh {config.author.name}.
        </p>
      </div>
    </Container>
  )
}
