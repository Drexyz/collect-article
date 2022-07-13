import type { NextPage } from 'next'
import {  useRef, useEffect, useState, useMemo } from 'react'

// components
import ArticleSection from '../components/organism/articles-section'
import { ARTICLE_DATA } from '../constants'

// styles
import { style } from '../styles/homeStyles'

const Home: NextPage = () => {
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
    <>
      <div className={`${style.container} ${showDiv}`} ref={divRef}>
        <ArticleSection data={ARTICLE_DATA} sectionStyle={style.articles} />
      </div>
    </>
  )
}

export default Home
