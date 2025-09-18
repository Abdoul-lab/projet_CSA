import React, { useState, useRef } from "react";
import { Button } from "../../components/ui/button";

export const Verification = (): JSX.Element => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    const newCode = [...code];
    
    for (let i = 0; i < pastedData.length && i < 4; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }
    
    setCode(newCode);
    
    // Focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex(digit => !digit);
    const focusIndex = nextEmptyIndex === -1 ? 3 : Math.min(nextEmptyIndex, 3);
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <header className="font-xtra-large-bold font-[number:var(--xtra-large-bold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--xtra-large-bold-font-size)] tracking-[var(--xtra-large-bold-letter-spacing)] leading-[var(--xtra-large-bold-line-height)] [font-style:var(--xtra-large-bold-font-style)] mb-16">
            Cartoon.com
          </header>
          
          <h1 className="font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)] mb-4">
            Vérification de votre compte
          </h1>
          
          <p className="font-medium-medium font-[number:var(--medium-medium-font-weight)] text-grayscalegrayscale-60 text-[length:var(--medium-medium-font-size)] tracking-[var(--medium-medium-letter-spacing)] leading-[var(--medium-medium-line-height)] [font-style:var(--medium-medium-font-style)] mb-8">
            Nous venons de vous envoyer un code à 4 chiffres via votre e-mail exemple@gmail.com
          </p>
        </div>

        <div className="space-y-8">
          {/* Code Input Fields */}
          <div className="flex justify-center gap-4">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-[#7b61ff] focus:outline-none transition-colors bg-gray-50"
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <Button className="w-full flex items-center justify-center px-8 py-4 bg-[#7b61ff] rounded-3xl h-auto hover:bg-[#6b51ef] border-0">
              <span className="font-large-semibold font-[number:var(--large-semibold-font-weight)] text-grayscalegrayscale-10 text-[length:var(--large-semibold-font-size)] tracking-[var(--large-semibold-letter-spacing)] leading-[var(--large-semibold-line-height)] [font-style:var(--large-semibold-font-style)]">
                Suivant
              </span>
            </Button>

            <Button
              variant="ghost"
              className="w-full flex items-center justify-center h-auto p-0"
            >
              <span className="font-medium-semibold font-[number:var(--medium-semibold-font-weight)] text-grayscalegrayscale-60 text-[length:var(--medium-semibold-font-size)] tracking-[var(--medium-semibold-letter-spacing)] leading-[var(--medium-semibold-line-height)] [font-style:var(--medium-semibold-font-style)]">
                Retour
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};