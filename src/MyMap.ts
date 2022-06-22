export interface Mappable {
  position: {
    lat: number, lng: number
  };
  markerContent(): google.maps.InfoWindowOptions
}
export class MyMap {
  private googleMap: google.maps.Map;
  constructor() {
    const ele = document.getElementById('Map');
    if (!ele) return
    this.googleMap = new google.maps.Map(ele, {
      zoom: 2,
      center: { lat: 0, lng: 0 }
    });

  }

  addMarker(mappable: Mappable) {
    const infoWindow = new google.maps.InfoWindow(mappable.markerContent());
    const marker = new google.maps.Marker({
      map: this.googleMap,
      title: 'Map Marker',
      position: mappable.position,
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    })
  }
}