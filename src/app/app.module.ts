import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QaaComponent } from './qaa/qaa.component';
import { RouterModule, Routes } from '@angular/router';
import { QaaCreateComponent } from './qaa-create/qaa-create.component';
import { QaaDeleteComponent } from './qaa-delete/qaa-delete.component';
import { QaaEditComponent } from './qaa-edit/qaa-edit.component';
import { QaaEditModalComponent } from './qaa-edit-modal/qaa-edit-modal.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
  {
    path: 'qaas',
    component: QaaComponent,
    data: { title: 'QaA' }
  },
  {
    path: 'todo',
    component: TodoComponent,
    data: { title: 'To-do list' }
  },
  {
    path: '',
    redirectTo: '/qaas',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    QaaComponent,
    QaaCreateComponent,
    QaaDeleteComponent,
    QaaEditComponent,
    QaaEditModalComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
