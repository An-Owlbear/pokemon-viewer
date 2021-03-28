export const updateListItem = (list, item, updated) => list.map(x => x === item ? updated : x);

// Retrieves the information of level up moves
const getLevelUpDetails = (move) => {
  // Retrieves details of level up version
  const levelUpVersions = move.version_group_details.filter(x => x.move_learn_method.name === 'level-up');
  if (levelUpVersions.length === 0) return undefined;

  // Returns move name and latest learn level
  return {
    name: move.move.name,
    levelLearned: levelUpVersions[levelUpVersions.length - 1].level_learned_at,
    type: 'levelup'
  };
};

// Gets moves from a list that are learned at level up
export const getLevelUpMoves = (list) => list
  .map(getLevelUpDetails)
  .filter(x => x !== undefined)
  .sort((x,y) => x.levelLearned - y.levelLearned || x.name.localeCompare(y.name));

// Retrieves the information of egg moves
const getEggMoveDetails = (move) => {
  // Retrieves details of newest egg move version
  const eggVersions = move.version_group_details.filter(x => x.move_learn_method.name === 'egg');
  if (eggVersions.length === 0) return undefined;

  // Returns move name
  return {
    name: move.move.name,
    levelLearned: 0,
    type: 'egg'
  }
};

// Gets moves from a list that are learned as egg moves
export const getEggMoves = (list) => list
  .map(getEggMoveDetails)
  .filter(x => x !== undefined)
  .sort((x,y) => x.name.localeCompare(y.name));
