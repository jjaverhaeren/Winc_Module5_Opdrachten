const ratings = [
  { ID: 1, Student: "Evelyn", Opdracht: "SCRUM", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D1-1", Moeilijk: 3, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D2-1", Moeilijk: 1, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D2-2", Moeilijk: 1, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D2-3", Moeilijk: 2, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D2-4", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D2-5", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D3-1", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D3-2", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D3-4", Moeilijk: 4, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D3-5", Moeilijk: 4, Leuk: 4 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 5,
    Leuk: 5,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 5 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 3,
    Leuk: 4,
  },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Galgje W1D5",
    Moeilijk: 3,
    Leuk: 3,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D1-1", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D1-2", Moeilijk: 2, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D2-1", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D2-2", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D2-3", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D3-1", Moeilijk: 4, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D3-2", Moeilijk: 1, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D3-3", Moeilijk: 4, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D4-1", Moeilijk: 1, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D4-2", Moeilijk: 4, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W2D4-3", Moeilijk: 1, Leuk: 3 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D1-1", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D1-2", Moeilijk: 2, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D1-3", Moeilijk: 3, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D1-4", Moeilijk: 3, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D2-1", Moeilijk: 2, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D2-2", Moeilijk: 3, Leuk: 3 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D2-3", Moeilijk: 3, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D3-1", Moeilijk: 4, Leuk: 4 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D3-2", Moeilijk: 4, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D3-3", Moeilijk: 3, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D3-4", Moeilijk: 4, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D4-1", Moeilijk: 5, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W3D4-2", Moeilijk: 1, Leuk: 5 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 2,
    Leuk: 5,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D2-1", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D2-2", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D2-3", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D2-4", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D3-1", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D3-2", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D3-3", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D3-4", Moeilijk: 1, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W4D3-5", Moeilijk: 1, Leuk: 5 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 1,
    Leuk: 5,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 4 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 4,
    Leuk: 3,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W6D1-1", Moeilijk: 5, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W6D2-1", Moeilijk: 4, Leuk: 3 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 5,
    Leuk: 5,
  },
  { ID: 2, Student: "Aranka", Opdracht: "SCRUM", Moeilijk: 1, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D1-1", Moeilijk: 4, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D2-1", Moeilijk: 3, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D2-2", Moeilijk: 3, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D2-3", Moeilijk: 4, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D2-4", Moeilijk: 2, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D2-5", Moeilijk: 4, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D3-1", Moeilijk: 3, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D3-2", Moeilijk: 2, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D3-4", Moeilijk: 1, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W1D3-5", Moeilijk: 4, Leuk: 1 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W1D4-1", Moeilijk: 3, Leuk: 2 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 4,
    Leuk: 3,
  },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Galgje W1D5",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W2D1-1", Moeilijk: 2, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D1-2", Moeilijk: 4, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D2-1", Moeilijk: 3, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D2-2", Moeilijk: 3, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D2-3", Moeilijk: 1, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D3-1", Moeilijk: 4, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D3-2", Moeilijk: 4, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D3-3", Moeilijk: 1, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D4-1", Moeilijk: 1, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D4-2", Moeilijk: 2, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W2D4-3", Moeilijk: 2, Leuk: 3 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W3D1-1", Moeilijk: 4, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D1-2", Moeilijk: 3, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D1-3", Moeilijk: 1, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D1-4", Moeilijk: 1, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D2-1", Moeilijk: 1, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D2-2", Moeilijk: 2, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D2-3", Moeilijk: 2, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D3-1", Moeilijk: 2, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D3-2", Moeilijk: 4, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D3-3", Moeilijk: 3, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D3-4", Moeilijk: 1, Leuk: 3 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D4-1", Moeilijk: 1, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W3D4-2", Moeilijk: 3, Leuk: 2 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 1,
    Leuk: 1,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W4D2-1", Moeilijk: 2, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D2-2", Moeilijk: 3, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D2-3", Moeilijk: 2, Leuk: 2 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D2-4", Moeilijk: 3, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D3-1", Moeilijk: 2, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D3-2", Moeilijk: 4, Leuk: 4 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D3-3", Moeilijk: 3, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D3-4", Moeilijk: 3, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W4D3-5", Moeilijk: 4, Leuk: 3 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 4,
    Leuk: 4,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 3,
    Leuk: 2,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W6D2-1", Moeilijk: 2, Leuk: 2 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 3, Student: "Floris", Opdracht: "SCRUM", Moeilijk: 2, Leuk: 1 },
  { ID: 3, Student: "Floris", Opdracht: "W1D1-1", Moeilijk: 4, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W1D2-1", Moeilijk: 1, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W1D2-2", Moeilijk: 1, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W1D2-3", Moeilijk: 1, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W1D2-4", Moeilijk: 3, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W1D2-5", Moeilijk: 1, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W1D3-1", Moeilijk: 2, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W1D3-2", Moeilijk: 4, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W1D3-4", Moeilijk: 4, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W1D3-5", Moeilijk: 2, Leuk: 4 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 3, Student: "Floris", Opdracht: "W1D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 4,
    Leuk: 3,
  },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Galgje W1D5",
    Moeilijk: 4,
    Leuk: 4,
  },
  { ID: 3, Student: "Floris", Opdracht: "W2D1-1", Moeilijk: 2, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W2D1-2", Moeilijk: 4, Leuk: 1 },
  { ID: 3, Student: "Floris", Opdracht: "W2D2-1", Moeilijk: 4, Leuk: 1 },
  { ID: 3, Student: "Floris", Opdracht: "W2D2-2", Moeilijk: 2, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W2D2-3", Moeilijk: 4, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W2D3-1", Moeilijk: 1, Leuk: 1 },
  { ID: 3, Student: "Floris", Opdracht: "W2D3-2", Moeilijk: 1, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W2D3-3", Moeilijk: 3, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W2D4-1", Moeilijk: 4, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W2D4-2", Moeilijk: 3, Leuk: 1 },
  { ID: 3, Student: "Floris", Opdracht: "W2D4-3", Moeilijk: 4, Leuk: 1 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 3, Student: "Floris", Opdracht: "W3D1-1", Moeilijk: 4, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W3D1-2", Moeilijk: 2, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W3D1-3", Moeilijk: 2, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W3D1-4", Moeilijk: 3, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W3D2-1", Moeilijk: 3, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W3D2-2", Moeilijk: 2, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W3D2-3", Moeilijk: 3, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W3D3-1", Moeilijk: 4, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W3D3-2", Moeilijk: 2, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W3D3-3", Moeilijk: 2, Leuk: 1 },
  { ID: 3, Student: "Floris", Opdracht: "W3D3-4", Moeilijk: 3, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W3D4-1", Moeilijk: 1, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W3D4-2", Moeilijk: 2, Leuk: 2 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 3, Student: "Floris", Opdracht: "W4D2-1", Moeilijk: 1, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W4D2-2", Moeilijk: 2, Leuk: 3 },
  { ID: 3, Student: "Floris", Opdracht: "W4D2-3", Moeilijk: 2, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W4D2-4", Moeilijk: 1, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W4D3-1", Moeilijk: 1, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W4D3-2", Moeilijk: 4, Leuk: 4 },
  { ID: 3, Student: "Floris", Opdracht: "W4D3-3", Moeilijk: 3, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W4D3-4", Moeilijk: 2, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W4D3-5", Moeilijk: 4, Leuk: 1 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 3, Student: "Floris", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 3, Student: "Floris", Opdracht: "W6D1-1", Moeilijk: 3, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "SCRUM", Moeilijk: 1, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W1D1-1", Moeilijk: 1, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W1D2-1", Moeilijk: 2, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W1D2-2", Moeilijk: 2, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W1D2-3", Moeilijk: 1, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W1D2-4", Moeilijk: 1, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W1D2-5", Moeilijk: 3, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W1D3-1", Moeilijk: 1, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W1D3-2", Moeilijk: 4, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W1D3-4", Moeilijk: 3, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W1D3-5", Moeilijk: 4, Leuk: 2 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W1D4-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 1,
    Leuk: 3,
  },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Galgje W1D5",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 4, Student: "Hector", Opdracht: "W2D1-1", Moeilijk: 4, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W2D1-2", Moeilijk: 3, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W2D2-1", Moeilijk: 4, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W2D2-2", Moeilijk: 1, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W2D2-3", Moeilijk: 3, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W2D3-1", Moeilijk: 3, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W2D3-2", Moeilijk: 4, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W2D3-3", Moeilijk: 4, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W2D4-1", Moeilijk: 2, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W2D4-2", Moeilijk: 4, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W2D4-3", Moeilijk: 3, Leuk: 2 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W3D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W3D1-2", Moeilijk: 1, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W3D1-3", Moeilijk: 3, Leuk: 2 },
  { ID: 4, Student: "Hector", Opdracht: "W3D1-4", Moeilijk: 4, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W3D2-1", Moeilijk: 1, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W3D2-2", Moeilijk: 4, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W3D2-3", Moeilijk: 2, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W3D3-1", Moeilijk: 4, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W3D3-2", Moeilijk: 3, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W3D3-3", Moeilijk: 2, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W3D3-4", Moeilijk: 4, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W3D4-1", Moeilijk: 3, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W3D4-2", Moeilijk: 1, Leuk: 4 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 4, Student: "Hector", Opdracht: "W4D2-1", Moeilijk: 1, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W4D2-2", Moeilijk: 2, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W4D2-3", Moeilijk: 3, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W4D2-4", Moeilijk: 1, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W4D3-1", Moeilijk: 3, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W4D3-2", Moeilijk: 1, Leuk: 4 },
  { ID: 4, Student: "Hector", Opdracht: "W4D3-3", Moeilijk: 3, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W4D3-4", Moeilijk: 1, Leuk: 3 },
  { ID: 4, Student: "Hector", Opdracht: "W4D3-5", Moeilijk: 1, Leuk: 2 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 4 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W6D2-1", Moeilijk: 4, Leuk: 2 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 5, Student: "Martina", Opdracht: "SCRUM", Moeilijk: 1, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W1D1-1", Moeilijk: 4, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W1D2-1", Moeilijk: 3, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W1D2-2", Moeilijk: 2, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W1D2-3", Moeilijk: 2, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W1D2-4", Moeilijk: 4, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W1D2-5", Moeilijk: 3, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W1D3-1", Moeilijk: 3, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W1D3-2", Moeilijk: 2, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W1D3-4", Moeilijk: 3, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W1D3-5", Moeilijk: 1, Leuk: 1 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 5, Student: "Martina", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 2 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 1,
    Leuk: 3,
  },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Galgje W1D5",
    Moeilijk: 1,
    Leuk: 4,
  },
  { ID: 5, Student: "Martina", Opdracht: "W2D1-1", Moeilijk: 1, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W2D1-2", Moeilijk: 4, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W2D2-1", Moeilijk: 4, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W2D2-2", Moeilijk: 3, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W2D2-3", Moeilijk: 3, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W2D3-1", Moeilijk: 4, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W2D3-2", Moeilijk: 3, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W2D3-3", Moeilijk: 3, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W2D4-1", Moeilijk: 1, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W2D4-2", Moeilijk: 3, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W2D4-3", Moeilijk: 3, Leuk: 4 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 5, Student: "Martina", Opdracht: "W3D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W3D1-2", Moeilijk: 3, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W3D1-3", Moeilijk: 3, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W3D1-4", Moeilijk: 3, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W3D2-1", Moeilijk: 1, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W3D2-2", Moeilijk: 2, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W3D2-3", Moeilijk: 3, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W3D3-1", Moeilijk: 1, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W3D3-2", Moeilijk: 4, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W3D3-3", Moeilijk: 3, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W3D3-4", Moeilijk: 2, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W3D4-1", Moeilijk: 4, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W3D4-2", Moeilijk: 3, Leuk: 1 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 5, Student: "Martina", Opdracht: "W4D2-1", Moeilijk: 3, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W4D2-2", Moeilijk: 1, Leuk: 2 },
  { ID: 5, Student: "Martina", Opdracht: "W4D2-3", Moeilijk: 3, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W4D2-4", Moeilijk: 4, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W4D3-1", Moeilijk: 2, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W4D3-2", Moeilijk: 1, Leuk: 3 },
  { ID: 5, Student: "Martina", Opdracht: "W4D3-3", Moeilijk: 2, Leuk: 4 },
  { ID: 5, Student: "Martina", Opdracht: "W4D3-4", Moeilijk: 4, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W4D3-5", Moeilijk: 3, Leuk: 2 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 5, Student: "Martina", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 1,
    Leuk: 1,
  },
  { ID: 5, Student: "Martina", Opdracht: "W6D1-1", Moeilijk: 2, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 1,
    Leuk: 4,
  },
  { ID: 6, Student: "Maurits", Opdracht: "SCRUM", Moeilijk: 3, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D1-1", Moeilijk: 4, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D2-1", Moeilijk: 2, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D2-2", Moeilijk: 1, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D2-3", Moeilijk: 2, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D2-4", Moeilijk: 3, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D2-5", Moeilijk: 2, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D3-1", Moeilijk: 2, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D3-2", Moeilijk: 2, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D3-4", Moeilijk: 2, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W1D3-5", Moeilijk: 1, Leuk: 3 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 1,
    Leuk: 1,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W1D4-1", Moeilijk: 3, Leuk: 4 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 4,
    Leuk: 1,
  },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Galgje W1D5",
    Moeilijk: 3,
    Leuk: 2,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W2D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D1-2", Moeilijk: 2, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D2-1", Moeilijk: 1, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D2-2", Moeilijk: 4, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D2-3", Moeilijk: 2, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D3-1", Moeilijk: 2, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D3-2", Moeilijk: 3, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D3-3", Moeilijk: 2, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D4-1", Moeilijk: 1, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D4-2", Moeilijk: 3, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W2D4-3", Moeilijk: 3, Leuk: 3 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W3D1-1", Moeilijk: 4, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D1-2", Moeilijk: 1, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D1-3", Moeilijk: 1, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D1-4", Moeilijk: 1, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D2-1", Moeilijk: 1, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D2-2", Moeilijk: 1, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D2-3", Moeilijk: 4, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D3-1", Moeilijk: 1, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D3-2", Moeilijk: 2, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D3-3", Moeilijk: 1, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D3-4", Moeilijk: 4, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D4-1", Moeilijk: 4, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W3D4-2", Moeilijk: 1, Leuk: 3 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W4D2-1", Moeilijk: 3, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D2-2", Moeilijk: 4, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D2-3", Moeilijk: 4, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D2-4", Moeilijk: 2, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D3-1", Moeilijk: 3, Leuk: 1 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D3-2", Moeilijk: 3, Leuk: 2 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D3-3", Moeilijk: 3, Leuk: 4 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D3-4", Moeilijk: 1, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W4D3-5", Moeilijk: 2, Leuk: 1 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 3,
    Leuk: 3,
  },
  { ID: 7, Student: "Rahima", Opdracht: "SCRUM", Moeilijk: 2, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D1-1", Moeilijk: 3, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D2-1", Moeilijk: 2, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D2-2", Moeilijk: 1, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D2-3", Moeilijk: 1, Leuk: 3 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D2-4", Moeilijk: 1, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D2-5", Moeilijk: 1, Leuk: 3 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D3-1", Moeilijk: 1, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D3-2", Moeilijk: 2, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D3-4", Moeilijk: 1, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W1D3-5", Moeilijk: 2, Leuk: 2 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 3 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 2,
    Leuk: 4,
  },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Galgje W1D5",
    Moeilijk: 3,
    Leuk: 3,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W2D1-1", Moeilijk: 2, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D1-2", Moeilijk: 3, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D2-1", Moeilijk: 1, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D2-2", Moeilijk: 1, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D2-3", Moeilijk: 4, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D3-1", Moeilijk: 1, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D3-2", Moeilijk: 1, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D3-3", Moeilijk: 4, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D4-1", Moeilijk: 4, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D4-2", Moeilijk: 4, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W2D4-3", Moeilijk: 2, Leuk: 3 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W3D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D1-2", Moeilijk: 1, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D1-3", Moeilijk: 2, Leuk: 3 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D1-4", Moeilijk: 2, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D2-1", Moeilijk: 3, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D2-2", Moeilijk: 1, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D2-3", Moeilijk: 2, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D3-1", Moeilijk: 3, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D3-2", Moeilijk: 4, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D3-3", Moeilijk: 1, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D3-4", Moeilijk: 2, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D4-1", Moeilijk: 1, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W3D4-2", Moeilijk: 3, Leuk: 3 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W4D2-1", Moeilijk: 2, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D2-2", Moeilijk: 4, Leuk: 3 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D2-3", Moeilijk: 3, Leuk: 3 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D2-4", Moeilijk: 4, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D3-1", Moeilijk: 2, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D3-2", Moeilijk: 1, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D3-3", Moeilijk: 2, Leuk: 1 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D3-4", Moeilijk: 2, Leuk: 2 },
  { ID: 7, Student: "Rahima", Opdracht: "W4D3-5", Moeilijk: 3, Leuk: 2 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 1,
    Leuk: 2,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 3 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W6D1-1", Moeilijk: 4, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 8, Student: "Sandra", Opdracht: "SCRUM", Moeilijk: 4, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D1-1", Moeilijk: 2, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D2-1", Moeilijk: 3, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D2-2", Moeilijk: 3, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D2-3", Moeilijk: 3, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D2-4", Moeilijk: 3, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D2-5", Moeilijk: 4, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D3-1", Moeilijk: 1, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D3-2", Moeilijk: 1, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D3-4", Moeilijk: 3, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W1D3-5", Moeilijk: 4, Leuk: 3 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W1D4-1", Moeilijk: 3, Leuk: 2 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 1,
    Leuk: 3,
  },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Galgje W1D5",
    Moeilijk: 3,
    Leuk: 3,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W2D1-1", Moeilijk: 4, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D1-2", Moeilijk: 4, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D2-1", Moeilijk: 3, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D2-2", Moeilijk: 2, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D2-3", Moeilijk: 4, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D3-1", Moeilijk: 1, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D3-2", Moeilijk: 3, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D3-3", Moeilijk: 2, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D4-1", Moeilijk: 1, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D4-2", Moeilijk: 2, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W2D4-3", Moeilijk: 2, Leuk: 2 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W3D1-1", Moeilijk: 3, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D1-2", Moeilijk: 3, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D1-3", Moeilijk: 2, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D1-4", Moeilijk: 2, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D2-1", Moeilijk: 2, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D2-2", Moeilijk: 2, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D2-3", Moeilijk: 1, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D3-1", Moeilijk: 1, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D3-2", Moeilijk: 2, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D3-3", Moeilijk: 4, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D3-4", Moeilijk: 3, Leuk: 2 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D4-1", Moeilijk: 2, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W3D4-2", Moeilijk: 1, Leuk: 1 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 1,
    Leuk: 2,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W4D2-1", Moeilijk: 3, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D2-2", Moeilijk: 1, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D2-3", Moeilijk: 3, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D2-4", Moeilijk: 1, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D3-1", Moeilijk: 3, Leuk: 1 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D3-2", Moeilijk: 1, Leuk: 3 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D3-3", Moeilijk: 2, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D3-4", Moeilijk: 1, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W4D3-5", Moeilijk: 1, Leuk: 3 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W6D2-1", Moeilijk: 2, Leuk: 3 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 9, Student: "Wietske", Opdracht: "SCRUM", Moeilijk: 1, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D1-1", Moeilijk: 4, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D2-1", Moeilijk: 1, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D2-2", Moeilijk: 1, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D2-3", Moeilijk: 2, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D2-4", Moeilijk: 2, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D2-5", Moeilijk: 3, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D3-1", Moeilijk: 1, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D3-2", Moeilijk: 1, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D3-4", Moeilijk: 2, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W1D3-5", Moeilijk: 3, Leuk: 4 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W1D4-1", Moeilijk: 2, Leuk: 4 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 2,
    Leuk: 3,
  },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Galgje W1D5",
    Moeilijk: 3,
    Leuk: 3,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W2D1-1", Moeilijk: 3, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D1-2", Moeilijk: 4, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D2-1", Moeilijk: 2, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D2-2", Moeilijk: 2, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D2-3", Moeilijk: 3, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D3-1", Moeilijk: 2, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D3-2", Moeilijk: 1, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D3-3", Moeilijk: 2, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D4-1", Moeilijk: 1, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D4-2", Moeilijk: 2, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W2D4-3", Moeilijk: 4, Leuk: 3 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W3D1-1", Moeilijk: 1, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D1-2", Moeilijk: 4, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D1-3", Moeilijk: 4, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D1-4", Moeilijk: 1, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D2-1", Moeilijk: 3, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D2-2", Moeilijk: 1, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D2-3", Moeilijk: 2, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D3-1", Moeilijk: 1, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D3-2", Moeilijk: 3, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D3-3", Moeilijk: 1, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D3-4", Moeilijk: 3, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D4-1", Moeilijk: 3, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W3D4-2", Moeilijk: 4, Leuk: 2 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W4D2-1", Moeilijk: 3, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D2-2", Moeilijk: 2, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D2-3", Moeilijk: 1, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D2-4", Moeilijk: 4, Leuk: 3 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D3-1", Moeilijk: 2, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D3-2", Moeilijk: 1, Leuk: 2 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D3-3", Moeilijk: 1, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D3-4", Moeilijk: 3, Leuk: 4 },
  { ID: 9, Student: "Wietske", Opdracht: "W4D3-5", Moeilijk: 4, Leuk: 3 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 1 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W6D2-1", Moeilijk: 2, Leuk: 1 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 1,
    Leuk: 2,
  },
  { ID: 10, Student: "Storm", Opdracht: "SCRUM", Moeilijk: 1, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W1D1-1", Moeilijk: 2, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W1D2-1", Moeilijk: 2, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W1D2-2", Moeilijk: 1, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W1D2-3", Moeilijk: 1, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W1D2-4", Moeilijk: 4, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W1D2-5", Moeilijk: 3, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W1D3-1", Moeilijk: 2, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W1D3-2", Moeilijk: 1, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W1D3-4", Moeilijk: 1, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W1D3-5", Moeilijk: 2, Leuk: 2 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Guess-the-number W1D3-6 ",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 10, Student: "Storm", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 2 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Kleurentoggle W1D4 ",
    Moeilijk: 3,
    Leuk: 2,
  },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Galgje W1D5",
    Moeilijk: 4,
    Leuk: 4,
  },
  { ID: 10, Student: "Storm", Opdracht: "W2D1-1", Moeilijk: 2, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W2D1-2", Moeilijk: 3, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W2D2-1", Moeilijk: 4, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W2D2-2", Moeilijk: 2, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W2D2-3", Moeilijk: 1, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W2D3-1", Moeilijk: 2, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W2D3-2", Moeilijk: 3, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W2D3-3", Moeilijk: 3, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W2D4-1", Moeilijk: 3, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W2D4-2", Moeilijk: 4, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W2D4-3", Moeilijk: 2, Leuk: 1 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Filmzoeker W2D5",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 10, Student: "Storm", Opdracht: "W3D1-1", Moeilijk: 2, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W3D1-2", Moeilijk: 2, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W3D1-3", Moeilijk: 1, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W3D1-4", Moeilijk: 2, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W3D2-1", Moeilijk: 1, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W3D2-2", Moeilijk: 3, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W3D2-3", Moeilijk: 3, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W3D3-1", Moeilijk: 3, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W3D3-2", Moeilijk: 1, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W3D3-3", Moeilijk: 3, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W3D3-4", Moeilijk: 3, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W3D4-1", Moeilijk: 2, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W3D4-2", Moeilijk: 3, Leuk: 4 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Todo-List W3D5",
    Moeilijk: 3,
    Leuk: 2,
  },
  { ID: 10, Student: "Storm", Opdracht: "W4D2-1", Moeilijk: 2, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W4D2-2", Moeilijk: 3, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W4D2-3", Moeilijk: 2, Leuk: 2 },
  { ID: 10, Student: "Storm", Opdracht: "W4D2-4", Moeilijk: 3, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W4D3-1", Moeilijk: 3, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W4D3-2", Moeilijk: 2, Leuk: 3 },
  { ID: 10, Student: "Storm", Opdracht: "W4D3-3", Moeilijk: 1, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W4D3-4", Moeilijk: 3, Leuk: 1 },
  { ID: 10, Student: "Storm", Opdracht: "W4D3-5", Moeilijk: 2, Leuk: 3 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Next-Level CSS W4D3",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 10, Student: "Storm", Opdracht: "W5D4-1", Moeilijk: 2, Leuk: 2 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Lil_Playlist W5D5",
    Moeilijk: 1,
    Leuk: 2,
  },
  { ID: 10, Student: "Storm", Opdracht: "W6D1-1", Moeilijk: 4, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "Eindopdracht W6D2",
    Moeilijk: 3,
    Leuk: 3,
  },
];

export const students = [...ratings];

export const distinctStudentNames = [
  ...new Set(students.map(student => student.Student)),
];

export const distinctOpdrachtNames = [
  ...new Set(students.map(student => student.Opdracht)),
];

const randomPhone = () => {
  const lasteight = Math.round(Math.random() * (99999999 - 10000000));
  return "06-" + lasteight;
};

const randomAge = () => {
  return Math.round(Math.random() * (55 - 18) + 18);
};

//
const info = distinctStudentNames.map(name => ({ name }));
let id = 1;
info.forEach(student => {
  student.id = id++;
  student.phone = randomPhone();
  student.email = `${student.name}@gmail.com`;
  student.age = randomAge();
});

info.forEach(student => {
  switch (student.name) {
    case "Evelyn":
      student.studentImgUrl = "/img/Evelyn.jpg";
      break;
    case "Aranka":
      student.studentImgUrl = "/img/Aranka.jpg";
      break;
    case "Floris":
      student.studentImgUrl = "/img/Floris.jpg";
      break;
    case "Hector":
      student.studentImgUrl = "/img/Hector.jpg";
      break;
    case "Martina":
      student.studentImgUrl = "/img/Martina.jpg";
      break;
    case "Maurits":
      student.studentImgUrl = "/img/Maurits.jpg";
      break;
    case "Rahima":
      student.studentImgUrl = "/img/Rahima.jpg";
      break;
    case "Sandra":
      student.studentImgUrl = "/img/Sandra.jpg";
      break;
    case "Storm":
      student.studentImgUrl = "/img/Storm.jpg";
      break;
    case "Wietske":
      student.studentImgUrl = "/img/Wietske.jpg";
      break;
    default:
      student.studentImgUrl = "/img/winclogo.jpg";
  }
});

export const studentInfo = info;
//

export const getAverage = array => {
  const reducer = (total, current) => total + current;
  const sum = array.reduce(reducer);
  return sum / array.length;
};

export const getAveragesPerOpdracht = filter => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0,
    moeilijkArrayOfStudent = [],
    leukArrayOfStudent = [],
    moeilijkArrayOfStudents = [],
    leukArrayOfStudents = [];

  students.forEach(student => {
    if (student.Opdracht === filter) {
      sumMoeilijk += student.Moeilijk;
      sumLeuk += student.Leuk;
      numberOfTests++;
      const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
      moeilijkArrayOfStudent.push(averageMoeilijk);
      const averageLeuk = Math.round(sumLeuk / numberOfTests);
      leukArrayOfStudent.push(averageLeuk);
    }
  });

  const averageMoeilijkOfStudent = getAverage(moeilijkArrayOfStudent);
  moeilijkArrayOfStudents.push(averageMoeilijkOfStudent);
  const averageLeukOfStudent = getAverage(leukArrayOfStudent);
  leukArrayOfStudents.push(averageLeukOfStudent);
  return [moeilijkArrayOfStudents, leukArrayOfStudents];
};

export const getDataSet = () => {
  let dataSet1 = [],
    dataSet2 = [];
  distinctOpdrachtNames.forEach(name => {
    const [
      moeilijkArrayOfStudents,
      leukArrayOfStudents,
    ] = getAveragesPerOpdracht(name);
    moeilijkArrayOfStudents.forEach(data => {
      dataSet1.push(data);
    });
    leukArrayOfStudents.forEach(data => {
      dataSet2.push(data);
    });
  });
  return [dataSet1, dataSet2];
};

export const getAveragesPerStudent = studentName => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0;
  ratings.forEach(rating => {
    if (rating.Student === studentName) {
      sumMoeilijk += rating.Moeilijk;
      sumLeuk += rating.Leuk;
      numberOfTests++;
    }
  });
  const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
  const averageLeuk = Math.round(sumLeuk / numberOfTests);
  let dataSet = [];
  dataSet.push(averageMoeilijk);
  dataSet.push(averageLeuk);
  return [studentName, dataSet];
};

