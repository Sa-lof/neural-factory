import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function TextHoverEffectDemo() {
  return (
    <div className="flex items-center justify-center h-auto"> {/* Ajustamos la altura */}
      <TextHoverEffect text="neural factory" />
    </div>
  );
}
