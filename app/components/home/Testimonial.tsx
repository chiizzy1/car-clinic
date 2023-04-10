import { feedback } from "@/constants";
import styles from "@/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section className="sm:py-16 py-6 w-full">
    <div className="container max-w-7xl mx-auto">
      <h3 className="text-2xl text-dimPurple font-bold sm:pb-6 pb-3 w-full text-center">Testimonials</h3>
      <div className="flex flex-wrap sm:justify-start justify-center w-full bg-red-200">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </div>
  </section>
);

export default Testimonials;