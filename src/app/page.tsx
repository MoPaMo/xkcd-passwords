"use client";

import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";
import InfoCard from "@/components/InfoCard";
import { Shield, Zap } from "lucide-react";

const words: string[] = [
  "correct",
  "horse",
  "battery",
  "staple",
  "apple",
  "banana",
  "orange",
  "mango",
  "purple",
  "green",
  "blue",
  "red",
  "happy",
  "quick",
  "lazy",
  "brave",
  "silent",
  "loud",
  "soft",
  "hard",
  "light",
  "dark",
  "cold",
  "hot",
  "fast",
  "slow",
  "big",
  "small",
  "strong",
  "weak",
  "high",
  "low",
];

const Page: React.FC = () => {
  const wordCount: number = 4;
  const entropy: number = Math.log2(Math.pow(words.length, wordCount));

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <Header />

        <GeneratorCard />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard icon={Shield} title="Security" iconColor="text-green-500">
            Using {wordCount} words from a list of {words.length} words provides{" "}
            {entropy.toFixed(1)} bits of entropy.
          </InfoCard>
          <InfoCard icon={Zap} title="Cracking Time" iconColor="text-blue-500">
            With an assumed rate of 1,000 guesses per second, it would take 
          </InfoCard>
          <InfoCard icon={Zap} title="Memorability" iconColor="text-blue-500">
            Words are easier to remember than random characters, but still
            provide high security.
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Page;
