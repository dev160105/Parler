export const COURSE = {
  levels: ["A1", "A2"],
  units: [
    { id: 1, level: "A1", title: "Bonjour Basics", desc: "Greetings, polite phrases, and first conversations.", lessons: ["greetings", "polite", "introduce"], stories: ["market_morning"] },
    { id: 2, level: "A1", title: "Everyday People", desc: "Family, professions, and basic descriptions.", lessons: ["family", "descriptions", "likes"], stories: ["portrait_simple"] },
    { id: 3, level: "A1", title: "City Life", desc: "Directions, places, and getting around.", lessons: ["places", "directions", "transport"], stories: ["metro_day"] },
    { id: 4, level: "A1", title: "Food & Café", desc: "Ordering food, drinks, and talking about meals.", lessons: ["food", "cafe", "preferences"], stories: ["cafe_order"] },
    { id: 5, level: "A1", title: "Time & Plans", desc: "Days, months, and planning simple activities.", lessons: ["numbers", "time", "plans"], stories: ["weekend_plan"] },
    { id: 6, level: "A2", title: "Past Moments", desc: "Passé composé and telling past events.", lessons: ["past_intro", "past_with_avoir", "past_with_etre"], stories: ["lost_wallet"] },
    { id: 7, level: "A2", title: "Future Moves", desc: "Futur proche and future simple in context.", lessons: ["future_intro", "future_simple", "goals"], stories: ["next_month"] },
    { id: 8, level: "A2", title: "At Work", desc: "Office vocabulary, emails, and meetings.", lessons: ["office", "email", "meeting"], stories: ["meeting_day"] },
    { id: 9, level: "A2", title: "Travel & Trip", desc: "Travel plans, hotels, and problem solving.", lessons: ["travel", "hotel", "problems"], stories: ["train_delay"] },
    { id: 10, level: "A2", title: "Opinions & Culture", desc: "Expressing opinions, cinema, and culture.", lessons: ["opinions", "cinema", "culture"], stories: ["movie_night"] },
  ]
};

