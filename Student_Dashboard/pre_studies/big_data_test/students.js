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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 5,
    Leuk: 5,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 5 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 3,
    Leuk: 4,
  },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 1,
    Leuk: 5,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 4 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 4,
    Leuk: 3,
  },
  { ID: 1, Student: "Evelyn", Opdracht: "W6D1-1", Moeilijk: 5, Leuk: 5 },
  { ID: 1, Student: "Evelyn", Opdracht: "W6D2-1", Moeilijk: 4, Leuk: 3 },
  {
    ID: 1,
    Student: "Evelyn",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W1D4-1", Moeilijk: 3, Leuk: 2 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 4,
    Leuk: 3,
  },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 4,
    Leuk: 4,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 3,
    Leuk: 2,
  },
  { ID: 2, Student: "Aranka", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 2, Student: "Aranka", Opdracht: "W6D2-1", Moeilijk: 2, Leuk: 2 },
  {
    ID: 2,
    Student: "Aranka",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 3, Student: "Floris", Opdracht: "W1D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 4,
    Leuk: 3,
  },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 3, Student: "Floris", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 3, Student: "Floris", Opdracht: "W6D1-1", Moeilijk: 3, Leuk: 2 },
  { ID: 3, Student: "Floris", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 3,
    Student: "Floris",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W1D4-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 1,
    Leuk: 3,
  },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 4 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 4, Student: "Hector", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 4, Student: "Hector", Opdracht: "W6D2-1", Moeilijk: 4, Leuk: 2 },
  {
    ID: 4,
    Student: "Hector",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 5, Student: "Martina", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 2 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 1,
    Leuk: 3,
  },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 5, Student: "Martina", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 1,
    Leuk: 1,
  },
  { ID: 5, Student: "Martina", Opdracht: "W6D1-1", Moeilijk: 2, Leuk: 1 },
  { ID: 5, Student: "Martina", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 5,
    Student: "Martina",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 1,
    Leuk: 1,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W1D4-1", Moeilijk: 3, Leuk: 4 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 4,
    Leuk: 1,
  },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 3 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 6, Student: "Maurits", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 3 },
  { ID: 6, Student: "Maurits", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 6,
    Student: "Maurits",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 3,
    Leuk: 1,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 3 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 2,
    Leuk: 4,
  },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 1,
    Leuk: 2,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 3 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 2,
    Leuk: 3,
  },
  { ID: 7, Student: "Rahima", Opdracht: "W6D1-1", Moeilijk: 4, Leuk: 4 },
  { ID: 7, Student: "Rahima", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 4 },
  {
    ID: 7,
    Student: "Rahima",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W1D4-1", Moeilijk: 3, Leuk: 2 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 1,
    Leuk: 3,
  },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W5D4-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 2,
    Leuk: 2,
  },
  { ID: 8, Student: "Sandra", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 4 },
  { ID: 8, Student: "Sandra", Opdracht: "W6D2-1", Moeilijk: 2, Leuk: 3 },
  {
    ID: 8,
    Student: "Sandra",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 2,
    Leuk: 4,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W1D4-1", Moeilijk: 2, Leuk: 4 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 2,
    Leuk: 3,
  },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W5D4-1", Moeilijk: 3, Leuk: 1 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 4,
    Leuk: 2,
  },
  { ID: 9, Student: "Wietske", Opdracht: "W6D1-1", Moeilijk: 1, Leuk: 1 },
  { ID: 9, Student: "Wietske", Opdracht: "W6D2-1", Moeilijk: 2, Leuk: 1 },
  {
    ID: 9,
    Student: "Wietske",
    Opdracht: "W6D2 - Project - Eindopdracht",
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
    Opdracht: "W1D3 - Project - Guess-the-number",
    Moeilijk: 3,
    Leuk: 4,
  },
  { ID: 10, Student: "Storm", Opdracht: "W1D4-1", Moeilijk: 4, Leuk: 2 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "W1D4 - Project - Kleurentoggle",
    Moeilijk: 3,
    Leuk: 2,
  },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "W1D5 - Project - Galgje",
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
    Opdracht: "W2D5 - Project - Filmzoeker",
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
    Opdracht: "W3D5 - Project - Todo-List",
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
    Opdracht: "W4D3 - Project - Next-Level CSS",
    Moeilijk: 4,
    Leuk: 1,
  },
  { ID: 10, Student: "Storm", Opdracht: "W5D4-1", Moeilijk: 2, Leuk: 2 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "W5D5 - Project - Lil_Playlist",
    Moeilijk: 1,
    Leuk: 2,
  },
  { ID: 10, Student: "Storm", Opdracht: "W6D1-1", Moeilijk: 4, Leuk: 4 },
  { ID: 10, Student: "Storm", Opdracht: "W6D2-1", Moeilijk: 1, Leuk: 1 },
  {
    ID: 10,
    Student: "Storm",
    Opdracht: "W6D2 - Project - Eindopdracht",
    Moeilijk: 3,
    Leuk: 3,
  },
];

