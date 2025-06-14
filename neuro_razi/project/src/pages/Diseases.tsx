import React, { useState } from 'react';
import { 
  FaBrain, 
  FaHeartbeat, 
  FaNotesMedical,
  FaSearch,
  FaBookMedical,
  FaExclamationTriangle,
  FaStethoscope,
  FaUserMd,
  FaFlask,
  FaChartLine,
  FaShieldAlt,
  FaLink,
  FaLanguage
} from 'react-icons/fa';

interface DiseaseTranslation {
  name: string;
  definition: string;
  mechanism: string;
  symptoms: string[];
  riskFactors: string[];
  diagnosis: string[];
  treatments: string[];
  prognosis: string;
  prevention: string[];
  resources: Array<{
    title: string;
    url: string;
  }>;
}

interface Disease {
  id: string;
  translations: {
    fr: DiseaseTranslation;
    ar: DiseaseTranslation;
  };
}

const diseases: Disease[] = [
  {
    id: 'avc-ischemique',
    translations: {
      fr: {
        name: 'Accident Vasculaire Cérébral (AVC) ischémique',
        definition: 'Un AVC survient lorsque la circulation sanguine vers une partie du cerveau est stoppée. L\'AVC ischémique (80%) est causé par un caillot qui bouche une artère.',
        mechanism: 'Sans oxygène, les cellules du cerveau meurent en quelques minutes. Dans l\'AVC ischémique, il y a obstruction d\'une artère cérébrale.',
        symptoms: [
          'Faiblesse ou paralysie soudaine (visage, bras, jambe)',
          'Trouble de la parole ou compréhension difficile',
          'Vision floue ou perte de vision',
          'Maux de tête intenses et soudains',
          'Vertiges, perte d\'équilibre',
          'Confusion ou désorientation'
        ],
        riskFactors: [
          'Hypertension artérielle',
          'Tabac',
          'Diabète',
          'Obésité',
          'Cholestérol élevé',
          'Alcool en excès',
          'Sédentarité',
          'Stress chronique',
          'Antécédents familiaux',
          'Âge avancé'
        ],
        diagnosis: [
          'Scanner cérébral (TDM)',
          'IRM cérébrale',
          'Échographie des carotides',
          'ECG',
          'Bilan sanguin',
          'Angiographie cérébrale'
        ],
        treatments: [
          'Thrombolyse (dans les 4h30)',
          'Thrombectomie mécanique',
          'Contrôle de la tension',
          'Médicaments antiplaquettaires',
          'Anticoagulants (si fibrillation auriculaire)',
          'Rééducation neurologique',
          'Chirurgie (dans certains cas)',
          'Suivi neurovasculaire'
        ],
        prognosis: '10% : récupération complète, 25% : séquelles mineures, 40% : séquelles modérées à sévères, 25% : décès. La récupération se joue surtout dans les 3 à 6 premiers mois.',
        prevention: [
          'Surveiller sa tension',
          'Avoir une alimentation équilibrée',
          'Bouger régulièrement',
          'Éviter le tabac et l\'alcool',
          'Gérer le stress',
          'Contrôler diabète et cholestérol',
          'Consulter régulièrement son médecin',
          'Traiter les troubles cardiaques associés'
        ],
        resources: [
          {
            title: 'Épidémiologie et impact des AVC en Tunisie',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7250234/'
          },
          {
            title: 'Prise en charge et innovations thérapeutiques',
            url: 'https://santetunisie.rns.tn/images/articles/referentiel/CAT-AVC.pdf'
          }
        ]
      },
      ar: {
        name: 'السكتة الدماغية الإقفارية',
        definition: 'تحدث السكتة الدماغية عندما يتوقف تدفق الدم إلى جزء من الدماغ. السكتة الدماغية الإقفارية (80٪) تحدث بسبب جلطة تسد الشريان.',
        mechanism: 'بدون الأكسجين، تموت خلايا الدماغ في غضون دقائق. في السكتة الدماغية الإقفارية، هناك انسداد في الشريان الدماغي.',
        symptoms: [
          'ضعف أو شلل مفاجئ (الوجه، الذراع، الساق)',
          'اضطراب في الكلام أو صعوبة في الفهم',
          'عدم وضوح الرؤية أو فقدان البصر',
          'صداع شديد ومفاجئ',
          'دوار، فقدان التوازن',
          'ارتباك أو تشوش'
        ],
        riskFactors: [
          'ارتفاع ضغط الدم',
          'التدخين',
          'مرض السكري',
          'السمنة',
          'ارتفاع الكولسترول',
          'الإفراط في الكحول',
          'قلة الحركة',
          'التوتر المزمن',
          'التاريخ العائلي',
          'التقدم في السن'
        ],
        diagnosis: [
          'التصوير المقطعي للدماغ',
          'التصوير بالرنين المغناطيسي للدماغ',
          'تخطيط صدى الشرايين السباتية',
          'تخطيط القلب الكهربائي',
          'تحليل الدم',
          'تصوير الأوعية الدماغية'
        ],
        treatments: [
          'إذابة الجلطة (خلال 4 ساعات ونصف)',
          'استخراج الجلطة ميكانيكياً',
          'السيطرة على ضغط الدم',
          'مضادات الصفائح الدموية',
          'مضادات التخثر (في حالة الرجفان الأذيني)',
          'إعادة التأهيل العصبي',
          'الجراحة (في بعض الحالات)',
          'المتابعة العصبية الوعائية'
        ],
        prognosis: '10٪: شفاء كامل، 25٪: آثار طفيفة، 40٪: آثار متوسطة إلى شديدة، 25٪: وفاة. التعافي يحدث بشكل رئيسي في الأشهر 3-6 الأولى.',
        prevention: [
          'مراقبة ضغط الدم',
          'اتباع نظام غذائي متوازن',
          'ممارسة النشاط البدني بانتظام',
          'Éviter le tabac et l\'alcool',
          'Gérer le stress',
          'Contrôler diabète et cholestérol',
          'استشارة الطبيب بانتظام',
          'علاج أمراض القلب المصاحبة'
        ],
        resources: [
          {
            title: 'وبائيات وتأثير السكتة الدماغية في تونس',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7250234/'
          },
          {
            title: 'العلاج والابتكارات العلاجية',
            url: 'https://santetunisie.rns.tn/images/articles/referentiel/CAT-AVC.pdf'
          }
        ]
      }
    }
  },
  {
    id: 'alzheimer',
    translations: {
      fr: {
        name: 'Maladie d\'Alzheimer',
        definition: 'La maladie d\'Alzheimer est une affection neurodégénérative progressive caractérisée par une détérioration des fonctions cognitives, notamment la mémoire, le langage et le raisonnement.',
        mechanism: 'Accumulation de plaques bêta-amyloïdes entre les cellules nerveuses et formation d\'enchevêtrements de protéines tau à l\'intérieur des neurones, entraînant une atrophie cérébrale progressive.',
        symptoms: [
          'Troubles de la mémoire récente',
          'Difficulté à effectuer des tâches quotidiennes',
          'Désorientation dans le temps et l\'espace',
          'Troubles du langage',
          'Changements d\'humeur ou de comportement',
          'Perte d\'intérêt ou d\'initiative'
        ],
        riskFactors: [
          'Âge avancé',
          'Antécédents familiaux',
          'Hypertension artérielle',
          'Diabète',
          'Mode de vie sédentaire',
          'Isolement social',
          'Traumatisme crânien',
          'Faible niveau d\'éducation',
          'Tabac et alcool',
          'Troubles cardiovasculaires'
        ],
        diagnosis: [
          'Entretien clinique et tests cognitifs (MMSE, MOCA)',
          'IRM ou scanner cérébral',
          'Bilan sanguin',
          'Évaluation neurologique et gériatrique',
          'Ponction lombaire (cas complexes)',
          'Tomographie par émission de positons (TEP)'
        ],
        treatments: [
          'Inhibiteurs de la cholinestérase (donépézil, rivastigmine)',
          'Mémantine (modulateur NMDA)',
          'Réhabilitation cognitive',
          'Activité physique adaptée',
          'Accompagnement psychologique',
          'Aides à domicile ou structures spécialisées',
          'Traitement des troubles associés (dépression, anxiété)'
        ],
        prognosis: 'Maladie évolutive en plusieurs stades (léger à sévère). La durée moyenne de survie après le diagnostic est de 8 à 10 ans. Le pronostic dépend de l\'âge, de l\'état général, du soutien familial et médical.',
        prevention: [
          'Activité physique régulière',
          'Alimentation saine (régime méditerranéen)',
          'Activités sociales et intellectuelles',
          'Contrôle de la tension, du diabète et du cholestérol',
          'Sommeil de qualité',
          'Surveillance des troubles auditifs',
          'Éviter les traumatismes crâniens',
          'Lutter contre l\'isolement'
        ],
        resources: [
          {
            title: 'Épidémiologie de la maladie d\'Alzheimer en Tunisie',
            url: 'https://www.academie-medecine.fr/wp-content/uploads/2022/11/28-oct-2022-Epidemiologie-de-la-Maladie-dAlzheimer-_Pr-Riadh-Gouider.pdf'
          },
          {
            title: 'Prise en charge médicale',
            url: 'https://www.santetropicale.com/santemag/actus.asp?id=11296'
          }
        ]
      },
      ar: {
        name: 'مرض الزهايمر',
        definition: 'مرض الزهايمر هو اضطراب تنكسي عصبي تدريجي يتميز بتدهور الوظائف المعرفية، خاصة الذاكرة واللغة والتفكير.',
        mechanism: 'تراكم لويحات البيتا أميلويد بين الخلايا العصبية وتشكل تشابكات بروتين تاو داخل العصبونات، مما يؤدي إلى ضمور تدريجي في الدماغ.',
        symptoms: [
          'اضطرابات في الذاكرة القريبة',
          'صعوبة في أداء المهام اليومية',
          'التشوش في الزمان والمكان',
          'اضطرابات في اللغة',
          'تغيرات في المزاج أو السلوك',
          'فقدان الاهتمام أو المبادرة'
        ],
        riskFactors: [
          'التقدم في السن',
          'التاريخ العائلي',
          'ارتفاع ضغط الدم',
          'مرض السكري',
          'نمط الحياة الخامل',
          'العزلة الاجتماعية',
          'إصابات الرأس',
          'المستوى التعليمي المنخفض',
          'التدخين والكحول',
          'أمراض القلب والأوعية الدموية'
        ],
        diagnosis: [
          'المقابلة السريرية واختبارات الإدراك',
          'التصوير بالرنين المغناطيسي أو المقطعي للدماغ',
          'تحليل الدم',
          'التقييم العصبي وطب الشيخوخة',
          'البزل القطني (الحالات المعقدة)',
          'التصوير المقطعي بالإصدار البوزيتروني'
        ],
        treatments: [
          'مثبطات الكولين استراز',
          'ميمانتين',
          'إعادة التأهيل المعرفي',
          'النشاط البدني المكيف',
          'الدعم النفسي',
          'المساعدة المنزلية أو مراكز متخصصة',
          'علاج الاضطرابات المصاحبة (الاكتئاب، القلق)'
        ],
        prognosis: 'مرض تطوري في عدة مراحل (خفيف إلى شديد). متوسط البقاء على قيد الحياة بعد التشخيص هو 8-10 سنوات. يعتمد التكهن على العمر والحالة العامة والدعم العائلي والطبي.',
        prevention: [
          'النشاط البدني المنتظم',
          'نظام غذائي صحي (حمية البحر المتوسط)',
          'الأنشطة الاجتماعية والفكرية',
          'مراقبة ضغط الدم والسكري والكولسترول',
          'نوم جيد',
          'مراقبة مشاكل السمع',
          'تجنب إصابات الرأس',
          'مكافحة العزلة'
        ],
        resources: [
          {
            title: 'وبائيات مرض الزهايمر في تونس',
            url: 'https://www.academie-medecine.fr/wp-content/uploads/2022/11/28-oct-2022-Epidemiologie-de-la-Maladie-dAlzheimer-_Pr-Riadh-Gouider.pdf'
          },
          {
            title: 'الرعاية الطبية',
            url: 'https://www.santetropicale.com/santemag/actus.asp?id=11296'
          }
        ]
      }
    }
  },
  {
    id: 'parkinson',
    translations: {
      fr: {
        name: 'Maladie de Parkinson',
        definition: 'La maladie de Parkinson est une affection neurodégénérative progressive qui affecte principalement le contrôle des mouvements, causée par la perte de cellules nerveuses productrices de dopamine.',
        mechanism: 'Perte de neurones dopaminergiques dans la substance noire, entraînant des troubles moteurs et non moteurs. La diminution de dopamine perturbe le contrôle des mouvements.',
        symptoms: [
          'Tremblements au repos',
          'Lenteur des mouvements (bradykinésie)',
          'Rigidité musculaire',
          'Instabilité posturale',
          'Difficulté à marcher',
          'Problèmes de parole',
          'Troubles de l\'humeur',
          'Troubles du sommeil'
        ],
        riskFactors: [
          'Âge avancé (plus fréquente après 60 ans)',
          'Antécédents familiaux',
          'Exposition à des toxines',
          'Traumatismes crâniens répétés',
          'Sexe masculin',
          'Génétique (mutations LRRK2)'
        ],
        diagnosis: [
          'Évaluation clinique neurologique',
          'Imagerie cérébrale (IRM, TEP)',
          'Tests neuropsychologiques',
          'Électrophysiologie (EMG, EEG)',
          'Analyse génétique'
        ],
        treatments: [
          'Lévodopa (principale médication)',
          'Agonistes dopaminergiques',
          'Inhibiteurs de la MAO-B',
          'Kinésithérapie et rééducation fonctionnelle',
          'Orthophonie',
          'Stimulation cérébrale profonde',
          'Soutien psychologique et social'
        ],
        prognosis: 'Le pronostic varie selon la vitesse de progression. Les patients peuvent vivre longtemps avec la maladie, mais une gestion active des symptômes est essentielle pour maintenir la qualité de vie.',
        prevention: [
          'Exercice physique',
          'Alimentation équilibrée',
          'Éviter l\'exposition aux toxines environnementales',
          'Gérer le stress',
          'Prendre en charge les troubles de l\'humeur'
        ],
        resources: [
          {
            title: 'Épidémiologie de la maladie de Parkinson en Tunisie',
            url: 'https://www.worldlifeexpectancy.com/fr/tunisia-parkinson-disease'
          },
          {
            title: 'Prise en charge de la maladie de Parkinson en Tunisie',
            url: 'https://www.semanticscholar.org/paper/Prise-en-charge-de-la-douleur-chez-les-patients-de-Zakaria-Kissani/'
          }
        ]
      },
      ar: {
        name: 'مرض باركنسون',
        definition: 'مرض باركنسون هو اضطراب تنكسي عصبي تدريجي يؤثر بشكل رئيسي على التحكم في الحركة، ناتج عن فقدان الخلايا العصبية المنتجة للدوبامين.',
        mechanism: 'فقدان الخلايا العصبية الدوبامينية في المادة السوداء، مما يؤدي إلى اضطرابات حركية وغير حركية. نقص الدوبامين يعطل التحكم في الحركات.',
        symptoms: [
          'رعشة في حالة الراحة',
          'بطء الحركة',
          'تصلب العضلات',
          'عدم الاستقرار الوضعي',
          'صعوبة في المشي',
          'مشاكل في النطق',
          'اضطرابات المزاج',
          'اضطرابات النوم'
        ],
        riskFactors: [
          'التقدم في السن (أكثر شيوعاً بعد 60 عاماً)',
          'التاريخ العائلي',
          'التعرض للسموم',
          'إصابات الرأس المتكررة',
          'الجنس الذكري',
          'العوامل الوراثية'
        ],
        diagnosis: [
          'التقييم السريري العصبي',
          'التصوير الدماغي',
          'الاختبارات النفسية العصبية',
          'تخطيط كهربية العضلات والدماغ',
          'التحليل الجيني'
        ],
        treatments: [
          'ليفودوبا (العلاج الرئيسي)',
          'محفزات الدوبامين',
          'مثبطات MAO-B',
          'العلاج الطبيعي وإعادة التأهيل',
          'علاج النطق',
          'التحفيز الدماغي العميق',
          'الدعم النفسي والاجتماعي'
        ],
        prognosis: 'يختلف التكهن حسب سرعة تطور المرض. يمكن للمرضى العيش لفترة طويلة مع المرض، لكن الإدارة النشطة للأعراض ضرورية للحفاظ على جودة الحياة.',
        prevention: [
          'التمارين الرياضية',
          'نظام غذائي متوازن',
          'تجنب التعرض للسموم البيئية',
          'إدارة التوتر',
          'معالجة اضطرابات المزاج'
        ],
        resources: [
          {
            title: 'وبائيات مرض باركنسون في تونس',
            url: 'https://www.worldlifeexpectancy.com/fr/tunisia-parkinson-disease'
          },
          {
            title: 'رعاية مرضى باركنسون في تونس',
            url: 'https://www.semanticscholar.org/paper/Prise-en-charge-de-la-douleur-chez-les-patients-de-Zakaria-Kissani/'
          }
        ]
      }
    }
  },
  {
    id: 'sclerose-plaques',
    translations: {
      fr: {
        name: 'Sclérose en Plaques (SEP)',
        definition: 'La sclérose en plaques est une maladie auto-immune chronique du système nerveux central, dans laquelle le système immunitaire attaque la gaine de myéline qui entoure les fibres nerveuses.',
        mechanism: 'La SEP provoque une inflammation et une démyélinisation des neurones dans le cerveau et la moelle épinière. Les lésions ralentissent ou bloquent la conduction nerveuse.',
        symptoms: [
          'Troubles moteurs (faiblesse, paralysie partielle)',
          'Troubles de la sensibilité (fourmillements)',
          'Troubles de la vision (névrite optique)',
          'Fatigue intense (asthénie)',
          'Troubles de l\'équilibre et de la coordination',
          'Troubles urinaires ou digestifs',
          'Troubles cognitifs et de l\'humeur'
        ],
        riskFactors: [
          'Prédisposition génétique',
          'Infections virales (EBV)',
          'Carence en vitamine D',
          'Tabagisme',
          'Facteurs environnementaux',
          'Sexe féminin'
        ],
        diagnosis: [
          'IRM cérébrale et médullaire',
          'Ponction lombaire',
          'Potentiels évoqués',
          'Bilan sanguin différentiel',
          'Suivi neurologique spécialisé'
        ],
        treatments: [
          'Corticoïdes (poussées)',
          'Immunomodulateurs',
          'Immunosuppresseurs',
          'Rééducation motrice',
          'Traitement des douleurs et spasticité',
          'Suivi régulier en neurologie'
        ],
        prognosis: 'Variable selon les formes. L\'espérance de vie peut être réduite de quelques années, mais les traitements actuels améliorent nettement le contrôle de la maladie. 30% des patients restent peu handicapés après 20 ans.',
        prevention: [
          'Arrêt du tabac',
          'Supplémentation en vitamine D',
          'Traitement rapide dès le diagnostic',
          'Réduction du stress chronique',
          'Mode de vie sain'
        ],
        resources: [
          {
            title: 'Centre de la SEP à Tunis',
            url: 'https://www.facebook.com/CIC.Razi/'
          },
          {
            title: 'Recommandations HAS pour la SEP',
            url: 'https://www.has-sante.fr/jcms/c_2858391/fr/sclerose-en-plaques'
          }
        ]
      },
      ar: {
        name: 'التصلب المتعدد',
        definition: 'التصلب المتعدد هو مرض مناعي مزمن يصيب الجهاز العصبي المركزي، حيث يهاجم الجهاز المناعي غلاف الميالين الذي يحيط بالألياف العصبية.',
        mechanism: 'يسبب التصلب المتعدد التهاباً وتدمير الميالين في الدماغ والحبل الشوكي. تؤدي الإصابات إلى إبطاء أو منع التوصيل العصبي.',
        symptoms: [
          'اضطرابات حركية (ضعف، شلل جزئي)',
          'اضطرابات حسية (تنميل)',
          'اضطرابات بصرية (التهاب العصب البصري)',
          'تعب شديد',
          'اضطرابات في التوازن والتناسق',
          'اضطرابات في المثانة أو الجهاز الهضمي',
          'اضطرابات معرفية ومزاجية'
        ],
        riskFactors: [
          'استعداد وراثي',
          'عدوى فيروسية',
          'نقص فيتامين د',
          'التدخين',
          'عوامل بيئية',
          'الجنس الأنثوي'
        ],
        diagnosis: [
          'التصوير بالرنين المغناطيسي للدماغ والحبل الشوكي',
          'البزل القطني',
          'اختبارات الجهد المستحث',
          'تحليل الدم التفريقي',
          'متابعة عصبية متخصصة'
        ],
        treatments: [
          'الكورتيزون (للنوبات)',
          'معدلات المناعة',
          'مثبطات المناعة',
          'إعادة التأهيل الحركي',
          'علاج الألم والتشنج',
          'متابعة منتظمة في طب الأعصاب'
        ],
        prognosis: 'يختلف حسب الشكل. قد ينخفض متوسط العمر المتوقع ببضع سنوات، لكن العلاجات الحالية تحسن بشكل كبير السيطرة على المرض. 30٪ من المرضى يبقون قليلي الإعاقة بعد 20 عاماً.',
        prevention: [
          'الإقلاع عن التدخين',
          'مكملات فيتامين د',
          'العلاج السريع عند التشخيص',
          'تخفيف التوتر المزمن',
          'نمط حياة صحي'
        ],
        resources: [
          {
            title: 'مركز التصلب المتعدد في تونس',
            url: 'https://www.facebook.com/CIC.Razi/'
          },
          {
            title: 'توصيات علاج التصلب المتعدد',
            url: 'https://www.has-sante.fr/jcms/c_2858391/fr/sclerose-en-plaques'
          }
        ]
      }
    }
  },
  {
    id: 'epilepsie',
    translations: {
      fr: {
        name: 'Épilepsie',
        definition: 'L\'épilepsie est une maladie neurologique chronique caractérisée par la récurrence de crises épileptiques dues à une activité électrique anormale dans le cerveau.',
        mechanism: 'Les crises sont causées par une décharge excessive et simultanée de neurones dans une région ou l\'ensemble du cerveau. Elles peuvent être focales ou généralisées.',
        symptoms: [
          'Convulsions (secousses musculaires incontrôlées)',
          'Absences (rupture brève de contact)',
          'Troubles sensoriels (vision, audition, odeurs)',
          'Perte de conscience ou de tonus musculaire',
          'Troubles du langage ou du comportement',
          'Aura (sensation annonciatrice)',
          'Automatismes (gestes involontaires)'
        ],
        riskFactors: [
          'Antécédents familiaux d\'épilepsie',
          'Traumatismes crâniens',
          'Accidents vasculaires cérébraux',
          'Tumeurs cérébrales',
          'Infections neurologiques',
          'Malformations cérébrales',
          'Fièvre élevée prolongée',
          'Consommation de drogues ou alcool',
          'Privation de sommeil'
        ],
        diagnosis: [
          'Électroencéphalogramme (EEG)',
          'IRM cérébrale',
          'Scanner cérébral (TDM)',
          'Bilan métabolique et toxique',
          'Tests neuropsychologiques',
          'Évaluation neurogénétique'
        ],
        treatments: [
          'Antiépileptiques',
          'Adaptation du traitement selon le type de crise',
          'Chirurgie de l\'épilepsie',
          'Stimulation du nerf vague',
          'Régime cétogène',
          'Éducation thérapeutique',
          'Soutien psychologique',
          'Suivi neurologique régulier'
        ],
        prognosis: '70% des patients peuvent vivre sans crise grâce au traitement. Certaines formes sont résistantes aux médicaments. Le pronostic dépend de la cause, de la précocité de la prise en charge et de la réponse au traitement.',
        prevention: [
          'Éviter les facteurs déclenchants',
          'Tenir un journal des crises',
          'Maintenir un rythme de vie stable',
          'Gérer le stress',
          'Traitement de fond si ≥4 crises/mois'
        ],
        resources: [
          {
            title: 'Épidémiologie de l\'épilepsie en Tunisie',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7250234/'
          },
          {
            title: 'Base de données tunisienne sur les cas résistants',
            url: 'https://www.panafrican-med-journal.com/content/article/40/228/full/'
          }
        ]
      },
      ar: {
        name: 'الصرع',
        definition: 'الصرع هو مرض عصبي مزمن يتميز بتكرار النوبات الصرعية الناتجة عن نشاط كهربائي غير طبيعي في الدماغ.',
        mechanism: 'تحدث النوبات بسبب تفريغ مفرط ومتزامن للخلايا العصبية في منطقة أو كامل الدماغ. يمكن أن تكون بؤرية أو معممة.',
        symptoms: [
          'تشنجات (حركات عضلية لا إرادية)',
          'غياب (انقطاع قصير عن الوعي)',
          'اضطرابات حسية (رؤية، سمع، روائح)',
          'فقدان الوعي أو التوتر العضلي',
          'اضطرابات في اللغة أو السلوك',
          'أورة (إحساس تحذيري)',
          'حركات آلية (تصرفات لا إرادية)'
        ],
        riskFactors: [
          'تاريخ عائلي للصرع',
          'إصابات الرأس',
          'السكتات الدماغية',
          'أورام الدماغ',
          'التهابات عصبية',
          'تشوهات دماغية',
          'حمى مرتفعة مطولة',
          'تعاطي المخدرات أو الكحول',
          'الحرمان من النوم'
        ],
        diagnosis: [
          'تخطيط كهربية الدماغ',
          'التصوير بالرنين المغناطيسي للدماغ',
          'التصوير المقطعي للدماغ',
          'تحليل الأيض والسموم',
          'اختبارات نفسية عصبية',
          'تقييم وراثي عصبي'
        ],
        treatments: [
          'مضادات الصرع',
          'تكييف العلاج حسب نوع النوبة',
          'جراحة الصرع',
          'تحفيز العصب المبهم',
          'نظام غذائي كيتوني',
          'تثقيف علاجي',
          'دعم نفسي',
          'متابعة عصبية منتظمة'
        ],
        prognosis: '70٪ من المرضى يمكنهم العيش بدون نوبات بفضل العلاج. بعض الأشكال مقاومة للأدوية. يعتمد التكهن على السبب، وسرعة التشخيص والعلاج، والاستجابة للعلاج.',
        prevention: [
          'تجنب العوامل المحفزة',
          'الاحتفاظ بسجل النوبات',
          'الحفاظ على نمط حياة مستقر',
          'إدارة التوتر',
          'علاج وقائي إذا ≥4 نوبات/شهر'
        ],
        resources: [
          {
            title: 'وبائيات الصرع في تونس',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7250234/'
          },
          {
            title: 'قاعدة البيانات التونسية للحالات المقاومة',
            url: 'https://www.panafrican-med-journal.com/content/article/40/228/full/'
          }
        ]
      }
    }
  },
  {
    id: 'avc-hemorragique',
    translations: {
      fr: {
        name: 'Accident Vasculaire Cérébral (AVC) hémorragique',
        definition: 'L\'AVC hémorragique est une urgence médicale grave survenant lorsque un vaisseau sanguin se rompt dans le cerveau, provoquant un saignement cérébral qui détruit les tissus environnants.',
        mechanism: 'La rupture d\'un vaisseau cérébral entraîne une hémorragie intracérébrale ou méningée. Cette accumulation de sang crée une pression sur le cerveau, provoquant œdème et dégâts neuronaux rapides.',
        symptoms: [
          'Céphalées brutales et intenses ("coup de tonnerre")',
          'Paralysie ou faiblesse d\'un côté du corps',
          'Trouble de la parole ou de la compréhension',
          'Troubles de la conscience',
          'Vomissements, nausées',
          'Crises d\'épilepsie',
          'Troubles visuels ou perte de coordination'
        ],
        riskFactors: [
          'Hypertension artérielle non contrôlée',
          'Anévrisme cérébral ou malformation vasculaire',
          'Consommation excessive d\'alcool ou de drogues',
          'Troubles de la coagulation',
          'Traitements anticoagulants mal surveillés',
          'Tabagisme',
          'Âge avancé',
          'Traumatismes crâniens'
        ],
        diagnosis: [
          'Scanner cérébral (TDM) en urgence',
          'IRM cérébrale',
          'Angiographie cérébrale',
          'Bilan de coagulation sanguine',
          'ECG et bilan cardiovasculaire',
          'Ponction lombaire'
        ],
        treatments: [
          'Hospitalisation en urgence',
          'Contrôle strict de la pression artérielle',
          'Traitement des troubles de la coagulation',
          'Chirurgie d\'évacuation de l\'hématome',
          'Clip ou coiling en cas d\'anévrisme',
          'Surveillance de la pression intracrânienne',
          'Rééducation neurologique',
          'Suivi neuropsychologique et social'
        ],
        prognosis: 'Le pronostic est souvent plus grave que l\'AVC ischémique. Taux de mortalité élevé (40 à 50%). Séquelles neurologiques fréquentes. Une prise en charge rapide peut limiter les dommages.',
        prevention: [
          'Surveillance de la tension artérielle',
          'Réduction de l\'alcool et arrêt du tabac',
          'Traitement des anévrismes ou malformations vasculaires',
          'Suivi des anticoagulants',
          'Adoption d\'un mode de vie sain',
          'Contrôle des facteurs cardiovasculaires',
          'Consultation régulière chez le neurologue'
        ],
        resources: [
          {
            title: 'Référentiel national de prise en charge de l\'AVC hémorragique',
            url: 'https://santetunisie.rns.tn/images/articles/referentiel/CAT-AVC.pdf'
          },
          {
            title: 'Étude clinique sur les AVC hémorragiques au CHU de Sfax',
            url: 'https://www.panafrican-med-journal.com/content/article/35/50/full/'
          }
        ]
      },
      ar: {
        name: 'السكتة الدماغية النزفية',
        definition: 'السكتة الدماغية النزفية هي حالة طبية طارئة تحدث عندما ينفجر وعاء دموي في الدماغ، مما يسبب نزيفاً دماغياً يدمر الأنسجة المحيطة.',
        mechanism: 'تمزق الوعاء الدموي يؤدي إلى نزيف داخل الدماغ أو السحايا. هذا التراكم للدم يخلق ضغطاً على الدماغ، مما يسبب وذمة وتلفاً عصبياً سريعاً.',
        symptoms: [
          'صداع شديد ومفاجئ ("كالرعد")',
          'شلل أو ضعف في جانب واحد من الجسم',
          'اضطراب في الكلام أو الفهم',
          'اضطرابات في الوعي',
          'قيء، غثيان',
          'نوبات صرع',
          'اضطرابات بصرية أو فقدان التناسق'
        ],
        riskFactors: [
          'ارتفاع ضغط الدم غير المنضبط',
          'تمدد الأوعية الدموية أو تشوه وعائي',
          'الإفراط في تعاطي الكحول أو المخدرات',
          'اضطرابات التخثر',
          'علاجات مضادات التخثر غير المراقبة',
          'التدخين',
          'التقدم في السن',
          'إصابات الرأس'
        ],
        diagnosis: [
          'التصوير المقطعي للدماغ في الطوارئ',
          'التصوير بالرنين المغناطيسي للدماغ',
          'تصوير الأوعية الدماغية',
          'فحص تخثر الدم',
          'تخطيط القلب وتقييم القلب والأوعية الدموية',
          'البزل القطني'
        ],
        treatments: [
          'الدخول للمستشفى في الطوارئ',
          'السيطرة الصارمة على ضغط الدم',
          'علاج اضطرابات التخثر',
          'جراحة إزالة الورم الدموي',
          'تثبيت أو لف في حالة تمدد الأوعية الدموية',
          'مراقبة الضغط داخل الجمجمة',
          'إعادة التأهيل العصبي',
          'المتابعة النفسية العصبية والاجتماعية'
        ],
        prognosis: 'التكهن غالباً ما يكون أخطر من السكتة الدماغية الإقفارية. معدل الوفيات مرتفع (40-50٪). المضاعفات العصبية شائعة. العلاج السريع يمكن أن يحد من الأضرار.',
        prevention: [
          'مراقبة ضغط الدم',
          'تقليل الكحول والإقلاع عن التدخين',
          'علاج تمدد الأوعية الدموية أو التشوهات الوعائية',
          'متابعة مضادات التخثر',
          'اتباع نمط حياة صحي',
          'السيطرة على عوامل القلب والأوعية الدموية',
          'استشارة طبيب الأعصاب بانتظام'
        ],
        resources: [
          {
            title: 'المرجع الوطني لعلاج السكتة الدماغية النزفية',
            url: 'https://santetunisie.rns.tn/images/articles/referentiel/CAT-AVC.pdf'
          },
          {
            title: 'دراسة سريرية عن السكتات الدماغية النزفية في مستشفى صفاقس الجامعي',
            url: 'https://www.panafrican-med-journal.com/content/article/35/50/full/'
          }
        ]
      }
    }
  },
  {
    id: 'neuromyelite-optique',
    translations: {
      fr: {
        name: 'Neuromyélite Optique (NMO ou maladie de Devic)',
        definition: 'La neuromyélite optique est une maladie auto-immune rare qui affecte principalement les nerfs optiques et la moelle épinière, provoquant des poussées de névrite optique et de myélite aiguë transverse.',
        mechanism: 'La NMO est liée à des anticorps anti-AQP4 qui attaquent les astrocytes du système nerveux central, provoquant des inflammations graves avec destruction de la myéline et perte axonale.',
        symptoms: [
          'Névrite optique (douleur oculaire, perte de vision)',
          'Myélite transverse aiguë (paralysie, troubles sphinctériens)',
          'Douleurs neuropathiques intenses',
          'Vomissements et hoquets persistants',
          'Troubles sensitifs et moteurs sévères'
        ],
        riskFactors: [
          'Présence d\'anticorps anti-AQP4',
          'Femmes jeunes à d\'âge moyen',
          'Origine asiatique, africaine ou moyen-orientale',
          'Antécédents auto-immuns'
        ],
        diagnosis: [
          'IRM cérébrale et médullaire',
          'Dosage des anticorps anti-AQP4',
          'Ponction lombaire',
          'Tests visuels',
          'Bilan auto-immun'
        ],
        treatments: [
          'Corticoïdes IV à haute dose',
          'Plasmaphérèse',
          'Rituximab',
          'Azathioprine',
          'Mycophénolate mofétil',
          'Eculizumab',
          'Antidouleurs',
          'Rééducation fonctionnelle'
        ],
        prognosis: 'La NMO peut provoquer des handicaps sévères après chaque poussée si non traitée rapidement. Avec un diagnostic précoce et un traitement adapté, les rechutes peuvent être espacées et moins graves.',
        prevention: [
          'Diagnostic précoce',
          'Traitement précoce pour éviter les rechutes',
          'Suivi neurologique spécialisé à vie'
        ],
        resources: [
          {
            title: 'Article tunisien de référence sur la NMO',
            url: 'https://pubmed.ncbi.nlm.nih.gov/31375841/'
          },
          {
            title: 'Guide pratique STN',
            url: 'https://neurotunisia.tn/'
          }
        ]
      },
      ar: {
        name: 'التهاب العصب البصري والنخاع الشوكي',
        definition: 'التهاب العصب البصري والنخاع الشوكي هو مرض مناعي ذاتي نادر يؤثر بشكل رئيسي على الأعصاب البصرية والحبل الشوكي، مسبباً نوبات من التهاب العصب البصري والتهاب النخاع المستعرض الحاد.',
        mechanism: 'المرض مرتبط بأجسام مضادة للـ AQP4 التي تهاجم الخلايا النجمية في الجهاز العصبي المركزي، مما يسبب التهابات شديدة مع تدمير الميالين وفقدان المحاور العصبية.',
        symptoms: [
          'التهاب العصب البصري (ألم في العين، فقدان البصر)',
          'التهاب النخاع المستعرض الحاد (شلل، اضطرابات المصرات)',
          'آلام عصبية شديدة',
          'قيء وفواق مستمر',
          'اضطرابات حسية وحركية شديدة'
        ],
        riskFactors: [
          'وجود أجسام مضادة للـ AQP4',
          'النساء الشابات ومتوسطات العمر',
          'الأصول الآسيوية والأفريقية والشرق أوسطية',
          'تاريخ من الأمراض المناعية الذاتية'
        ],
        diagnosis: [
          'التصوير بالرنين المغناطيسي للدماغ والنخاع الشوكي',
          'قياس الأجسام المضادة للـ AQP4',
          'البزل القطني',
          'اختبارات بصرية',
          'تقييم المناعة الذاتية'
        ],
        treatments: [
          'الكورتيزون الوريدي بجرعات عالية',
          'تبادل البلازما',
          'ريتوكسيماب',
          'أزاثيوبرين',
          'ميكوفينولات موفيتيل',
          'إيكوليزوماب',
          'مسكنات الألم',
          'إعادة التأهيل الوظيفي'
        ],
        prognosis: 'يمكن أن يسبب المرض إعاقات شديدة بعد كل نوبة إذا لم يتم علاجه بسرعة. مع التشخيص المبكر والعلاج المناسب، يمكن أن تكون الانتكاسات متباعدة وأقل حدة.',
        prevention: [
          'التشخيص المبكر',
          'العلاج المبكر لتجنب الانتكاسات',
          'متابعة عصبية متخصصة مدى الحياة'
        ],
        resources: [
          {
            title: 'المقال التونسي المرجعي حول المرض',
            url: 'https://pubmed.ncbi.nlm.nih.gov/31375841/'
          },
          {
            title: 'الدليل العملي للجمعية التونسية لطب الأعصاب',
            url: 'https://neurotunisia.tn/'
          }
        ]
      }
    }
  },
  {
    id: 'myasthenie',
    translations: {
      fr: {
        name: 'Myasthénie (Myasthenia Gravis)',
        definition: 'La myasthénie est une maladie auto-immune chronique affectant la jonction neuromusculaire, entraînant une faiblesse musculaire fluctuante.',
        mechanism: 'Les anticorps bloquent ou détruisent les récepteurs de l\'acétylcholine sur les muscles, empêchant la transmission efficace du signal nerveux.',
        symptoms: [
          'Ptosis (chute de la paupière)',
          'Diplopie (vision double)',
          'Faiblesse des muscles faciaux',
          'Troubles de la parole',
          'Dysphagie (difficulté à avaler)',
          'Faiblesse des membres ou du cou',
          'Insuffisance respiratoire dans les formes graves'
        ],
        riskFactors: [
          'Infections',
          'Stress émotionnel ou physique',
          'Médicaments spécifiques',
          'Chirurgie',
          'Grossesse ou menstruations'
        ],
        diagnosis: [
          'Test aux anticholinestérasiques',
          'Recherche d\'anticorps anti-récepteurs ACh',
          'Électromyogramme',
          'Scanner ou IRM du médiastin',
          'Tests de fatigabilité oculaire',
          'Bilan respiratoire'
        ],
        treatments: [
          'Inhibiteurs de la cholinestérase',
          'Corticoïdes',
          'Immunosuppresseurs',
          'Rituximab',
          'Plasmaphérèse',
          'Immunoglobulines IV',
          'Thymectomie'
        ],
        prognosis: 'Avec un traitement adapté, l\'espérance de vie est normale. Le pronostic est meilleur en cas de diagnostic précoce et de prise en charge adéquate.',
        prevention: [
          'Éviter les médicaments contre-indiqués',
          'Suivi régulier par un neurologue',
          'Vaccination à jour',
          'Traitement précoce des infections',
          'Éviter la chaleur excessive'
        ],
        resources: [
          {
            title: 'Article tunisien de référence sur la myasthénie',
            url: 'https://pubmed.ncbi.nlm.nih.gov/28680608'
          },
          {
            title: 'Recommandations Société Tunisienne de Neurologie',
            url: 'https://neurotunisia.tn/'
          }
        ]
      },
      ar: {
        name: 'الوهن العضلي الوبيل',
        definition: 'الوهن العضلي الوبيل هو مرض مناعي ذاتي مزمن يؤثر على الوصل العصبي العضلي، مما يؤدي إلى ضعف عضلي متقلب.',
        mechanism: 'الأجسام المضادة تمنع أو تدمر مستقبلات الأسيتيل كولين على العضلات، مما يمنع النقل الفعال للإشارة العصبية.',
        symptoms: [
          'تدلي الجفن',
          'ازدواج الرؤية',
          'ضعف عضلات الوجه',
          'اضطرابات النطق',
          'صعوبة البلع',
          'ضعف الأطراف أو الرقبة',
          'قصور تنفسي في الحالات الشديدة'
        ],
        riskFactors: [
          'العدوى',
          'التوتر العاطفي أو الجسدي',
          'أدوية معينة',
          'الجراحة',
          'الحمل أو الدورة الشهرية'
        ],
        diagnosis: [
          'اختبار مثبطات الكولين إستراز',
          'البحث عن الأجسام المضادة لمستقبلات الأسيتيل كولين',
          'تخطيط كهربية العضل',
          'التصوير المقطعي أو بالرنين المغناطيسي للمنصف',
          'اختبارات التعب العيني',
          'تقييم التنفس'
        ],
        treatments: [
          'مثبطات الكولين إستراز',
          'الكورتيزون',
          'مثبطات المناعة',
          'ريتوكسيماب',
          'تبادل البلازما',
          'الغلوبولين المناعي الوريدي',
          'استئصال الغدة التيموسية'
        ],
        prognosis: 'مع العلاج المناسب، يكون متوسط العمر المتوقع طبيعياً. التكهن أفضل في حالة التشخيص المبكر والرعاية المناسبة.',
        prevention: [
          'تجنب الأدوية المضادة للاستطباب',
          'المتابعة المنتظمة مع طبيب الأعصاب',
          'تحديث التطعيمات',
          'العلاج المبكر للعدوى',
          'تجنب الحرارة المفرطة'
        ],
        resources: [
          {
            title: 'المقال التونسي المرجعي حول الوهن العضلي الوبيل',
            url: 'https://pubmed.ncbi.nlm.nih.gov/28680608'
          },
          {
            title: 'توصيات الجمعية التونسية لطب الأعصاب',
            url: 'https://neurotunisia.tn/'
          }
        ]
      }
    }
  },
  {
    id: 'dystrophies-musculaires',
    translations: {
      fr: {
        name: 'Dystrophies Musculaires',
        definition: 'Les dystrophies musculaires sont un groupe de maladies génétiques neuromusculaires caractérisées par une dégénérescence progressive des muscles squelettiques.',
        mechanism: 'Mutation génétique affectant la production de protéines musculaires essentielles. Les fibres musculaires se détériorent progressivement et sont remplacées par du tissu adipeux ou fibreux.',
        symptoms: [
          'Faiblesse musculaire progressive',
          'Démarche anormale',
          'Difficultés à courir, sauter, monter les escaliers',
          'Déformations orthopédiques',
          'Retard de croissance musculaire',
          'Troubles respiratoires',
          'Atteinte cardiaque'
        ],
        riskFactors: [
          'Facteurs génétiques',
          'Antécédents familiaux',
          'Sexe (selon le type de dystrophie)',
          'Âge de début variable'
        ],
        diagnosis: [
          'Dosage des CPK',
          'EMG',
          'Biopsie musculaire',
          'Test génétique',
          'IRM musculaire',
          'ECG et échocardiographie'
        ],
        treatments: [
          'Corticothérapie',
          'Kinésithérapie régulière',
          'Orthèses',
          'Assistance respiratoire',
          'Surveillance cardiaque',
          'Enzymothérapie',
          'Suivi multidisciplinaire'
        ],
        prognosis: 'Varie selon le type de dystrophie. DMD : perte de la marche avant 12 ans, espérance de vie limitée sans prise en charge adaptée. Autres formes : évolution plus lente.',
        prevention: [
          'Conseil génétique',
          'Dépistage prénatal possible',
          'Surveillance précoce des frères/soeurs'
        ],
        resources: [
          {
            title: 'Référentiel Tunisien sur les myopathies',
            url: 'https://f1000research.com/articles/13-983/v1'
          },
          {
            title: 'Association Tunisienne des Maladies Neuromusculaires',
            url: 'http://www.atmn.tn'
          }
        ]
      },
      ar: {
        name: 'ضمور العضلات',
        definition: 'ضمور العضلات هو مجموعة من الأمراض الوراثية العصبية العضلية التي تتميز بتدهور تدريجي في العضلات الهيكلية.',
        mechanism: 'طفرة جينية تؤثر على إنتاج البروتينات العضلية الأساسية. تتدهور الألياف العضلية تدريجياً ويتم استبدالها بأنسجة دهنية أو ليفية.',
        symptoms: [
          'ضعف عضلي متدرج',
          'مشية غير طبيعية',
          'صعوبات في الجري والقفز وصعود السلالم',
          'تشوهات عظمية',
          'تأخر النمو العضلي',
          'مشاكل في التنفس',
          'إصابة القلب'
        ],
        riskFactors: [
          'عوامل وراثية',
          'تاريخ عائلي',
          'الجنس (حسب نوع الضمور)',
          'عمر البداية متغير'
        ],
        diagnosis: [
          'قياس مستوى إنزيم CPK',
          'تخطيط كهربية العضل',
          'خزعة عضلية',
          'اختبار جيني',
          'التصوير بالرنين المغناطيسي للعضلات',
          'تخطيط القلب وتصوير القلب بالصدى'
        ],
        treatments: [
          'العلاج بالكورتيزون',
          'العلاج الطبيعي المنتظم',
          'دعامات تقويمية',
          'مساعدة تنفسية',
          'مراقبة القلب',
          'العلاج بالإنزيمات',
          'متابعة متعددة التخصصات'
        ],
        prognosis: 'يختلف حسب نوع الضمور. في حالة ضمور دوشين: فقدان المشي قبل 12 عاماً، متوسط العمر المتوقع محدود بدون رعاية مناسبة. الأشكال الأخرى: تطور أبطأ.',
        prevention: [
          'استشارة وراثية',
          'إمكانية الفحص قبل الولادة',
          'مراقبة مبكرة للإخوة/الأخوات'
        ],
        resources: [
          {
            title: 'المرجع التونسي لأمراض العضلات',
            url: 'https://f1000research.com/articles/13-983/v1'
          },
          {
            title: 'الجمعية التونسية لأمراض الأعصاب والعضلات',
            url: 'http://www.atmn.tn'
          }
        ]
      }
    }
  },
  {
    id: 'migraine',
    translations: {
      fr: {
        name: 'Migraine',
        definition: 'La migraine est une affection neurologique fréquente, caractérisée par des céphalées récurrentes et intenses, souvent unilatérales et pulsatiles, associées à des symptômes sensoriels.',
        mechanism: 'Dysfonctionnement neurologique transitoire impliquant une hyperexcitabilité du cortex cérébral, une activation du trijumeau et une inflammation des méninges.',
        symptoms: [
          'Céphalée pulsatile unilatérale',
          'Douleur modérée à sévère',
          'Nausées, vomissements',
          'Photophobie',
          'Phonophobie',
          'Aura dans certains cas'
        ],
        riskFactors: [
          'Stress, anxiété',
          'Troubles du sommeil',
          'Alcool, chocolat, fromages fermentés',
          'Jeûne ou hypoglycémie',
          'Menstruations',
          'Lumières fortes, bruits, odeurs',
          'Changements météorologiques'
        ],
        diagnosis: [
          'Diagnostic clinique',
          'IRM ou scanner cérébral',
          'Bilan ophtalmologique',
          'Journal des céphalées'
        ],
        treatments: [
          'Paracétamol, AINS',
          'Triptans',
          'Anti-nauséeux',
          'Bêta-bloquants',
          'Amitriptyline',
          'Topiramate',
          'Toxine botulique',
          'Techniques de relaxation'
        ],
        prognosis: 'Évolution chronique possible, mais non progressive. Environ 10 à 15% des personnes souffrent de migraine dans le monde. Bonne réponse au traitement chez la majorité des patients.',
        prevention: [
          'Éviter les facteurs déclenchants',
          'Tenir un journal des crises',
          'Maintenir un rythme de vie stable',
          'Gérer le stress',
          'Traitement de fond si ≥4 crises/mois'
        ],
        resources: [
          {
            title: 'Recommandations internationales sur la migraine',
            url: 'https://ichd-3.org'
          },
          {
            title: 'Étude tunisienne sur la migraine dans la population active',
            url: 'https://www.panafrican-med-journal.com/content/article/36/185/full'
          }
        ]
      },
      ar: {
        name: 'الصداع النصفي',
        definition: 'الصداع النصفي هو اضطراب عصبي شائع، يتميز بنوبات صداع متكررة وشديدة، غالباً ما تكون في جانب واحد ونابضة، مصحوبة بأعراض حسية.',
        mechanism: 'خلل عصبي مؤقت يتضمن فرط استثارة القشرة الدماغية، وتنشيط العصب مثلث التوائم، والتهاب السحايا.',
        symptoms: [
          'صداع نابض في جانب واحد',
          'ألم متوسط إلى شديد',
          'غثيان، قيء',
          'حساسية للضوء',
          'حساسية للصوت',
          'هالة في بعض الحالات'
        ],
        riskFactors: [
          'التوتر، القلق',
          'اضطرابات النوم',
          'الكحول، الشوكولاتة، الأجبان المخمرة',
          'الصيام أو نقص السكر في الدم',
          'الدورة الشهرية',
          'الأضواء القوية، الضوضاء، الروائح',
          'التغيرات الجوية'
        ],
        diagnosis: [
          'التشخيص السريري',
          'التصوير بالرنين المغناطيسي أو المقطعي للدماغ',
          'فحص العيون',
          'يومية الصداع'
        ],
        treatments: [
          'باراسيتامول، مضادات الالتهاب غير الستيروئيدية',
          'التريبتان',
          'مضادات الغثيان',
          'حاصرات بيتا',
          'أميتريبتيلين',
          'توبيرامات',
          'سم البوتولينوم',
          'تقنيات الاسترخاء'
        ],
        prognosis: 'يمكن أن يتطور إلى حالة مزمنة، لكنه غير تصاعدي. حوالي 10-15٪ من الناس يعانون من الصداع النصفي في العالم. استجابة جيدة للعلاج عند معظم المرضى.',
        prevention: [
          'تجنب العوامل المحفزة',
          'الاحتفاظ بيومية النوبات',
          'الحفاظ على نمط حياة مستقر',
          'إدارة التوتر',
          'علاج وقائي إذا ≥4 نوبات/شهر'
        ],
        resources: [
          {
            title: 'التوصيات الدولية للصداع النصفي',
            url: 'https://ichd-3.org'
          },
          {
            title: 'دراسة تونسية عن الصداع النصفي في السكان العاملين',
            url: 'https://www.panafrican-med-journal.com/content/article/36/185/full'
          }
        ]
      }
    }
  }
];

