import type { NextPage } from 'next'
import ArticleSection from '../components/organism/articles-section'
import { ARTICLE_DATA } from '../constants'

const Home: NextPage = () => {
  
  return (
    <div className="p-14 mx-auto">
      <ArticleSection data={ARTICLE_DATA} sectionStyle="grid grid-cols-3 gap-4 justify-items-center" />
    </div>
  )
}

export default Home
