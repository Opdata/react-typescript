export interface Item {
  id?: number;
  text?: string;
  state?: boolean;
}

export type TodoList = Array<Item>;
