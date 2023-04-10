import { feedback } from "@/constants";
import styles from "@/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section className="sm:py-16 py-6 w-full">
    <div className="container max-w-7xl mx-auto">
      <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center">Testimonials</h3>
      <div className="flex flex-wrap gap-3 sm:justify-start justify-center w-full">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </div>
  </section>
);

export default Testimonials;