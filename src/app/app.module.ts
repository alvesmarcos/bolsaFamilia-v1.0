import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalNis } from '../pages/modal-nis/modal-nis';
import { SideMenuComponent } from '../components/menu/menu.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuComponent,
    ModalNis
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenuComponent,
    ModalNis
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
