import { FC, memo } from "react"
import ArticleCard from "../../molecule/article-card";
import type { ArticleCardProps } from "../../molecule/article-card";

export interface ArticleSectionProps {
  data: ArticleCardProps[]
  sectionStyle?: string
}

const ArticleSection: FC<ArticleSectionProps> = (props) => {
  const {data, sectionStyle} = props

  return (
    <div className={sectionStyle}>
      {data.map((article, index) => (
        <ArticleCard 
          articleUrl={article.articleUrl}
          imageUrl={article.imageUrl}
          title={article.title}
          key={index.toString()}
        />
      ))}
    </div>
  )
}

export default ArticleSection
