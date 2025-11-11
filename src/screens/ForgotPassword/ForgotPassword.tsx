import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authService } from '../../services/authService';

interface ForgotPasswordProps {
  onContinue: (email: string) => void;
}

export const ForgotPassword = ({ onContinue }: ForgotPasswordProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Veuillez entrer votre adresse email');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await authService.forgotPassword({ email });
      
      if (response.success) {
        setSuccess(response.message);
        setTimeout(() => {
          onContinue(email);
        }, 1500);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la demande');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-center pt-8 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Cartoon.com</h1>
      </div>

      {/* Contenu principal centré */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        <div className="w-full max-w-md">
          {/* Titre et description */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Réinitialiser le mot de passe
            </h2>
            <p className="text-gray-600 text-lg">
              Récupérez le mot de passe de votre compte
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg">
                {success}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Entrez votre adresse email"
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-lg"
                required
              />
            </div>

            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-8 py-4 bg-[#7b61ff] rounded-3xl h-auto hover:bg-[#6b51ef] border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-semibold text-white text-lg">
                {isLoading ? 'Envoi...' : 'Continuer'}
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};