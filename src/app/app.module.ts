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
import { OutrosProgramasPage } from '../pages/outros-programas/outros-programas';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { ExtratoPage } from '../pages/extrato/extrato';

import { AuthService } from '../providers/auth.service';
import { CalendarService } from '../providers/calendar.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenu,
    ModalNis,
    InteratividadePage,
    CalendarioPage,
    AtendimentoPage,
    SobrePage,
    OutrosProgramasPage,
    MensagensPage,
    ExtratoPage
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
    SobrePage,
    OutrosProgramasPage,
    MensagensPage,
    ExtratoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, CalendarService]
})
export class AppModule {}
