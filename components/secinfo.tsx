import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/app/junks/modal-video";
import Image from "next/image";

import illuPic from "@/public/images/ai_illu_pic.png";

export default function SecInfo() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="md:flex md:flex-row pt-32 pb-10 overflow-auto">
          <div className="max-w-xl mx-auto p-10 flex flex-col justify-start">
            <div className="h3 mb-2 text-left">
              <span className="text-gray-900" data-aos="fade-up">
                Customer support chatbot
              </span>
            </div>
            <p
              className="text-xl text-gray-400 mb-8 text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A chatbot for helping customer to get correct answer by feeding
              the system with different kind of knowledge base(FAQ, Product
              Design, Instruction and anything contains information about your
              product).
            </p>
            
          </div>
          <Image
            className="rounded p-5"
            src={illuPic}
            width={500}
            height={400}
            alt="chatPic"
          />
        </div>
      </div>
    </section>
  );
}
