import SectionWrapper from "@/components/SectionWrapper";
import images from "@/constants/galleryImages";

export default function Gallery() {
  return (
    <main>
      <SectionWrapper id="gallery">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={`/images/${image}`}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
