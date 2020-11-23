import React from 'react'
import Head from '@docusaurus/Head'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Paginator from '../components/Paginator'
import TOC from '../components/TableOfContent'
import config from '../utils/config'
import styles from './styles.module.css'

function DocItem(props) {
  const {siteConfig} = useDocusaurusContext()
  const {url: siteUrl} = siteConfig
  const {content: DocContent} = props
  const {metadata} = DocContent
  const {
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
  } = metadata
  const {
    frontMatter: {
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent

  return (
    <>
      <Head>
        <html lang="id" />
        <meta name="docusaurus_language" content="id" />
        <title>{title}</title>
        <meta name="keywords" content={config.keywords} />
        <meta name="description" content={config.siteDesc} />
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:description" content={config.siteDesc} />
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        <meta property="og:image" content={`${config.siteUrl}${config.pathPrefix}${config.siteBanner}`} />
        
        <meta property="twitter:title" content={title} />
        <meta property="twitter:creator" content={config.creatorName} />
        <meta property="twitter:description" content={config.siteDesc} />
        {permalink && <meta property="twitter:url" content={siteUrl + permalink} />}
        <meta property="twitter:image" content={`${config.siteUrl}${config.pathPrefix}${config.siteBanner}`} />
      </Head>

      <div className="row">
        <div
          className={'col', [styles.docItemCol].join('')}>
          <div className={styles.docItemContainer}>
            <article>
              {!hideTitle && (
                <header>
                  <h1 className={styles.docTitle}>{title}</h1>
                </header>
              )}
              <div className="markdown">
                <DocContent />
              </div>
            </article>
            {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="margin-vert--xl">
                <div className="row">
                  <div className="col">
                    {editUrl && (
                      <a
                        href={editUrl}
                        target="_blank"
                        rel="noreferrer noopener">
                        <svg
                          fill="currentColor"
                          height="1.2em"
                          width="1.2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 40 40"
                          style={{
                            marginRight: '0.3em',
                            verticalAlign: 'sub',
                          }}>
                          <g>
                            <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
                          </g>
                        </svg>
                        Edit di GitHub
                      </a>
                    )}
                  </div>
                  {(lastUpdatedAt || lastUpdatedBy) && (
                    <div className="col text--right">
                      <em>
                        <small>
                          Last updated{' '}
                          {lastUpdatedAt && (
                            <>
                              on{' '}
                              <time
                                dateTime={new Date(
                                  lastUpdatedAt * 1000,
                                ).toISOString()}
                                className={styles.docLastUpdatedAt}>
                                {new Date(
                                  lastUpdatedAt * 1000,
                                ).toLocaleDateString()}
                              </time>
                              {lastUpdatedBy && ' '}
                            </>
                          )}
                          {lastUpdatedBy && (
                            <>
                              by <strong>{lastUpdatedBy}</strong>
                            </>
                          )}
                          {process.env.NODE_ENV === 'development' && (
                            <div>
                              <small>
                                {' '}
                                (Simulated during dev for better perf)
                              </small>
                            </div>
                          )}
                        </small>
                      </em>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="margin-vert--lg">
              <Paginator metadata={metadata} />
            </div>
          </div>
        </div>
        {!hideTableOfContents && DocContent.rightToc && (
          <div className="col col--3">
            <TOC headings={DocContent.rightToc} />
          </div>
        )}
      </div>
    </>
  )
}

export default DocItem
