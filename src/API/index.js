// API endpoint variables for simplification
export const baseURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/";
export const allPlayersURL = baseURL + "players";
export const singlePlayerURL = (playerId) => `${allPlayersURL}/${playerId}`;
export const teamsURL = baseURL + "teams";

// API Call Functions

// GET requests

// All Players
export async function getAllPlayers() {
  const response = await fetch(allPlayersURL);
  const allPlayers = await response.json();
  return allPlayers;
}

// Single Player by ID
export async function getSinglePlayer(playerId) {
  const response = await fetch(singlePlayerURL(playerId));
  const singlePlayer = await response.json();
  return singlePlayer;
}

// Teams
export async function getTeams() {
  const response = await fetch(teamsURL);
  const teams = await response.json();
  return teams;
}
