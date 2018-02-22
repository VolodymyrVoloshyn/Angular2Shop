import { Injectable } from '@angular/core';
import { ConstObject } from './model/const-object';

@Injectable()
export class ConstantsService {

  constructor(private constObj: ConstObject) {
  }

  getConstObject(): ConstObject {
    return this.constObj;
  }

}
