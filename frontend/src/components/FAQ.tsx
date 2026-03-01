import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is HAIP?",
    answer:
      "HAIP (Hazard Awareness Interactive Play) is a learning platform designed to teach youth about natural hazards, such as earthquakes and volcanic eruptions, through interactive lectures and mini-games.",
    value: "item-1",
  },
  {
    question: "What age group is HAIP designed for?",
    answer:
      "HAIP is primarily designed for children and young adults making learning fun and accessible, but the educational content is valuable for anyone looking to learn more about comprehensive disaster readiness.",
    value: "item-2",
  },
  {
    question: "Are these learning modules free?",
    answer:
      "Yes! All our interactive modules are completely free to access to ensure crucial safety and hazard information is available to everyone.",
    value: "item-3",
  },
  {
    question: "How do the interactive learning modules work?",
    answer:
      "Each module contains a mix of illustrated lessons, scientific facts, and interactive simulations that test the learner's hazard awareness and decision making in real-world scenarios.",
    value: "item-4",
  },
  {
    question: "Can teachers use HAIP in their classrooms?",
    answer:
      "Absolutely! HAIP is an excellent supplementary tool for educators teaching earth sciences, geography, or disaster readiness.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
