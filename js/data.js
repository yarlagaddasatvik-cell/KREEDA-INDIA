// KREEDA INDIA - Comprehensive National Sports Ecosystem Data

const KREEDA_DATA = {
  stats: {
    registeredAthletes: "58,420+",
    nationalAcademies: "164",
    coachesCertified: "3,890+",
    olympicMedals: "48",
    nationalCompetitions: "320+",
    kheloIndiaGrants: "₹450 Cr+"
  },

  liveScores: [
    {
      id: "ls-1",
      sport: "Kabaddi",
      badge: "LIVE - FINALS",
      tournament: "National Senior Kabaddi Championship 2026",
      team1: { name: "Haryana Panthers", score: 38, logo: "HP", state: "Haryana" },
      team2: { name: "Tamil Thalaivas", score: 35, logo: "TT", state: "Tamil Nadu" },
      status: "2nd Half - 36:40",
      highlight: "Super Raid by Vikas Kandola! +3 points",
      venue: "Tau Devi Lal Stadium, Panchkula",
      active: true
    },
    {
      id: "ls-2",
      sport: "Hockey",
      badge: "LIVE - SEMI-FINAL",
      tournament: "National Men's Hockey Trophy 2026",
      team1: { name: "Punjab Warriors", score: 3, logo: "PW", state: "Punjab" },
      team2: { name: "Odisha Naval", score: 2, logo: "ON", state: "Odisha" },
      status: "Q4 - 54:12",
      highlight: "Penalty Corner converted with a blazing drag flick!",
      venue: "Birsa Munda Hockey Stadium, Rourkela",
      active: true
    },
    {
      id: "ls-3",
      sport: "Badminton",
      badge: "LIVE - MEN'S SINGLES",
      tournament: "All India Senior Ranking Tournament",
      team1: { name: "Lakshya Sen (IND)", score: "21 | 18 | 15", logo: "LS", state: "Uttarakhand" },
      team2: { name: "HS Prannoy (IND)", score: "19 | 21 | 12", logo: "HP", state: "Kerala" },
      status: "Game 3 - Set Point 15-12",
      highlight: "Intense 38-shot rally won by cross-court smash",
      venue: "G.M.C. Balayogi Indoor Stadium, Hyderabad",
      active: true
    },
    {
      id: "ls-4",
      sport: "Cricket",
      badge: "LIVE - DAY 3",
      tournament: "Ranji Trophy Championship Final",
      team1: { name: "Mumbai", score: "384 & 182/3", logo: "MUM", state: "Maharashtra" },
      team2: { name: "Karnataka", score: "328", logo: "KAR", state: "Karnataka" },
      status: "Mumbai lead by 238 runs",
      highlight: "Century partnership for the 3rd wicket",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      active: true
    },
    {
      id: "ls-5",
      sport: "Football",
      badge: "LIVE - 78'",
      tournament: "Santosh Trophy Final Round",
      team1: { name: "Kerala FA", score: 2, logo: "KER", state: "Kerala" },
      team2: { name: "West Bengal IFA", score: 1, logo: "WB", state: "West Bengal" },
      status: "2nd Half - 78:30",
      highlight: "Spectacular 25-yard curling free-kick into top corner!",
      venue: "EMS Corporation Stadium, Kozhikode",
      active: true
    }
  ],

  sports: [
    {
      id: "kabaddi",
      name: "Kabaddi",
      hindiName: "कबड्डी",
      category: "indigenous",
      icon: "🤼‍♂️",
      tagline: "The Soul & Soil of Indian Combat Sport",
      origin: "Tamil Nadu, Ancient India",
      governingBody: "Amateur Kabaddi Federation of India (AKFI)",
      description: "A dynamic, high-contact indigenous sport requiring immense agility, lung capacity, swift tactical reflexes, and sheer tactical teamwork.",
      rulesBrief: "Two teams of 7 players. Raiders hold breath, chant 'Kabaddi' continuously, tag defenders and return to their half within 30 seconds.",
      keySkills: ["Ankle Hold", "Toe Touch", "Dubki", "Frog Jump", "Chain Tackle"],
      champions: ["Pardeep Narwal", "Pawan Sehrawat", "Ajay Thakur", "Mamatha Poojary"],
      tournaments: ["Pro Kabaddi League", "Senior National Championship", "Asian Games Kabaddi"],
      featured: true,
      color: "from-orange-500 to-amber-600",
      stats: { nationalTeams: 32, activePlayers: "12,000+", proClubs: 12 }
    },
    {
      id: "athletics",
      name: "Track & Field (Athletics)",
      hindiName: "एथलेटिक्स",
      category: "olympic",
      icon: "🏃‍♂️",
      tagline: "Speed, Strength, Endurance & National Glory",
      origin: "Global / Ancient Olympics",
      governingBody: "Athletics Federation of India (AFI)",
      description: "Encompassing track sprints, middle-distance, marathons, javelin throw, shot put, high jump, and decathlon, spearheading India's historic Olympic victories.",
      rulesBrief: "Individual track and field events measured precisely by metric distance and electronic millisecond split timers.",
      keySkills: ["Javelin Release Arc", "Sprint Stride Frequency", "Steeplechase Clearance", "High Jump Fosbury Flop"],
      champions: ["Neeraj Chopra", "Milkha Singh", "PT Usha", "Anju Bobby George", "Avinash Sable"],
      tournaments: ["National Inter-State Athletics", "Federation Cup", "Indian Grand Prix Series"],
      featured: true,
      color: "from-blue-600 to-indigo-800",
      stats: { nationalTeams: 36, activePlayers: "28,000+", trainingCentres: 44 }
    },
    {
      id: "badminton",
      name: "Badminton",
      hindiName: "बैडमिंटन",
      category: "olympic",
      icon: "🏸",
      tagline: "India's Dominance on the World Court",
      origin: "Poona (Pune, India - 1870s)",
      governingBody: "Badminton Association of India (BAI)",
      description: "Modern badminton originated as 'Poona' in 19th century India. Today, India is a powerhouse with Thomas Cup triumphs and Olympic medals.",
      rulesBrief: "Best of 3 games to 21 points. Rally scoring system with feather shuttlecocks traveling over 400 km/h.",
      keySkills: ["Jump Smash", "Drop Shot Precision", "Net Tumbling Trick", "Deceptive Cross-Slice"],
      champions: ["P.V. Sindhu", "Saina Nehwal", "Prakash Padukone", "Pullela Gopichand", "Lakshya Sen", "Satwik-Chirag"],
      tournaments: ["India Open Super 750", "Syed Modi International", "Senior National Badminton"],
      featured: true,
      color: "from-emerald-500 to-teal-700",
      stats: { nationalTeams: 35, activePlayers: "35,000+", academies: 90 }
    },
    {
      id: "hockey",
      name: "Field Hockey",
      hindiName: "हॉकी",
      category: "olympic",
      icon: "🏑",
      tagline: "The Golden Heritage of Indian Sport",
      origin: "India (Historic Gold Dominance - 8 Olympic Titles)",
      governingBody: "Hockey India",
      description: "India holds the legendary world record of 8 Olympic Gold Medals in Field Hockey. The national team is currently among the top 3 in world rankings.",
      rulesBrief: "11 players per side. Four 15-minute quarters on synthetic water-based turf. Curved composite sticks.",
      keySkills: ["Drag Flick", "3D Dribbling", "Aerial Scoop", "Reverse Stick Tomahawk", "Penalty Shootout One-on-One"],
      champions: ["Major Dhyan Chand", "Balbir Singh Sr.", "PR Sreejesh", "Harmanpreet Singh", "Savita Punia", "Manpreet Singh"],
      tournaments: ["Hockey India League", "National Senior Men & Women Championship", "Asia Cup"],
      featured: true,
      color: "from-cyan-500 to-blue-700",
      stats: { nationalTeams: 34, activePlayers: "18,000+", turfStadiums: 58 }
    },
    {
      id: "wrestling",
      name: "Wrestling (Kushti)",
      hindiName: "कुश्ती / मल्लयुद्ध",
      category: "both",
      icon: "🤼",
      tagline: "Tradition of Akharas to Olympic Podiums",
      origin: "Ancient India (Malla-yuddha)",
      governingBody: "Wrestling Federation of India (WFI)",
      description: "Rooted in traditional mud Akhara culture and modern Olympic freestyle & Greco-Roman mats, yielding consecutive Olympic medals for India.",
      rulesBrief: "Two 3-minute periods. Points awarded for takedowns, turns, reversals, exposures, and pins (fall).",
      keySkills: ["Dhobi Pachhad", "Single Leg Takedown", "Gut Wrench", "Fireman's Carry", "Bagal-Doob"],
      champions: ["K.D. Jadhav", "Sushil Kumar", "Bajrang Punia", "Sakshi Malik", "Vinesh Phogat", "Aman Sehrawat"],
      tournaments: ["National Wrestling Championship", "Bharat Kesari Dangal", "Pro Wrestling League"],
      featured: true,
      color: "from-amber-600 to-red-700",
      stats: { akharasRegistered: "850+", activeWrestlers: "14,000+", nationalMedals: 180 }
    },
    {
      id: "archery",
      name: "Archery (Dhanurvidya)",
      hindiName: "धनुर्विद्या (तीरंदाजी)",
      category: "both",
      icon: "🏹",
      tagline: "Ancient Precision, Global Mastery",
      origin: "Vedic India",
      governingBody: "Archery Association of India (AAI)",
      description: "From epic Vedic precision to compound and recurve world championships, Indian archers stand at the pinnacle of international target archery.",
      rulesBrief: "Archers shoot at 70m (Recurve) or 50m (Compound) targets with 10 concentric scoring rings from 1 to 10 points.",
      keySkills: ["Anchor Point Consistency", "Micro-Wind Compensation", "Clicker Timing", "Mental Stillness"],
      champions: ["Deepika Kumari", "Jyothi Surekha Vennam", "Tarundeep Rai", "Abhishek Verma", "Sheetal Devi (Armless Wonder)"],
      tournaments: ["National Senior Archery", "NTPC National Ranking Tournaments", "Khelo India Archery"],
      featured: true,
      color: "from-emerald-600 to-green-800",
      stats: { nationalTeams: 32, certifiedRanges: 110, activeArchers: "8,500+" }
    },
    {
      id: "mallakhamb",
      name: "Mallakhamb",
      hindiName: "मल्लखंब",
      category: "indigenous",
      icon: "🤸‍♂️",
      tagline: "Acrobatic Mastery on the Wooden Pillar & Rope",
      origin: "Maharashtra, 12th Century Manasollasa",
      governingBody: "Mallakhamb Federation of India (MFI)",
      description: "An extraordinary traditional Indian sport where gymnasts perform aerial yoga postures and acrobatic feats on a vertical teak pole oiled with castor oil or hanging rope.",
      rulesBrief: "Judged on speed, fluidity, difficulty of aerial grips, twist mounts, and graceful dismounts within a strict 90-second routine.",
      keySkills: ["Pole Mount Leap", "Monkey Grip", "Bajrang Pose", "Padmasana Swing", "Somersault Dismount"],
      champions: ["Uday Deshpande", "Himani Parab", "Sagar Ovhalkar", "Phoolchand Yadav"],
      tournaments: ["National Mallakhamb Championship", "Khelo India Indigenous Games", "World Mallakhamb Cup"],
      featured: true,
      color: "from-yellow-500 to-orange-700",
      stats: { statesPracticing: 28, nationalClubs: 420, activeGymnasts: "6,200+" }
    },
    {
      id: "kalaripayattu",
      name: "Kalaripayattu",
      hindiName: "कलारिपयट्टु",
      category: "indigenous",
      icon: "⚔️",
      tagline: "Mother of All Martial Arts",
      origin: "Kerala, 3rd Century BCE",
      governingBody: "Indian Kalaripayattu Federation",
      description: "One of the oldest surviving martial arts systems in the world, integrating body conditioning (Meythari), wooden weapons (Kolthari), metal swords/shields (Angathari), and marma pressure points.",
      rulesBrief: "Form-based kata performances and synchronized contact sparring evaluated for posture, breath control, weapon speed, and agility.",
      keySkills: ["Gaja Vadivu (Elephant Stance)", "Simha Vadivu (Lion Posture)", "Urumi Flexible Sword", "High Flying Kicks"],
      champions: ["Meenakshi Amma (Padma Shri)", "SRD Prasad", "Chitra S.", "Babu Raj"],
      tournaments: ["National Kalaripayattu Championship", "Kerala State Kalari Games", "National Martial Arts Expo"],
      featured: false,
      color: "from-red-600 to-rose-900",
      stats: { traditionalKalaris: "950+", registeredMasters: 450, practitioners: "25,000+" }
    },
    {
      id: "shooting",
      name: "Shooting Sport",
      hindiName: "निशानेबाजी",
      category: "olympic",
      icon: "🎯",
      tagline: "Razor-Sharp Focus & Olympic Gold Standard",
      origin: "Global / Modern Sports",
      governingBody: "National Rifle Association of India (NRAI)",
      description: "India is an undisputed global titan in precision rifle, pistol, and shotgun shooting with multiple Olympic and World Championship titles.",
      rulesBrief: "10m Air Rifle/Pistol, 50m 3-Positions, and Trap/Skeet events. Shooters target micro decimal bullseyes under intense heart-rate control.",
      keySkills: ["Micro-Trigger Control", "Heart-rate Synchronization", "Sight Picture Alignment", "Wind Reading"],
      champions: ["Abhinav Bindra", "Manu Bhaker", "Sarabjot Singh", "Swapnil Kusale", "Rajyavardhan Rathore", "Gagan Narang"],
      tournaments: ["National Shooting Championship", "ISSF World Cup India", "Karni Singh Grand Prix"],
      featured: false,
      color: "from-slate-700 to-zinc-900",
      stats: { shootingRanges: 140, activeShooters: "16,000+", worldRecords: 14 }
    },
    {
      id: "khokho",
      name: "Kho-Kho",
      hindiName: "खो-खो",
      category: "indigenous",
      icon: "🏃‍♀️",
      tagline: "Lightning Speed, Chase & Evasion",
      origin: "Maharashtra (Ancient Rath Chariot Sports)",
      governingBody: "Kho Kho Federation of India (KKFI)",
      description: "An exhilarating traditional tag sport played by two teams of 12 players (9 on pitch), featuring lightning-fast dodges, sudden directional dives, and pole dives.",
      rulesBrief: "Chasing team sits in alternating facing positions. Active chaser touches sitting teammate shouting 'Kho' to transfer chase pursuit.",
      keySkills: ["Pole Dive", "Sky Dive Tag", "Monkey Crawl", "Sudden 180 Turn", "Fake Kho"],
      champions: ["Praveen Kumar", "Nasreen Shaikh", "Sarla Sharma", "Aniket Pote"],
      tournaments: ["Ultimate Kho Kho League", "National Kho-Kho Championship", "Asian Kho-Kho Cup"],
      featured: false,
      color: "from-fuchsia-600 to-pink-800",
      stats: { nationalTeams: 32, registeredPlayers: "45,000+", leagues: 1 }
    },
    {
      id: "boxing",
      name: "Boxing",
      hindiName: "मुक्केबाजी",
      category: "olympic",
      icon: "🥊",
      tagline: "Courage, Grit & Ring Dominance",
      origin: "Olympic / Ancient Arts",
      governingBody: "Boxing Federation of India (BFI)",
      description: "Indian pugilists have carved their names into Olympic and World Championship history with iron determination and tactical boxing acumen.",
      rulesBrief: "Three rounds of 3 minutes judged by 5 ringside judges scoring on clean punches, defense, effective aggression, and ring generalship.",
      keySkills: ["Southpaw Hook", "Liver Shot Counter", "Slip and Roll", "1-2 Jab Cross", "Pivot Escape"],
      champions: ["Mary Kom (6x World Champ)", "Nikhat Zareen", "Lovlina Borgohain", "Vijender Singh", "Amit Panghal"],
      tournaments: ["National Elite Boxing Championship", "India Open Boxing", "Sub-Junior Nationals"],
      featured: false,
      color: "from-rose-600 to-red-900",
      stats: { boxingRings: 220, registeredBoxers: "11,000+", worldTitles: 24 }
    },
    {
      id: "weightlifting",
      name: "Weightlifting",
      hindiName: "भारोत्तोलन",
      category: "olympic",
      icon: "🏋️‍♀️",
      tagline: "Unbreakable Power & Olympic Medals",
      origin: "Olympic Sport",
      governingBody: "Indian Weightlifting Federation (IWLF)",
      description: "Indian lifters have consistently brought pride to the nation in Snatch and Clean & Jerk categories with podium finishes on the global stage.",
      rulesBrief: "Athletes get three attempts each in Snatch and Clean & Jerk. The sum of the highest successful lifts in each determines total score.",
      keySkills: ["Snatch Drop Catch", "Jerk Drive Extension", "Explosive Hip Pop", "Overhead Lockout Stability"],
      champions: ["Mirabai Chanu", "Karnam Malleswari (1st Indian Woman Olympic Medalist)", "Jeremy Lalrinnunga", "Achinta Sheuli"],
      tournaments: ["National Weightlifting Championship", "Commonwealth Weightlifting", "Khelo India Lifters League"],
      featured: false,
      color: "from-violet-600 to-purple-900",
      stats: { nationalLifters: "6,800+", olympicMedals: 2, youthAcademies: 45 }
    }
  ],

  athletes: [
    {
      id: "neeraj-chopra",
      name: "Neeraj Chopra",
      title: "Olympic Gold & Silver Medalist, World Champion",
      sport: "Athletics (Javelin Throw)",
      state: "Haryana (Khandra, Panipat)",
      dob: "24 December 1997",
      rank: "World No. 1",
      personalBest: "89.94m (National Record)",
      awards: ["Param Vishisht Seva Medal", "Major Dhyan Chand Khel Ratna", "Padma Shri", "Arjuna Award"],
      bio: "The Golden Boy of Indian sports. Made history at Tokyo 2020 by winning India's first-ever Olympic track and field gold medal, followed by Silver at Paris 2024 and World Championship Gold in Budapest.",
      quote: "When you want to win, you don't count the obstacles; you only focus on the target.",
      careerStats: {
        olympicMedals: "1 Gold (Tokyo 2020), 1 Silver (Paris 2024)",
        worldChampionship: "1 Gold (2023), 1 Silver (2022)",
        asianGames: "2 Gold Medals (2018, 2022)",
        diamondLeague: "Champion (2022)"
      },
      avatarInitial: "NC",
      badgeColor: "#FFD700"
    },
    {
      id: "pv-sindhu",
      name: "P.V. Sindhu",
      title: "2x Olympic Medalist & World Champion",
      sport: "Badminton (Women's Singles)",
      state: "Telangana (Hyderabad)",
      dob: "5 July 1995",
      rank: "Former World No. 2",
      personalBest: "5 World Championship Medals",
      awards: ["Major Dhyan Chand Khel Ratna", "Padma Bhushan", "Padma Shri", "Arjuna Award"],
      bio: "India's greatest female badminton player and the first Indian woman to win two consecutive Olympic medals (Silver at Rio 2016, Bronze at Tokyo 2020). Crowned World Champion in Basel 2019.",
      quote: "The greatest asset is a strong mind. If I know I gave my 100%, victory will follow.",
      careerStats: {
        olympicMedals: "1 Silver (Rio 2016), 1 Bronze (Tokyo 2020)",
        worldChampionship: "1 Gold, 2 Silver, 2 Bronze",
        commonwealthGames: "Gold (Birmingham 2022)",
        bWFWorldTour: "World Tour Finals Champion"
      },
      avatarInitial: "PVS",
      badgeColor: "#00E5FF"
    },
    {
      id: "manu-bhaker",
      name: "Manu Bhaker",
      title: "Double Olympic Bronze Medalist (Paris 2024)",
      sport: "Shooting (10m Air Pistol & 25m Pistol)",
      state: "Haryana (Jhajjar)",
      dob: "18 February 2002",
      rank: "World Top 3",
      personalBest: "587/600 Qualification Record",
      awards: ["Major Dhyan Chand Khel Ratna", "Arjuna Award"],
      bio: "Created historic national milestone at Paris 2024 by becoming the first athlete from independent India to win two Olympic medals in a single Olympic edition.",
      quote: "Stay in the present shot. The past is memory, the future is expectation.",
      careerStats: {
        olympicMedals: "2 Bronze Medals (Paris 2024)",
        worldCupGold: "9 Gold Medals (ISSF)",
        asianGames: "Gold Medal (2022)",
        youthOlympics: "Gold Medal (Buenos Aires)"
      },
      avatarInitial: "MB",
      badgeColor: "#FF6B00"
    },
    {
      id: "pr-sreejesh",
      name: "P.R. Sreejesh",
      title: "The Wall of India - 2x Olympic Bronze Medalist",
      sport: "Field Hockey (Goalkeeper)",
      state: "Kerala (Ernakulam)",
      dob: "8 May 1988",
      rank: "FIH Best Goalkeeper 2x",
      personalBest: "336 International Caps",
      awards: ["Major Dhyan Chand Khel Ratna", "World Games Athlete of Year", "Padma Shri", "Arjuna Award"],
      bio: "Legendary goalkeeper who guarded the Indian net for nearly two decades, engineering back-to-back historic Olympic bronze medals at Tokyo 2020 and Paris 2024.",
      quote: "Behind every save is thousands of hours in the sun when nobody was watching.",
      careerStats: {
        olympicMedals: "2 Bronze (Tokyo 2020, Paris 2024)",
        asianGames: "2 Gold Medals (2014, 2022)",
        championsTrophy: "2 Silver Medals",
        caps: "336 Caps"
      },
      avatarInitial: "PRS",
      badgeColor: "#00C853"
    },
    {
      id: "mirabai-chanu",
      name: "Saikhom Mirabai Chanu",
      title: "Olympic Silver Medalist & World Champion",
      sport: "Weightlifting (49kg Category)",
      state: "Manipur (Nongpok Kakching)",
      dob: "8 August 1994",
      rank: "World Record Holder (Clean & Jerk 119kg)",
      personalBest: "207 kg Combined Total",
      awards: ["Major Dhyan Chand Khel Ratna", "Padma Shri"],
      bio: "From collecting firewood in Manipur hills to standing on the Tokyo 2020 Olympic podium with Silver, Mirabai is an icon of grit, humility, and raw athletic power.",
      quote: "Hard work will always outshine talent when talent doesn't work hard.",
      careerStats: {
        olympicMedals: "1 Silver (Tokyo 2020)",
        worldChampionship: "1 Gold (2017), 1 Silver (2022)",
        commonwealthGames: "2 Gold Medals (2018, 2022)",
        asianChampionship: "World Record Lift 119kg"
      },
      avatarInitial: "MC",
      badgeColor: "#FFD700"
    },
    {
      id: "pardeep-narwal",
      name: "Pardeep Narwal",
      title: "The Dubki King of Kabaddi",
      sport: "Kabaddi (Raider)",
      state: "Haryana (Rindhana, Sonepat)",
      dob: "16 February 1997",
      rank: "Highest Raid Points Record in History",
      personalBest: "1,600+ Pro Raid Points",
      awards: ["Arjuna Award", "VVS Laxman National Sports Excellence"],
      bio: "The most prolific raider in Kabaddi history. Revolutionized the sport with his signature multi-point 'Dubki' maneuver and led India to multiple international titles.",
      quote: "When 7 defenders surround you, look for the gap beneath their feet.",
      careerStats: {
        proKabaddiTitles: "3x Consecutive Champion (Patna Pirates)",
        raidPoints: "1,690+ Career Points",
        kabaddiWorldCup: "Gold (2016)",
        super10s: "85+ Super 10s"
      },
      avatarInitial: "PN",
      badgeColor: "#FF8A00"
    },
    {
      id: "sheetal-devi",
      name: "Sheetal Devi",
      title: "Paralympic Bronze Medalist & World Champion",
      sport: "Para Archery (Compound)",
      state: "Jammu & Kashmir (Kishtwar)",
      dob: "10 January 2007",
      rank: "World Para No. 1",
      personalBest: "689/720 Ranking Round",
      awards: ["Arjuna Award", "Best Youth Athlete of Asia"],
      bio: "Born without arms (phocomelia), Sheetal shoots arrows using her legs and chin with absolute laser accuracy. Won Bronze at Paris 2024 and double gold at the Asian Para Games.",
      quote: "Limitations exist only in the mind. The arrow knows only the target.",
      careerStats: {
        paralympics: "1 Bronze (Paris 2024 Mixed Team)",
        asianParaGames: "2 Gold, 1 Silver (Hangzhou 2022)",
        worldChampionship: "Silver Medal (Pilsen 2023)",
        worldRank: "World No. 1 (2024)"
      },
      avatarInitial: "SD",
      badgeColor: "#00E5FF"
    },
    {
      id: "harmanpreet-singh",
      name: "Harmanpreet Singh",
      title: "Sarpanch - Captain & Olympic Top Goalscorer",
      sport: "Field Hockey (Defender & Drag Flicker)",
      state: "Punjab (Amritsar)",
      dob: "6 January 1996",
      rank: "Top Scorer Paris 2024 (10 Goals)",
      personalBest: "200+ International Goals",
      awards: ["Major Dhyan Chand Khel Ratna", "FIH Player of the Year 2x", "Arjuna Award"],
      bio: "Renowned as 'Sarpanch Sahib', he captained India to the Paris 2024 Olympic Bronze while topping the entire tournament goal chart with unstoppable drag flicks.",
      quote: "When the nation expects a goal on penalty corner, pressure turns into focus.",
      careerStats: {
        olympicMedals: "2 Bronze (Tokyo 2020, Paris 2024)",
        goals: "205+ International Goals",
        asianGames: "Gold (Hangzhou 2022)",
        fihPlayerOfYear: "2021, 2022 Winner"
      },
      avatarInitial: "HS",
      badgeColor: "#00C853"
    }
  ],

  stadiums: [
    {
      id: "jln-delhi",
      name: "Jawaharlal Nehru National Stadium Complex",
      city: "New Delhi",
      state: "Delhi",
      type: "Multi-Sport Olympic Arena",
      capacity: "60,254",
      facilities: ["Synthetic 8-lane IAAF Track", "Warm-up arena", "Football turf", "Weightlifting auditorium", "High Performance Sports Science Centre"],
      accreditation: "SAI National Headquarters",
      established: 1982,
      tag: "SAI Hub"
    },
    {
      id: "birsa-munda-rourkela",
      name: "Birsa Munda International Hockey Stadium",
      city: "Rourkela",
      state: "Odisha",
      type: "World's Largest Seated Hockey Stadium",
      capacity: "20,011",
      facilities: ["Dual Poligras Olympic Turfs", "World Cup Standard Lighting", "Olympic Village Complex", "Cryotherapy Rehabilitation"],
      accreditation: "FIH Certified World Class",
      established: 2023,
      tag: "World Record"
    },
    {
      id: "karni-singh-delhi",
      name: "Dr. Karni Singh Shooting Ranges",
      city: "Tughlakabad, New Delhi",
      state: "Delhi",
      type: "International Precision Shooting Hub",
      capacity: "5,000",
      facilities: ["10m 80-lane Electronic Range", "25m Rapid Fire Range", "50m 3-Position Range", "Trap & Skeet Shotgun Ranges"],
      accreditation: "ISSF World Cup Host",
      established: 1982,
      tag: "Olympic Range"
    },
    {
      id: "gopichand-hyderabad",
      name: "Pullela Gopichand Badminton Academy",
      city: "Gachibowli, Hyderabad",
      state: "Telangana",
      type: "National Centre of Excellence",
      capacity: "3,000",
      facilities: ["16 BWF Grade Wooden-Synthetic Courts", "Altitude Training Simulator", "Physiotherapy & Biomechanics Lab"],
      accreditation: "BAI National High-Performance Centre",
      established: 2008,
      tag: "Center of Excellence"
    },
    {
      id: "nis-patiala",
      name: "Netaji Subhas National Institute of Sports (NIS)",
      city: "Patiala",
      state: "Punjab",
      type: "Asia's Largest Sports Coaching Institute",
      capacity: "15,000 across complexes",
      facilities: ["Olympic Swimming Pool", "Gymnastics Hall", "Kushti & Judo Arenas", "Sports Medicine Research Institute"],
      accreditation: "SAI Apex Training Institution",
      established: 1961,
      tag: "Heritage Hub"
    },
    {
      id: "salt-lake-kolkata",
      name: "Vivekananda Yuba Bharati Krirangan (Salt Lake)",
      city: "Kolkata",
      state: "West Bengal",
      type: "Grand Football & Athletic Stadium",
      capacity: "85,000",
      facilities: ["FIFA Grade Natural Grass Turf", "LED Floodlight Mast System", "Athlete Dressing Suites", "Media Broadcasting Center"],
      accreditation: "FIFA U-17 World Cup Final Host",
      established: 1984,
      tag: "Football Fortress"
    }
  ],

  events: [
    {
      id: "event-1",
      title: "38th National Games 2026",
      sport: "Multi-Sport (38 Disciplines)",
      dates: "October 18 - November 02, 2026",
      venue: "Dehradun & Haldwani, Uttarakhand",
      athletesExpected: "11,500+",
      status: "Upcoming",
      daysLeft: 36,
      category: "National Championship",
      registrationOpen: true
    },
    {
      id: "event-2",
      title: "Khelo India Youth Games 2026 (7th Edition)",
      sport: "U-18 Multi-Sport",
      dates: "November 25 - December 08, 2026",
      venue: "Bhopal & Jabalpur, Madhya Pradesh",
      athletesExpected: "8,200+",
      status: "Registrations Open",
      daysLeft: 74,
      category: "Youth Talent Hunt",
      registrationOpen: true
    },
    {
      id: "event-3",
      title: "National Senior Athletics Open Championship",
      sport: "Track & Field",
      dates: "September 28 - October 02, 2026",
      venue: "Kalinga Stadium, Bhubaneswar",
      athletesExpected: "1,400+",
      status: "Starting Soon",
      daysLeft: 16,
      category: "Olympic Trials",
      registrationOpen: true
    },
    {
      id: "event-4",
      title: "All-India Inter-University Mallakhamb Cup",
      sport: "Mallakhamb & Yoga Sports",
      dates: "December 12 - 16, 2026",
      venue: "Shivaji University, Kolhapur",
      athletesExpected: "650+",
      status: "Upcoming",
      daysLeft: 91,
      category: "Indigenous Sports",
      registrationOpen: false
    }
  ],

  schemes: [
    {
      id: "tops",
      name: "Target Olympic Podium Scheme (TOPS)",
      tagline: "Customized elite training for Olympic & Paralympic podium contenders",
      grant: "Up to ₹50,000/month out-of-pocket allowance + 100% coaching, equipment & foreign stint funding",
      eligibility: "Elite athletes ranked in World Top 50 or projected Olympic medalists",
      beneficiaries: "300+ Core & Development Athletes",
      icon: "🥇"
    },
    {
      id: "khelo-india-scholarship",
      name: "Khelo India Talent Development Scholarship",
      tagline: "Nurturing grassroots and school-level sports prodigies",
      grant: "₹6,28,000 annual financial assistance per athlete for 8 consecutive years",
      eligibility: "Top 8 finalists in Khelo India Youth Games & National School Games (Under 10 to 18)",
      beneficiaries: "2,800+ Young Athletes across India",
      icon: "🌟"
    },
    {
      id: "national-welfare-fund",
      name: "Pandit Deendayal Upadhyay National Sports Welfare Scheme",
      tagline: "Medical assistance, pension & financial aid to veteran champions",
      grant: "Lump sum grant up to ₹5,00,000 for medical treatment and ₹20,000 monthly pension",
      eligibility: "Outstanding sportspersons living in indigent conditions / retired medal winners",
      beneficiaries: "1,200+ Veteran Champions",
      icon: "🛡️"
    },
    {
      id: "cash-awards-scheme",
      name: "National Cash Awards for International Medalists",
      tagline: "Direct monetary reward for bringing laurels to Bharat",
      grant: "Olympic Gold: ₹75 Lakh | Silver: ₹50 Lakh | Bronze: ₹30 Lakh + Govt Gazetted Post",
      eligibility: "Medalists in Olympic Games, Asian Games, World Cups, Commonwealth Games",
      beneficiaries: "All Podium Finishers",
      icon: "💰"
    }
  ],

  merchandise: [
    {
      id: "prod-1",
      name: "Official Team India Tricolor Athletics Jersey",
      category: "Apparel",
      price: 1499,
      originalPrice: 2499,
      badge: "Official Kit",
      sport: "Multi-Sport",
      rating: 4.9,
      reviews: 420
    },
    {
      id: "prod-2",
      name: "Kreeda India Pro Field Hockey Carbon Stick (95% Carbon)",
      category: "Equipment",
      price: 4999,
      originalPrice: 7999,
      badge: "Tournament Grade",
      sport: "Hockey",
      rating: 4.8,
      reviews: 184
    },
    {
      id: "prod-3",
      name: "Bharat National Team Commemorative Gold Medallion & Pin",
      category: "Collectibles",
      price: 699,
      originalPrice: 1199,
      badge: "Limited Edition",
      sport: "Heritage",
      rating: 5.0,
      reviews: 610
    },
    {
      id: "prod-4",
      name: "Professional Match Kabaddi Grip Mat & Shoes Set",
      category: "Footwear",
      price: 2899,
      originalPrice: 4299,
      badge: "AKFI Approved",
      sport: "Kabaddi",
      rating: 4.7,
      reviews: 215
    }
  ],

  news: [
    {
      id: "news-1",
      title: "India Bids to Host the 2036 Olympic and Paralympic Games",
      date: "September 10, 2026",
      category: "Policy & Future",
      summary: "Government of India and Indian Olympic Association formally submit Letter of Intent for Ahmedabad-Gandhinagar sports cluster.",
      readTime: "3 min read"
    },
    {
      id: "news-2",
      title: "Record 124 Medals at Asian Junior Championships: India Tops Table",
      date: "September 08, 2026",
      category: "Youth Triumphs",
      summary: "Young track and field stars dominate the championship in Doha, securing 42 gold medals across sprint and field categories.",
      readTime: "4 min read"
    },
    {
      id: "news-3",
      title: "Indigenous Sports Mallakhamb and Kalaripayattu Included in National School Games",
      date: "September 05, 2026",
      category: "Grassroots",
      summary: "Ministry of Youth Affairs & Sports expands indigenous sports calendar with dedicated scholarships and state academies.",
      readTime: "2 min read"
    }
  ]
};

// Export to window for vanilla JS access
if (typeof window !== "undefined") {
  window.KREEDA_DATA = KREEDA_DATA;
}
