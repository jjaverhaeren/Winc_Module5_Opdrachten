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
// console.log(students);

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

// console.log(info)
// console.log(distincStudenttNames);
// console.log(distinctOpdrachtNames);
// console.log(distinctStudents);

// let sumMoeilijk = 0,
//   sumLeuk = 0;

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

const getAveragesPerStudent = (studentName) => {
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
    console.log(
      `${studentName} gemiddelde Moeilijk: ${Math.round(
        sumMoeilijk / numberOfTests
      )}`
    );
    console.log(
      `${studentName} gemiddelde Leuk: ${Math.round(
        sumLeuk / numberOfTests
      )}`
    );
    const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
    const averageLeuk = Math.round(sumLeuk / numberOfTests);
    let dataSet = [];
    dataSet.push(averageMoeilijk);
    dataSet.push(averageLeuk)
  return dataSet;
};

const loepie = getAveragesPerStudent("Martina")
// console.log(soepie)
console.log(loepie)

// distinctStudentNames.forEach(name => {
//   getAveragesPerStudent(name);
// })


// distincStudenttNames.forEach(name => {
//   getAveragesPerStudent(name)
// })

// const getAverages = (filter, value) => {
//   let sumMoeilijk = 0,
//     sumLeuk = 0,
//     numberOfTests = 0;
//     filterString = `rating.${filter}`;
//     ratingFilter = JSON.parse(filterString);
//   ratings.forEach(rating => {
//     if (ratingFilter === value) {
//       sumMoeilijk += rating.Moeilijk;
//       sumLeuk += rating.Leuk;
//       numberOfTests++;
//     }
//   });
//   const averageMoeilijk = Math.round(sumMoeilijk / numberOfTests);
//   const averageLeuk = Math.round(sumLeuk / numberOfTests);
//   return [filter, averageMoeilijk, averageLeuk];
// };
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

const [moeilijkArrayOfStudents, leukArrayOfStudents] = getAveragesPerOpdracht(
  "SCRUM"
);
// console.log(`MoeilijkArrayOfStudents: ${moeilijkArrayOfStudents}`);
// console.log(`LeukArrayOfStudents: ${leukArrayOfStudents}`);

// console.log(getAveragesPerOpdracht("SCRUM"));

// getAveragesPerOpdracht("SCRUM");

// let dataSet1Data = [],
// dataSet2Data = []
// getDataSet = (filter) => {
//   const [moeilijkArrayOfStudents, leukArrayOfStudents] = getAveragesPerOpdracht(filter);
//   dataSet1Data.push(moeilijkArrayOfStudents);
//   dataSet2Data.push(leukArrayOfStudents);

//   console.log(dataSet1Data)
//   console.log(dataSet2Data)
// }

// getDataSet("SCRUM");
const getDataSet = () => {
  let total1Data = [],
    total2Data = [];
  distinctOpdrachtNames.forEach(name => {
    const [dataSet1Data, dataSet2Data] = getAveragesPerOpdracht(name);
    dataSet1Data.forEach(data => {
      total1Data.push(data);
    });
    dataSet2Data.forEach(data => {
      total2Data.push(data);
    });
  });
  // console.log("total1Data: " + total1Data);
  // console.log("total2Data: " + total2Data);
  return [total1Data, total2Data];
};

const [total1Data] = getDataSet();
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
