export class CreateWorkRequest {

  constructor(
    private textId: number,
    private type: number,
    private title: string,
    private text: string
  ) {

  }
}
