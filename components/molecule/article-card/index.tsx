import { FC, memo } from "react"
import BgContainer from "../../atom/bg-container";
import { style } from "./styles";
import Link from "next/link";

export interface ArticleCardProps {
  title: string
  imageUrl: string
  articleUrl: string
}

const ArticleCard: FC<ArticleCardProps> = (props) => {
  const { title, imageUrl, articleUrl } = props

  const isCollection = articleUrl.split("")[0] === "/"

  return (
    <Link href={articleUrl} passHref>
      <a target={isCollection ? "_self" : "_blank"} rel="noopener noreferrer">
        <BgContainer url={imageUrl}>
          <p className={style.title}>{title}</p>
        </BgContainer>
      </a>
    </Link>
  )
}

export default ArticleCard
