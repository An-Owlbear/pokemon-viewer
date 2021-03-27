export const updateListItem = (list, item, updated) => list.map(x => x === item ? updated : x);
