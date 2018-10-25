import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './shared/header/header.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'restaurants',
    component: HomeComponent
  },
  { path: 'restaurant/:id', component: DetailsComponent },
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: environment.Key })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
