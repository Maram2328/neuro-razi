import React from 'react';
import { FaUserMd, FaHeartbeat, FaLightbulb, FaSearch, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Meta description pour le SEO */}
      <meta name="description" content="Découvrez le Service de Neurologie du CHU Razi, centre d'excellence en soins, recherche et enseignement neurologique en Tunisie, dirigé par le Pr Riadh Gouider." />
      
      {/* Bannière */}
      <div className="w-full h-72 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center">
          À propos du Service de Neurologie – CHU Razi
        </h1>
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg lg:prose-xl max-w-none mb-16">
            <p className="text-xl leading-relaxed text-gray-800 mb-6">
              Le Service de Neurologie de l'hôpital Razi, fondé en 2002, est un centre de soins
              neurologiques, enseignement et recherche clinique en Tunisie.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 mb-6">
              Dirigé par le Professeur Riadh Gouider, et affilié à la Faculté de Médecine de Tunis, le
              service se distingue par son expertise dans la prise en charge des maladies
              neurodégénératives (maladie d'Alzheimer et maladie apparentés, maladie de
              Parkinson et syndromes parkinsoniens atypiques, sclérose latérale amyotrophique), de la sclérose
              en plaques, de l'épilepsie et d'autres maladies neurologiques avec une approche
              globale et multidisciplinaire.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 mb-6">
              Le service propose une prise en charge globale et personnalisée des pathologies
              neurologiques, en alliant expertise clinique, technologies de diagnostic avancées et
              accompagnement humain attentif.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 mb-8">
              Grâce à l'intégration de plusieurs unités — Consultation externe, Hôpital de jour, Centre
              Alzheimer, Centre de Sclérose en Plaques, Unité de Neurophysiologie et Laboratoire de
              Recherche — nous offrons des parcours de soins complets, adaptés aux besoins des
              patients.
            </p>
          </div>

          {/* Notre Mission */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-8">Notre Mission</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaUserMd className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                    Assurer des soins neurologiques spécialisés et de haute qualité
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Offrir à chaque patient une prise en charge personnalisée. Viser un diagnostic précis,
                  un traitement efficace et un accompagnement durable des pathologies neurologiques,
                  en respectant les standards de soins.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaSearch className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                    Développer et promouvoir la recherche clinique et fondamentale
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Placer la recherche au centre des priorités afin d'améliorer les méthodes diagnostiques
                  et de mieux comprendre les maladies neurologiques. Participer activement à des projets de
                  recherche à l'échelle nationale et internationale, y compris des essais cliniques de haut
                  niveau.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaGraduationCap className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                    Former et accompagner les futures générations de professionnels de santé
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Assurer un enseignement universitaire rigoureux et structuré, destiné aux médecins,
                  chercheurs et professionnels paramédicaux. Proposer un encadrement scientifique et
                  clinique de qualité pour soutenir le développement des compétences dans les domaines du
                  soin et de la recherche en neurosciences.
                </p>
              </div>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-8">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaUserMd className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">Excellence médicale</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Nous maintenons un niveau élevé d'expertise clinique et scientifique, en nous
                  appuyant sur une équipe pluridisciplinaire qualifiée et expérimentée.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaHeartbeat className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">Humanité et empathie</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Chaque patient est au cœur de nos priorités, avec une prise en charge
                  respectueuse, personnalisée et bienveillante.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaLightbulb className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">Innovation continue</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Nous intégrons les dernières avancées scientifiques, technologiques et
                  thérapeutiques pour proposer des soins toujours plus performants.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaSearch className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">Engagement dans la recherche</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Nous contribuons activement au développement des neurosciences par des
                  projets de recherche clinique et des essais thérapeutiques multicentriques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaGraduationCap className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">Transmission du savoir</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Nous formons et inspirons la nouvelle génération de médecins neurologues et
                  chercheurs en neurosciences.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Vision */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-8">Notre Vision</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-xl text-gray-800 mb-8">
                Le Service de Neurologie du CHU Razi aspire à devenir un centre d'excellence
                régional dans le domaine des neurosciences.
              </p>
              <p className="text-xl font-semibold text-gray-800 mb-6">Notre ambition est d'être reconnu pour :</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <FaLightbulb className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      La qualité et l'innovation de nos soins
                    </h3>
                    <p className="text-lg text-gray-700">
                      En intégrant les dernières avancées scientifiques et technologiques au bénéfice de nos patients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <FaSearch className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      La portée de notre recherche clinique
                    </h3>
                    <p className="text-lg text-gray-700">
                      Qui vise à repousser les limites des connaissances sur les maladies neurologiques 
                      et à développer de nouvelles stratégies diagnostiques et thérapeutiques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <FaHeartbeat className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      Notre engagement humain
                    </h3>
                    <p className="text-lg text-gray-700">
                      En plaçant le patient et sa famille au cœur de toutes nos démarches, 
                      avec une approche empathique, respectueuse et personnalisée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 