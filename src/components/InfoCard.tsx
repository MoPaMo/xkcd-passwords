"use client";

import { IconType } from "react-icons";

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
  iconColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  children,
  iconColor,
}) => {
  return (
    <div className="p-4 rounded-lg border border-green-500/20 bg-black/50">
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
};

export default InfoCard;
