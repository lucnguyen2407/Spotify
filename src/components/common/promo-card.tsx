import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

export interface PromoCardProps {
  title: string;
  description: string;
  buttonText: string;
  idx?: number;
  onButtonClick?: () => void;
  className?: string;
  buttonClassName?: string;
  children?: React.ReactNode;
}

export function PromoCard({
  title,
  description,
  buttonText,
  onButtonClick,
  className,
  buttonClassName = "bg-white text-black hover:bg-gray-200 rounded-full",
  children,
  idx = 0, // Default index to 0 if not provided
}: PromoCardProps) {
  return (
    <Card key={idx} className={`${className} bg-gray-900 border-gray-800`}>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <Button className={buttonClassName} onClick={onButtonClick}>
          {buttonText}
        </Button>
        {children}
      </CardContent>
    </Card>
  );
}
