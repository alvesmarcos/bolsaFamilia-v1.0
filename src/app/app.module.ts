import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalNis } from '../pages/modal-nis/modal-nis';
import { SideMenu } from '../pages/menu/menu';
import { InteratividadePage } from '../pages/interatividade/interatividade';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AtendimentoPage } from '../pages/atendimento/atendimento';
import { SobrePage } from '../pages/sobre/sobre';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenu,
    ModalNis,
    InteratividadePage,
    CalendarioPage,
    AtendimentoPage,
    SobrePage
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
    InteratividadePage,
    CalendarioPage,
    AtendimentoPage,
    SobrePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
