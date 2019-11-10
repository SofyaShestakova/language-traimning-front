export interface AverageRating {
  rating: number; // real
  snapshotDate: number;
}

export class AverageUserRatingStatistics {

  constructor(
    public length: number,
    public statistics: AverageRating[]
  ) {

  }
}
