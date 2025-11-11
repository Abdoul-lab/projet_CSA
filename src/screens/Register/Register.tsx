import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const paginationDots = [{ active: false }, { active: true }, { active: false }];

interface RegisterProps {
  onSwitchToLogin: () => void;
  onRegister: () => void;
}

export const Register = ({ onSwitchToLogin, onRegister }: RegisterProps): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Section gauche avec contenu coloré */}
      <div className="flex-1 bg-gradient-to-br from-[#7b61ff] to-[#9c88ff] flex flex-col justify-center items-start p-6 sm:p-8 lg:p-16 text-white relative overflow-hidden min-h-[40vh] lg:min-h-screen">
        <div className="relative z-10 max-w-md mx-auto lg:mx-0">

          {/* Titre et description */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left">
            Offres à une visualisation libre de haute qualité
          </h1>
          <p className="text-base lg:text-lg opacity-90 mb-6 lg:mb-8 leading-relaxed text-center lg:text-left">
            Hipster ipsum tattooed brunch I'm baby. Chips truck yolo paleo photo cred. I'm knausgaard crucifix pin meditation kale occupy knausgaard biodiesel. Heirloom carry yuccie occupy raw.
          </p>
          
          {/* Pagination dots */}
          <div className="flex space-x-2 justify-center lg:justify-start">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  dot.active ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Image de l'interface */}
          <div className="mb-6 lg:mb-8 flex justify-center lg:justify-start">
            <img 
              src="/group-1000000753.png" 
              alt="Interface Cartoon.com" 
              className=" w-[682px] h-[658px] top-[332px] left-[57px]"
            />
          </div>
        </div>
        
        {/* Éléments décoratifs */}
        <div className="absolute top-10 right-10 lg:top-20 lg:right-20 w-16 h-16 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-16 right-16 lg:bottom-32 lg:right-32 w-12 h-12 lg:w-24 lg:h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      {/* Section droite avec formulaire */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-16 bg-gray-50 min-h-[60vh] lg:min-h-screen overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Cartoon.com</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Inscription</h3>
          </div>

          {/* Boutons sociaux */}
          <div className="space-y-3 mb-4 lg:mb-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 lg:gap-3 py-3 border-gray-200 hover:bg-gray-50 text-sm lg:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 hidden sm:inline">Inscrivez-vous avec Google</span>
              <span className="text-gray-700 sm:hidden">Google</span>
            </Button>
            
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 lg:gap-3 py-3 border-gray-200 hover:bg-gray-50 text-sm lg:text-base">
              <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-gray-700 hidden sm:inline">Inscrivez-vous avec Facebook</span>
              <span className="text-gray-700 sm:hidden">Facebook</span>
            </Button>
          </div>

          <div className="text-center text-gray-500 mb-4 lg:mb-6 text-sm lg:text-base">
            Ou inscrivez-vous avec
          </div>

          {/* Formulaire */}
          <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <Input
                type="text"
                placeholder="Entrez votre nom"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénoms
              </label>
              <Input
                type="text"
                placeholder="Entrez vos prénoms"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <Input
                type="email"
                placeholder="Entrez votre adresse email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <Input
                type="password"
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmez le mot de passe
              </label>
              <Input
                type="password"
                placeholder="Confirmez votre mot de passe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7b61ff] focus:border-transparent text-base"
              />
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="space-y-4">
            <Button onClick={onRegister} className="w-full flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-[#7b61ff] rounded-3xl h-auto hover:bg-[#6b51ef] border-0">
              <span className="font-semibold text-white text-base lg:text-lg">
                S'inscrire
              </span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={onSwitchToLogin}
              className="w-full flex items-center justify-center h-auto p-0"
            >
              <span className="text-gray-600 text-sm lg:text-base text-center">
                Vous avez déjà un compte? <span className="text-[#7b61ff] font-medium">Se connecter</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};