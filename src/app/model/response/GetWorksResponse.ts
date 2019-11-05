import {Work} from "../../shared/interfaces";

export class GetWorksResponse {
  constructor(
    private _length: number,
    private _works: Work[]
  ) {

  }

  get length(): number {
    return this._length;
  }

  get works(): Work[] {
    return this._works;
  }
}
