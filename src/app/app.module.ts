import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalNis } from '../pages/modal-nis/modal-nis';
import { SideMenu } from '../pages/menu/menu';
import { InteratividadePage } from '../pages/interatividade/interatividade';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenu,
    ModalNis,
    InteratividadePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenu,
    ModalNis,
    InteratividadePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
