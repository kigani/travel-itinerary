import {TravelDetails} from "./travel-details";

export interface DailySchedule {
  date: string;
  userId: string;
  schedule: Array<TravelDetails>;
}
