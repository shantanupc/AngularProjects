import { Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path : '',      //Default route
        component : WelcomeComponent
    },
    {
        path : 'batchdetails',      //Specific route
        component : BatchDetailsComponent
    },
    {
        path : 'batchlist',
        component : BatchListComponent
    },
    {
        path : "**",        //Wildcard routes
        component : InvalidComponent
    }
];
