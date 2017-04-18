import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { MenuComponent } from '../components/menu/menu.component';
import { CalendarComponent } from '../components/calendar/calendar.component';

import { ModalInputNIS } from '../pages/home/modal/nis.modal';
import { HomePage } from '../pages/home/home';
import { InteractivePage } from '../pages/interactive/interactive';
import { CalendarPage } from '../pages/calendar/calendar';
import { AttendancePage } from '../pages/attendance/attendance';
import { AboutPage } from '../pages/about/about';
import { OthersPage } from '../pages/others/others';
import { MessagesPage } from '../pages/messages/messages';
import { StatementPage } from '../pages/statement/statement';

import { UserService } from '../providers/user.service';
import { CalendarService } from '../providers/calendar.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalInputNIS,
    MenuComponent,
    InteractivePage,
    CalendarPage,
    AttendancePage,
    AboutPage,
    OthersPage,
    MessagesPage,
    StatementPage,
    CalendarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalInputNIS,
    MenuComponent,
    InteractivePage,
    CalendarPage,
    AttendancePage,
    AboutPage,
    OthersPage,
    MessagesPage,
    StatementPage,
    CalendarComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService, CalendarService]
})
export class AppModule {}
