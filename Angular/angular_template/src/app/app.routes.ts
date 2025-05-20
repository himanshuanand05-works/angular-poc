import { Routes } from '@angular/router';
import { ContentRenderingComponent } from './content-rendering/content-rendering.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "content-rendering", component: ContentRenderingComponent },
    { path: "content-projection", component: ContentProjectionComponent },
    { path: "", component: HomeComponent}

];