export const LESSONS = {
  greetings: {
    title: "Greetings & Farewells",
    level: "A1",
    summary: "Greet people, respond politely, and say goodbye.",
    objectives: ["Use formal and informal greetings", "Say goodbye appropriately", "Respond to basic well-being questions"],
    vocab: [
      { fr: "Bonjour", en: "Hello / good day", phon: "bohn-ZHOOR", example: "Bonjour, comment ça va?", exampleEn: "Hello, how are you?" },
      { fr: "Bonsoir", en: "Good evening", phon: "bohn-SWAHR", example: "Bonsoir, madame.", exampleEn: "Good evening, madam." },
      { fr: "Salut", en: "Hi / bye (informal)", phon: "sa-LU", example: "Salut, à bientôt!", exampleEn: "Hi, see you soon!" },
      { fr: "Allô", en: "Hello (phone/Quebec)", phon: "a-LO", example: "Allô! Tu es là?", exampleEn: "Hello! Are you there?" },
      { fr: "Au revoir", en: "Goodbye", phon: "oh-ruh-VWAR", example: "Au revoir et bonne journée.", exampleEn: "Goodbye and have a good day." },
      { fr: "Merci", en: "Thank you", phon: "mehr-SEE", example: "Merci beaucoup.", exampleEn: "Thank you very much." },
    ],
    grammar: {
      title: "Greeting Register",
      rules: ["Use bonjour before evening and bonsoir after around 6pm.", "Salut is informal; use bonjour with strangers.", "Add a name after the greeting to be friendly."],
      examples: [{ fr: "Bonjour, Marie.", en: "Hello, Marie." }, { fr: "Bonsoir, monsieur.", en: "Good evening, sir." }, { fr: "Salut, à demain!", en: "Hi, see you tomorrow!" }]
    },
    dialogue: [{ who: "A", fr: "Bonjour! Vous allez bien?", en: "Hello! Are you well?" }, { who: "B", fr: "Très bien, merci. Et vous?", en: "Very well, thank you. And you?" }],
    exercises: [{ prompt: "Choose formal greeting for a teacher.", answer: "Bonjour." }, { prompt: "Translate: 'Good evening, sir.'", answer: "Bonsoir, monsieur." }, { prompt: "Complete: _____, à demain!", answer: "Salut" }, { prompt: "Translate: 'Thank you very much.'", answer: "Merci beaucoup." }]
  },
  polite: {
    title: "Polite Phrases",
    level: "A1",
    summary: "Use polite expressions in daily interactions.",
    objectives: ["Ask for help politely", "Apologize and get attention", "Say you do not understand"],
    vocab: [
      { fr: "S'il vous plaît", en: "Please (formal)", phon: "seel voo pleh", example: "Un café, s'il vous plaît.", exampleEn: "A coffee, please." },
      { fr: "S'il te plaît", en: "Please (informal)", phon: "seel tuh pleh", example: "Ouvre la porte, s'il te plaît.", exampleEn: "Open the door, please." },
      { fr: "Excusez-moi", en: "Excuse me", phon: "ex-kew-zay mwah", example: "Excusez-moi, où est la station?", exampleEn: "Excuse me, where is the station?" },
      { fr: "Pardon", en: "Sorry", phon: "par-DOHN", example: "Pardon, je suis en retard.", exampleEn: "Sorry, I am late." },
      { fr: "Je ne comprends pas", en: "I do not understand", phon: "zhuh nuh kohn-prahn pah", example: "Je ne comprends pas.", exampleEn: "I do not understand." },
      { fr: "Répétez, s'il vous plaît", en: "Repeat, please", phon: "ray-pay-tay", example: "Répétez, s'il vous plaît.", exampleEn: "Repeat, please." }
    ],
    grammar: { title: "Politeness with vous", rules: ["Use vous with strangers or in service settings.", "S'il vous plaît goes after the request.", "Je ne comprends pas is a full sentence you can use alone."], examples: [{ fr: "Excusez-moi, vous avez l'heure?", en: "Excuse me, do you have the time?" }, { fr: "Un verre d'eau, s'il vous plaît.", en: "A glass of water, please." }, { fr: "Je ne comprends pas, répétez, s'il vous plaît.", en: "I do not understand, repeat, please." }] },
    dialogue: [{ who: "A", fr: "Excusez-moi, vous avez l'heure?", en: "Excuse me, do you have the time?" }, { who: "B", fr: "Oui, il est neuf heures.", en: "Yes, it is nine o'clock." }],
    exercises: [{ prompt: "Translate: 'Please, a water.'", answer: "De l'eau, s'il vous plaît." }, { prompt: "Translate: 'I do not understand.'", answer: "Je ne comprends pas." }, { prompt: "Complete: Excusez-____, où est la banque?", answer: "moi" }, { prompt: "Translate: 'Repeat, please.'", answer: "Répétez, s'il vous plaît." }]
  },
  introduce: {
    title: "Introduce Yourself",
    level: "A1",
    summary: "Say your name, origin, and where you live.",
    objectives: ["Introduce yourself", "Say where you are from", "Say where you live"],
    vocab: [
      { fr: "Je m'appelle…", en: "My name is…", phon: "zhuh ma-PELL", example: "Je m'appelle Maya.", exampleEn: "My name is Maya." },
      { fr: "Je suis", en: "I am", phon: "zhuh swee", example: "Je suis canadien.", exampleEn: "I am Canadian." },
      { fr: "J'habite", en: "I live", phon: "zhah-bit", example: "J'habite à Montréal.", exampleEn: "I live in Montreal." },
      { fr: "Je viens de", en: "I am from", phon: "zhuh vyen duh", example: "Je viens de Lyon.", exampleEn: "I am from Lyon." },
      { fr: "Enchanté(e)", en: "Nice to meet you", phon: "on-shahn-tay", example: "Enchanté.", exampleEn: "Nice to meet you." },
      { fr: "Voici", en: "Here is", phon: "vwar-see", example: "Voici mon ami.", exampleEn: "Here is my friend." }
    ],
    grammar: { title: "Basic Identity Sentences", rules: ["Je suis + nationality or profession.", "J'habite + city.", "Je viens de + city or country."], examples: [{ fr: "Je suis étudiant.", en: "I am a student." }, { fr: "J'habite à Paris.", en: "I live in Paris." }, { fr: "Je viens du Canada.", en: "I am from Canada." }] },
    dialogue: [{ who: "A", fr: "Tu t'appelles comment?", en: "What is your name?" }, { who: "B", fr: "Je m'appelle Lina. Et toi?", en: "My name is Lina. And you?" }],
    exercises: [{ prompt: "Translate: 'I live in Paris.'", answer: "J'habite à Paris." }, { prompt: "Translate: 'I am from Lyon.'", answer: "Je viens de Lyon." }, { prompt: "Complete: Je ______ Pierre.", answer: "m'appelle" }, { prompt: "Translate: 'Nice to meet you.'", answer: "Enchanté." }]
  },
  family: {
    title: "Family & People",
    level: "A1",
    summary: "Talk about family and relationships.",
    objectives: ["Name family members", "Use possessive adjectives", "Say how many siblings you have"],
    vocab: [
      { fr: "La famille", en: "Family", phon: "la fa-mee", example: "Ma famille est grande.", exampleEn: "My family is big." },
      { fr: "Le père", en: "Father", phon: "luh pehr", example: "Mon père travaille.", exampleEn: "My father works." },
      { fr: "La mère", en: "Mother", phon: "la mehr", example: "Ma mère est ici.", exampleEn: "My mother is here." },
      { fr: "Le frère", en: "Brother", phon: "luh frair", example: "J'ai un frère.", exampleEn: "I have a brother." },
      { fr: "La sœur", en: "Sister", phon: "la sir", example: "J'ai une sœur.", exampleEn: "I have a sister." },
      { fr: "Les parents", en: "Parents", phon: "lay pah-rahn", example: "Mes parents habitent ici.", exampleEn: "My parents live here." }
    ],
    grammar: { title: "Possessive Adjectives", rules: ["mon/ma/mes = my", "ton/ta/tes = your (informal)", "son/sa/ses = his/her"], examples: [{ fr: "Mon père est médecin.", en: "My father is a doctor." }, { fr: "Ma sœur est étudiante.", en: "My sister is a student." }, { fr: "Mes parents sont à Québec.", en: "My parents are in Quebec." }] },
    dialogue: [{ who: "A", fr: "Tu as des frères?", en: "Do you have brothers?" }, { who: "B", fr: "Oui, j'ai un frère.", en: "Yes, I have one brother." }],
    exercises: [{ prompt: "Translate: 'My sister is here.'", answer: "Ma sœur est ici." }, { prompt: "Complete: ____ parents sont à Paris.", answer: "Mes" }, { prompt: "Translate: 'I have a brother.'", answer: "J'ai un frère." }, { prompt: "Complete: ____ mère travaille.", answer: "Ma" }]
  },
  descriptions: {
    title: "Descriptions",
    level: "A1",
    summary: "Describe people and things with adjectives.",
    objectives: ["Use common adjectives", "Place adjectives correctly", "Agree adjectives with gender"],
    vocab: [
      { fr: "Grand(e)", en: "Tall / big", phon: "grahn", example: "Il est grand.", exampleEn: "He is tall." },
      { fr: "Petit(e)", en: "Small / short", phon: "puh-TEE", example: "Le café est petit.", exampleEn: "The cafe is small." },
      { fr: "Jeune", en: "Young", phon: "zhuhn", example: "Elle est jeune.", exampleEn: "She is young." },
      { fr: "Vieux / vieille", en: "Old", phon: "vyuh / vyay", example: "Le quartier est vieux.", exampleEn: "The neighborhood is old." },
      { fr: "Joli(e)", en: "Pretty", phon: "zho-LEE", example: "Une jolie rue.", exampleEn: "A pretty street." },
      { fr: "Sympa", en: "Nice / friendly", phon: "sim-PA", example: "Un professeur sympa.", exampleEn: "A nice teacher." }
    ],
    grammar: { title: "Adjective Position & Agreement", rules: ["Most adjectives go after the noun.", "Some common adjectives go before: petit, grand, joli, vieux, jeune.", "Adjectives agree in gender and number: grand → grande."], examples: [{ fr: "Une petite maison.", en: "A small house." }, { fr: "Un grand café.", en: "A big cafe." }, { fr: "Des rues jolies.", en: "Pretty streets." }] },
    dialogue: [{ who: "A", fr: "C'est un café sympa?", en: "Is it a nice cafe?" }, { who: "B", fr: "Oui, il est très sympa.", en: "Yes, it is very nice." }],
    exercises: [{ prompt: "Translate: 'A small car.'", answer: "Une petite voiture." }, { prompt: "Complete: Une ____ rue.", answer: "jolie" }, { prompt: "Translate: 'The old museum.'", answer: "Le vieux musée." }, { prompt: "Complete: Il est ____.", answer: "grand" }]
  },
  likes: {
    title: "Likes & Dislikes",
    level: "A1",
    summary: "Say what you like, love, or dislike.",
    objectives: ["Use aimer, adorer, détester", "Form negation", "Talk about preferences"],
    vocab: [
      { fr: "J'aime", en: "I like", phon: "zhem", example: "J'aime le café.", exampleEn: "I like coffee." },
      { fr: "J'aime bien", en: "I quite like", phon: "zhem byehn", example: "J'aime bien le thé.", exampleEn: "I quite like tea." },
      { fr: "Je n'aime pas", en: "I do not like", phon: "zhuh nem pah", example: "Je n'aime pas le fromage.", exampleEn: "I do not like cheese." },
      { fr: "J'adore", en: "I love", phon: "zhah-dor", example: "J'adore les films.", exampleEn: "I love movies." },
      { fr: "Je préfère", en: "I prefer", phon: "zhuh preh-fehr", example: "Je préfère le thé.", exampleEn: "I prefer tea." },
      { fr: "Je déteste", en: "I hate", phon: "zhuh day-test", example: "Je déteste le froid.", exampleEn: "I hate the cold." }
    ],
    grammar: { title: "Negation with ne…pas", rules: ["Negation wraps the verb: ne + verb + pas.", "With vowel, ne becomes n'.", "Use préférer to compare options."], examples: [{ fr: "Je n'aime pas le sucre.", en: "I do not like sugar." }, { fr: "J'aime bien la musique.", en: "I quite like music." }, { fr: "Je préfère le café.", en: "I prefer coffee." }] },
    dialogue: [{ who: "A", fr: "Tu aimes le thé?", en: "Do you like tea?" }, { who: "B", fr: "Non, je préfère le café.", en: "No, I prefer coffee." }],
    exercises: [{ prompt: "Translate: 'I love music.'", answer: "J'adore la musique." }, { prompt: "Translate: 'I do not like cheese.'", answer: "Je n'aime pas le fromage." }, { prompt: "Complete: J'____ bien le cinéma.", answer: "aime" }, { prompt: "Translate: 'I prefer tea.'", answer: "Je préfère le thé." }]
  },
  places: {
    title: "Places in the City",
    level: "A1",
    summary: "Name common places and ask where they are.",
    objectives: ["Learn city locations", "Ask where something is", "Use basic prepositions"],
    vocab: [
      { fr: "La station", en: "Station", phon: "la stah-syon", example: "La station de métro est là.", exampleEn: "The metro station is there." },
      { fr: "La rue", en: "Street", phon: "la rue", example: "La rue est petite.", exampleEn: "The street is small." },
      { fr: "Le musée", en: "Museum", phon: "luh myu-zay", example: "Le musée est ouvert.", exampleEn: "The museum is open." },
      { fr: "La banque", en: "Bank", phon: "la bahnk", example: "La banque est grande.", exampleEn: "The bank is big." },
      { fr: "La boulangerie", en: "Bakery", phon: "boo-lahn-zhuh-REE", example: "La boulangerie est ici.", exampleEn: "The bakery is here." },
      { fr: "Le parc", en: "Park", phon: "luh park", example: "Le parc est joli.", exampleEn: "The park is pretty." }
    ],
    grammar: { title: "Asking Where", rules: ["Use Où est + noun?", "Use près de / loin de for distance.", "Use à + place for destination."], examples: [{ fr: "Où est la banque?", en: "Where is the bank?" }, { fr: "Le parc est près de la station.", en: "The park is near the station." }, { fr: "Je vais au musée.", en: "I am going to the museum." }] },
    dialogue: [{ who: "A", fr: "Où est le musée?", en: "Where is the museum?" }, { who: "B", fr: "Il est près du parc.", en: "It is near the park." }],
    exercises: [{ prompt: "Translate: 'Where is the station?'", answer: "Où est la station?" }, { prompt: "Complete: Le parc est ____ de la rue.", answer: "près" }, { prompt: "Translate: 'I am going to the bank.'", answer: "Je vais à la banque." }, { prompt: "Complete: Où est la ____?", answer: "boulangerie" }]
  },
  directions: {
    title: "Directions",
    level: "A1",
    summary: "Give and understand directions in town.",
    objectives: ["Use direction phrases", "Understand left and right", "Use the imperative"],
    vocab: [
      { fr: "Tout droit", en: "Straight ahead", phon: "too drwah", example: "Allez tout droit.", exampleEn: "Go straight ahead." },
      { fr: "À gauche", en: "On the left", phon: "ah gosh", example: "Tournez à gauche.", exampleEn: "Turn left." },
      { fr: "À droite", en: "On the right", phon: "ah drwaht", example: "Tournez à droite.", exampleEn: "Turn right." },
      { fr: "Près de", en: "Near", phon: "preh duh", example: "C'est près de la gare.", exampleEn: "It is near the station." },
      { fr: "Loin de", en: "Far from", phon: "lwan duh", example: "C'est loin d'ici.", exampleEn: "It is far from here." },
      { fr: "En face de", en: "Opposite", phon: "on fass duh", example: "En face de la banque.", exampleEn: "Opposite the bank." }
    ],
    grammar: { title: "Imperative Commands", rules: ["Use allez, tournez, prenez to give directions.", "The imperative often starts the sentence.", "Add s'il vous plaît for politeness."], examples: [{ fr: "Allez tout droit.", en: "Go straight ahead." }, { fr: "Tournez à droite.", en: "Turn right." }, { fr: "Prenez la première rue.", en: "Take the first street." }] },
    dialogue: [{ who: "A", fr: "La banque est loin?", en: "Is the bank far?" }, { who: "B", fr: "Non, allez tout droit.", en: "No, go straight ahead." }],
    exercises: [{ prompt: "Translate: 'Turn right.'", answer: "Tournez à droite." }, { prompt: "Complete: ____ tout droit.", answer: "Allez" }, { prompt: "Translate: 'Opposite the park.'", answer: "En face du parc." }, { prompt: "Complete: C'est ____ d'ici.", answer: "loin" }]
  },
  transport: {
    title: "Transport",
    level: "A1",
    summary: "Talk about public transport and tickets.",
    objectives: ["Name transport options", "Ask for tickets", "Use prendre for transport"],
    vocab: [
      { fr: "Le métro", en: "Metro", phon: "luh may-troh", example: "Je prends le métro.", exampleEn: "I take the metro." },
      { fr: "Le bus", en: "Bus", phon: "luh boos", example: "Le bus arrive.", exampleEn: "The bus arrives." },
      { fr: "Le billet", en: "Ticket", phon: "luh bee-yay", example: "Un billet, s'il vous plaît.", exampleEn: "A ticket, please." },
      { fr: "La ligne", en: "Line", phon: "la leen-yuh", example: "La ligne 2.", exampleEn: "Line 2." },
      { fr: "La correspondance", en: "Transfer", phon: "kor-eh-spohn-dahns", example: "La correspondance est ici.", exampleEn: "The transfer is here." },
      { fr: "La sortie", en: "Exit", phon: "la sor-TEE", example: "La sortie est à droite.", exampleEn: "The exit is on the right." }
    ],
    grammar: { title: "Using prendre", rules: ["Use prendre with transport: prendre le métro.", "Use à + number for lines: ligne 2.", "Use où est for directions inside stations."], examples: [{ fr: "Je prends le bus 24.", en: "I take bus 24." }, { fr: "Où est la correspondance?", en: "Where is the transfer?" }, { fr: "La sortie est à gauche.", en: "The exit is on the left." }] },
    dialogue: [{ who: "A", fr: "Un billet pour le métro, s'il vous plaît.", en: "A ticket for the metro, please." }, { who: "B", fr: "Voilà. Bonne journée!", en: "Here you go. Have a good day!" }],
    exercises: [{ prompt: "Translate: 'I take the bus.'", answer: "Je prends le bus." }, { prompt: "Complete: La ____ est ici.", answer: "correspondance" }, { prompt: "Translate: 'Where is the exit?'", answer: "Où est la sortie?" }, { prompt: "Complete: Un ____ pour le métro.", answer: "billet" }]
  },
  food: {
    title: "Food Vocabulary",
    level: "A1",
    summary: "Basic foods and quantities.",
    objectives: ["Name common foods", "Use partitive articles", "Order simple items"],
    vocab: [
      { fr: "Le pain", en: "Bread", phon: "luh pahn", example: "Je veux du pain.", exampleEn: "I want bread." },
      { fr: "Le fromage", en: "Cheese", phon: "luh fro-mazh", example: "Le fromage est bon.", exampleEn: "The cheese is good." },
      { fr: "La soupe", en: "Soup", phon: "la soup", example: "La soupe est chaude.", exampleEn: "The soup is hot." },
      { fr: "Le poulet", en: "Chicken", phon: "luh poo-lay", example: "Je prends du poulet.", exampleEn: "I am having chicken." },
      { fr: "La salade", en: "Salad", phon: "la sa-lahd", example: "Une salade, s'il vous plaît.", exampleEn: "A salad, please." },
      { fr: "Les légumes", en: "Vegetables", phon: "lay lay-gyoom", example: "J'aime les légumes.", exampleEn: "I like vegetables." }
    ],
    grammar: { title: "Partitive Articles", rules: ["Use du / de la / de l' for some of something.", "Use des for plural quantities.", "After negation, use de or d'."], examples: [{ fr: "Je veux du pain.", en: "I want some bread." }, { fr: "Elle mange de la salade.", en: "She eats some salad." }, { fr: "Je ne veux pas de sucre.", en: "I do not want sugar." }] },
    dialogue: [{ who: "A", fr: "Vous prenez quoi?", en: "What are you having?" }, { who: "B", fr: "Je prends une soupe.", en: "I am having a soup." }],
    exercises: [{ prompt: "Translate: 'I want some cheese.'", answer: "Je veux du fromage." }, { prompt: "Complete: Je mange ____ salade.", answer: "de la" }, { prompt: "Translate: 'I do not want sugar.'", answer: "Je ne veux pas de sucre." }, { prompt: "Complete: J'aime ____ légumes.", answer: "les" }]
  },
  cafe: {
    title: "At the Café",
    level: "A1",
    summary: "Order drinks and snacks politely.",
    objectives: ["Order with je voudrais", "Ask for the bill", "Use café vocabulary"],
    vocab: [
      { fr: "Un café", en: "A coffee", phon: "uhn ka-fay", example: "Un café, s'il vous plaît.", exampleEn: "A coffee, please." },
      { fr: "Un thé", en: "A tea", phon: "uhn tay", example: "Un thé au citron.", exampleEn: "A tea with lemon." },
      { fr: "Un croissant", en: "A croissant", phon: "uhn kruh-sahn", example: "Je veux un croissant.", exampleEn: "I want a croissant." },
      { fr: "Un sandwich", en: "A sandwich", phon: "uhn sahn-dweesh", example: "Un sandwich au fromage.", exampleEn: "A cheese sandwich." },
      { fr: "L'addition", en: "The bill", phon: "lah-dee-syon", example: "L'addition, s'il vous plaît.", exampleEn: "The bill, please." },
      { fr: "Je voudrais", en: "I would like", phon: "zhuh voo-dreh", example: "Je voudrais un café.", exampleEn: "I would like a coffee." }
    ],
    grammar: { title: "Polite Requests", rules: ["Use je voudrais for polite orders.", "Add s'il vous plaît after the request.", "Use un/une for countable items."], examples: [{ fr: "Je voudrais un thé.", en: "I would like a tea." }, { fr: "Un croissant, s'il vous plaît.", en: "A croissant, please." }, { fr: "L'addition, s'il vous plaît.", en: "The bill, please." }] },
    dialogue: [{ who: "A", fr: "Bonjour, je voudrais un café.", en: "Hello, I would like a coffee." }, { who: "B", fr: "Avec du lait?", en: "With milk?" }],
    exercises: [{ prompt: "Translate: 'The bill, please.'", answer: "L'addition, s'il vous plaît." }, { prompt: "Complete: Je ____ un café.", answer: "voudrais" }, { prompt: "Translate: 'A tea with lemon.'", answer: "Un thé au citron." }, { prompt: "Complete: Un ____ au fromage.", answer: "sandwich" }]
  },
  preferences: {
    title: "Preferences",
    level: "A1",
    summary: "Say how you like things and what you prefer.",
    objectives: ["Use avec and sans", "Express preferences", "Use intensifiers"],
    vocab: [
      { fr: "Sans sucre", en: "Without sugar", phon: "sahn soo-kr", example: "Un café sans sucre.", exampleEn: "A coffee without sugar." },
      { fr: "Avec", en: "With", phon: "ah-vek", example: "Avec du lait.", exampleEn: "With milk." },
      { fr: "Je préfère", en: "I prefer", phon: "zhuh preh-fehr", example: "Je préfère le thé.", exampleEn: "I prefer tea." },
      { fr: "Encore", en: "Another / again", phon: "on-kor", example: "Encore un café.", exampleEn: "Another coffee." },
      { fr: "Assez", en: "Enough", phon: "ah-say", example: "C'est assez.", exampleEn: "That is enough." },
      { fr: "Trop", en: "Too much", phon: "troh", example: "C'est trop sucré.", exampleEn: "It is too sweet." }
    ],
    grammar: { title: "Preferences and Quantity", rules: ["Use sans + noun for without.", "Use avec + noun for with.", "Use trop to say too much."], examples: [{ fr: "Un thé sans sucre.", en: "A tea without sugar." }, { fr: "Je préfère le café.", en: "I prefer coffee." }, { fr: "C'est trop sucré.", en: "It is too sweet." }] },
    dialogue: [{ who: "A", fr: "Vous voulez du sucre?", en: "Do you want sugar?" }, { who: "B", fr: "Non, sans sucre, merci.", en: "No, without sugar, thank you." }],
    exercises: [{ prompt: "Translate: 'Without sugar.'", answer: "Sans sucre." }, { prompt: "Complete: Je ____ le café.", answer: "préfère" }, { prompt: "Translate: 'It is too sweet.'", answer: "C'est trop sucré." }, { prompt: "Complete: Avec ____ lait.", answer: "du" }]
  },
  numbers: {
    title: "Numbers & Counting",
    level: "A1",
    summary: "Count from 1 to 100 and use numbers in context.",
    objectives: ["Count from 1 to 20", "Use numbers for prices and time", "Say your age"],
    vocab: [
      { fr: "Un, deux, trois", en: "One, two, three", phon: "uhn, duh, trwah", example: "Un, deux, trois — partez!", exampleEn: "One, two, three — go!" },
      { fr: "Dix", en: "Ten", phon: "dees", example: "J'ai dix euros.", exampleEn: "I have ten euros." },
      { fr: "Vingt", en: "Twenty", phon: "vahn", example: "Vingt personnes.", exampleEn: "Twenty people." },
      { fr: "Cent", en: "One hundred", phon: "sahn", example: "Cent grammes.", exampleEn: "One hundred grams." },
      { fr: "J'ai … ans", en: "I am … years old", phon: "zhay … ahn", example: "J'ai vingt ans.", exampleEn: "I am twenty years old." },
      { fr: "Ça coûte", en: "It costs", phon: "sah koot", example: "Ça coûte cinq euros.", exampleEn: "It costs five euros." }
    ],
    grammar: { title: "Using Numbers", rules: ["Use J'ai + number + ans for age.", "Use ça coûte for prices.", "Numbers do not change for gender (except un/une)."], examples: [{ fr: "J'ai seize ans.", en: "I am sixteen." }, { fr: "Ça coûte douze euros.", en: "It costs twelve euros." }, { fr: "Il y a trente élèves.", en: "There are thirty students." }] },
    dialogue: [{ who: "A", fr: "Tu as quel âge?", en: "How old are you?" }, { who: "B", fr: "J'ai vingt-deux ans.", en: "I am twenty-two." }],
    exercises: [{ prompt: "Translate: 'I am twenty years old.'", answer: "J'ai vingt ans." }, { prompt: "Translate: 'It costs five euros.'", answer: "Ça coûte cinq euros." }, { prompt: "Say: 15 in French.", answer: "Quinze" }, { prompt: "Say: 100 in French.", answer: "Cent" }]
  },
  time: {
    title: "Time & Days",
    level: "A1",
    summary: "Tell time and name days of the week.",
    objectives: ["Ask and tell the time", "Name days of the week", "Use time expressions"],
    vocab: [
      { fr: "Quelle heure est-il?", en: "What time is it?", phon: "kel ur ay-teel", example: "Quelle heure est-il?", exampleEn: "What time is it?" },
      { fr: "Il est midi", en: "It is noon", phon: "eel ay mee-dee", example: "Il est midi.", exampleEn: "It is noon." },
      { fr: "Lundi", en: "Monday", phon: "luhn-dee", example: "Lundi matin.", exampleEn: "Monday morning." },
      { fr: "Le week-end", en: "The weekend", phon: "luh week-end", example: "Ce week-end.", exampleEn: "This weekend." },
      { fr: "Maintenant", en: "Now", phon: "mahn-tuh-nahn", example: "Je pars maintenant.", exampleEn: "I am leaving now." },
      { fr: "Bientôt", en: "Soon", phon: "byehn-toh", example: "À bientôt!", exampleEn: "See you soon!" }
    ],
    grammar: { title: "Telling Time", rules: ["Use Il est + hour + heure(s).", "Use et quart / et demie for quarter/half past.", "Use moins le quart for quarter to."], examples: [{ fr: "Il est trois heures.", en: "It is three o'clock." }, { fr: "Il est huit heures et demie.", en: "It is half past eight." }, { fr: "Il est six heures moins le quart.", en: "It is quarter to six." }] },
    dialogue: [{ who: "A", fr: "Il est quelle heure?", en: "What time is it?" }, { who: "B", fr: "Il est dix heures et quart.", en: "It is quarter past ten." }],
    exercises: [{ prompt: "Translate: 'It is noon.'", answer: "Il est midi." }, { prompt: "Translate: 'What time is it?'", answer: "Quelle heure est-il?" }, { prompt: "Say 'half past eight' in French.", answer: "Il est huit heures et demie." }, { prompt: "Translate: 'See you soon!'", answer: "À bientôt!" }]
  },
  plans: {
    title: "Making Plans",
    level: "A1",
    summary: "Discuss simple plans and activities.",
    objectives: ["Use aller + infinitive for near future", "Suggest plans", "Accept and refuse"],
    vocab: [
      { fr: "Je vais", en: "I am going to", phon: "zhuh vay", example: "Je vais manger.", exampleEn: "I am going to eat." },
      { fr: "On va", en: "We are going to", phon: "on vah", example: "On va au parc.", exampleEn: "We are going to the park." },
      { fr: "Pourquoi pas?", en: "Why not?", phon: "poor-kwah pah", example: "Pourquoi pas!", exampleEn: "Why not!" },
      { fr: "D'accord", en: "OK / agreed", phon: "dah-kor", example: "D'accord, à demain.", exampleEn: "OK, see you tomorrow." },
      { fr: "Désolé(e)", en: "Sorry", phon: "day-zo-lay", example: "Désolé, je suis occupé.", exampleEn: "Sorry, I am busy." },
      { fr: "Avec plaisir", en: "With pleasure", phon: "ah-vek pleh-zeer", example: "Avec plaisir!", exampleEn: "With pleasure!" }
    ],
    grammar: { title: "Near Future with aller", rules: ["Use aller + infinitive for near future plans.", "On va = we are going to (informal).", "Use d'accord to accept and désolé to refuse."], examples: [{ fr: "Je vais étudier.", en: "I am going to study." }, { fr: "On va au cinéma.", en: "We are going to the cinema." }, { fr: "Désolé, je travaille.", en: "Sorry, I am working." }] },
    dialogue: [{ who: "A", fr: "Tu viens au cinéma?", en: "Are you coming to the cinema?" }, { who: "B", fr: "D'accord, avec plaisir!", en: "OK, with pleasure!" }],
    exercises: [{ prompt: "Translate: 'I am going to eat.'", answer: "Je vais manger." }, { prompt: "Translate: 'We are going to the park.'", answer: "On va au parc." }, { prompt: "Complete: D'____, à demain.", answer: "accord" }, { prompt: "Translate: 'Sorry, I am busy.'", answer: "Désolé, je suis occupé." }]
  },
  past_intro: {
    title: "Intro to the Past",
    level: "A2",
    summary: "Understand and form the passé composé.",
    objectives: ["Form passé composé with avoir", "Use past tense in speech", "Recognize irregular past participles"],
    vocab: [
      { fr: "Hier", en: "Yesterday", phon: "yehr", example: "Hier, j'ai travaillé.", exampleEn: "Yesterday, I worked." },
      { fr: "J'ai mangé", en: "I ate", phon: "zhay mahn-zhay", example: "J'ai mangé une pizza.", exampleEn: "I ate a pizza." },
      { fr: "Tu as vu", en: "You saw", phon: "tyu ah vyu", example: "Tu as vu le film?", exampleEn: "Did you see the film?" },
      { fr: "Il a fait", en: "He did / made", phon: "eel ah feh", example: "Il a fait du sport.", exampleEn: "He did sports." },
      { fr: "Nous avons parlé", en: "We spoke", phon: "noo za-vohn par-lay", example: "Nous avons parlé.", exampleEn: "We spoke." },
      { fr: "Le week-end dernier", en: "Last weekend", phon: "luh week-end dehr-nyay", example: "Le week-end dernier.", exampleEn: "Last weekend." }
    ],
    grammar: { title: "Passé Composé Formation", rules: ["Form: avoir/être (present) + past participle.", "-er verbs → -é (parler → parlé).", "-ir verbs → -i (finir → fini).", "-re verbs → -u (vendre → vendu)."], examples: [{ fr: "J'ai mangé une pomme.", en: "I ate an apple." }, { fr: "Tu as fini?", en: "Did you finish?" }, { fr: "Elle a vendu sa voiture.", en: "She sold her car." }] },
    dialogue: [{ who: "A", fr: "Qu'est-ce que tu as fait hier?", en: "What did you do yesterday?" }, { who: "B", fr: "J'ai regardé un film.", en: "I watched a film." }],
    exercises: [{ prompt: "Conjugate 'manger' in passé composé (je).", answer: "J'ai mangé." }, { prompt: "Translate: 'She finished.'", answer: "Elle a fini." }, { prompt: "Complete: Il a ____ du sport. (faire)", answer: "fait" }, { prompt: "Translate: 'We spoke yesterday.'", answer: "Nous avons parlé hier." }]
  },
  past_with_avoir: {
    title: "Past with Avoir",
    level: "A2",
    summary: "Use avoir as the auxiliary in the passé composé.",
    objectives: ["Use avoir verbs in the past", "Apply irregular participles", "Tell a simple past story"],
    vocab: [
      { fr: "J'ai pris", en: "I took", phon: "zhay pree", example: "J'ai pris le métro.", exampleEn: "I took the metro." },
      { fr: "J'ai bu", en: "I drank", phon: "zhay byu", example: "J'ai bu un café.", exampleEn: "I drank a coffee." },
      { fr: "J'ai vu", en: "I saw", phon: "zhay vyu", example: "J'ai vu Marie.", exampleEn: "I saw Marie." },
      { fr: "J'ai lu", en: "I read", phon: "zhay lyu", example: "J'ai lu le journal.", exampleEn: "I read the newspaper." },
      { fr: "J'ai mis", en: "I put", phon: "zhay mee", example: "J'ai mis mon manteau.", exampleEn: "I put on my coat." },
      { fr: "J'ai écrit", en: "I wrote", phon: "zhay ay-kree", example: "J'ai écrit un email.", exampleEn: "I wrote an email." }
    ],
    grammar: { title: "Irregular Past Participles", rules: ["prendre → pris", "boire → bu", "voir → vu", "lire → lu", "mettre → mis", "écrire → écrit"], examples: [{ fr: "J'ai pris le bus.", en: "I took the bus." }, { fr: "Elle a vu le film.", en: "She saw the film." }, { fr: "Il a bu du vin.", en: "He drank wine." }] },
    dialogue: [{ who: "A", fr: "Tu as pris le métro?", en: "Did you take the metro?" }, { who: "B", fr: "Non, j'ai pris le bus.", en: "No, I took the bus." }],
    exercises: [{ prompt: "Conjugate 'voir' past (je).", answer: "J'ai vu." }, { prompt: "Translate: 'He read the newspaper.'", answer: "Il a lu le journal." }, { prompt: "Complete: J'ai ____ un café. (boire)", answer: "bu" }, { prompt: "Translate: 'I wrote an email.'", answer: "J'ai écrit un email." }]
  },
  past_with_etre: {
    title: "Past with Être",
    level: "A2",
    summary: "Use être as the auxiliary for movement verbs.",
    objectives: ["Identify être verbs", "Agree past participles with subject", "Use reflexive verbs in past"],
    vocab: [
      { fr: "Je suis allé(e)", en: "I went", phon: "zhuh swee zah-lay", example: "Je suis allé au marché.", exampleEn: "I went to the market." },
      { fr: "Il est venu", en: "He came", phon: "eel ay vuh-nyu", example: "Il est venu chez moi.", exampleEn: "He came to my place." },
      { fr: "Elle est partie", en: "She left", phon: "el ay par-tee", example: "Elle est partie tôt.", exampleEn: "She left early." },
      { fr: "Nous sommes arrivés", en: "We arrived", phon: "noo som ah-ree-vay", example: "Nous sommes arrivés.", exampleEn: "We arrived." },
      { fr: "Tu es resté(e)", en: "You stayed", phon: "tyu ay res-tay", example: "Tu es resté longtemps?", exampleEn: "Did you stay long?" },
      { fr: "Je me suis levé(e)", en: "I got up", phon: "zhuh muh swee luh-vay", example: "Je me suis levé à 7h.", exampleEn: "I got up at 7am." }
    ],
    grammar: { title: "DR MRS VANDERTRAMP", rules: ["These verbs use être: aller, venir, partir, arriver, rester, naître, mourir…", "Past participle agrees with subject: allé (m) / allée (f).", "Reflexive verbs always use être."], examples: [{ fr: "Je suis allée au parc. (female)", en: "I went to the park." }, { fr: "Ils sont partis.", en: "They left." }, { fr: "Elle s'est levée.", en: "She got up." }] },
    dialogue: [{ who: "A", fr: "Tu es allé où ce week-end?", en: "Where did you go this weekend?" }, { who: "B", fr: "Je suis allé à Lyon.", en: "I went to Lyon." }],
    exercises: [{ prompt: "Translate: 'She went to Paris.' (female)", answer: "Elle est allée à Paris." }, { prompt: "Conjugate 'partir' (ils).", answer: "Ils sont partis." }, { prompt: "Complete: Je me suis ____. (lever)", answer: "levé(e)" }, { prompt: "Translate: 'We arrived late.'", answer: "Nous sommes arrivés en retard." }]
  },
  future_intro: {
    title: "Futur Proche",
    level: "A2",
    summary: "Talk about near future plans.",
    objectives: ["Form futur proche", "Use aller + infinitive", "Express intentions"],
    vocab: [
      { fr: "Je vais voyager", en: "I am going to travel", phon: "zhuh vay vwah-yah-zhay", example: "Je vais voyager en été.", exampleEn: "I am going to travel in summer." },
      { fr: "Il va pleuvoir", en: "It is going to rain", phon: "eel vah pluh-vwar", example: "Il va pleuvoir.", exampleEn: "It is going to rain." },
      { fr: "Bientôt", en: "Soon", phon: "byehn-toh", example: "On va bientôt partir.", exampleEn: "We are going to leave soon." },
      { fr: "Ce soir", en: "Tonight", phon: "suh swahr", example: "Ce soir, on va au restaurant.", exampleEn: "Tonight, we are going to the restaurant." },
      { fr: "La semaine prochaine", en: "Next week", phon: "la suh-men pro-shen", example: "La semaine prochaine.", exampleEn: "Next week." },
      { fr: "Peut-être", en: "Maybe", phon: "puh-tay-truh", example: "Peut-être demain.", exampleEn: "Maybe tomorrow." }
    ],
    grammar: { title: "Futur Proche = aller + infinitive", rules: ["Je vais + infinitive = I am going to…", "Il/elle va + infinitive for third person.", "Negative: je ne vais pas + infinitive."], examples: [{ fr: "Je vais étudier.", en: "I am going to study." }, { fr: "Nous allons partir.", en: "We are going to leave." }, { fr: "Il ne va pas venir.", en: "He is not going to come." }] },
    dialogue: [{ who: "A", fr: "Qu'est-ce que tu vas faire ce soir?", en: "What are you going to do tonight?" }, { who: "B", fr: "Je vais regarder un film.", en: "I am going to watch a film." }],
    exercises: [{ prompt: "Translate: 'I am going to eat.'", answer: "Je vais manger." }, { prompt: "Translate: 'We are going to leave.'", answer: "Nous allons partir." }, { prompt: "Complete: Il ne va pas ____.", answer: "venir" }, { prompt: "Translate: 'Maybe tomorrow.'", answer: "Peut-être demain." }]
  },
  future_simple: {
    title: "Futur Simple",
    level: "A2",
    summary: "Express future events with the futur simple.",
    objectives: ["Form futur simple for regular verbs", "Use irregular future stems", "Talk about long-term plans"],
    vocab: [
      { fr: "Je parlerai", en: "I will speak", phon: "zhuh par-luh-ray", example: "Je parlerai français.", exampleEn: "I will speak French." },
      { fr: "Tu finiras", en: "You will finish", phon: "tyu fee-nee-rah", example: "Tu finiras demain.", exampleEn: "You will finish tomorrow." },
      { fr: "Il sera", en: "He will be", phon: "eel suh-rah", example: "Il sera là.", exampleEn: "He will be there." },
      { fr: "Nous irons", en: "We will go", phon: "noo zee-rohn", example: "Nous irons en France.", exampleEn: "We will go to France." },
      { fr: "Vous aurez", en: "You will have", phon: "voo zo-ray", example: "Vous aurez le temps.", exampleEn: "You will have the time." },
      { fr: "Elles viendront", en: "They will come", phon: "el vyehn-drohn", example: "Elles viendront demain.", exampleEn: "They will come tomorrow." }
    ],
    grammar: { title: "Futur Simple Formation", rules: ["Regular: infinitive + -ai/-as/-a/-ons/-ez/-ont.", "Irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-."], examples: [{ fr: "Je parlerai français.", en: "I will speak French." }, { fr: "Nous irons à Paris.", en: "We will go to Paris." }, { fr: "Il sera content.", en: "He will be happy." }] },
    dialogue: [{ who: "A", fr: "Tu viendras demain?", en: "Will you come tomorrow?" }, { who: "B", fr: "Oui, je serai là à dix heures.", en: "Yes, I will be there at ten." }],
    exercises: [{ prompt: "Conjugate 'parler' futur simple (je).", answer: "Je parlerai." }, { prompt: "Translate: 'We will go to Lyon.'", answer: "Nous irons à Lyon." }, { prompt: "Complete: Il ____ content. (être)", answer: "sera" }, { prompt: "Translate: 'They will come tomorrow.'", answer: "Elles viendront demain." }]
  },
  goals: {
    title: "Goals & Ambitions",
    level: "A2",
    summary: "Talk about personal goals and future ambitions.",
    objectives: ["Express goals with je veux / je voudrais", "Use pour + infinitive for purpose", "Discuss plans"],
    vocab: [
      { fr: "Mon rêve", en: "My dream", phon: "mohn rev", example: "Mon rêve est de voyager.", exampleEn: "My dream is to travel." },
      { fr: "Je voudrais devenir", en: "I would like to become", phon: "zhuh voo-dreh duh-vuh-neer", example: "Je voudrais devenir médecin.", exampleEn: "I would like to become a doctor." },
      { fr: "Pour", en: "In order to", phon: "poor", example: "Je travaille pour réussir.", exampleEn: "I work in order to succeed." },
      { fr: "Réussir", en: "To succeed", phon: "ray-oo-seer", example: "Je veux réussir.", exampleEn: "I want to succeed." },
      { fr: "Apprendre", en: "To learn", phon: "ah-prahn-druh", example: "J'apprends le français.", exampleEn: "I am learning French." },
      { fr: "Un jour", en: "One day", phon: "uhn zhoor", example: "Un jour, je vivrai à Paris.", exampleEn: "One day, I will live in Paris." }
    ],
    grammar: { title: "Expressing Purpose and Goals", rules: ["Use pour + infinitive for purpose.", "Je veux / je voudrais + infinitive for desires.", "Use un jour for future aspirations."], examples: [{ fr: "J'étudie pour réussir.", en: "I study in order to succeed." }, { fr: "Je voudrais voyager.", en: "I would like to travel." }, { fr: "Un jour, je parlerai parfaitement.", en: "One day, I will speak perfectly." }] },
    dialogue: [{ who: "A", fr: "Quel est ton objectif?", en: "What is your goal?" }, { who: "B", fr: "Je veux parler français couramment.", en: "I want to speak French fluently." }],
    exercises: [{ prompt: "Translate: 'I study in order to succeed.'", answer: "J'étudie pour réussir." }, { prompt: "Translate: 'My dream is to travel.'", answer: "Mon rêve est de voyager." }, { prompt: "Complete: Je veux ____.", answer: "réussir" }, { prompt: "Translate: 'One day, I will live in Paris.'", answer: "Un jour, je vivrai à Paris." }]
  },
  office: {
    title: "At the Office",
    level: "A2",
    summary: "Use vocabulary for a professional workplace.",
    objectives: ["Name office objects and roles", "Discuss work tasks", "Understand professional language"],
    vocab: [
      { fr: "Le bureau", en: "Office / desk", phon: "luh byu-ro", example: "Mon bureau est au troisième.", exampleEn: "My office is on the third floor." },
      { fr: "La réunion", en: "Meeting", phon: "la ray-oo-nyon", example: "La réunion commence à neuf heures.", exampleEn: "The meeting starts at nine." },
      { fr: "Le collègue", en: "Colleague", phon: "luh ko-leg", example: "Mon collègue est sympa.", exampleEn: "My colleague is nice." },
      { fr: "Un rapport", en: "A report", phon: "uhn ra-por", example: "Je rédige un rapport.", exampleEn: "I am writing a report." },
      { fr: "Le chef", en: "The boss", phon: "luh shef", example: "Le chef est absent.", exampleEn: "The boss is absent." },
      { fr: "Je travaille sur", en: "I am working on", phon: "zhuh tra-vai sur", example: "Je travaille sur le projet.", exampleEn: "I am working on the project." }
    ],
    grammar: { title: "Professional Present Tense", rules: ["Use je travaille / il travaille for current tasks.", "Use en ce moment for emphasis (right now).", "Use devoir + infinitive for obligations."], examples: [{ fr: "Je dois finir le rapport.", en: "I must finish the report." }, { fr: "En ce moment, je travaille.", en: "Right now, I am working." }, { fr: "La réunion est à midi.", en: "The meeting is at noon." }] },
    dialogue: [{ who: "A", fr: "Tu travailles sur quoi?", en: "What are you working on?" }, { who: "B", fr: "Je rédige le rapport de vendredi.", en: "I am writing Friday's report." }],
    exercises: [{ prompt: "Translate: 'The meeting starts at nine.'", answer: "La réunion commence à neuf heures." }, { prompt: "Translate: 'I must finish the report.'", answer: "Je dois finir le rapport." }, { prompt: "Complete: Mon collègue est ____.", answer: "sympa" }, { prompt: "Translate: 'The boss is absent.'", answer: "Le chef est absent." }]
  },
  email: {
    title: "Writing Emails",
    level: "A2",
    summary: "Write and understand simple professional emails in French.",
    objectives: ["Open and close a French email", "Make requests by email", "Use formal email language"],
    vocab: [
      { fr: "Madame, Monsieur", en: "Dear Sir/Madam", phon: "ma-dam muh-syuh", example: "Madame, Monsieur,", exampleEn: "Dear Sir/Madam," },
      { fr: "Je vous contacte", en: "I am contacting you", phon: "zhuh voo kohn-takt", example: "Je vous contacte au sujet de…", exampleEn: "I am contacting you regarding…" },
      { fr: "Suite à", en: "Following / Further to", phon: "sweet ah", example: "Suite à notre réunion.", exampleEn: "Following our meeting." },
      { fr: "Je reste disponible", en: "I remain available", phon: "zhuh rest dee-spo-neebl", example: "Je reste disponible pour toute question.", exampleEn: "I remain available for any questions." },
      { fr: "Cordialement", en: "Best regards", phon: "kor-dyahl-mahn", example: "Cordialement,", exampleEn: "Best regards," },
      { fr: "Ci-joint", en: "Attached / enclosed", phon: "see-zhwahn", example: "Ci-joint le document.", exampleEn: "Attached is the document." }
    ],
    grammar: { title: "Formal Email Structures", rules: ["Open: Madame, Monsieur, or Bonjour + name.", "Body: Je vous contacte / Je vous écris pour…", "Close: Cordialement / Bien cordialement."], examples: [{ fr: "Je vous écris pour confirmer…", en: "I am writing to confirm…" }, { fr: "Veuillez trouver ci-joint…", en: "Please find attached…" }, { fr: "Dans l'attente de votre réponse.", en: "Awaiting your reply." }] },
    dialogue: [{ who: "A", fr: "Tu peux m'envoyer le rapport?", en: "Can you send me the report?" }, { who: "B", fr: "Oui, je te l'envoie maintenant.", en: "Yes, I will send it to you now." }],
    exercises: [{ prompt: "Translate formal closing: 'Best regards'", answer: "Cordialement" }, { prompt: "Translate: 'I am writing to confirm.'", answer: "Je vous écris pour confirmer." }, { prompt: "Complete: Ci-joint ____ document.", answer: "le" }, { prompt: "Translate: 'Awaiting your reply.'", answer: "Dans l'attente de votre réponse." }]
  },
  meeting: {
    title: "In a Meeting",
    level: "A2",
    summary: "Follow and participate in a simple meeting in French.",
    objectives: ["Understand meeting vocabulary", "Give opinions", "Agree and disagree politely"],
    vocab: [
      { fr: "L'ordre du jour", en: "The agenda", phon: "lor-druh dyu zhoor", example: "Voici l'ordre du jour.", exampleEn: "Here is the agenda." },
      { fr: "Je propose", en: "I suggest", phon: "zhuh pro-pohz", example: "Je propose une solution.", exampleEn: "I suggest a solution." },
      { fr: "À mon avis", en: "In my opinion", phon: "ah mon ah-vee", example: "À mon avis, c'est mieux.", exampleEn: "In my opinion, it is better." },
      { fr: "Je suis d'accord", en: "I agree", phon: "zhuh swee dah-kor", example: "Je suis d'accord avec vous.", exampleEn: "I agree with you." },
      { fr: "Je ne suis pas sûr(e)", en: "I am not sure", phon: "zhuh nuh swee pah syr", example: "Je ne suis pas sûr.", exampleEn: "I am not sure." },
      { fr: "En conclusion", en: "In conclusion", phon: "ohn kohn-klyu-zyon", example: "En conclusion, nous décidons.", exampleEn: "In conclusion, we decide." }
    ],
    grammar: { title: "Expressing Opinions", rules: ["Use à mon avis / selon moi for opinions.", "Use je pense que + clause.", "Use je suis d'accord / pas d'accord for agreement."], examples: [{ fr: "À mon avis, c'est une bonne idée.", en: "In my opinion, it is a good idea." }, { fr: "Je pense que c'est correct.", en: "I think that is correct." }, { fr: "Je ne suis pas d'accord.", en: "I do not agree." }] },
    dialogue: [{ who: "A", fr: "À mon avis, on devrait changer de stratégie.", en: "In my opinion, we should change strategy." }, { who: "B", fr: "Je suis d'accord.", en: "I agree." }],
    exercises: [{ prompt: "Translate: 'In my opinion, it is better.'", answer: "À mon avis, c'est mieux." }, { prompt: "Translate: 'I agree with you.'", answer: "Je suis d'accord avec vous." }, { prompt: "Complete: Je pense ____ c'est bien.", answer: "que" }, { prompt: "Translate: 'In conclusion, we decide.'", answer: "En conclusion, nous décidons." }]
  },
  travel: {
    title: "Travel Vocabulary",
    level: "A2",
    summary: "Plan and talk about a trip.",
    objectives: ["Book transport and accommodation", "Use travel vocabulary", "Handle unexpected situations"],
    vocab: [
      { fr: "Le passeport", en: "Passport", phon: "luh pass-por", example: "Mon passeport est valide.", exampleEn: "My passport is valid." },
      { fr: "La valise", en: "Suitcase", phon: "la va-leez", example: "Ma valise est lourde.", exampleEn: "My suitcase is heavy." },
      { fr: "L'embarquement", en: "Boarding", phon: "lohn-bark-mahn", example: "L'embarquement est à 14h.", exampleEn: "Boarding is at 2pm." },
      { fr: "Un aller-retour", en: "Return ticket", phon: "uhn ah-lay ruh-toor", example: "Un aller-retour pour Paris.", exampleEn: "A return ticket to Paris." },
      { fr: "À l'étranger", en: "Abroad", phon: "ah lay-trahn-zhay", example: "Je voyage à l'étranger.", exampleEn: "I am travelling abroad." },
      { fr: "L'assurance", en: "Insurance", phon: "lah-syur-ahns", example: "J'ai une assurance voyage.", exampleEn: "I have travel insurance." }
    ],
    grammar: { title: "Travel Expressions", rules: ["Use partir pour + destination.", "Use revenir de + place.", "Use pendant for duration."], examples: [{ fr: "Je pars pour Rome vendredi.", en: "I am leaving for Rome on Friday." }, { fr: "Je reviens de Londres.", en: "I am coming back from London." }, { fr: "Je voyage pendant deux semaines.", en: "I am travelling for two weeks." }] },
    dialogue: [{ who: "A", fr: "Vous avez votre passeport?", en: "Do you have your passport?" }, { who: "B", fr: "Oui, et ma valise est prête.", en: "Yes, and my suitcase is ready." }],
    exercises: [{ prompt: "Translate: 'I am leaving for Rome.'", answer: "Je pars pour Rome." }, { prompt: "Translate: 'A return ticket to Paris.'", answer: "Un aller-retour pour Paris." }, { prompt: "Complete: Ma valise est ____.", answer: "lourde" }, { prompt: "Translate: 'I have travel insurance.'", answer: "J'ai une assurance voyage." }]
  },
  hotel: {
    title: "At the Hotel",
    level: "A2",
    summary: "Check in, make requests, and handle hotel situations.",
    objectives: ["Check in and out", "Make special requests", "Understand hotel signage"],
    vocab: [
      { fr: "La réservation", en: "Reservation", phon: "la ray-zur-vah-syon", example: "J'ai une réservation.", exampleEn: "I have a reservation." },
      { fr: "La chambre", en: "Room", phon: "la shahn-bruh", example: "La chambre est propre.", exampleEn: "The room is clean." },
      { fr: "Le petit-déjeuner", en: "Breakfast", phon: "luh puh-tee day-zhuh-nay", example: "Le petit-déjeuner est inclus.", exampleEn: "Breakfast is included." },
      { fr: "La clé", en: "The key", phon: "la klay", example: "Voici votre clé.", exampleEn: "Here is your key." },
      { fr: "Le rez-de-chaussée", en: "Ground floor", phon: "luh ray duh sho-say", example: "La réception est au rez-de-chaussée.", exampleEn: "Reception is on the ground floor." },
      { fr: "Je voudrais changer", en: "I would like to change", phon: "zhuh voo-dreh shahn-zhay", example: "Je voudrais changer de chambre.", exampleEn: "I would like to change rooms." }
    ],
    grammar: { title: "Making Requests at a Hotel", rules: ["Use je voudrais + infinitive for polite requests.", "Use est-ce que vous pouvez + infinitive?", "Use il y a un problème to report issues."], examples: [{ fr: "Est-ce que vous pouvez apporter des serviettes?", en: "Could you bring towels?" }, { fr: "Il y a un problème avec le wifi.", en: "There is a problem with the wifi." }, { fr: "Je voudrais le réveil à sept heures.", en: "I would like a wake-up call at seven." }] },
    dialogue: [{ who: "A", fr: "Bonjour, j'ai une réservation.", en: "Hello, I have a reservation." }, { who: "B", fr: "Votre nom, s'il vous plaît?", en: "Your name, please?" }],
    exercises: [{ prompt: "Translate: 'I have a reservation.'", answer: "J'ai une réservation." }, { prompt: "Translate: 'Breakfast is included.'", answer: "Le petit-déjeuner est inclus." }, { prompt: "Complete: Il y a un ____ avec le wifi.", answer: "problème" }, { prompt: "Translate: 'I would like to change rooms.'", answer: "Je voudrais changer de chambre." }]
  },
  problems: {
    title: "Handling Problems",
    level: "A2",
    summary: "Handle problems, complaints, and unexpected situations.",
    objectives: ["Report a problem", "Ask for help", "Understand responses to complaints"],
    vocab: [
      { fr: "J'ai perdu", en: "I lost", phon: "zhay per-dyu", example: "J'ai perdu mon portefeuille.", exampleEn: "I lost my wallet." },
      { fr: "On m'a volé", en: "I was robbed", phon: "on mah vo-lay", example: "On m'a volé mon téléphone.", exampleEn: "My phone was stolen." },
      { fr: "Je me suis blessé(e)", en: "I hurt myself", phon: "zhuh muh swee ble-say", example: "Je me suis blessé à la main.", exampleEn: "I hurt my hand." },
      { fr: "Le commissariat", en: "Police station", phon: "luh ko-mee-sah-ryah", example: "Je vais au commissariat.", exampleEn: "I am going to the police station." },
      { fr: "C'est urgent", en: "It is urgent", phon: "say zur-zhahn", example: "C'est urgent!", exampleEn: "It is urgent!" },
      { fr: "Pouvez-vous m'aider?", en: "Can you help me?", phon: "poo-vay-voo may-day", example: "Pouvez-vous m'aider?", exampleEn: "Can you help me?" }
    ],
    grammar: { title: "Reporting Problems", rules: ["Use j'ai perdu / on m'a volé to report.", "Use il faut + infinitive for necessary actions.", "Use je dois + infinitive for obligations."], examples: [{ fr: "Il faut appeler la police.", en: "We must call the police." }, { fr: "Je dois aller au commissariat.", en: "I must go to the police station." }, { fr: "Pouvez-vous m'aider?", en: "Can you help me?" }] },
    dialogue: [{ who: "A", fr: "J'ai perdu mon passeport!", en: "I lost my passport!" }, { who: "B", fr: "Il faut aller au consulat.", en: "You must go to the consulate." }],
    exercises: [{ prompt: "Translate: 'I lost my wallet.'", answer: "J'ai perdu mon portefeuille." }, { prompt: "Translate: 'Can you help me?'", answer: "Pouvez-vous m'aider?" }, { prompt: "Complete: Il faut ____ la police.", answer: "appeler" }, { prompt: "Translate: 'It is urgent!'", answer: "C'est urgent!" }]
  },
  opinions: {
    title: "Expressing Opinions",
    level: "A2",
    summary: "Give and respond to opinions in French.",
    objectives: ["Use opinion phrases", "Agree and disagree", "Express doubt"],
    vocab: [
      { fr: "Je pense que", en: "I think that", phon: "zhuh pahns kuh", example: "Je pense que c'est bien.", exampleEn: "I think it is good." },
      { fr: "Je trouve que", en: "I find that", phon: "zhuh troov kuh", example: "Je trouve que c'est long.", exampleEn: "I find it long." },
      { fr: "À mon avis", en: "In my opinion", phon: "ah mon ah-vee", example: "À mon avis, non.", exampleEn: "In my opinion, no." },
      { fr: "C'est vrai", en: "That is true", phon: "say vray", example: "C'est vrai!", exampleEn: "That is true!" },
      { fr: "Je doute que", en: "I doubt that", phon: "zhuh doot kuh", example: "Je doute que ce soit possible.", exampleEn: "I doubt that it is possible." },
      { fr: "Selon moi", en: "According to me", phon: "suh-lohn mwah", example: "Selon moi, c'est correct.", exampleEn: "According to me, it is correct." }
    ],
    grammar: { title: "Opinion Expressions", rules: ["Je pense / je trouve + que + clause.", "À mon avis / selon moi + clause.", "Use c'est + adjective for simple opinions."], examples: [{ fr: "Je pense que le film est bon.", en: "I think the film is good." }, { fr: "À mon avis, c'est trop cher.", en: "In my opinion, it is too expensive." }, { fr: "Je trouve que c'est intéressant.", en: "I find it interesting." }] },
    dialogue: [{ who: "A", fr: "Tu penses quoi du film?", en: "What do you think of the film?" }, { who: "B", fr: "Je trouve que c'est excellent.", en: "I find it excellent." }],
    exercises: [{ prompt: "Translate: 'I think it is good.'", answer: "Je pense que c'est bien." }, { prompt: "Translate: 'In my opinion, it is too expensive.'", answer: "À mon avis, c'est trop cher." }, { prompt: "Complete: Je ____ que c'est intéressant.", answer: "trouve" }, { prompt: "Translate: 'That is true!'", answer: "C'est vrai!" }]
  },
  cinema: {
    title: "Cinema & Entertainment",
    level: "A2",
    summary: "Talk about films, series, and entertainment.",
    objectives: ["Describe a film", "Express preferences about genres", "Review a film"],
    vocab: [
      { fr: "Un film d'action", en: "An action film", phon: "uhn feelm dak-syon", example: "J'adore les films d'action.", exampleEn: "I love action films." },
      { fr: "Une comédie", en: "A comedy", phon: "oon ko-may-dee", example: "C'est une comédie.", exampleEn: "It is a comedy." },
      { fr: "Le réalisateur", en: "The director", phon: "luh ray-ah-lee-zah-tuhr", example: "Le réalisateur est français.", exampleEn: "The director is French." },
      { fr: "Les sous-titres", en: "Subtitles", phon: "lay soo-tee-truh", example: "Je préfère les sous-titres.", exampleEn: "I prefer subtitles." },
      { fr: "La séance", en: "The screening", phon: "la say-ahns", example: "La séance est à 20h.", exampleEn: "The screening is at 8pm." },
      { fr: "Génial(e)", en: "Brilliant / great", phon: "zhay-nyahl", example: "Ce film est génial!", exampleEn: "This film is brilliant!" }
    ],
    grammar: { title: "Describing Films", rules: ["Use c'est + adjective for reviews.", "Use il s'agit de + noun to say what a film is about.", "Use j'ai aimé / je n'ai pas aimé for past reviews."], examples: [{ fr: "Il s'agit d'un détective.", en: "It is about a detective." }, { fr: "J'ai aimé la fin.", en: "I liked the ending." }, { fr: "Ce film est ennuyeux.", en: "This film is boring." }] },
    dialogue: [{ who: "A", fr: "C'était comment?", en: "How was it?" }, { who: "B", fr: "Génial! Il s'agit d'un voyage.", en: "Brilliant! It is about a journey." }],
    exercises: [{ prompt: "Translate: 'It is about a detective.'", answer: "Il s'agit d'un détective." }, { prompt: "Translate: 'I liked the ending.'", answer: "J'ai aimé la fin." }, { prompt: "Complete: La ____ est à 20h.", answer: "séance" }, { prompt: "Translate: 'This film is brilliant!'", answer: "Ce film est génial!" }]
  },
  culture: {
    title: "Culture & Events",
    level: "A2",
    summary: "Discuss cultural events and invite people.",
    objectives: ["Use culture vocabulary", "Describe events", "Invite someone"],
    vocab: [
      { fr: "Le musée", en: "Museum", phon: "myu-zay", example: "On va au musée.", exampleEn: "We are going to the museum." },
      { fr: "L'exposition", en: "Exhibition", phon: "ex-po-zee-syon", example: "Une exposition gratuite.", exampleEn: "A free exhibition." },
      { fr: "Le concert", en: "Concert", phon: "kon-ser", example: "Le concert commence à 20h.", exampleEn: "The concert starts at 8pm." },
      { fr: "La musique", en: "Music", phon: "myu-zeek", example: "J'aime la musique.", exampleEn: "I like music." },
      { fr: "La tradition", en: "Tradition", phon: "tra-dee-syon", example: "C'est une tradition.", exampleEn: "It is a tradition." },
      { fr: "La fête", en: "Festival", phon: "fet", example: "La fête est en juin.", exampleEn: "The festival is in June." }
    ],
    grammar: { title: "Inviting and Suggesting", rules: ["Use on va + place to suggest a plan.", "Use tu veux + infinitive to invite.", "Use c'est + noun to describe events."], examples: [{ fr: "On va au concert.", en: "We are going to the concert." }, { fr: "Tu veux venir?", en: "Do you want to come?" }, { fr: "C'est une fête populaire.", en: "It is a popular festival." }] },
    dialogue: [{ who: "A", fr: "Tu veux aller à l'exposition?", en: "Do you want to go to the exhibition?" }, { who: "B", fr: "Oui, on va au musée samedi.", en: "Yes, we are going to the museum on Saturday." }],
    exercises: [{ prompt: "Translate: 'We are going to the concert.'", answer: "On va au concert." }, { prompt: "Complete: Une ____ gratuite.", answer: "exposition" }, { prompt: "Translate: 'Do you want to come?'", answer: "Tu veux venir?" }, { prompt: "Complete: La ____ est en juin.", answer: "fête" }]
  }
};

