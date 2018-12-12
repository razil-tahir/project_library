import {MemberType} from './membership-type.enum';

export interface  Membership {
  id: string;
  name: string;
  ic: number;
  address: string;
  phone: string;
  email: string;
  memberType: MemberType;
}

