export interface RequisitionWrapper<T> {
  count: number;
  next?: string;
  previous?: string;
  results: Array<T>;
}
