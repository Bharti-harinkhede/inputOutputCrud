import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  uuid(): string {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
