import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authService } from '../../services/authService';

interface ResetPasswordProps {
  token: string;
  onSuccess: () => void;
}

export const ResetPassword = ({ token, onSuccess }: ResetPasswordProps): JSX.Element => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.newPassword || !formData.confirmPassword) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await authService.resetPassword({
        token,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword
      });

      if (response.success) {
        setSuccess(response.message);
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la réinitialisation');
    } finally {
      setIsLoading(false);
    }
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
              Nouveau mot de passe
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Créez un nouveau mot de passe sécurisé
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
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
                Nouveau mot de passe
              </label>
              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Entrez votre nouveau mot de passe"
                className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base lg:text-lg"
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer le mot de passe
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirmez votre nouveau mot de passe"
                className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base lg:text-lg"
                required
                minLength={6}
              />
            </div>

            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-[#7b61ff] rounded-3xl h-auto hover:bg-[#6b51ef] border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-semibold text-white text-base lg:text-lg">
                {isLoading ? 'Réinitialisation...' : 'Réinitialiser le mot de passe'}
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};