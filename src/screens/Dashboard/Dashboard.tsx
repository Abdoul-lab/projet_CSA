import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Cartoon.com</h1>
        </div>

        {/* Menu */}
        <div className="flex-1 p-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500 mb-3">Menu</div>
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm font-medium text-white bg-[#7b61ff] rounded-lg">
              <span className="w-5 h-5 bg-white/20 rounded"></span>
              Découvrir
            </button>
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="w-5 h-5 bg-gray-200 rounded"></span>
              Top cartoons
            </button>
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="w-5 h-5 bg-gray-200 rounded"></span>
              À venir
            </button>
          </div>

          <div className="mt-8 space-y-2">
            <div className="text-sm font-medium text-gray-500 mb-3">Bibliothèque</div>
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="w-5 h-5 bg-gray-200 rounded"></span>
              Joués récemment
            </button>
            
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="w-5 h-5 bg-gray-200 rounded"></span>
              Téléchargements
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-100">
          <Button 
            onClick={onLogout}
            variant="outline" 
            className="w-full text-sm"
          >
            Déconnexion
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                type="search"
                placeholder="Rechercher"
                className="w-full"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-[#7b61ff] hover:bg-[#6b51ef]">
                S'abonner
              </Button>
              
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm opacity-75">Comédie</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Pokou, princesse ashanti</h2>
              <p className="text-sm opacity-90 mb-6">Long métrage • Culture • Afrikation • 2013</p>
              
              <div className="flex gap-4">
                <Button className="bg-[#7b61ff] hover:bg-[#6b51ef]">
                  ▶ Regarder thriller
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  + Ajouter à la liste de surveillance
                </Button>
              </div>
            </div>
          </div>

          {/* Continue Watching */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Continuer à regarder</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-video bg-gray-200"></div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm text-gray-900">Cartoon {item}</h4>
                    <p className="text-xs text-gray-500">Episode {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Rated */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Les mieux notés</h3>
              <Button variant="outline" size="sm">Voir tout</Button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Dia Houphouët", genre: "Drame", rating: "9.2" },
                { title: "Pokou", genre: "Culture • Drame", rating: "9.2" },
                { title: "Unchosen", genre: "Action", rating: "9.0" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.genre}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">{item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};