import { useEffect, useState } from "react";

import { Testimony as TestimonyInterface } from "@/utils/types";
import instance from "@/services/instance";
import SectionWrapper from "@/components/SectionWrapper";
import ListWrapper from "@/components/ListWrapper";
import SectionHeader from "@/components/SectionHeader";
import Card, { CardAvatar, CardContent } from "@/components/Card";

export default function Testimony() {
  const [testimonies, setTestimonies] = useState<TestimonyInterface[]>([]);
  const getTestimonies = async () => {
    try {
      const { data } = await instance.get("/api/testimony?limit=5");
      setTestimonies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTestimonies();
  }, []);

  return (
    <SectionWrapper id="testimonies">
      <SectionHeader text="What they say about us?" />
      <ListWrapper>
        {testimonies.map((item, index) => (
          <Card key={index}>
            <CardAvatar src={item.imgUrl} alt={item.name} />
            <CardContent>
              <h4 className="text-center my-2">{item.name}</h4>
              <p className="text-center my-2">
                {"⭐".repeat(Math.round(item.star))}
              </p>
              <p className="text-center">{item.comment}</p>
            </CardContent>
          </Card>
        ))}
      </ListWrapper>
    </SectionWrapper>
  );
}