const students = [...ratings];

const distinctOpdrachtNames = [
  ...new Set(ratings.map(rating => rating.Opdracht)),
];

const distinctStudentNames = [
  ...new Set(ratings.map(rating => rating.Student)),
];

const randomPhone = () => {
  const lasteight = Math.round(Math.random() * (99999999 - 10000000));
  return "06-" + lasteight;
};

const randomAge = () => {
  return Math.round(Math.random() * (55 - 18) + 18);
};

const info = distinctStudentNames.map(name => ({ name }));

let id = 1;
info.forEach(student => {
  student.id = id++;
  student.phone = randomPhone();
  student.email = `${student.name}@gmail.com`;
  student.age = randomAge();
});

// console.log(students);
const averageOfAbsolutelyEverythingMoeilijkEnLeuk = () => {
let sumMoeilijk = 0,
sumLeuk = 0;
  students.forEach(student => {
    sumMoeilijk += student.Moeilijk;
    sumLeuk += student.Leuk;
  })
  let averageMoeilijk = Math.round((sumMoeilijk / students.length)*10)/10
  let averageLeuk = Math.round((sumLeuk / students.length)*10)/10
  // console.log(`average Moeilijk: ${averageMoeilijk}, average Leuk: ${averageLeuk}`)
  return [[averageMoeilijk, averageLeuk]]
}
const [averageData] = averageOfAbsolutelyEverythingMoeilijkEnLeuk();
console.log(averageData)
// console.log(averageLeuk)
// console.log(info)
// console.log(distincStudenttNames);
// console.log(distinctOpdrachtNames);
// console.log(distinctStudents);

//   props.appointments.sort((a, b) =>
//   a.time > b.time ? 1 : b.time > a.time ? -1 : 0
// );

const sortByName = () => {
  info.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  console.log(info);
};

// sortByName();

const getStudentSet = studentName => {
  let studentSet = [];
  students.forEach(student => {
    if (student.Student === studentName) {
      studentSet.push(student);
    }
  });
  // console.log(studentSet);
  return studentSet;
};

const rahimaSet = getStudentSet("Rahima");
// const sortByMoeilijk = studentName => {
//   let studentSet = getStudentSet(studentName);
//   studentSet.sort((a, b) =>
//     a.Moeilijk < b.Moeilijk ? 1 : b.Moeilijk < a.Moeilijk ? -1 : 0
//   );
//   const OpdrachtNames = [...new Set(studentSet.map(item => item.Opdracht))];
//   // console.log(studentSet);
//   // console.log(OpdrachtNames);
//   return [OpdrachtNames, studentSet];
// };

// const sortByLeuk = studentName => {
//   let studentSet = getStudentSet(studentName);
//   studentSet.sort((a, b) => (a.Leuk < b.Leuk ? 1 : b.Leuk < a.Leuk ? -1 : 0));
//   const OpdrachtNames = [studentSet.map(item => item.Opdracht)];
//   console.log(studentSet);
//   console.log(OpdrachtNames);
//   return [OpdrachtNames, studentSet];
// };

// const sortByLeuk = studentName => {
//   let studentSet = getStudentSet(studentName);
//   studentSet.sort((a, b) => (a.Leuk < b.Leuk ? 1 : b.Leuk < a.Leuk ? -1 : 0));
//   const OpdrachtNames = [studentSet.map(item => item.Opdracht)];
//   console.log(studentSet);
//   console.log(OpdrachtNames);
//   return [OpdrachtNames, studentSet];
// };

// sortByMoeilijk("Aranka");
// const studentSet = sortByLeuk("Rahima");
// console.log(studentSet);


// const average = ratings.forEach(rating => {
//   if (rating.Opdracht === "W1D1-1") {
//     sumMoeilijk += rating.Moeilijk;
//     sumLeuk += rating.Leuk;
//   }
// });

