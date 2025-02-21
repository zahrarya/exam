import ImgMediaCard from "@/components/Card";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HPSection";
import ButtonAppBar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <ButtonAppBar />
      <HomeSection />
      <CardSection />
      <Footer />
    </>
  );
}
