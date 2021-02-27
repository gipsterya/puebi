import Layout from '@theme/Layout'

function NotFound() {
  
  return (
    <Layout title="404 - Laman Tidak Ditemukan">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              404 - Laman Tidak Ditemukan
            </h1>
            <p>
              Maaf, laman yang Anda cari tidak berhasil ditemukan.
            </p>
            <p>
              Mohon periksa ulang tautan, mungkin salah ketik?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFound
