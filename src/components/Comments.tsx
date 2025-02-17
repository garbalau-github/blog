import * as React from 'react'
import Giscus from '@giscus/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useColorMode } from 'theme-ui'
import { Link, Flex } from '@theme-ui/components'

const id = 'inject-comments'

const Comments = () => {
  const [colorMode] = useColorMode()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <Giscus
      id={id}
      repo="tkdodo/blog-comments"
      repoId="MDEwOlJlcG9zaXRvcnkyOTE1MzI1NjI="
      category="Announcements"
      categoryId="DIC_kwDOEWBvEs4COl22"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  ) : null
}

const WithBytes = () => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 3 }}>
      <Link
        href="https://bytes.dev/?r=dom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          placeholder="blurred"
          src="../../static/images/bytes.jpg"
          alt="Bytes - the JavaScript Newsletter that doesn't suck"
        />
      </Link>
      <Comments />
    </Flex>
  )
}

export default WithBytes
