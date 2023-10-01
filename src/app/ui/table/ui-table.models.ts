export type TableHeader<T> = {
  accesor: keyof T;
  label: string;
  type?: TypeColumn;
};

export type TypeColumn = 'text' | 'image' | 'date' | 'actions';