// const getAveragesPerStudent = () => {
//   for (let i = 0; i < distincStudenttNames.length; i++) {
//     let sumMoeilijk = 0,
//       sumLeuk = 0,
//       numberOfTests = 0;
//     ratings.forEach(rating => {
//       if (rating.Student === distincStudenttNames[i]) {
//         sumMoeilijk += rating.Moeilijk;
//         sumLeuk += rating.Leuk;
//         numberOfTests++;
//       }
//     });
//     // console.log(`${distincStudenttNames[i]}: ${sumMoeilijk}`);
//     // console.log(`${distincStudenttNames[i]}: ${sumLeuk}`);
//     // console.log(`${distincStudenttNames[i]}: ${numberOfTests}`);
//     // console.log(
//     //   `${distincStudenttNames[i]} gemiddelde Moeilijk: ${Math.round(
//     //     sumMoeilijk / numberOfTests
//     //   )}`
//     // );
//     // console.log(
//     //   `${distincStudenttNames[i]} gemiddelde Leuk: ${Math.round(
//     //     sumLeuk / numberOfTests
//     //   )}`
//     // );
//     const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
//     const averageLeuk = Math.round(sumLeuk / numberOfTests);
//     const studentName = distincStudenttNames[i];
//     return [studentName, averageMoeilijk, averageLeuk];
//   }
// };

