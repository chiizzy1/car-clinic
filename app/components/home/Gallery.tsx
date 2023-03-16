import { robot } from "@/assets"
import styles from "@/style"
import Image from "next/image"

const Gallery = () => (
  <section>
    <h3 className={styles.heading2}>Gallery</h3>
    <div className="grid gap-4 grid-cols-fluid">
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/100i1f000001gp42r7B9E_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/100g15000000xpc4u18B2_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/01002120006cf6uyeCC67_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/0100e120006a2hqwa4DAC_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/100i1f000001gp42r7B9E_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/100g15000000xpc4u18B2_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/01002120006cf6uyeCC67_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
      <div className="bg-green-300">
        <Image src="https://youimg1.c-ctrip.com/target/0100e120006a2hqwa4DAC_C_480_375.jpg" alt="brj" height={1000} width={1000}/>
      </div>
    </div>
  </section>
)

export default Gallery