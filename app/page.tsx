import Image from "next/image";
import { Navbar } from "./landingpage/navbar";
import { Hero } from "./landingpage/hero";
import { Hero2 } from "./landingpage/hero2";
import { Whatis } from "./landingpage/whatisswagata";
import { CTA } from "./landingpage/CTA";

import { Feature } from "./landingpage/feature";
import { Review } from "./landingpage/review"
import { QuoteCTA } from "./landingpage/quoteCTA";
import { Footer } from "./landingpage/footer";

export default function Home() {
  return (
    <main className="text-slate-800">
      <Navbar />
      <Hero />
      <Hero2 />
      <Whatis />
      <CTA />
      <Feature />
      <Review />
      <QuoteCTA />
      <Footer />

      <div>
      </div>
    </main >
  );
}
