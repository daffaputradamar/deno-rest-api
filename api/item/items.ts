import { Item } from "../../config/types.ts";

let items: Item[] = [
  {
    id: "1",
    name: "Item One",
    description: "This is Item One",
    price: 5000,
  },
  {
    id: "2",
    name: "Item Two",
    description: "This is Item Two",
    price: 6000,
  },
  {
    id: "3",
    name: "Item Three",
    description: "This is Item Three",
    price: 8000,
  },
];

const setItems = (newItems: Item[]) => items = newItems;

export {
  items,
  setItems,
};
