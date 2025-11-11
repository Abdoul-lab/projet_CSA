import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { authService } from '../../services/authService';

interface VerificationProps {
  email: string;
  onBack: () => void;
  onNext: (token: string) => void;
}

export const Verification = ({ email, onBack, onNext }: VerificationProps): JSX.Element => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerifyOTP = async () => {
    const otpCode = code.join('');
    
    if (otpCode.length !== 6) {
      setError('Veuillez entrer le code à 6 chiffres');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await authService.verifyOTP({
        email,
        otp: otpCode
      });

      if (response.success && response.token) {
        onNext(response.token);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Code de vérification invalide');
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (index: number, value: string) => {
    // Ne garder que le dernier chiffre saisi
    const newValue = value.replace(/\D/g, '').slice(-1);
    
    const newCode = [...code];
    newCode[index] = newValue;
    setCode(newCode);
    
    if (error) setError('');

    // Auto-focus vers le champ suivant
    if (newValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newCode = [...code];
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newCode[i] = pastedData[i];
    }
    
    setCode(newCode);
    
    // Focus sur le prochain champ vide ou le dernier
    const nextEmptyIndex = newCode.findIndex(val => val === '');
    const focusIndex = nextEmptyIndex === -1 ? 5 : Math.min(nextEmptyIndex, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-center pt-6 lg:pt-8 pb-4">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Cartoon.com</h1>
      </div>

      {/* Contenu principal centré */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          {/* Titre et description */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
              Vérification de votre compte
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed px-2">
              Nous venons de vous envoyer un code à 6 chiffres via votre e-mail {email}
            </p>
          </div>

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg mb-4 lg:mb-6">
              {error}
            </div>
          )}

          {/* Champs de code */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mb-6 lg:mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 sm:w-16 sm:h-16 text-center text-xl sm:text-2xl font-bold border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-[#7b61ff] outline-none transition-all duration-200"
              />
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="space-y-4">
            <Button 
              onClick={handleVerifyOTP}
              disabled={isLoading || code.some(digit => digit === '')}
              className="w-full flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-[#7b61ff] rounded-3xl h-auto hover:bg-[#6b51ef] border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-semibold text-white text-base lg:text-lg">
                {isLoading ? 'Vérification...' : 'Suivant'}
              </span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={onBack}
              className="w-full flex items-center justify-center h-auto p-0"
            >
              <span className="text-gray-600 text-base lg:text-lg">
                Retour
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};