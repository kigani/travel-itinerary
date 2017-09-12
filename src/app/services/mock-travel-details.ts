interface TravelDetails {
  type: string;
  status: string;
  from?: string;
  to?: string;
  departure?: string;
  arrival?: string;
  flightNumber?: string;
  pickUpTime?: string;
  dropOffTime?: string;
  serviceType?: string;
  name?: string;
  checkInTime?: string;
  checkOutTime?: string;
}

interface DailySchedule {
  date: string;
  userId: string;
  schedule: Array<TravelDetails>;
}

export const TRAVEL_DETAILS: DailySchedule =
  <DailySchedule>
  {
    date: 'Fri Sep 15 2017 00:00:00 GMT+0200',
    userId: '123434345346545645756876',
    schedule: [
      {
        type: 'flight',
        status: 'Confirmed',
        from: 'Zurich (ZRH)',
        to: 'Moscow (DME)',
        departure: '12:20',
        arrival: '12:20',
        flightNumber: 'LX 1345'
      },
      {
        type: 'transport',
        status: 'Confirmed',
        from: 'Moscow Airport',
        to: 'Hotel',
        pickUpTime: '12:20',
        dropOffTime: '12:20',
        serviceType: 'pool'
      },
      {
        type: 'accomodation',
        status: '',
        name: 'Hotel Name Goes Here',
        checkInTime: '12/07/2017 12:00',
        checkOutTime: '14/07/2017 12:00'
      }
    ]
  };

