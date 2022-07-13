import { FC, ReactNode, memo } from "react"
import { style } from "./styles"

export interface BgContainerProps {
  url: string,
  children?: ReactNode
}

const BgContainer: FC<BgContainerProps> = memo((props) => {
  const { url, children } = props

  return (
    <div
      className={`${style.container}`}
    >
      <img className={style.image} src={url} alt="article image" />
      {children}
    </div>
  )
})

BgContainer.displayName = "BgContainer"

export default BgContainer