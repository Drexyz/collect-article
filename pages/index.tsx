import type { NextPage } from 'next'
import ArticleSection from '../components/organism/articles-section'
import { styles } from '../styles/homeStyles'
import { ARTICLE_DATA } from '../constants'

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <ArticleSection data={ARTICLE_DATA} sectionStyle={styles.articleSection} />
    </div>
  )
}

export default Home
