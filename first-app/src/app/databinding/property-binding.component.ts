import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    {{result}}
  `,
  styles: [],
  inputs: ['result'] //Doesn't need Input import'
})
export class PropertyBindingComponent {
  result : number = 0;
  //@Input() result : number = 1; //This way is better than the Inputs method above
}
