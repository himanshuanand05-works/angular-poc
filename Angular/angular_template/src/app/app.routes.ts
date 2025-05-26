import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: "content-rendering", 
        loadChildren: () => import("./content-rendering/content-rendering.routes").then(r=>r.contentRenderingRoutes)
    },
    { 
        path: "content-projection", 
        loadChildren: () => import("./content-projection/content-projection.routes").then(r=>r.contentProjectionRoutes) 
    },
    { path: "", component: HomeComponent}

];
