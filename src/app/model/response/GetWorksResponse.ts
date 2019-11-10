import {Work} from "../../shared/interfaces";

export class GetWorksResponse {
  constructor(
    public length: number,
    public works: Work[]
  ) {
  }
}
