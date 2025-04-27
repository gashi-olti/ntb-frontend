export interface ResponseModel<TData> {
  status: string;
  totalResults: number;
  articles: TData[];
}
