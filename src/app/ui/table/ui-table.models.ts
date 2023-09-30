export type TableHeader<T> = {
    accesor: keyof T;
    label: string;
  }