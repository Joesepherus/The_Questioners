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
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditModalComponent } from './todo-edit-modal/todo-edit-modal.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { WordsComponent } from './words/words.component';
import { WordsCreateComponent } from './words-create/words-create.component';
import { WordsEditComponent } from './words-edit/words-edit.component';
import { WordsEditModalComponent } from './words-edit-modal/words-edit-modal.component';
import { WordsDeleteComponent } from './words-delete/words-delete.component';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { TurnipComponent } from './turnip/turnip.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  {
    path: 'qaa',
    component: QaaComponent,
    data: { title: 'QaA' }
  },
  {
    path: 'todo',
    component: TodoComponent,
    data: { title: 'To-do list' }
  },
  {
    path: 'words',
    component: WordsComponent,
    data: {title: 'Words' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: '',
    redirectTo: '/about',
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
    TodoComponent,
    TodoCreateComponent,
    TodoEditModalComponent,
    TodoEditComponent,
    TodoDeleteComponent,
    WordsComponent,
    WordsCreateComponent,
    WordsEditComponent,
    WordsEditModalComponent,
    WordsDeleteComponent,
    AboutComponent,
    FilterPipe,
    TurnipComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
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
