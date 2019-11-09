export class CreateAssessmentRequest {

  constructor(
    private workId: number,
    private mark: number,
    private comment: string,
  ) {
  }
}