const getAveragesPerStudent = studentName => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0;
  students.forEach(student => {
    if (student.Student === studentName) {
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

const getAveragesPerStudentPerOpdracht = opdracht => {
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

const getAveragesPerStudentAllOpdrachten = studentName => {
  let moeilijkArray = [],
    leukArray = [];
  students.forEach(student => {
    if (student.Student === studentName) {
      moeilijkArray.push(student.Moeilijk);
      leukArray.push(student.Leuk);
    }
  });
  return [moeilijkArray, leukArray];
};
// const [moeilijkdata, leukData] = getAveragesPerStudentAllOpdrachten("Rahima");
// console.log(moeilijkdata)
// console.log(leukData)

// const soepie = getAveragesPerStudentPerOpdracht("Storm", "W6D2 - Project - Eindopdracht")
// console.log(soepie)
// console.log(loepie)

// distinctStudentNames.forEach(name => {
//   getAveragesPerStudent(name);
// })

// distincStudenttNames.forEach(name => {
//   getAveragesPerStudent(name)
// })


const getAverage = array => {
  const reducer = (total, current) => total + current;
  const sum = array.reduce(reducer);
  return sum / array.length;
};

const getAveragesPerOpdracht = filter => {
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

// const [moeilijkArrayOfStudents, leukArrayOfStudents] = getAveragesPerOpdracht(
//   "SCRUM"
// );

const getAveragesPerOpdracht_NEW = opdracht => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0,
    moeilijkArrayOfOpdracht = [],
    leukArrayOfOpdracht = [],
    averagesPerOpdracht = {};

  students.forEach(student => {
    if (student.Opdracht === opdracht) {
      sumMoeilijk += student.Moeilijk;
      sumLeuk += student.Leuk;
      numberOfTests++;
      const averageMoeilijkperOpdracht = Math.round(
        sumMoeilijk / numberOfTests
      );
      // console.log(`${student.Student} ${opdracht}: Moeilijk: ${averageMoeilijkperOpdracht}`)
      moeilijkArrayOfOpdracht.push(averageMoeilijkperOpdracht);
      const averageLeukperOpdracht = Math.round(sumLeuk / numberOfTests);
      leukArrayOfOpdracht.push(averageLeukperOpdracht);
    }
  });
  // console.log(`${opdracht}: Leuk:${leukArrayOfOpdracht}`);

  const averageMoeilijkOfStudents = getAverage(moeilijkArrayOfOpdracht);
  const averageLeukOfStudents = getAverage(leukArrayOfOpdracht);
  // console.log(`${opdracht}: Moeilijk: ${averageMoeilijkOfStudents}, Leuk: ${averageLeukOfStudents}`)

  averagesPerOpdracht.Opdracht = opdracht;
  averagesPerOpdracht.Moeilijk = averageMoeilijkOfStudents;
  averagesPerOpdracht.Leuk = averageLeukOfStudents;
  // console.log(averagesPerOpdracht);
  return averagesPerOpdracht;
};

// getAveragesPerOpdracht_NEW("SCRUM");

// getDataSet("SCRUM");
const getAveragesPerOpdrachtArray = () => {
  averagesPerOpdrachtArray = [];
  distinctOpdrachtNames.forEach(opdracht => {
    const scoresPerOpdracht = getAveragesPerOpdracht_NEW(opdracht);
    averagesPerOpdrachtArray.push(scoresPerOpdracht);
  });
  // console.log(averagesPerOpdrachtArray);
  return averagesPerOpdrachtArray;
};

const arrayToSort = getAveragesPerOpdrachtArray();
// console.log(arrayToSort);

const sortByMoeilijk = array => {
  const sortedArray = array.sort((a, b) =>
    a.Moeilijk < b.Moeilijk ? 1 : b.Moeilijk < a.Moeilijk ? -1 : 0
  );
  return sortedArray;
};

const rahimaSorted = sortByMoeilijk(rahimaSet);

const sortByLeuk = array => {
  const sortedArray = array.sort((a, b) =>
    a.Leuk < b.Leuk ? 1 : b.Leuk < a.Leuk ? -1 : 0
  );
  console.log(sortedArray);
  return sortedArray;
};

const sortedRahima = sortByMoeilijk(rahimaSet);
// console.log(sortedRahima);

// const sortedByLeuk = sortByLeuk(arrayToSort);

const getDataSets = array => {
  let moeilijkData = [],
    leukData = [],
    xAxisLAbels = [];
  // console.log(averagesPerOpdrachtArray);
  // const array = getAveragesPerOpdrachtArray();
  array.forEach(opdracht => {
    xAxisLAbels.push(opdracht.Opdracht);
    moeilijkData.push(opdracht.Moeilijk);
    leukData.push(opdracht.Leuk);
  });
  // console.log(`labels:${xAxisLAbels}: Moeilijk:${moeilijkData} Leuk:${leukData}`)
  return [xAxisLAbels, moeilijkData, leukData];
};

getDataSets(sortedRahima);
// getScoresPerOpdracht();
// getDataSets(sortedByMoeilijk);

// const getDataSet = () => {
//   let total1Data = [],
//     total2Data = [];
//   distinctOpdrachtNames.forEach(opdracht => {
//     const [dataSet1Data, dataSet2Data] = getAveragesPerOpdracht(opdracht);
//     dataSet1Data.forEach(data => {
//       total1Data.push(data);
//     });
//     dataSet2Data.forEach(data => {
//       total2Data.push(data);
//     });
//   });
//   // console.log("total1Data: " + total1Data);
//   // console.log("total2Data: " + total2Data);
//   return [total1Data, total2Data];
// };

// const [total1Data] = getDataSet();
// console.log(total1Data)

// distinctOpdrachtNames.forEach(name => {
//   getDataSet(name)
// })

// const getAveragesPerAge = filter => {
//   let sumMoeilijk = 0,
//     sumLeuk = 0,
//     numberOfTests = 0;

//   students.forEach(student => {
//     if (student.age >= filter) {
//       sumMoeilijk += student.Moeilijk;
//       sumLeuk += student.Leuk;
//       numberOfTests++;
//     }
//   });
//   const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
//   const averageLeuk = Math.round(sumLeuk / numberOfTests);
//   return [filter, averageMoeilijk, averageLeuk, numberOfTests];
// };

// distinctStudentNames.forEach(name => {
//   const [
//     filter,
//     averageMoeilijk,
//     averageLeuk,
//     numberOfTests,
//   ] = getAveragesPerAge(55);
//   console.log(
//     `${filter}: Moeilijk: ${averageMoeilijk}, Leuk: ${averageLeuk} number of tests: ${numberOfTests}`
//   );
// });

getNewLeukData = () => {
  if (
    this.state.studentSortedByMoeilijk === false &&
    this.state.studentSortedByLeuk === false
  ) {
    let studentSet = getStudentSet(this.state.studentName);
    return [, ,newLeukData] = getDataSets(studentSet);
  } else if (
    this.state.studentSortedByMoeilijk === true &&
    this.state.studentSortedByLeuk === false
  ) {
    let studentSet = getStudentSet(this.state.studentName);
    let studentSetSorted = sortByMoeilijk(studentSet);
    return [, , newLeukData] = getDataSets(
      studentSetSorted
    );
  } else if (
    this.state.studentSortedByMoeilijk === false &&
    this.state.studentSortedByLeuk === true
  ) {
    
    let studentSet = getStudentSet(this.state.studentName);
    let studentSetSorted = sortByLeuk(studentSet);
    return [, , newLeukData] = getDataSets(
      studentSetSorted
    );
  }
}
