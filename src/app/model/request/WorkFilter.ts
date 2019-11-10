export class WorkFilter {
  constructor(
    public from: number = 0,
    public count: number = 50,
    public textId: number = null,
    public authorId: number = null,
    public workTypes: string[] = [],
    public ratingFrom: number = null,
    public ratingTo: number = null,
    public createdFrom: number = null,
    public createdTo: number = null,
    public editFrom: number = null,
    public editTo: number = null,
    public sort: WorkSort = WorkSort.NEWEST

  ) {
  }
}

export enum WorkSort {
  RATING_ASCENDING = "RATING_ASCENDING",
  RATING_DESCENDING = "RATING_DESCENDING",
  AUTHOR_ID = "AUTHOR_ID",
  NEWEST = "NEWEST",
  OLDEST = "OLDEST"
}