export const STORIES = {
  market_morning: {
    title: "Un matin au marché", level: "A1",
    summary: "A short A1 story about buying fruit at a morning market.",
    paragraphs: ["Il est huit heures du matin. Le soleil brille et Lina arrive au marché.", "Elle sourit au vendeur de fruits. Elle veut des pommes, du pain et du fromage.", "Le vendeur lui donne un grand sac. «Merci beaucoup!» dit Lina. «Bonne journée!» répond le vendeur."],
    questions: [{ q: "Où va Lina?", a: "Au marché." }, { q: "Que veut-elle acheter?", a: "Des pommes, du pain et du fromage." }, { q: "À quelle heure arrive-t-elle?", a: "À huit heures." }]
  },
  portrait_simple: {
    title: "Portrait simple", level: "A1",
    summary: "A simple description of a friend named Paul.",
    paragraphs: ["Mon ami Paul est grand et sympa. Il a trente ans et il habite à Québec.", "Il aime le café et il travaille au musée tous les jours.", "Le week-end, il fait du vélo avec ses amis. Il est très heureux."],
    questions: [{ q: "Où habite Paul?", a: "À Québec." }, { q: "Qu'est-ce qu'il aime?", a: "Le café." }, { q: "Que fait-il le week-end?", a: "Il fait du vélo." }]
  },
  metro_day: {
    title: "Jour de métro", level: "A1",
    summary: "Taking the metro in Montréal on a busy morning.",
    paragraphs: ["Je prends le métro à neuf heures. La station est proche de chez moi.", "Le train arrive. Il y a beaucoup de monde.", "Je vais au travail. C'est rapide et pratique."],
    questions: [{ q: "À quelle heure prend-il le métro?", a: "À neuf heures." }, { q: "Où va-t-il?", a: "Au travail." }, { q: "Comment est le métro?", a: "Rapide et pratique." }]
  },
  cafe_order: {
    title: "Commande au café", level: "A1",
    summary: "Ordering coffee and a pastry at a Parisian café.",
    paragraphs: ["Léa entre dans un petit café. Elle s'assoit près de la fenêtre.", "Elle commande un café et un croissant. Elle préfère sans sucre.", "Le serveur apporte l'addition. Léa laisse un pourboire."],
    questions: [{ q: "Que commande Léa?", a: "Un café et un croissant." }, { q: "Avec ou sans sucre?", a: "Sans sucre." }, { q: "Que fait Léa à la fin?", a: "Elle laisse un pourboire." }]
  },
  weekend_plan: {
    title: "Plan du week-end", level: "A1",
    summary: "Friends planning a fun weekend together.",
    paragraphs: ["Samedi matin, nous visitons le musée d'art moderne.", "L'après-midi, nous allons au parc pour pique-niquer.", "Nous prenons le bus et nous rentrons le soir. C'était une belle journée!"],
    questions: [{ q: "Où vont-ils samedi matin?", a: "Au musée." }, { q: "Que font-ils l'après-midi?", a: "Ils pique-niquent au parc." }, { q: "Comment rentrent-ils?", a: "En bus." }]
  },
  lost_wallet: {
    title: "Le portefeuille perdu", level: "A2",
    summary: "A past tense story about losing and recovering a wallet.",
    paragraphs: ["Hier, j'ai perdu mon portefeuille dans le métro. J'étais très stressé.", "J'ai cherché partout. Une dame l'a trouvé sur le siège.", "Elle me l'a rendu avec un grand sourire. J'étais tellement soulagé et content!"],
    questions: [{ q: "Quand a-t-il perdu son portefeuille?", a: "Hier." }, { q: "Qui l'a trouvé?", a: "Une dame." }, { q: "Comment s'est-il senti à la fin?", a: "Soulagé et content." }]
  },
  next_month: {
    title: "Le mois prochain", level: "A2",
    summary: "Plans for an exciting trip next month.",
    paragraphs: ["Le mois prochain, je vais voyager à Lyon pour une semaine.", "Je visiterai mes amis et je mangerai dans de bons restaurants.", "Je prendrai aussi le train jusqu'à Genève. Ce sera magnifique!"],
    questions: [{ q: "Où va-t-il voyager?", a: "À Lyon." }, { q: "Que fera-t-il?", a: "Il visitera des amis et mangera au restaurant." }, { q: "Où ira-t-il après Lyon?", a: "À Genève." }]
  },
  meeting_day: {
    title: "Journée de réunion", level: "A2",
    summary: "A busy office day with an important meeting.",
    paragraphs: ["Ce matin, nous avons une réunion importante avec le client.", "J'ai préparé les documents hier soir et j'ai envoyé un email au chef.", "La réunion s'est bien passée. Tout le monde était content!"],
    questions: [{ q: "Qu'a-t-il préparé?", a: "Les documents." }, { q: "À qui a-t-il envoyé un email?", a: "Au chef." }, { q: "Comment s'est passée la réunion?", a: "Bien." }]
  },
  train_delay: {
    title: "Retard de train", level: "A2",
    summary: "Handling a travel problem with a delayed train.",
    paragraphs: ["Le train a du retard de quarante minutes. Je suis un peu stressé.", "Je vais parler au guichet. La personne est très aimable.", "Elle me dit de prendre le train suivant à quatorze heures. Merci!"],
    questions: [{ q: "Quel est le problème?", a: "Le train a du retard." }, { q: "Que doit-il faire?", a: "Prendre le train suivant." }, { q: "Comment est la personne au guichet?", a: "Aimable." }]
  },
  movie_night: {
    title: "Soirée cinéma", level: "A2",
    summary: "Friends reviewing a French film after watching it together.",
    paragraphs: ["Hier soir, nous avons regardé un film français en noir et blanc.", "Je l'ai trouvé génial — l'histoire était touchante.", "Mon ami l'a trouvé trop long, mais il a aimé les acteurs."],
    questions: [{ q: "Qu'ont-ils regardé?", a: "Un film français." }, { q: "Qu'en pense l'ami?", a: "Il le trouve trop long." }, { q: "Qu'est-ce qu'il a aimé?", a: "Les acteurs." }]
  }
};

