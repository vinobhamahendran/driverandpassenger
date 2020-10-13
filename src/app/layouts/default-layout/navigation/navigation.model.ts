import {NavigationModelInterface} from '@gaxon/components';

export class NavigationModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'main',
        title: '',
        type: 'group',
        icon: '',
        children: [
          {
            id: 'ridedetails',
            title: 'Ride Details',
            type: 'item',
            icon: 'dashboard2',
            url: '/home'
          }
        ]
      }
    ];
  }
}
