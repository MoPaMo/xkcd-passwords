"use client";

import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
import InfoCard from "@/components/InfoCard";
import { Shield, Zap, Clock, ClockAlert , InfoIcon } from "lucide-react";
import PasswordCrackTime from "@/components/CrackingTime";
import { useState } from "react";
import words from "@/data/words";

const Page: React.FC = () => {
  const [wordCount, setWordCount] = useState<number>(4);
  const entropy: number = Math.log2(Math.pow(words.length, wordCount));

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <Header />

        <GeneratorCard wordCount={wordCount} setWordCount={setWordCount} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard icon={Shield} title="Security" iconColor="text-green-500">
            Using {wordCount} words from a list of {words.length} words provides{" "}
            {entropy.toFixed(1)} bits of entropy.
          </InfoCard>
          <InfoCard
            icon={
              Math.pow(2, entropy - 10) > 3600 * 24 * 365 ? Clock : ClockAlert
            }
            title="Cracking Time"
            iconColor="text-blue-500"
          >
            <PasswordCrackTime entropy={entropy} />
          </InfoCard>
          <InfoCard icon={Zap} title="Memorability" iconColor="text-blue-500">
            Words are easier to remember than random characters, but still
            provide high security.
          </InfoCard>
        <a href="https://xkcd.com/936/" className="col-span-1 md:col-span-2 lg:col-span-3">
            <InfoCard icon={InfoIcon} title="Origin" iconColor="text-green-500">
                This method is based on the XKCD web comic "Password Strength" (number 936). Click here to read it!
            </InfoCard>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
