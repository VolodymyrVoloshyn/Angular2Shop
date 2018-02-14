import { Injectable, InjectionToken } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';

export const Random_String_N = new InjectionToken<GeneratorService>('RandomStringN');

export function RandomStringNFactory(length: number) {
  return function (): GeneratorService {
    return new GeneratorService(length);
  };
}

@Injectable()
export class GeneratorService {
  private data: Array<any>;

  constructor(private length: number) {
    this.data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  }

  generate(): string {
    let res = '';
    for (let i = 0; i < this.length; i++) {
      res += this.getRandomEl();
    }

    return res;
  }

  private getRandomEl(): string {
    return this.data[Math.floor(Math.random() * this.data.length)];
  }
}
