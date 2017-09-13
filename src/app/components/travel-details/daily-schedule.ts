import {TravelDetails} from "./travel-details";

export interface DailySchedule {
  date: string;
  userId: number;
  schedule: Array<TravelDetails>;
}
