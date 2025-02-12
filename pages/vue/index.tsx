import type { NextPage } from 'next'
import { useRef, useEffect, useState, useMemo } from 'react'

// components
import ArticleSection from '../../components/organism/articles-section'
import { VUE } from '../../constants/article'

const Vue: NextPage = () => {
  const divRef = useRef<any>(null)
  const [current, setCurrent] = useState<boolean>(false)

  /**
   * render container based on observer
   */
  const showDiv = useMemo(() => (
    current ? "translate-x-0" : "-translate-x-full"
  ), [current])

  /**
   * observer
   */
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      setCurrent(entries[0].isIntersecting)
    })
    observer.observe(divRef.current)
  }, [divRef])

  return (
    <div className={`p-7 md:p-14 mx-auto min-h-screen transition duration-1000 ease-in-out ${showDiv}`} ref={divRef}>
      <ArticleSection data={VUE} sectionStyle="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center" />
    </div>
  )
}

export default Vue
