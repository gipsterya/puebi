import useTOCHighlight from '../hooks/useTOCHighlight'

const LINK_CLASS_NAME = 'table-of-contents__link'
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active'
const TOP_OFFSET = 100

function Headings({ headings, isChild }) {
  if (!headings.length) {
    return null
  }
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  )
}

function TOC({ headings }) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET)
  return (
    <div className='thin-scrollbar'>
      <Headings headings={headings} />
    </div>
  )
}

export default TOC