export const getAveragesPerStudentPerOpdracht = (studentName, opdracht) => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0;
  students.forEach(student => {
    if (student.Student === studentName && student.Opdracht === opdracht) {
      sumMoeilijk += student.Moeilijk;
      sumLeuk += student.Leuk;
      numberOfTests++;
    }
  });

  const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
  const averageLeuk = Math.round(sumLeuk / numberOfTests);
  console.log(`${studentName} gemiddelde Moeilijk: ${averageMoeilijk}`);
  console.log(`${studentName} gemiddelde Leuk: ${averageLeuk}`);
  let dataSet = [];
  dataSet.push(averageMoeilijk);
  dataSet.push(averageLeuk);
  return dataSet;
};

export const getAveragesPerStudentAllOpdrachten = (studentSet, studentName) => {
  let moeilijkArray = [], leukArray = [];
  studentSet.forEach(student => {
    if (student.Student === studentName) {
     moeilijkArray.push(student.Moeilijk);
     leukArray.push(student.Leuk)
    }
  });
  return [moeilijkArray, leukArray]
}

const getStudentSet = (studentName) => {
  let studentSet = [];
  students.forEach(student => {
    if(student.Student === studentName) {
      studentSet.push(student)
    }
  })
  // console.log(studentSet);
  return studentSet;
}

export const sortByMoeilijk = (studentName) => {
  let studentSet = getStudentSet(studentName);
  studentSet.sort((a,b) => a.Moeilijk > b.Moeilijk ? 1 : b.Moeilijk > a.Moeilijk ? -1 :0);
  // console.log(studentSet);
  return studentSet;
}

export const sortByLeuk = (studentName) => {
  let studentSet = getStudentSet(studentName);
  studentSet.sort((a,b) => a.Leuk > b.Leuk ? 1 : b.Leuk > a.Leuk ? -1 :0);
  // console.log(studentSet);
  return studentSet;
}