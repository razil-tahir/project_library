export interface  Membership {
  id: string;
  name: string;
  ic: number;
  address: string;
  phone: string;
  email: string;
  memberType: MemberType;
}


export enum  MemberType {
  PLATINUM = 0,
  GOLD = 1,
  SILVER = 2
}
