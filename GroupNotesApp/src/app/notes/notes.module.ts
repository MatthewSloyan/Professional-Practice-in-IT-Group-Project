import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { IonicModule } from '@ionic/angular';
//import { ToastController } from '@ionic/angular';
//import { HomePage } from '../home/home.page';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuillModule,
    //ToastController,
    RouterModule.forChild(routes)
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {
}
