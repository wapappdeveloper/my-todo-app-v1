import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';

import { CommonService } from './services/common.service';
import { DataPersistenceService } from './services/data-persistence.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService, DataPersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
