import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, HttpLoaderFactory } from './app/app.component';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SubPageComponent } from "./app/subpage/subpage";

import { MainContentComponent } from './app/main-content/main-content';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: ':slug', component: SubPageComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
});