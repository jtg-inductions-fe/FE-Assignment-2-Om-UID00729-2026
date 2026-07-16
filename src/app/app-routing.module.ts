import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth-guard/auth.guard';
import { unauthGuard } from '@core/guards/unauth-guard/unauth.guard';
import { ErrorComponent } from '@features/error/error.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('@features/auth/auth.module').then(
                (module) => module.AuthModule,
            ),
        canActivate: [authGuard],
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('@features/dashboard/dashboard.module').then(
                (module) => module.DashboardModule,
            ),
        canActivate: [unauthGuard],
    },
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            label: 'Something has gone seriously wrong',
            imgSrc: 'assets/images/InternalError.webp',
            imgAlt: 'Internal Error',
            message:
                'It’s always time for a coffee break We should be back by the time you finish your coffee.',
        },
    },
    {
        path: '**',
        component: ErrorComponent,
        data: {
            label: 'Page not Found',
            imgSrc: 'assets/images/404NotFound.webp',
            imgAlt: 'Page not Found',
            message:
                'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
