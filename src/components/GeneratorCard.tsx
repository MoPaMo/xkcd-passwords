"use client";

import { useState, useCallback } from "react";
import { Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PasswordDisplay from "./PasswordDisplay";
import EntropySlider from "./EntropySlider";
import GenerateButton from "./GenerateButton";

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

const GeneratorCard: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(4);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const { toast } = useToast();

  const entropy = Math.log2(Math.pow(words.length, wordCount));

  const generatePassword = useCallback(() => {
    setIsGenerating(true);
    const selected: string[] = [];
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      selected.push(words[randomIndex]);
    }
    setPassword(selected.join(" "));
    setTimeout(() => setIsGenerating(false), 500);
  }, [wordCount]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Copied to clipboard",
      description: "Your password has been copied to your clipboard.",
    });
  }, [password, toast]);

  return (
    <div className="relative border border-green-500/20 rounded-lg p-8 backdrop-blur-sm bg-black/50 shadow-lg shadow-green-500/10">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-green-500/5 rotate-12 transform" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/5 -rotate-12 transform" />
      </div>

      {/* Content */}
      <div className="relative space-y-6">
        {/* Password Display */}
        <PasswordDisplay password={password} onCopy={copyToClipboard} />

        {/* Controls */}
        <div className="space-y-4">
          <EntropySlider
            wordCount={wordCount}
            setWordCount={setWordCount}
            entropy={entropy}
          />
          <GenerateButton
            onGenerate={generatePassword}
            isGenerating={isGenerating}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratorCard;
