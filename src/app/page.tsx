import Benefits from "./_components/benefits";
import Cta from "./_components/cta";
import { benefitOne, benefitTwo } from "./_components/data";
import Faq from "./_components/faq";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import PopupWidget from "./_components/popupWidget";
import SectionTitle from "./_components/sectionTitle";
import Testimonials from "./_components/testimonials";
import Video from "./_components/video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="The Niche Benefits"
        title="why should you use niche to make your brand stand out">
        Navigating the digital landscape with finesse, The Niche stands as a beacon of innovation and expertise, we redefine success in the digital era.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      {/* <Footer /> */}
      {/* <PopupWidget /> */}
    </>
  );
}
