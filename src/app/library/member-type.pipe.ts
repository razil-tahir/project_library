import {Pipe, PipeTransform} from '@angular/core';
import {MemberType} from './membership-type.enum';

@Pipe({name: 'memberTypePipe'})
export class MemberTypePipe implements PipeTransform {

  transform(value: MemberType): any {
    // console.log('test: ' + value);
    if (value) {
      // console.log(MemberType[value.toString()]);
      switch (MemberType[value.toString()]) {
        case MemberType.GOLD : {
          return 'GOLD';
        }
        case MemberType.PLATINUM : {
          return 'PLATINUM';
        }
        case MemberType.SILVER : {
          return 'SILVER';
        }
        default: {
          return value;
        }
      }
    } else {
      return 'UNDEFINED';
    }
  }
}
