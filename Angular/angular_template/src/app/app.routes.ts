import { Routes } from '@angular/router';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: "content-rendering", 
        loadChildren: () => import("./content-rendering/content-rendering.routes").then(r=>r.contentRenderingRoutes)
    },
    { path: "content-projection", component: ContentProjectionComponent },
    { path: "", component: HomeComponent}

];
