export class EditUserRequest {
  constructor(
    private screenName: string = null,
    private bio: string = null
  ) {
    if (screenName != null && screenName.length == 0) {
      this.screenName = null;
    }

    if (bio != null && bio.length == 0) {
      this.bio = null;
    }
  }
}
