export class BankTextFilter {
  constructor(
    private from: number = 0,
    private count: number = 50,
    private createdFrom: number = null,
    private createdTo: number = null,
    private editFrom: number = null,
    private editTo: number = null
  ) {
  }
}
