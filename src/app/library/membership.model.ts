export interface  Member {
  id: string;
  name: string;
  ic: number;
  address: string;
  phone: string;
  email: string;
  membership: Membership;
}


export enum  Membership {
  PLATINUM = 1,
  GOLD,
  SILVER
}
