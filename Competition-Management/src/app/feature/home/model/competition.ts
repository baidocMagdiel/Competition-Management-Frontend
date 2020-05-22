export interface Competition {
  competitionId?: number;
  name?: string;
  startDate?: Date;
  endDate?: Date;
  lastRegistrationDate?: Date;
  place?: string;
  federation?: string;
  noOfEntries?: number;
  noOfCountries?: number;
  competitionStatus?: string;
  categories?: string;
}
