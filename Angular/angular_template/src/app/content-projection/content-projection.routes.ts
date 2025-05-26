import { Routes } from '@angular/router';
import { ContentProjectionComponent } from './content-projection.component';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';

export const contentProjectionRoutes: Routes = [
    { 
        path:"",
        component: ContentProjectionComponent,
        children: [
            { path:"", component: SingleSlotComponent},
            { path: "multi-slot", component: MultiSlotComponent },
            // { path: "conditional", component: ChildComponent }        
        ]
    }
];
