import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInContainer } from './loggedIn.component';
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
import { BlogComponent } from './blog/blog.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogEditModalComponent } from './blog-edit-modal/blog-edit-modal.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { SharedModule } from './shared.module'
import { AuthGuard } from './services/auth-guard.service'

const appRoutes: Routes = [
    {   path: '', component: LoggedInContainer, children: [

        {
            path: 'qaa',
            component: QaaComponent,
            data: { title: 'QaA' },
            canActivate: [AuthGuard]
        },
        {
            path: 'todo',
            component: TodoComponent,
            data: { title: 'To-do list' },
            canActivate: [AuthGuard]
        },
        {
            path: 'words',
            component: WordsComponent,
            data: {title: 'Words' },
            canActivate: [AuthGuard]
        },
        {
            path: 'about',
            component: AboutComponent,
            data: { title: 'About' },
            canActivate: [AuthGuard]
        },
        {
            path: 'blog',
            component: BlogComponent,
            data: { title: 'Blog' },
            canActivate: [AuthGuard]
        },
        {
            path: '',
            redirectTo: '/about',
            pathMatch: 'full',
            canActivate: [AuthGuard]
        }]
    }
];

@NgModule({
  declarations: [
    LoggedInContainer,
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
    BlogComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogEditModalComponent,
    BlogDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard],
  bootstrap: [LoggedInContainer]
})

export class LoggedInModule { }
