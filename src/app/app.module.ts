import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TodoEkranComponent } from './component/todo-ekran/todo-ekran.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoEkranComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
