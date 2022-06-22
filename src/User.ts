import faker from 'faker';
import { Mappable } from './MyMap';

export class User implements Mappable {
  name: string;
  catchPhrase: string;
  position: {
    lat: number;
    lng: number;
  }
  markerContent(): google.maps.InfoWindowOptions {
    return { content: `<b>${this.name}</b><br><em>User</em><br>"${this.catchPhrase}"` }
  }
  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.catchPhrase = faker.company.catchPhrase();

    this.position = {
      lat: parseFloat(faker.address.latitude()), lng: parseFloat(faker.address.longitude())
    }
  }
}