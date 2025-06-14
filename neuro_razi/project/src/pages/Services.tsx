import React from 'react';
import { 
  FaBrain, 
  FaUserMd, 
  FaFlask, 
  FaHandHoldingHeart,
  FaHospital,
  FaMicroscope,
  FaCalendarCheck,
  FaArchive,
  FaUserCog,
  FaChartLine,
  FaDna,
  FaRegHospital,
  FaRegClock,
  FaRegFileAlt,
  FaRegBuilding
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bannière */}
      <div className="w-full h-72 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Nos Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto px-4">
            Découvrez nos services spécialisés en neurologie, offrant une prise en charge
            complète et personnalisée par des experts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Nos Spécialités */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Nos Spécialités</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaBrain className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Maladies Neurodégénératives</h3>
              </div>
              <p className="text-lg text-gray-700">
                Alzheimer, démences, SLA, maladie de Parkinson et syndromes parkinsoniens atypiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaBrain className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Sclérose en Plaques</h3>
              </div>
              <p className="text-lg text-gray-700">
                Diagnostic et prise en charge spécialisée.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaDna className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Pathologies Neuromusculaires</h3>
              </div>
              <p className="text-lg text-gray-700">
                Traitement des affections des nerfs et muscles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMicroscope className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Neurophysiologie Clinique</h3>
              </div>
              <p className="text-lg text-gray-700">
                Explorations fonctionnelles pour le diagnostic neurologique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaFlask className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Recherche en Neurosciences</h3>
              </div>
              <p className="text-lg text-gray-700">
                Innovation au service de traitements neurologiques avancés.
              </p>
            </div>
          </div>
        </section>

        {/* Nos Unités Cliniques */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Nos Unités Cliniques</h2>
          <p className="text-xl text-gray-700 text-center mb-12">
            Chaque unité est spécialisée pour offrir des soins et traitements adaptés à chaque pathologie.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaRegHospital className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Consultations Externes</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Date de création :</span> 2002</p>
                <p><span className="font-semibold">Services :</span> Diagnostic, prise en charge et suivi des patients avec une affection neurologique</p>
                <p><span className="font-semibold">Capacité :</span> 6 bureaux de consultation</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaRegClock className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Hôpital de Jour</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Date de création :</span> 2002</p>
                <p><span className="font-semibold">Services :</span> Diagnostic et traitement en hospitalisation ambulatoire</p>
                <p><span className="font-semibold">Capacité :</span> 11 lits d'hospitalisation, 6 chambres, une unité de soins pluridisciplinaire</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaBrain className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Centre Alzheimer</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Date de création :</span> 2011</p>
                <p><span className="font-semibold">Services :</span> Consultation mémoire, hôpital de jour, ateliers mémoire et musicothérapie, accompagnement patients-familles</p>
                <p><span className="font-semibold">Capacité :</span> 4 lits, 2 bureaux de consultation</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaBrain className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Centre de Sclérose en Plaques</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Date de création :</span> 2018</p>
                <p><span className="font-semibold">Services :</span> Diagnostic et prise en charge de la sclérose en plaques et des maladies inflammatoires du système nerveux central en hospitalisation ambulatoire</p>
                <p><span className="font-semibold">Capacité :</span> 4 lits, 2 bureaux de consultation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unités Techniques */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Unités Techniques</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMicroscope className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Unité de Neurophysiologie</h3>
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Services :</h4>
                  <p>Large éventail d'explorations fonctionnelles neurologiques incluant l'électromyogramme (EMG), les potentiels évoqués, l'électroencéphalogramme (EEG), l'étude des mouvements oculaires ainsi que l'évaluation du système nerveux autonome.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Équipements d'exploration :</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Appareil EMG portable Dantec 2 voies</li>
                    <li>Appareil EMG Focus 3 voies</li>
                    <li>Appareil EMG Synergy 5 voies</li>
                    <li>Appareil de PEM (potentiels évoqués moteurs)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Imagerie neurologique :</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Échographe dédié aux examens neurologiques</li>
                    <li>Appareil d'étude des mouvements oculaires (MOC)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaRegFileAlt className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Unité de Radiologie Conventionnelle</h3>
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Services :</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Thorax (bilan de toux, dyspnée, infection)</li>
                    <li>Abdomen sans préparation (ASP)</li>
                    <li>Rachis (cervical, dorsal, lombaire)</li>
                    <li>Membres supérieurs et inférieurs</li>
                    <li>Bassin, hanches, genoux</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Équipement :</h4>
                  <p>Appareil de radiologie standard DRGEM avec :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Poste de traitement : Console + FCR PRIMA T2</li>
                    <li>Poste de développement : DRYPIX Smart</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaFlask className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Laboratoire de Recherche</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Code :</span> LR18SP03</p>
                <p><span className="font-semibold">Domaines :</span> Recherche clinique sur les maladies neurodégénératives, l'épilepsie, les maladies neuromusculaires, la SEP et la maladie de Parkinson.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Administratifs */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Services Administratifs</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaUserCog className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Bureau d'accueil</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Responsable :</span> Mme Sameh Allouch</p>
                <p><span className="font-semibold">Missions :</span> Accueil, inscription, gestion des rendez-vous</p>
                <p><span className="font-semibold">Axes d'amélioration :</span> Recrutement, espace d'accueil</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaRegBuilding className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">La Consultation</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Responsable :</span> Mme Dalila Ben Othman</p>
                <p><span className="font-semibold">Missions :</span> Préparation des bureaux, gestion des patients, classement</p>
                <p><span className="font-semibold">Évolution :</span> De 1 bureau (2002) à 6 bureaux (2023)</p>
                <p><span className="font-semibold">Axes d'amélioration :</span> Salle d'attente, modernisation</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaArchive className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Les Archives</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><span className="font-semibold">Responsable :</span> Mme Najeh Hkimi</p>
                <p><span className="font-semibold">Missions :</span> Classement, intégrité des dossiers</p>
                <p><span className="font-semibold">Statistiques :</span></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>140 dossiers/jour avec RDV</li>
                  <li>60 dossiers/jour sans RDV</li>
                  <li>200 dossiers reclassés/jour</li>
                </ul>
                <p><span className="font-semibold">Axes d'amélioration :</span> Modernisation, optimisation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Engagements */}
        <section>
          <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Nos Engagements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaHandHoldingHeart className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">Accessibilité</h3>
              </div>
              <p className="text-lg text-gray-700">Accueil rapide et structuré</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaUserMd className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">Qualité des soins</h3>
              </div>
              <p className="text-lg text-gray-700">Personnel hautement qualifié, expertise reconnue</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaChartLine className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">Innovation continue</h3>
              </div>
              <p className="text-lg text-gray-700">Digitalisation des services</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaHandHoldingHeart className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">Humanité</h3>
              </div>
              <p className="text-lg text-gray-700">Prise en charge personnalisée et respectueuse</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;