// Translation type
type Language = 'fr' | 'ar';

const Diseases: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState<Language>('fr');

  const translations = {
    fr: {
      pageTitle: 'Nos Maladies',
      pageSubtitle: 'Découvrez nos fiches détaillées sur les maladies neurologiques, offrant une information complète et personnalisée.',
      search: 'Rechercher une maladie...',
      readMore: 'En savoir plus',
      close: 'Fermer',
      definition: 'Définition',
      mechanism: 'Mécanisme',
      symptoms: 'Symptômes',
      riskFactors: 'Facteurs de risque',
      diagnosis: 'Examens diagnostiques',
      treatments: 'Traitements',
      prognosis: 'Pronostic',
      prevention: 'Prévention',
      resources: 'Ressources utiles'
    },
    ar: {
      pageTitle: 'أمراضنا',
      pageSubtitle: 'اكتشف ملفاتنا المفصلة عن الأمراض العصبية، التي تقدم معلومات شاملة ومخصصة.',
      search: 'البحث عن مرض...',
      readMore: 'اقرأ المزيد',
      close: 'إغلاق',
      definition: 'التعريف',
      mechanism: 'الآلية',
      symptoms: 'الأعراض',
      riskFactors: 'عوامل الخطر',
      diagnosis: 'الفحوصات التشخيصية',
      treatments: 'العلاجات',
      prognosis: 'التشخيص',
      prevention: 'الوقاية',
      resources: 'موارد مفيدة'
    }
  };

  const t = translations[language];

  const filteredDiseases = diseases.filter(disease =>
    disease.translations[language].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.translations[language].definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-xl text-white">
              {t.pageSubtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <FaSearch className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} />
              <input
                type="text"
                placeholder={t.search}
                className={`w-full ${language === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDiseases.map((disease) => (
              <div
                key={disease.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => setSelectedDisease(disease)}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaBrain className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                      {disease.translations[language].name}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-600 line-clamp-3 mb-4">
                    {disease.translations[language].definition}
                  </p>
                  <div className="mt-4">
                    <button
                      className="text-lg text-blue-600 hover:text-blue-800 font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDisease(disease);
                      }}
                    >
                      {t.readMore} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedDisease && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedDisease.translations[language].name}
                  </h2>
                  <button
                    onClick={() => setSelectedDisease(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">{t.close}</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-8">
                  <div className="space-y-8">
                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.definition}</h3>
                      <p className="text-xl text-gray-600">{selectedDisease.translations[language].definition}</p>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.mechanism}</h3>
                      <p className="text-xl text-gray-600">{selectedDisease.translations[language].mechanism}</p>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.symptoms}</h3>
                      <ul className="list-disc list-inside text-xl text-gray-600 space-y-2">
                        {selectedDisease.translations[language].symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.riskFactors}</h3>
                      <ul className="list-disc list-inside text-xl text-gray-600 space-y-2">
                        {selectedDisease.translations[language].riskFactors.map((factor, index) => (
                          <li key={index}>{factor}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.diagnosis}</h3>
                      <ul className="list-disc list-inside text-xl text-gray-600 space-y-2">
                        {selectedDisease.translations[language].diagnosis.map((exam, index) => (
                          <li key={index}>{exam}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.treatments}</h3>
                      <ul className="list-disc list-inside text-xl text-gray-600 space-y-2">
                        {selectedDisease.translations[language].treatments.map((treatment, index) => (
                          <li key={index}>{treatment}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.prognosis}</h3>
                      <p className="text-xl text-gray-600">{selectedDisease.translations[language].prognosis}</p>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.prevention}</h3>
                      <ul className="list-disc list-inside text-xl text-gray-600 space-y-2">
                        {selectedDisease.translations[language].prevention.map((measure, index) => (
                          <li key={index}>{measure}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.resources}</h3>
                      <ul className="space-y-3">
                        {selectedDisease.translations[language].resources.map((resource, index) => (
                          <li key={index}>
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {resource.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diseases;