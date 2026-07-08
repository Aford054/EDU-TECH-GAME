(function() {
    // ---------- QUESTION BANK (10 Subjects, 20 Questions Each) ----------
    const subjectQuestions = {
        english: [
            { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childrens", "Childes"], correct: 1 },
            { question: "Which word is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
            { question: "What is the past tense of 'run'?", options: ["Run", "Ran", "Runned", "Runs"], correct: 1 },
            { question: "Which is a conjunction?", options: ["And", "Run", "Quickly", "Beautiful"], correct: 0 },
            { question: "What is a noun?", options: ["Action word", "Naming word", "Describing word", "Connecting word"], correct: 1 },
            // Questions 6-20 (Paid)
            { question: "What is an adverb?", options: ["Modifies noun", "Modifies verb", "Modifies pronoun", "Modifies preposition"], correct: 1 },
            { question: "Which is a proper noun?", options: ["City", "London", "Boy", "Dog"], correct: 1 },
            { question: "What is a verb?", options: ["Action word", "Naming word", "Describing word", "Connecting word"], correct: 0 },
            { question: "Which is a preposition?", options: ["Beautiful", "In", "Quickly", "And"], correct: 1 },
            { question: "What is the meaning of 'benevolent'?", options: ["Cruel", "Kind", "Angry", "Lazy"], correct: 1 },
            { question: "Which is a compound word?", options: ["Beautiful", "Basketball", "Quickly", "And"], correct: 1 },
            { question: "What is a synonym for 'big'?", options: ["Large", "Small", "Tiny", "Short"], correct: 0 },
            { question: "What is an antonym for 'hot'?", options: ["Warm", "Cold", "Fire", "Heat"], correct: 1 },
            { question: "Which sentence is a question?", options: ["He ran.", "Where is he?", "He is fast.", "Run fast."], correct: 1 },
            { question: "What is a simile?", options: ["Comparison using like/as", "Exaggeration", "Saying opposite", "Repeating sounds"], correct: 0 },
            { question: "What is a metaphor?", options: ["Direct comparison", "Comparison using like/as", "Exaggeration", "Sound device"], correct: 0 },
            { question: "What is the opposite of 'dark'?", options: ["Light", "Bright", "White", "Clear"], correct: 0 },
            { question: "What is a homophone?", options: ["Same spelling, different meaning", "Same sound, different meaning", "Same meaning", "Opposite meaning"], correct: 1 },
            { question: "What is the meaning of 'abandon'?", options: ["Stay", "Leave", "Come", "Help"], correct: 1 },
            { question: "Which is a conjunction?", options: ["But", "Beautiful", "Quickly", "Run"], correct: 0 }
        ],
        mathematics: [
            { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], correct: 2 },
            { question: "What is 10 - 4?", options: ["4", "5", "6", "7"], correct: 2 },
            { question: "What is 3 × 4?", options: ["10", "11", "12", "13"], correct: 2 },
            { question: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], correct: 1 },
            { question: "What is the square root of 81?", options: ["7", "8", "9", "10"], correct: 2 },
            // Questions 6-20 (Paid)
            { question: "What is 15 + 27?", options: ["40", "41", "42", "43"], correct: 2 },
            { question: "What is 50 - 23?", options: ["25", "26", "27", "28"], correct: 2 },
            { question: "What is 8 × 7?", options: ["54", "55", "56", "57"], correct: 2 },
            { question: "What is 144 ÷ 12?", options: ["10", "11", "12", "13"], correct: 2 },
            { question: "What is 2³?", options: ["6", "8", "9", "12"], correct: 1 },
            { question: "What is √144?", options: ["10", "11", "12", "13"], correct: 2 },
            { question: "What is 25% of 200?", options: ["40", "50", "60", "70"], correct: 1 },
            { question: "What is 3/4 + 1/4?", options: ["1", "1/2", "3/4", "2/4"], correct: 0 },
            { question: "What is 7 × 9?", options: ["61", "62", "63", "64"], correct: 2 },
            { question: "What is 180 - 95?", options: ["83", "84", "85", "86"], correct: 2 },
            { question: "What is 5²?", options: ["10", "15", "20", "25"], correct: 3 },
            { question: "What is 6 × 12?", options: ["70", "72", "74", "76"], correct: 1 },
            { question: "What is 1/2 + 1/3?", options: ["2/5", "3/5", "5/6", "1/6"], correct: 2 },
            { question: "What is 90 ÷ 6?", options: ["13", "14", "15", "16"], correct: 2 },
            { question: "What is 15²?", options: ["200", "225", "250", "275"], correct: 1 }
        ],
        physics: [
            { question: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 },
            { question: "What is the speed of light?", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"], correct: 1 },
            { question: "What is the formula for velocity?", options: ["v = at", "v = s/t", "v = t/s", "v = a/t"], correct: 1 },
            { question: "What is the unit of power?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 1 },
            { question: "What is the law of inertia?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], correct: 0 },
            // Questions 6-20 (Paid)
            { question: "What is the unit of energy?", options: ["Watt", "Joule", "Newton", "Pascal"], correct: 1 },
            { question: "What is the acceleration due to gravity?", options: ["9.8 m/s²", "9.8 m/s", "8.9 m/s²", "9.8 km/s²"], correct: 0 },
            { question: "What is pressure measured in?", options: ["Pascal", "Newton", "Joule", "Watt"], correct: 0 },
            { question: "What is the formula for work?", options: ["W = Fd", "W = ma", "W = Fv", "W = at"], correct: 0 },
            { question: "What is the unit of frequency?", options: ["Hertz", "Watt", "Newton", "Pascal"], correct: 0 },
            { question: "What is the formula for force?", options: ["F = ma", "F = mv", "F = at", "F = s/t"], correct: 0 },
            { question: "What is the unit of acceleration?", options: ["m/s", "m/s²", "km/h", "m/h"], correct: 1 },
            { question: "What is the formula for power?", options: ["P = W/t", "P = Ft", "P = ma", "P = Fd"], correct: 0 },
            { question: "What is the unit of work?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 0 },
            { question: "What is the law of conservation of energy?", options: ["Energy cannot be created/destroyed", "Energy is always lost", "Energy is created", "Energy is destroyed"], correct: 0 },
            { question: "What is the formula for momentum?", options: ["p = mv", "p = ma", "p = Ft", "p = Fd"], correct: 0 },
            { question: "What is the unit of momentum?", options: ["kg·m/s", "kg·m/s²", "N·s", "J·s"], correct: 0 },
            { question: "What is the formula for kinetic energy?", options: ["KE = ½mv²", "KE = mv²", "KE = ½at²", "KE = Fd"], correct: 0 },
            { question: "What is the unit of pressure?", options: ["Pascal", "Newton", "Joule", "Watt"], correct: 0 },
            { question: "What is the law of universal gravitation?", options: ["F = G(m₁m₂/r²)", "F = ma", "F = mv²/r", "F = Gd"], correct: 0 }
        ],
        chemistry: [
            { question: "What is the chemical symbol for water?", options: ["H₂O", "CO₂", "NaCl", "HCl"], correct: 0 },
            { question: "What is the atomic number of carbon?", options: ["4", "6", "8", "10"], correct: 1 },
            { question: "What is the formula for sodium chloride?", options: ["NaCl", "Na₂O", "NaOH", "HCl"], correct: 0 },
            { question: "What is the pH of a neutral solution?", options: ["5", "6", "7", "8"], correct: 2 },
            { question: "What is the chemical formula for methane?", options: ["CH₃", "CH₄", "C₂H₆", "C₃H₈"], correct: 1 },
            // Questions 6-20 (Paid)
            { question: "What is the symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correct: 0 },
            { question: "What is the atomic number of oxygen?", options: ["6", "8", "10", "12"], correct: 1 },
            { question: "What is the formula for sulfuric acid?", options: ["H₂SO₃", "H₂SO₄", "HCl", "HNO₃"], correct: 1 },
            { question: "What is the chemical symbol for potassium?", options: ["P", "K", "Po", "Pt"], correct: 1 },
            { question: "What is the formula for sodium hydroxide?", options: ["NaOH", "NaCl", "Na₂O", "HCl"], correct: 0 },
            { question: "What is the atomic number of iron?", options: ["24", "26", "28", "30"], correct: 1 },
            { question: "What is the formula for hydrochloric acid?", options: ["HCl", "H₂SO₄", "HNO₃", "H₂O"], correct: 0 },
            { question: "What is the symbol for silver?", options: ["Ag", "Au", "Fe", "Cu"], correct: 0 },
            { question: "What is the atomic number of nitrogen?", options: ["5", "7", "9", "11"], correct: 1 },
            { question: "What is the formula for ammonia?", options: ["NH₃", "NH₄", "NO₂", "N₂O"], correct: 0 },
            { question: "What is the symbol for lead?", options: ["Pb", "Pt", "Pd", "Po"], correct: 0 },
            { question: "What is the atomic number of helium?", options: ["1", "2", "3", "4"], correct: 1 },
            { question: "What is the formula for hydrogen peroxide?", options: ["H₂O", "H₂O₂", "HO₂", "H₂O₃"], correct: 1 },
            { question: "What is the symbol for mercury?", options: ["Hg", "H", "He", "Mg"], correct: 0 },
            { question: "What is the atomic number of sodium?", options: ["9", "10", "11", "12"], correct: 2 }
        ],
        biology: [
            { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], correct: 2 },
            { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], correct: 2 },
            { question: "What is the basic unit of life?", options: ["Cell", "Tissue", "Organ", "System"], correct: 0 },
            { question: "What is the function of the heart?", options: ["Pump blood", "Filter blood", "Produce blood", "Store blood"], correct: 0 },
            { question: "What is the function of the lungs?", options: ["Pump blood", "Filter air", "Exchange gases", "Digest food"], correct: 2 },
            // Questions 6-20 (Paid)
            { question: "What is DNA?", options: ["Deoxyribonucleic acid", "Ribonucleic acid", "Protein", "Lipid"], correct: 0 },
            { question: "What is the smallest blood vessel?", options: ["Artery", "Vein", "Capillary", "Aorta"], correct: 2 },
            { question: "What is the function of the kidney?", options: ["Filter blood", "Pump blood", "Digest food", "Store food"], correct: 0 },
            { question: "What is the function of the liver?", options: ["Filter toxins", "Pump blood", "Exchange gases", "Digest food"], correct: 0 },
            { question: "What is the function of the stomach?", options: ["Digest food", "Filter blood", "Store food", "Absorb nutrients"], correct: 0 },
            { question: "What is the function of the small intestine?", options: ["Absorb nutrients", "Digest food", "Filter blood", "Store food"], correct: 0 },
            { question: "What is the function of the brain?", options: ["Control body", "Pump blood", "Filter blood", "Digest food"], correct: 0 },
            { question: "What is the function of the spinal cord?", options: ["Transmit signals", "Pump blood", "Filter blood", "Digest food"], correct: 0 },
            { question: "What is the function of the pancreas?", options: ["Produce insulin", "Digest food", "Filter blood", "Pump blood"], correct: 0 },
            { question: "What is the function of the gallbladder?", options: ["Store bile", "Digest food", "Filter blood", "Pump blood"], correct: 0 },
            { question: "What is the function of the thyroid?", options: ["Produce hormones", "Digest food", "Filter blood", "Pump blood"], correct: 0 },
            { question: "What is the function of the spleen?", options: ["Filter blood", "Pump blood", "Digest food", "Store blood"], correct: 0 },
            { question: "What is the function of the appendix?", options: ["Immune function", "Digest food", "Filter blood", "Pump blood"], correct: 0 },
            { question: "What is the function of the bone marrow?", options: ["Produce blood cells", "Pump blood", "Filter blood", "Digest food"], correct: 0 },
            { question: "What is the function of the pituitary gland?", options: ["Produce hormones", "Digest food", "Filter blood", "Pump blood"], correct: 0 }
        ],
        economics: [
            { question: "What is GDP?", options: ["Gross Domestic Product", "Gross Domestic Price", "Gross Development Product", "Gross Domestic Profit"], correct: 0 },
            { question: "What is inflation?", options: ["Rising prices", "Falling prices", "Stable prices", "No prices"], correct: 0 },
            { question: "What is supply?", options: ["Goods available", "Goods demanded", "Goods produced", "Goods consumed"], correct: 0 },
            { question: "What is demand?", options: ["Goods wanted", "Goods available", "Goods produced", "Goods consumed"], correct: 0 },
            { question: "What is a monopoly?", options: ["Single seller", "Many sellers", "No sellers", "Two sellers"], correct: 0 },
            // Questions 6-20 (Paid)
            { question: "What is a market?", options: ["Place to trade", "Place to produce", "Place to consume", "Place to store"], correct: 0 },
            { question: "What is the law of supply?", options: ["Price up, supply up", "Price up, supply down", "Price down, supply up", "Price constant"], correct: 0 },
            { question: "What is the law of demand?", options: ["Price up, demand down", "Price up, demand up", "Price down, demand down", "Price constant"], correct: 0 },
            { question: "What is elasticity?", options: ["Responsiveness to price", "Responsiveness to supply", "Responsiveness to demand", "Responsiveness to cost"], correct: 0 },
            { question: "What is a budget?", options: ["Financial plan", "Financial report", "Financial statement", "Financial analysis"], correct: 0 },
            { question: "What is fiscal policy?", options: ["Government spending/taxation", "Monetary policy", "Trade policy", "Regulatory policy"], correct: 0 },
            { question: "What is monetary policy?", options: ["Money supply control", "Government spending", "Taxation", "Trade regulation"], correct: 0 },
            { question: "What is a tariff?", options: ["Tax on imports", "Tax on exports", "Tax on production", "Tax on consumption"], correct: 0 },
            { question: "What is a subsidy?", options: ["Government financial support", "Tax on imports", "Tax on exports", "Trade barrier"], correct: 0 },
            { question: "What is a recession?", options: ["Economic decline", "Economic growth", "Stable economy", "Economic boom"], correct: 0 },
            { question: "What is a boom?", options: ["Economic growth", "Economic decline", "Stable economy", "Recession"], correct: 0 },
            { question: "What is a depression?", options: ["Severe recession", "Mild recession", "Growth", "Stability"], correct: 0 },
            { question: "What is a stock?", options: ["Share of company", "Bond", "Investment", "Loan"], correct: 0 },
            { question: "What is a bond?", options: ["Debt investment", "Equity investment", "Share", "Loan"], correct: 0 },
            { question: "What is a dividend?", options: ["Company profit distribution", "Company loss", "Investment", "Loan"], correct: 0 }
        ],
        government: [
            { question: "What is democracy?", options: ["Government by the people", "Government by one", "Government by few", "Government by none"], correct: 0 },
            { question: "What is the executive branch?", options: ["Enforces laws", "Makes laws", "Interprets laws", "Creates laws"], correct: 0 },
            { question: "What is the legislative branch?", options: ["Makes laws", "Enforces laws", "Interprets laws", "Creates laws"], correct: 0 },
            { question: "What is the judicial branch?", options: ["Interprets laws", "Makes laws", "Enforces laws", "Creates laws"], correct: 0 },
            { question: "What is a constitution?", options: ["Supreme law", "Local law", "International law", "Common law"], correct: 0 },
            // Questions 6-20 (Paid)
            { question: "What is a monarchy?", options: ["Rule by one", "Rule by few", "Rule by many", "Rule by none"], correct: 0 },
            { question: "What is an oligarchy?", options: ["Rule by few", "Rule by one", "Rule by many", "Rule by none"], correct: 0 },
            { question: "What is a dictatorship?", options: ["Rule by one with absolute power", "Rule by many", "Rule by few", "Rule by none"], correct: 0 },
            { question: "What is a republic?", options: ["Representative democracy", "Direct democracy", "Monarchy", "Oligarchy"], correct: 0 },
            { question: "What is federalism?", options: ["Division of power", "Centralized power", "No power", "Local power"], correct: 0 },
            { question: "What is a political party?", options: ["Political organization", "Government body", "Court system", "Executive branch"], correct: 0 },
            { question: "What is an election?", options: ["Voting process", "Legislative process", "Judicial process", "Executive process"], correct: 0 },
            { question: "What is a referendum?", options: ["Direct vote on issue", "Legislative vote", "Judicial vote", "Executive vote"], correct: 0 },
            { question: "What is a veto?", options: ["Rejection of law", "Approval of law", "Creation of law", "Interpretation of law"], correct: 0 },
            { question: "What is impeachment?", options: ["Charge of misconduct", "Removal from office", "Appointment to office", "Re-election"], correct: 0 },
            { question: "What is a cabinet?", options: ["Advisory body", "Legislative body", "Judicial body", "Executive body"], correct: 0 },
            { question: "What is a minister?", options: ["Government head", "Court judge", "Legislator", "Executive officer"], correct: 0 },
            { question: "What is a governor?", options: ["State head", "Country head", "City head", "Town head"], correct: 0 },
            { question: "What is a mayor?", options: ["City head", "State head", "Country head", "Town head"], correct: 0 },
            { question: "What is a senator?", options: ["Legislator", "Executive", "Judge", "Governor"], correct: 0 }
        ],
        literature: [
            { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Twain", "Austen"], correct: 0 },
            { question: "What is a sonnet?", options: ["14-line poem", "8-line poem", "16-line poem", "20-line poem"], correct: 0 },
            { question: "What is a metaphor?", options: ["Direct comparison", "Comparison using like/as", "Exaggeration", "Sound device"], correct: 0 },
            { question: "What is a simile?", options: ["Comparison using like/as", "Direct comparison", "Exaggeration", "Sound device"], correct: 0 },
            { question: "What is a protagonist?", options: ["Main character", "Opposing character", "Supporting character", "Minor character"], correct: 0 },
            // Questions 6-20 (Paid)
            { question: "What is an antagonist?", options: ["Opposing character", "Main character", "Supporting character", "Minor character"], correct: 0 },
            { question: "What is a plot?", options: ["Story sequence", "Character description", "Setting description", "Theme explanation"], correct: 0 },
            { question: "What is a theme?", options: ["Main idea", "Story sequence", "Character description", "Setting description"], correct: 0 },
            { question: "What is a setting?", options: ["Time and place", "Main character", "Story sequence", "Main idea"], correct: 0 },
            { question: "What is a character?", options: ["Person in story", "Place in story", "Time in story", "Event in story"], correct: 0 },
            { question: "What is a conflict?", options: ["Struggle", "Resolution", "Beginning", "End"], correct: 0 },
            { question: "What is a resolution?", options: ["Conflict solution", "Conflict beginning", "Conflict development", "Conflict climax"], correct: 0 },
            { question: "What is a climax?", options: ["Turning point", "Beginning", "End", "Resolution"], correct: 0 },
            { question: "What is a foreshadowing?", options: ["Hint of future events", "Flashback", "Setting description", "Character description"], correct: 0 },
            { question: "What is a flashback?", options: ["Past events", "Future events", "Present events", "Setting description"], correct: 0 },
            { question: "What is an irony?", options: ["Contrast between expectation/reality", "Direct comparison", "Exaggeration", "Sound device"], correct: 0 },
            { question: "What is a paradox?", options: ["Contradictory statement", "Direct comparison", "Exaggeration", "Sound device"], correct: 0 },
            { question: "What is a hyperbole?", options: ["Exaggeration", "Direct comparison", "Comparison using like/as", "Sound device"], correct: 0 },
            { question: "What is a personification?", options: ["Human traits to objects", "Comparison of objects", "Exaggeration", "Sound device"], correct: 0 },
            { question: "What is an allusion?", options: ["Reference to something", "Direct comparison", "Exaggeration", "Sound device"], correct: 0 }
        ],
        accounting: [
            { question: "What is the accounting equation?", options: ["Assets = Liabilities + Equity", "Assets = Liabilities - Equity", "Assets = Equity - Liabilities", "Assets = Liabilities × Equity"], correct: 0 },
            { question: "What is a debit?", options: ["Increase in assets", "Decrease in assets", "Increase in liabilities", "Increase in equity"], correct: 0 },
            { question: "What is a credit?", options: ["Decrease in assets", "Increase in assets", "Decrease in liabilities", "Decrease in equity"], correct: 0 },
            { question: "What is a balance sheet?", options: ["Financial position", "Financial performance", "Cash flow", "Equity statement"], correct: 0 },
            { question: "What is income statement?", options: ["Financial performance", "Financial position", "Cash flow", "Equity statement"], correct: 0 },
            // Questions 6-20 (Paid)
            { question: "What is cash flow statement?", options: ["Cash movement", "Financial position", "Financial performance", "Equity statement"], correct: 0 },
            { question: "What is equity?", options: ["Owner's interest", "Company debt", "Company assets", "Company liabilities"], correct: 0 },
            { question: "What is a liability?", options: ["Debt owed", "Asset owned", "Equity owned", "Revenue earned"], correct: 0 },
            { question: "What is an asset?", options: ["Resource owned", "Debt owed", "Equity owned", "Revenue earned"], correct: 0 },
            { question: "What is revenue?", options: ["Income earned", "Expense incurred", "Debt owed", "Asset owned"], correct: 0 },
            { question: "What is an expense?", options: ["Cost incurred", "Income earned", "Asset owned", "Debt owed"], correct: 0 },
            { question: "What is profit?", options: ["Revenue - Expenses", "Assets - Liabilities", "Income - Costs", "Revenue - Assets"], correct: 0 },
            { question: "What is depreciation?", options: ["Asset value decrease", "Asset value increase", "Liability increase", "Equity increase"], correct: 0 },
            { question: "What is working capital?", options: ["Current assets - Current liabilities", "Total assets - Total liabilities", "Revenue - Expenses", "Income - Costs"], correct: 0 },
            { question: "What is a trial balance?", options: ["Account listing", "Financial statement", "Cash flow", "Balance sheet"], correct: 0 },
            { question: "What is a journal entry?", options: ["Transaction record", "Account listing", "Financial statement", "Cash flow"], correct: 0 },
            { question: "What is a ledger?", options: ["Account book", "Transaction record", "Financial statement", "Cash flow"], correct: 0 },
            { question: "What is a fiscal year?", options: ["Accounting period", "Calendar period", "Financial period", "Tax period"], correct: 0 },
            { question: "What is a budget?", options: ["Financial plan", "Financial report", "Financial statement", "Account listing"], correct: 0 },
            { question: "What is an audit?", options: ["Financial review", "Financial statement", "Account listing", "Transaction record"], correct: 0 }
        ],
        commerce: [
            { question: "What is trade?", options: ["Exchange of goods", "Exchange of services", "Exchange of ideas", "Exchange of money"], correct: 0 },
            { question: "What is a business?", options: ["Commercial activity", "Educational activity", "Social activity", "Political activity"], correct: 0 },
            { question: "What is profit?", options: ["Revenue - Costs", "Revenue + Costs", "Revenue × Costs", "Revenue / Costs"], correct: 0 },
            { question: "What is a market?", options: ["Place for trade", "Place for education", "Place for socializing", "Place for politics"], correct: 0 },
            { question: "What is marketing?", options: ["Promoting products", "Producing products", "Distributing products", "Pricing products"], correct: 0 },
            // Questions 6-20 (Paid)
            { question: "What is a consumer?", options: ["Product user", "Product seller", "Product producer", "Product distributor"], correct: 0 },
            { question: "What is a producer?", options: ["Product maker", "Product user", "Product seller", "Product distributor"], correct: 0 },
            { question: "What is a retailer?", options: ["Product seller to consumers", "Product maker", "Product distributor", "Product wholesaler"], correct: 0 },
            { question: "What is a wholesaler?", options: ["Product distributor", "Product seller to consumers", "Product maker", "Product user"], correct: 0 },
            { question: "What is a service?", options: ["Intangible product", "Tangible product", "Physical product", "Digital product"], correct: 0 },
            { question: "What is a good?", options: ["Tangible product", "Intangible product", "Digital product", "Service"], correct: 0 },
            { question: "What is a brand?", options: ["Product identity", "Product type", "Product quality", "Product price"], correct: 0 },
            { question: "What is advertising?", options: ["Product promotion", "Product production", "Product distribution", "Product pricing"], correct: 0 },
            { question: "What is a customer?", options: ["Product buyer", "Product seller", "Product maker", "Product distributor"], correct: 0 },
            { question: "What is a supplier?", options: ["Product source", "Product buyer", "Product seller", "Product maker"], correct: 0 },
            { question: "What is inventory?", options: ["Goods stock", "Goods sold", "Goods produced", "Goods distributed"], correct: 0 },
            { question: "What is a transaction?", options: ["Business exchange", "Business activity", "Business plan", "Business report"], correct: 0 },
            { question: "What is a contract?", options: ["Legal agreement", "Business plan", "Business exchange", "Business activity"], correct: 0 },
            { question: "What is a franchise?", options: ["Business license", "Business plan", "Business exchange", "Business activity"], correct: 0 },
            { question: "What is a partnership?", options: ["Business ownership by two or more", "Business ownership by one", "Business ownership by many", "Business ownership by none"], correct: 0 }
        ]
    };
    const SUBJECT_NAMES = {
        english: "English",
        mathematics: "Mathematics",
        physics: "Physics",
        chemistry: "Chemistry",
        biology: "Biology",
        economics: "Economics",
        government: "Government",
        literature: "Literature",
        accounting: "Accounting",
        commerce: "Commerce"
    };

    const PAYWALL_INDEX = 5; // After 5 questions, paywall appears
    const TOTAL_QUESTIONS_PER_SUBJECT = 20;
    const TIME_LIMIT_MINUTES = 5; // Changed to 5 minutes

    let currentSubject = 'english';
    let questions = [];
    let currentIndex = 0;
    let userAnswers = [];
    let isFinished = false;
    let paywallPassed = false;
    let timer = null;
    let timeRemaining = TIME_LIMIT_MINUTES * 60; // in seconds
    let score = 0;
    let isTimerStarted = false;

    // DOM refs
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const questionCounter = document.getElementById('questionCounter');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const midScoreDisplay = document.getElementById('midScoreDisplay');
    const finalScore = document.getElementById('finalScore');
    const correctCountDisplay = document.getElementById('correctCountDisplay');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const restartBtn = document.getElementById('restartBtn');
    const paywallContainer = document.getElementById('paywallContainer');
    const paymentBlockedMessage = document.getElementById('paymentBlockedMessage');
    const resultContainer = document.getElementById('resultContainer');
    const actionBar = document.getElementById('actionBar');
    const subjectSelector = document.getElementById('subjectSelector');
    const startSubjectBtn = document.getElementById('startSubjectBtn');
    const subjectSelect = document.getElementById('subjectSelect');
    const subjectBadge = document.getElementById('subjectBadge');
    const timerDisplay = document.getElementById('timerDisplay');

    // Check payment status from URL
    function checkPaymentStatus() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('payment') === 'success') {
            paywallPassed = true;
            // Try to restore state from localStorage
            const savedState = localStorage.getItem('quizState');
            if (savedState) {
                try {
                    const state = JSON.parse(savedState);
                    currentSubject = state.currentSubject || 'english';
                    currentIndex = state.currentIndex || 0;
                    userAnswers = state.userAnswers || new Array(20).fill(null);
                    paywallPassed = true;
                    timeRemaining = state.timeRemaining || TIME_LIMIT_MINUTES * 60;
                    isTimerStarted = false; // Reset timer state so it restarts
                    
                    // Load the subject and restore state
                    loadSubject(currentSubject, true);
                    
                    // Restore answers
                    if (state.userAnswers) {
                        userAnswers = state.userAnswers;
                        renderQuestion();
                    }
                    
                    // Clean URL
                    window.history.replaceState({}, document.title, window.location.pathname);
                    // Clear saved state
                    localStorage.removeItem('quizState');
                    
                    alert('✅ Payment successful! All 15 additional questions are now unlocked. Continuing from where you stopped.');
                    return true;
                } catch (e) {
                    console.error('Error restoring state:', e);
                }
            }
            // If no state to restore, just mark payment as passed
            paywallPassed = true;
            window.history.replaceState({}, document.title, window.location.pathname);
            return true;
        }
        return false;
    }

    // Save state before payment
    function saveQuizState() {
        const state = {
            currentSubject: currentSubject,
            currentIndex: currentIndex,
            userAnswers: userAnswers,
            paywallPassed: paywallPassed,
            timeRemaining: timeRemaining,
            isTimerStarted: isTimerStarted
        };
        localStorage.setItem('quizState', JSON.stringify(state));
    }

    // Timer functions
    function startTimer() {
        if (isTimerStarted) return;
        isTimerStarted = true;
        timer = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();
            if (timeRemaining <= 0) {
                clearInterval(timer);
                timer = null;
                alert('⏰ Time is up! The quiz will be submitted automatically.');
                finishQuiz();
            }
        }, 1000);
    }
    function updateTimerDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (timeRemaining <= 60) {
            timerDisplay.parentElement.classList.add('warning');
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
            isTimerStarted = false;
        }
    }

    // Load subject questions
    function loadSubject(subject, keepState = false) {
        currentSubject = subject;
        questions = subjectQuestions[subject] || [];
        
        if (!keepState) {
            userAnswers = new Array(questions.length).fill(null);
            currentIndex = 0;
            isFinished = false;
            paywallPassed = false;
            score = 0;
            timeRemaining = TIME_LIMIT_MINUTES * 60;
            isTimerStarted = false;
            stopTimer();
        } else {
            // Ensure userAnswers matches questions length
            if (userAnswers.length !== questions.length) {
                const newAnswers = new Array(questions.length).fill(null);
                for (let i = 0; i < Math.min(userAnswers.length, questions.length); i++) {
                    newAnswers[i] = userAnswers[i];
                }
                userAnswers = newAnswers;
            }
        }

        // Update UI
        subjectBadge.textContent = SUBJECT_NAMES[subject] || subject;
        document.querySelector('.question-box').style.display = 'block';
        actionBar.style.display = 'flex';
        resultContainer.classList.add('hidden');
        paywallContainer.classList.add('hidden');
        paymentBlockedMessage.classList.add('hidden');
        scoreDisplay.textContent = '0';
        updateTimerDisplay();
        timerDisplay.parentElement.classList.remove('warning');
        renderQuestion();
        updateScoreUI();
    }

    // Compute score
    function computeScore() {
        let correct = 0;
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] !== null && userAnswers[i] === questions[i].correct) {
                correct++;
            }
        }
        score = correct;
        return correct;
    }

    function updateScoreUI() {
        const answered = userAnswers.filter(a => a !== null).length;
        midScoreDisplay.textContent = `✅ ${answered}/${questions.length}`;
    }

    function renderQuestion() {
        if (isFinished) return;

        if (paywallPassed) {
            paywallContainer.classList.add('hidden');
            paymentBlockedMessage.classList.add('hidden');
        }

        // Start timer on first question if not started and not finished
        if (currentIndex === 0 && !isTimerStarted && !isFinished) {
            startTimer();
        } else if (currentIndex > 0 && !isTimerStarted && !isFinished && paywallPassed) {
            // Restart timer after payment if it was stopped
            startTimer();
        }

        const q = questions[currentIndex];
        if (!q) return;

        questionText.textContent = q.question;
        questionCounter.textContent = currentIndex + 1;

        optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, idx) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            if (userAnswers[currentIndex] === idx) {
                div.classList.add('selected');
            }
            div.innerHTML = `<span class="letter">${letters[idx]}</span> ${opt}`;
            div.dataset.optIndex = idx;
            div.addEventListener('click', () => selectOption(idx));
            optionsContainer.appendChild(div);
        });

        // Show paywall at question 6 (index 5)
        if (currentIndex >= PAYWALL_INDEX && !paywallPassed && !isFinished) {
            paywallContainer.classList.remove('hidden');
            paymentBlockedMessage.classList.add('hidden');
        } else {
            paywallContainer.classList.add('hidden');
        }

        // Navigation
        prevBtn.disabled = (currentIndex === 0);

        if (currentIndex === PAYWALL_INDEX - 1 && !paywallPassed) {
            nextBtn.disabled = true;
            paymentBlockedMessage.classList.remove('hidden');
        } else if (currentIndex >= PAYWALL_INDEX && !paywallPassed) {
            nextBtn.disabled = true;
            paymentBlockedMessage.classList.remove('hidden');
        } else if (currentIndex === questions.length - 1) {
            nextBtn.disabled = true;
            paymentBlockedMessage.classList.add('hidden');
        } else {
            nextBtn.disabled = false;
            paymentBlockedMessage.classList.add('hidden');
        }

        if (paywallPassed && currentIndex < questions.length - 1) {
            nextBtn.disabled = false;
            paymentBlockedMessage.classList.add('hidden');
        }

        updateScoreUI();
    }

    function selectOption(index) {
        if (isFinished) return;
        userAnswers[currentIndex] = index;
        renderQuestion();
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    }

    function goToNext() {
        // If at question 5 (index 4) and payment not passed, show paywall
        if (currentIndex === PAYWALL_INDEX - 1 && !paywallPassed) {
            paymentBlockedMessage.classList.remove('hidden');
            paymentBlockedMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        if (!paywallPassed && currentIndex >= PAYWALL_INDEX) {
            paymentBlockedMessage.classList.remove('hidden');
            return;
        }

        if (currentIndex < questions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    }

    function finishQuiz() {
        if (isFinished) return;

        const finalScoreVal = computeScore();
        score = finalScoreVal;
        scoreDisplay.textContent = finalScoreVal;

        resultContainer.classList.remove('hidden');
        finalScore.textContent = finalScoreVal;
        correctCountDisplay.textContent = finalScoreVal;
        document.querySelector('.question-box').style.display = 'none';
        actionBar.style.display = 'none';
        paywallContainer.classList.add('hidden');
        paymentBlockedMessage.classList.add('hidden');
        isFinished = true;
        midScoreDisplay.textContent = '🏁 Finished';
        stopTimer();
    }
    function restartGame() {
        loadSubject(currentSubject);
        // Clean URL params
        window.history.replaceState({}, document.title, window.location.pathname);
        localStorage.removeItem('quizState');
    }

    // Payment link handler - Save state before going to payment
    document.getElementById('paymentLink').addEventListener('click', function(e) {
        // Stop timer before going to payment
        stopTimer();
        saveQuizState();
        // Allow navigation to payment.html
    });

    // Event listeners
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    submitBtn.addEventListener('click', function() {
        if (!isFinished) {
            const answeredCount = userAnswers.filter(a => a !== null).length;
            if (answeredCount < questions.length) {
                if (!confirm(`You have answered ${answeredCount}/${questions.length}. Do you want to submit?`)) {
                    return;
                }
            }
            finishQuiz();
        }
    });

    restartBtn.addEventListener('click', restartGame);

    // Subject selection
    startSubjectBtn.addEventListener('click', function() {
        const subject = subjectSelect.value;
        if (subjectQuestions[subject]) {
            loadSubject(subject);
            subjectSelector.style.display = 'none';
            // Clear any saved state
            localStorage.removeItem('quizState');
        } else {
            alert('No questions available for this subject yet.');
        }
    });

    // Initialize
    const paymentSuccess = checkPaymentStatus();

    // If no payment success and no saved state, show subject selector
    if (!paymentSuccess) {
        const savedState = localStorage.getItem('quizState');
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                // If there's a saved state, but no payment success, restore it
                currentSubject = state.currentSubject || 'english';
                currentIndex = state.currentIndex || 0;
                userAnswers = state.userAnswers || new Array(20).fill(null);
                paywallPassed = state.paywallPassed || false;
                timeRemaining = state.timeRemaining || TIME_LIMIT_MINUTES * 60;
                isTimerStarted = false; // Reset timer state
                
                loadSubject(currentSubject, true);
                renderQuestion();
                localStorage.removeItem('quizState');
            } catch (e) {
                // If error, show subject selector
                subjectSelector.style.display = 'flex';
                document.querySelector('.question-box').style.display = 'none';
                actionBar.style.display = 'none';
            }
        } else {
            // Show subject selector initially
            subjectSelector.style.display = 'flex';
            document.querySelector('.question-box').style.display = 'none';
            actionBar.style.display = 'none';
        }
    }

    // Handle page refresh - save state
    window.addEventListener('beforeunload', function() {
        if (!isFinished) {
            stopTimer();
            saveQuizState();
        }
    });
})();