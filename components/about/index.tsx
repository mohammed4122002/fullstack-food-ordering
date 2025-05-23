import { Routes } from "@/constants/enums";
import MainHeading from "../main-heading";

async function About() {
  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={"Our Story"} title={"AboutUs"} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia pariatur quas quos illo nobis nam, nihil minus accusantium
            exercitationem quibusdam dolor tempore delectus tenetur alias nemo
            repudiandae iste temporibus? 
          </p>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia pariatur quas quos illo nobis nam, nihil minus accusantium
            exercitationem quibusdam dolor tempore delectus tenetur alias nemo
            repudiandae iste temporibus? 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia pariatur quas quos illo nobis nam, nihil minus accusantium
            exercitationem quibusdam dolor tempore delectus tenetur alias nemo
            repudiandae iste temporibus? 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