export const SOUNDS = [
  { label: "/ɑ̃/", symbol: "an/en", example: "sans, vent", tip: "Nasal vowel — air flows through the nose. Mouth open, jaw relaxed.", color: "#1f5a5d" },
  { label: "/ɔ̃/", symbol: "on", example: "bonjour, mon", tip: "Round your lips tightly, nasal resonance.", color: "#9d4b2a" },
  { label: "/y/", symbol: "u", example: "tu, rue", tip: "Tight rounded lips, tongue pushed forward. Not like English 'oo'.", color: "#b98b3a" },
  { label: "/ʁ/", symbol: "r", example: "rouge, Paris", tip: "Throaty sound from the uvula at the back of the throat.", color: "#1f5a5d" },
  { label: "/ø/", symbol: "eu", example: "deux, feu", tip: "Rounded lips, mid-height tongue, similar to 'uh' with rounded lips.", color: "#9d4b2a" },
  { label: "/wa/", symbol: "oi", example: "moi, voici", tip: "Say 'wa' quickly — glide from 'w' to 'a'.", color: "#b98b3a" },
  { label: "/ɛ̃/", symbol: "in/ain", example: "vin, pain", tip: "Nasal 'eh' — lips slightly spread, air through the nose.", color: "#1f5a5d" },
  { label: "/ə/", symbol: "e (schwa)", example: "le, je", tip: "Very short, neutral vowel. Often dropped in casual speech.", color: "#9d4b2a" },
  { label: "/ʒ/", symbol: "j/g(e)", example: "je, rouge", tip: "Like the 's' in 'measure'. Lips slightly rounded.", color: "#b98b3a" },
  { label: "/ɲ/", symbol: "gn", example: "montagne", tip: "Like 'ny' in 'canyon'. The back of tongue meets the palate.", color: "#1f5a5d" },
  { label: "/œ̃/", symbol: "un", example: "un, brun", tip: "Nasal version of /ø/. Lips rounded, nasalised.", color: "#9d4b2a" },
  { label: "/j/", symbol: "y/il(l)", example: "yeux, fille", tip: "Like English 'y' in 'yes'. A glide, not a full vowel.", color: "#b98b3a" },
];
