import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { EverythingYouNeed } from "@/sections/EverythingYouNeed";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <EverythingYouNeed/>
      <Pricing/>
      <Testimonials />
      <CallToAction />
    </div>
  );
}
