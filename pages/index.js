import {
  Header,
  BannerSlider,
  WhoWeAre,
  Concepts,
  Publications,
  Awards,
  Office,
  Footer,
} from "components";

export default function Home() {
  return (
    <div className="uppercase">
      <Header />
      <BannerSlider />
      <WhoWeAre />
      <Concepts />
      <Publications />
      <Awards />
      <Office />
      <Footer />
    </div>
  );
}
