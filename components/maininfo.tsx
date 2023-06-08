import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/app/junks/modal-video";
import Image from "next/image";

import chatPic from "@/public/images/ai_chat_pic.png";
import illuPic from "@/public/images/ai_illu_pic.png";

export default function MainInfo() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="md:flex md:flex-row-reverse pt-32 pb-10 overflow-auto">   
          <Image
            className="rounded p-5"
            src={chatPic}
            width={500}
            height={400}
            alt="chatPic"
          />

          <div className="max-w-xl mx-auto p-10 flex flex-col justify-start">
            <div className="h1 mb-4 text-left">
              <span className="text-gray-900" data-aos="fade-up">
                AI Chatbot to{" "}
              </span>
              <span className="text-aicolor-blue">boost </span>
              <span className="text-gray-900">your customer service</span>
            </div>
            <p
              className="text-xl text-gray-400 mb-8 text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              For entrepreneurs, startups and freelancers. Discover coworking
              spaces designed to inspire and to connect you to a community of
              motivated people.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-aicolor-orange hover:bg-gray-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-lg"
                  href="#0"
                >
                  TRY FOR FREE
                </a>
              </div>
              {/* <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
