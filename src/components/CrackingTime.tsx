import React from "react";

interface PasswordCrackTimeProps {
  entropy: number;
}

const PasswordCrackTime: React.FC<PasswordCrackTimeProps> = ({ entropy }) => {
  const crackTimeInSeconds = Math.pow(2, entropy - 10).toFixed(0);

  const formatTime = (seconds: string): string => {
    let timeValue: number = parseInt(seconds, 10);
    let unit: string = "seconds";
    let modifier: string = "about";

    switch (true) {
      case timeValue < 60:
        unit = "seconds";
        break;
      case timeValue < 3600:
        timeValue = Math.floor(timeValue / 60);
        unit = "minutes";
        break;
      case timeValue < 86400:
        timeValue = Math.floor(timeValue / 3600);
        unit = "hours";
        break;
      case timeValue < 31536000:
        timeValue = Math.floor(timeValue / 86400);
        unit = "days";
        break;
      default:
        timeValue = Math.floor(timeValue / 31536000);
        unit = "years";
        modifier = "over";
        break;
    }

    return `${modifier} ${timeValue} ${unit}`;
  };

  return (
    <>
      It would take a computer{" "}
      <strong>{formatTime(crackTimeInSeconds)}</strong> to crack the password.
    </>
  );
};

export default PasswordCrackTime;