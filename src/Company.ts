import faker from 'faker';
import { Mappable } from './MyMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  position: {
    lat: number;
    lng: number;
  }
  markerContent(): google.maps.InfoWindowOptions {
    return { content: `<b>${this.name}</b><br><em>Company</em><br>${this.catchPhrase}` }
  }

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.position = {
      lat: parseFloat(faker.address.latitude()), lng: parseFloat(faker.address.longitude())
    }
  }
}