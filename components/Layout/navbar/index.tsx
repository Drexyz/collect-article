import Image from "next/image";
import { FC } from "react";
import { styles } from "./styles";


const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/document.png"
        alt="image-icon"
        width={40}
        height={40}
      />
    </nav>
  )
}

export default Navbar