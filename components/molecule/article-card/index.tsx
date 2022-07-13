import { FC, memo } from "react"
import BgContainer from "../../atom/bg-container";
import { style } from "./styles";

export interface ArticleCardProps {
  title: string
  imageUrl: string
  articleUrl: string
}

const ArticleCard: FC<ArticleCardProps> = (props) => {
  const { title, imageUrl, articleUrl } = props

  return (
    <a target="_blank" href={articleUrl} rel="noreferrer">
      <BgContainer 
        url={imageUrl}
      >
        <p className={style.title}>{title}</p>
      </BgContainer>
    </a>
 )
}

export default ArticleCard
