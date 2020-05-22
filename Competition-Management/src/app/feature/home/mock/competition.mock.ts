import {Competition} from '../model/competition';

export const CompetitionMock: Competition[] = [
  {
    competitionId: 1,
    name: 'Competition 1',
    place: 'Bucuresti',
    federation: 'FRK',
    competitionStatus: 'ACTIVE',
    startDate: '14.06.2020',
    endDate: '16.06.2020',
    noOfCountries: 65,
    noOfEntries: 245
  },
  {
    competitionId: 2,
    name: 'Competition 2',
    place: 'Cluj-Napoca',
    federation: 'WKF',
    competitionStatus: 'IN PROGRESS'
  },
  {
    competitionId: 3,
    name: 'Competition 3',
    place: 'Sibiu',
    federation: 'FRK',
    competitionStatus: 'ACTIVE'
  }
];
