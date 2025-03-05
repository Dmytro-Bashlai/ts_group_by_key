type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups, item) => {
    const keyValue = String(item[key]);

    if (!groups[keyValue]) {
      groups[keyValue] = [];
    }

    groups[keyValue].push(item);

    return groups;
  }, {});
}
