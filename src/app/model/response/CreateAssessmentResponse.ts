import {UserDetails} from "../../shared/interfaces";
import {Assessment} from "../Assessment";

export interface CreateAssessmentResponse {
  status: string,
  assessment: Assessment
}
