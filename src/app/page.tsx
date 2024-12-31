import Image from "next/image";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
import InfoCard from "@/components/InfoCard";
import { Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <GeneratorCard />
      <InfoCard icon={Shield} title="Security" iconColor="text-green-500">
        This method provides high entropy{" "}
      </InfoCard>
    </div>
  );
}
