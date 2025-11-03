import { SubMainBg } from "../../../components/SubMainBg/page";
import { ApplicatedProduct } from "./components/ApplicatedProduct";
import { NewsArea } from "./components/NewsArea";
import { TabArea } from "./components/TabArea";
// import AutomotiveVideo from "@/public/video/application/Automotive-video.mp4";

export default function page() {
  return (
    <div>
      <SubMainBg
        data={[
          { title: "Home", link: "/" },
          { title: "Application", link: "" },
          { title: "Automotive", link: "" },
        ]}
        video="/video/application/Automotive-video.mp4"
      />
      <ApplicatedProduct />
      <TabArea />
      <NewsArea />
    </div>
  );
}
