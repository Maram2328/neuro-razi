import React, { useState } from 'react';
import { Users, UserCog, UserCheck, UserPlus, GraduationCap } from 'lucide-react';
import { FaLanguage } from 'react-icons/fa';

type Language = 'fr' | 'ar';

const Team: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState<Language>('fr');

  const teamCategories = [
    { id: 'all', name: 'Toute l\'équipe', icon: Users },
    { id: 'chef', name: 'Chef de service', icon: UserCog },
    { id: 'professeurs', name: 'Professeurs', icon: UserCheck },
    { id: 'assistants', name: 'Assistants hospitalo-universitaires', icon: UserPlus },
    { id: 'residents', name: 'Résidents', icon: GraduationCap },
    { id: 'internes', name: 'Internes', icon: GraduationCap }
  ];

  const team = [
    // Chef de service
    {
      name: "Pr Riadh GOUIDER",
      role: "Chef de service",
      speciality: "Neurologue",
      category: "chef"
    },
    // Professeurs
    {
      name: "Pr Amina GARGOURI",
      role: "Professeur",
      speciality: "Neurologue",
      category: "professeurs"
    },
    {
      name: "Pr Imen KACEM",
      role: "Professeur",
      speciality: "Neurologue",
      category: "professeurs"
    },
    // Assistants hospitalo-universitaires
    {
      name: "Dr Amira SOUISSI",
      role: "Assistante hospitalo-universitaire",
      speciality: "Neurologue",
      category: "assistants"
    },
    {
      name: "Dr Alya GHARBI",
      role: "Assistante hospitalo-universitaire",
      speciality: "Neurologue",
      category: "assistants"
    },
    {
      name: "Dr Youssef ABIDA",
      role: "Assistant hospitalo-universitaire",
      speciality: "Neurologue",
      category: "assistants"
    },
    {
      name: "Dr Amal ATROUS",
      role: "Assistante hospitalo-universitaire",
      speciality: "Neurologue",
      category: "assistants"
    },
    // Résidents
    {
      name: "Dr Mariem BECHA",
      role: "Résidente",
      speciality: "Neurologie",
      category: "residents"
    },
    {
      name: "Dr Olfa SAKLI",
      role: "Résidente",
      speciality: "Neurologie",
      category: "residents"
    },
    {
      name: "Dr Syrine HACHICHA",
      role: "Résidente",
      speciality: "Neurologie",
      category: "residents"
    },
    {
      name: "Dr Safa BEN ABID",
      role: "Résidente",
      speciality: "Neurologie",
      category: "residents"
    },
    {
      name: "Dr Arij KHOUDI",
      role: "Résidente",
      speciality: "Neurologie",
      category: "residents"
    },
    {
      name: "Dr Youssef ERNEZ",
      role: "Résident",
      speciality: "Psychiatrie",
      category: "residents"
    },
    {
      name: "Dr Saima HAMZAOUI",
      role: "Résidente",
      speciality: "Psychiatrie",
      category: "residents"
    },
    // Internes
    {
      name: "Dr Fatma NAFTI",
      role: "Interne",
      speciality: "Médecine",
      category: "internes"
    }
  ];

  const filteredTeam = selectedCategory === 'all' 
    ? team 
    : team.filter(member => member.category === selectedCategory);

  const translations = {
    fr: {
      pageTitle: 'Notre Équipe',
      pageSubtitle: 'Découvrez notre équipe de spécialistes dévoués au service de votre santé neurologique.',
    },
    ar: {
      pageTitle: 'فريقنا',
      pageSubtitle: 'تعرف على فريقنا من المتخصصين المتفانين في خدمة صحتك العصبية.',
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Language Switch */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
              className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <FaLanguage className="text-xl" />
              <span>{language === 'fr' ? 'العربية' : 'Français'}</span>
            </button>
          </div>

          {/* Title and Subtitle */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-xl text-white">
              {t.pageSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Team Content will go here */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {teamCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600">{member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;