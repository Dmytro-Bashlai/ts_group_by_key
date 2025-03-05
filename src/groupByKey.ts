type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T[]): GroupsMap<T> {
  return items.reduce((groups, item) => {
    return {
      ...groups,
      [item[key]]: items.filter((filterItem) => item[key] === filterItem[key]),
    };
  }, {});
}
