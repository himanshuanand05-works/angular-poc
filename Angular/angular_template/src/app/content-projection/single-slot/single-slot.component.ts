import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-single-slot',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './single-slot.component.html',
  styleUrl: './single-slot.component.scss'
})
export class SingleSlotComponent {

}
