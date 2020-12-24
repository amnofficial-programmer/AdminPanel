import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CustomerComponent } from '../../tabs/customer/customer.component';
import { AgentComponent } from '../../tabs/agent/agent.component';
import { CustomerPaymentReportComponent } from '../../tabs/reports/customer-payment-report/customer-payment-report.component';
import { CustomerDueReportComponent } from '../../tabs/reports/customer-due-report/customer-due-report.component';


import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatRadioModule } from '@angular/material/radio';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import { ShowHidePasswordModule } from 'ngx-show-hide-password'
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import {NgxPaginationModule} from 'ngx-pagination';
import { CKEditorModule } from 'ng2-ckeditor';
import { CountdownModule } from 'ngx-countdown';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { SelectDropDownModule } from 'ngx-select-dropdown'
//import {SelectModule} from 'ng2-select';
//import { ImageViewerModule } from "ngx-image-viewer";
//import { TagInputModule } from 'ngx-chips';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
// import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

// TagInputModule.withDefaults({
//   tagInput: {
//       placeholder: 'Add Mobile No',
//       // add here other default values for tag-input
//   },
//   dropdown: {
//       displayBy: 'my-display-value',
//       // add here other default values for tag-input-dropdown
//   }
// });
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { ImageViewerModule } from 'ng2-image-viewer';
//import {WebcamModule} from 'ngx-webcam'
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatTabsModule} from '@angular/material/tabs';
import { JobSeekerComponent } from '../../tabs/job-seeker/job-seeker.component';
import { RecruiterComponent } from '../../tabs/recruiter/recruiter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatTabsModule,
    // MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgxDocViewerModule,
    ShowHidePasswordModule,
    PdfJsViewerModule,
    //SelectModule,
    NgxPaginationModule,
    CKEditorModule,
    CountdownModule,
    ImageViewerModule,
    SelectDropDownModule,
    //TagInputModule,
    MatAutocompleteModule,
    NgxAudioPlayerModule ,
  //  WebcamModule,
    PdfViewerModule,
  //  NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxPaginationModule,
    
  ],
  declarations: [
    DashboardComponent,
    CustomerComponent,
    AgentComponent,
    CustomerPaymentReportComponent,
    CustomerDueReportComponent,

    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
   
 
    NotificationsComponent,
    UpgradeComponent,
    JobSeekerComponent,
    RecruiterComponent
    
  ], providers: [DatePipe],schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AdminLayoutModule {}
