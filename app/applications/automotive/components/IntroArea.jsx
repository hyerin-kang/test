import Link from "next/link";
import { TextReveal } from "../../../../components/TextReveal/page";
import Image from "next/image";
import InteriorPNG from "@/public/images/content/automotive-interior.png";
import ExteriorPNG from "@/public/images/content/automotive-exterior.png";
import ArrowIcon from "@/public/images/icon/ico-link-arrow.svg";

export const IntroArea = () => {
  return (
    <div>
      <TextReveal>
        <div className="flex md:flex-row flex-col-reverse md:p-2.5 pl-5 py-2.5 border-b border-[#30AE56] border-opacity-[0.2]">
          <Link
            href="automotive/exterior"
            className="arr-icon max-w-[700px] w-full md:p-10 pr-5 py-5 flex md:flex-col flex-row justify-between"
          >
            <div>
              <p className="content-title">Exterior</p>
              <div className="md:text-subtext text-button flex md:gap-[138px] gap-[58px] md:mt-14 mt-10">
                <div>
                  <p className="font-bold">Key Factor</p>
                  <p className="mt-3 line-clamp-[22px]">
                    Flexible Headlamp design
                    <br />
                    Aesthetic DRL / Signaling
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[#30AE56]">SSC Solution</p>
                  <p className="mt-3 line-clamp-[22px]">
                    WICOP
                    <br />
                    3030/3014
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={ArrowIcon}
                alt="right_arrow"
                className="md:w-[46px] w-[22px]"
              />
            </div>
          </Link>
          <div className="flex-1 min-w-[50%]">
            <Image
              src={ExteriorPNG}
              alt="ExteriorPNG"
              className="w-full h-full"
            />
          </div>
        </div>
      </TextReveal>
      <TextReveal>
        <div className="flex md:flex-row-reverse flex-col-reverse md:p-2.5 pl-5 py-2.5 border-b border-[#30AE56] border-opacity-[0.2]">
          <Link
            href="automotive/interior"
            className="arr-icon max-w-[700px] w-full md:p-10 pr-5 py-5 flex md:flex-col flex-row justify-between"
          >
            <div>
              <p className="content-title">Interior</p>
              <div className="md:text-subtext text-button flex md:gap-[138px] gap-[58px] md:mt-14 mt-10">
                <div>
                  <p className="font-bold">Key Factor</p>
                  <p className="mt-3 line-clamp-[22px]">
                    Natural Lighting
                    <br />
                    Energy saving
                    <br />
                    Healthy Lighting
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[#30AE56]">SSC Solution</p>
                  <p className="mt-3 line-clamp-[22px]">
                    SunLike
                    <br />
                    Acrich
                    <br />
                    Violeds
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={ArrowIcon}
                alt="right_arrow"
                className="md:w-[46px] w-[22px]"
              />
            </div>
          </Link>
          <div className="flex-1 min-w-[50%]">
            <Image
              src={InteriorPNG}
              alt="InteriorPNG"
              className="w-full h-full"
            />
          </div>
        </div>
      </TextReveal>
    </div>
  );
};
