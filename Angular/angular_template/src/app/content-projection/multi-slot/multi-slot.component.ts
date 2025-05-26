import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-multi-slot',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './multi-slot.component.html',
  styleUrl: './multi-slot.component.scss'
})
export class MultiSlotComponent {

}
