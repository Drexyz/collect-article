import Image from "next/image";
import { FC } from "react";
import { styles } from "./styles";
import Link from "next/link";


const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <div className="cursor-pointer">
          <Image
            src="/document.png"
            alt="image-icon"
            width={40}
            height={40}
          />
        </div>
      </Link>

      <p className={styles.title}>Document Collection</p>
    </nav>
  )
}

export default Navbar