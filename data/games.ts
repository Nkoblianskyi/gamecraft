export const games = [
  {
    id: 1,
    name: "Pliko",
    slug: "pliko",
    origin: "Japan, 18th Century",
    description:
      "Pliko is a traditional wooden board game where players drop discs from the top of a vertical board filled with pegs. The discs bounce off the pegs as they fall, creating an unpredictable path until they land in one of the scoring slots at the bottom.",
    history:
      'Pliko originated in Japan during the 18th century as a gambling game called "Pachinko." It was later adapted and popularized in the West during the 1930s. The game gained significant popularity in the UK during the post-war era as a family-friendly entertainment option. The modern wooden version we offer stays true to the original design while enhancing the craftsmanship and materials.',
    howToPlay:
      "Players take turns dropping wooden discs from the top of the board. The discs bounce unpredictably off the pegs as they fall, eventually landing in one of the scoring slots at the bottom. Each slot has a different point value, and the player with the highest score after all discs have been played wins. The game combines luck and strategy, as players must decide from which position to drop their discs to maximize their chances of landing in high-scoring slots.",
    image: "/colorful-plinko-cascade.png",
    funFacts: [
      'The name "Pliko" comes from the Japanese word "pachinko," which mimics the sound of the discs hitting the pegs.',
      "In the 1950s, Pliko boards were often featured in British seaside arcades as popular attractions.",
      "The mathematical principles behind Pliko have been studied extensively, as they demonstrate concepts of probability and chaos theory.",
    ],
  },
  {
    id: 2,
    name: "Carrom",
    slug: "carrom",
    origin: "India, 16th Century",
    description:
      "Carrom is a strike and pocket tabletop game of Indian origin. The game is played on a square board made of wood, with pockets in each corner. Players use a striker to hit smaller discs, called carrom men, into these pockets.",
    history:
      "Carrom originated in India in the 16th century and has since spread throughout South Asia and beyond. It was particularly popular during the British colonial era and was introduced to many countries through Indian immigrants. The game combines elements of billiards, shuffleboard, and table hockey, making it a unique and engaging experience.",
    howToPlay:
      'Players take turns flicking a heavier striker disc to hit and pocket lighter carrom men. The game is typically played by two or four players. The objective is to pocket all of your carrom men (either black or white) before your opponent. The queen (a red disc) must also be pocketed, but if you pocket the queen, you must pocket one of your carrom men in the same or next turn to "cover" the queen.',
    image: "/classic-carrom-game.png",
    funFacts: [
      'Carrom is often called "finger billiards" due to its similarity to pool but played with fingers instead of cues.',
      "Professional Carrom tournaments are held worldwide, with particularly strong players coming from India, Sri Lanka, and Malaysia.",
      "The World Carrom Federation was established in 1988 and organizes international competitions.",
    ],
  },
  {
    id: 3,
    name: "Senet",
    slug: "senet",
    origin: "Ancient Egypt, 3100 BCE",
    description:
      "Senet is one of the oldest known board games, dating back to Ancient Egypt around 3100 BCE. It is a race game played on a board of 30 squares arranged in three rows of ten.",
    history:
      "Senet was played in Ancient Egypt for over 3,000 years and held religious significance, representing the journey of the soul through the afterlife. Archaeological evidence of Senet has been found in predynastic and First Dynasty burials, with game boards found in the tombs of Egyptian pharaohs. Our recreation is based on archaeological findings and historical research to provide an authentic experience of this ancient game.",
    howToPlay:
      "Players move their pieces according to the throw of casting sticks or knucklebones (early dice). The goal is to move all your pieces off the board before your opponent. The game combines luck and strategy, as certain squares have special properties that can help or hinder a player's progress. The path forms an S-shape, moving right across the upper row, then left across the middle row, then right again across the bottom row.",
    image: "/senet-game-ancient-egypt.png",
    funFacts: [
      "Senet is depicted in numerous paintings in Egyptian tombs, showing its cultural importance.",
      "The exact original rules of Senet are unknown, as no complete set of rules has survived. Modern versions use reconstructed rules based on archaeological evidence.",
      "Tutankhamun's tomb contained four Senet boards, highlighting its importance even to pharaohs.",
    ],
  },
  {
    id: 4,
    name: "Mancala",
    slug: "mancala",
    origin: "Africa, 700 CE",
    description:
      'Mancala is a family of board games played around the world, particularly in Africa and Asia. The name "mancala" comes from the Arabic word "naqala" meaning "to move." It is a count-and-capture game played with small stones, seeds, or beans on a board with multiple cups or holes.',
    history:
      "Mancala games have been played for centuries throughout Africa, with evidence dating back to the 7th century. The game spread along trade routes to Asia, the Middle East, and eventually to the Americas through the slave trade. There are hundreds of variations of mancala games, each with its own rules and cultural significance. Our version is based on the most common variant, known as Kalah in the Western world.",
    howToPlay:
      "The game begins with a set number of seeds placed in each cup. On a turn, a player removes all seeds from one of their cups and sows them one by one into consecutive cups in a counter-clockwise direction. Depending on where the last seed lands, the player may capture seeds or get another turn. The goal is to capture more seeds than your opponent. The game combines mathematical thinking with strategic planning.",
    image: "/wooden-mancala-game.png",
    funFacts: [
      'Mancala is often called the "national game of Africa" due to its widespread popularity across the continent.',
      "Archaeological evidence of mancala boards carved into temple roofs in Egypt dates back to 1400 BCE.",
      "In some African cultures, mancala games were used to teach counting and strategic thinking to children.",
    ],
  },
  {
    id: 5,
    name: "Nine Men's Morris",
    slug: "nine-mens-morris",
    origin: "Roman Empire, 1st Century CE",
    description:
      'Nine Men\'s Morris is a strategy board game for two players that emerged from the Roman Empire. The game board consists of a grid with twenty-four intersections or points. Each player has nine pieces, or "men," which they try to form into "mills"—three of their own men lined up horizontally or vertically.',
    history:
      "Nine Men's Morris dates back to the Roman Empire, with boards found carved into the seats at the Acropolis in Athens and in Roman temples. The game was extremely popular in medieval England, and boards have been found carved into the cloister seats of many English cathedrals. It was mentioned in Shakespeare's \"A Midsummer Night's Dream\" and remained popular throughout Europe for centuries.",
    howToPlay:
      'The game has three phases: placing men on vacant points, moving men to adjacent points, and (when a player has only three men left) "flying" men to any vacant point. When a player forms a mill (three men in a row), they may remove one of their opponent\'s pieces. The goal is to reduce the opponent to fewer than three men or to leave them without a legal move. The game requires careful strategic thinking and planning several moves ahead.',
    image: "/nine.jpg",
    funFacts: [
      "Nine Men's Morris is so ancient that boards have been found carved into the roofing slabs of the temple at Kurna in Egypt, dating to around 1400 BCE.",
      "In medieval England, the game was so popular that boards were often carved into church cloister seats, despite gambling being frowned upon by the church.",
      'The game is also known as "Mills" or "Merrills" in different parts of Europe.',
    ],
  },
  {
    id: 6,
    name: "Shogi",
    slug: "shogi",
    origin: "Japan, 10th Century",
    description:
      "Shogi, also known as Japanese chess, is a two-player strategy board game in the same family as Western chess, xiangqi (Chinese chess), and janggi (Korean chess). It is the most popular chess variant in Japan.",
    history:
      "Shogi evolved from the Indian game of chaturanga, traveling through China and transforming into its current form in Japan during the 10th century. The unique feature of Shogi—the ability to reintroduce captured pieces into play—was introduced in the 16th century. This innovation dramatically changed the game's strategy and has made Shogi distinct from other chess variants. The game has been played continuously in Japan for over 1,000 years.",
    howToPlay:
      "Shogi is played on a 9×9 board with two players facing each other. Each player has 20 wedge-shaped pieces of different types, including the king, rook, bishop, gold general, silver general, knight, lance, and pawn. The most distinctive feature of Shogi is that captured pieces can be returned to the board as part of the capturing player's forces. The objective is to checkmate the opponent's king. Many pieces can be promoted when they reach the opponent's territory, gaining new movement capabilities.",
    image:
      "/shogi.jpg",
    funFacts: [
      "Shogi is the only chess variant where captured pieces can be returned to the board to fight for the capturing player.",
      'Professional Shogi players in Japan are called "Kishi" and can achieve celebrity status similar to professional sports players.',
      "The longest possible game of Shogi has been calculated to be 5,374 moves, far longer than Western chess.",
    ],
  },
]
