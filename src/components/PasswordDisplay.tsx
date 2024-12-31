"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
  password,
  onCopy,
}) => {
  return (
    <div className="relative group">
      <div className="min-h-[80px] font-mono text-2xl sm:text-3xl text-center p-4 rounded border border-green-500/20 bg-black/50 break-all flex items-center justify-center">
        {password || "Click generate to create password"}
      </div>
      {password && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={onCopy}
        >
          <Copy className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default PasswordDisplay;
