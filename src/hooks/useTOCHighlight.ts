import {useEffect, useState} from 'react'

function useTOCHighlight(
  linkClassName: string,
  linkActiveClassName: string,
  topOffset: number,
): void {
  const [lastActiveLink, setLastActiveLink] = useState<HTMLAnchorElement>(
    undefined!,
  )

  useEffect(() => {
    function setActiveLink() {
      function getActiveHeaderAnchor(): Element | null {
        const headersAnchors: Element[] = Array.from(
          document.getElementsByClassName('anchor'),
        )

        const firstAnchorUnderViewportTop = headersAnchors.find((anchor) => {
          const {top} = anchor.getBoundingClientRect()
          return top >= topOffset
        })

        if (firstAnchorUnderViewportTop) {
          if (
            firstAnchorUnderViewportTop.getBoundingClientRect().top >= topOffset
          ) {
            const previousAnchor =
              headersAnchors[
                headersAnchors.indexOf(firstAnchorUnderViewportTop) - 1
              ]
            return previousAnchor ?? firstAnchorUnderViewportTop;
          }
          else {
            return firstAnchorUnderViewportTop;
          }
        }
        else {
          return headersAnchors[headersAnchors.length - 1]
        }
      }

      const activeHeaderAnchor = getActiveHeaderAnchor()

      if (activeHeaderAnchor) {
        let index = 0
        let itemHighlighted = false

        const links: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByClassName(
          linkClassName,
        )
        while (index < links.length && !itemHighlighted) {
          const link = links[index]
          const {href} = link
          const anchorValue = decodeURIComponent(
            href.substring(href.indexOf('#') + 1),
          )

          if (activeHeaderAnchor.id === anchorValue) {
            if (lastActiveLink) {
              lastActiveLink.classList.remove(linkActiveClassName)
            }
            link.classList.add(linkActiveClassName)
            setLastActiveLink(link)
            itemHighlighted = true
          }

          index += 1
        }
      }
    }

    document.addEventListener('scroll', setActiveLink)
    document.addEventListener('resize', setActiveLink)

    setActiveLink()

    return () => {
      document.removeEventListener('scroll', setActiveLink)
      document.removeEventListener('resize', setActiveLink)
    }
  })
}

export default useTOCHighlight
