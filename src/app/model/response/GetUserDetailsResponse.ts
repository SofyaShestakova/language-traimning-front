import {User, UserDetails} from "../../shared/interfaces";

export interface GetUserDetailsResponse {
  status: string;
  user: User;
  details: UserDetails;
}
