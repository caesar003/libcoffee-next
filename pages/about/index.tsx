import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import aboutSections from "@/constants/about";

export default function About() {
  return (
    <main>
      <SectionWrapper id="header">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
      </SectionWrapper>
      {aboutSections.map((story, idx) => {
        const isEven: boolean = idx % 2 === 0;
        return (
          <SectionWrapper key={idx} id={`about-${story.title}`}>
            <div className="flex gap-4">
              <div
                className="flex-1"
                style={{ order: isEven ? 1 : 2 }}
              >
                <img
                  className="max-h-[450px] max-w-[450px] rounded-[4px]"
                  src={`/images/${story?.imgUrl}`}
                  alt={story.title}
                />
              </div>

              <div className="flex flex-col p-4 flex-1 items-center justify-center p-[40px]" style={{ order: isEven ? 2 : 1 }}>
                <SectionHeader text={story.title} />
                <p>{story.description}</p>
              </div>
            </div>
          </SectionWrapper>
        );
      })}
    </main>
  );
}


