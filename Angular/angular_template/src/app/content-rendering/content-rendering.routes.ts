import { Routes } from "@angular/router";
import { ContentRenderingComponent } from "./content-rendering.component";
import { StaticRenderingComponent } from "./static-rendering/static-rendering.component";
import { DynamicRenderingComponent } from "./dynamic-rendering/dynamic-rendering.component";
import { PlaceholderRenderingComponent } from "./dynamic-rendering/placeholder-rendering/placeholder-rendering.component";

export const contentRenderingRoutes: Routes = [
    { 
        path:"", 
        component: ContentRenderingComponent,
        children: [
            // A neat trick to not change the URL and yet load child component by default on root path
            { path: '', component: StaticRenderingComponent, pathMatch: 'full' }, 
            { path:"dynamic-render", component: DynamicRenderingComponent },
            { path: "dynamic-render-placeholder", component: PlaceholderRenderingComponent}
        ]
    }
];
