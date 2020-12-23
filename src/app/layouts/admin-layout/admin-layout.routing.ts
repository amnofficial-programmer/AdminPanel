import { Routes } from '@angular/router';

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

import { AuthGaurdService } from '../../authenticate/auth-gaurd.service';
import { JobSeekerComponent } from '../../tabs/job-seeker/job-seeker.component';
import { RecruiterComponent } from '../../tabs/recruiter/recruiter.component';

export const AdminLayoutRoutes: Routes = [
  
    { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGaurdService] },
    { path: 'customer', component: CustomerComponent,canActivate:[AuthGaurdService] },
    { path: 'agent', component: AgentComponent,canActivate:[AuthGaurdService] },
    { path: 'customer-payment-report', component: CustomerPaymentReportComponent,canActivate:[AuthGaurdService] },
    { path: 'customer-due-report', component: CustomerDueReportComponent,canActivate:[AuthGaurdService] },


    { path: 'user-profile', component: UserProfileComponent,canActivate:[AuthGaurdService] },
    { path: 'table-list', component: TableListComponent,canActivate:[AuthGaurdService]  },
    { path: 'typography', component: TypographyComponent,canActivate:[AuthGaurdService]  },
 
    { path: 'notifications', component: NotificationsComponent,canActivate:[AuthGaurdService]  },
    { path: 'upgrade', component: UpgradeComponent,canActivate:[AuthGaurdService]  },

    { path: 'jobseeker', component: JobSeekerComponent,canActivate:[AuthGaurdService]  },
    { path: 'recuriter', component: RecruiterComponent,canActivate:[AuthGaurdService]  },
    
];
