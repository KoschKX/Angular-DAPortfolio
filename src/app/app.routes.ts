import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content';
import { SubPageComponent } from './subpage/subpage';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: ':slug', component: SubPageComponent},
];
