"use client";

import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GenerateButtonProps {
  onGenerate: () => void;
  isGenerating: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  onGenerate,
  isGenerating,
}) => {
  return (
    <Button
      className="w-full h-12 relative overflow-hidden group"
      onClick={onGenerate}
      disabled={isGenerating}
    >
      <span className="relative flex items-center justify-center gap-2">
        <RefreshCw
          className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`}
        />
        Generate New Password
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  );
};

export default GenerateButton;
