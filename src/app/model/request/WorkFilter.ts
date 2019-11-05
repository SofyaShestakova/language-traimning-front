export class WorkFilter {
  constructor(
    private from: number = 0,
    private count: number = 50,
    private textId: number = null,
    private authorId: number = null,
    private workTypes: string[] = [],
    private ratingFrom: number = null,
    private ratingTo: number = null,
    private createdFrom: number = null,
    private createdTo: number = null,
    private editFrom: number = null,
    private editTo: number = null,
    private sort: string = "NEWEST" // RATING_ASCENDING, RATING_DESCENDING, AUTHOR_ID, NEWEST, OLDEST
  ) {
  }
}
