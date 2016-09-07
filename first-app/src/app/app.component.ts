import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';
import { LifecycleComponent } from './lifecycle.component'
/*@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})*/

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-databinding></app-databinding>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'changed value'">Click to Change</button>
    <button (click)="boundValue = 2000">Click to Bind</button>
  `,
  directives: [DatabindingComponent, LifecycleComponent]
})

export class AppComponent {
  delete = false;
  test = 'starting value';
  boundValue = 1000;
  title: string = 'Root Component!';
}
