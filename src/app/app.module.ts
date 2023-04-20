import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home/home.module';
import { DetailModule } from './detail/detail/detail.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorModule } from './http-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpInterceptorModule,
    AppRoutingModule,
    HomeModule,
    DetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
