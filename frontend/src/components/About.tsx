import hazardIllustration from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-8 sm:py-12">
      <div className="bg-muted/50 border rounded-lg py-12 px-6 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={hazardIllustration}
            className="w-[240px] md:w-[300px] object-contain rounded-lg shadow-sm mx-auto"
          />
          <div className="bg-green-0 flex flex-col">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl text-center md:text-left">
                {" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Hazard Awareness Interactive Portal
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4 text-center md:text-left md:text-xl">
                The Hazard Awareness Interactive Portal is a dedicated platform
                designed to educate communities about natural disasters. Through
                interactive lectures, engaging mini-games, and practical
                quizzes, our goal is to empower individuals with the knowledge
                they need to stay safe during earthquakes, floods, and other
                emergencies. Because when disaster strikes, preparation is your
                best defense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
