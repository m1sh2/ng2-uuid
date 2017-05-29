import { Injectable } from '@angular/core';

@Injectable()
export class Uuid {
  v1(l?: number) {
    if (!l) {
      l = 4;
    }

    let uuid = [];

    for (let i = 0; i < l; i++) {
      uuid.push(this.randomString());
    }

    return uuid.join('-');
  }

  private randomString() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
}