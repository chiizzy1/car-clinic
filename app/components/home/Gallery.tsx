import { robot } from "@/assets"
import styles from "@/style"
import Image from "next/image"

const Gallery = () => (
  <section>
    <h3 className={styles.heading2}>Gallery</h3>
    <div className="grid gap-4 grid-cols-fluid">
      <Image src={robot} alt="gallery" width={300} height={300} />
      <Image src={robot} alt="gallery" width={300} height={300} />
      <Image src={robot} alt="gallery" width={300} height={300} />
      <Image src={robot} alt="gallery" width={300} height={300} />
      <Image src={robot} alt="gallery" width={300} height={300} />
      <Image src={robot} alt="gallery" width={300} height={300} />
    </div>
  </section>
)

export default Gallery