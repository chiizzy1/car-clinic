import { feedback } from "@/constants";
import styles from "@/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col `}>
    <h3 className={styles.heading2}>Testimonials</h3>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;