import Hero from "../components/Hero";
import ImpactSlider from "../components/ImpactSlider";
import ImpactCounters from "../components/ImpactCounters";
import Programs from "../components/Programs";
import { impactData, programsData } from "./impactData";
import DonateCTA from "../components/DonateCTA";
import Volunteers from "../components/Volunteers";

export default function Home() {
  return (
    <>
      <ImpactSlider className="mb-8" />
      <Hero />
      <div className="bg-animated-gradient text-white">
        <ImpactCounters items={impactData} />
      </div>
      <Programs items={programsData} />
      <Volunteers />
      <DonateCTA />
    </>
  );
}
