import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions-page',
  template: `
    <p>
      <!-- {{ myDate | date | uppercase | lowercase }}-->
      {{ myDate | date:'yyyy/MM/dd HH:mm'  }}
    </p>
    <p>
      {{ user | json | uppercase }}
    </p>
  `,
  styles: [
  ]
})
export class PromotionsPageComponent  {

  myDate = new Date();
  user = {name: 'John', lastName: 'Smith'};

}
