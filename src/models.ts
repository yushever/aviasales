export interface IState {
  all: boolean;
  direct: boolean;
  layover1: boolean;
  layover2: boolean;
  layover3: boolean;
  filter: string;
  tickets: [];
  loading: boolean;
  number: number;
}

export interface ITicket {
  carrier: string;
  price: number;
  segments: { origin: string; destination: string; date: string; stops: string[]; duration: number }[];
}
