import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth-guard/auth.guard';
import { unauthGuard } from '@core/guards/unauth-guard/unauth.guard';
import { ErrorComponent } from '@core/components/error/error.component';
import { AppLayoutComponent } from '@core/layout/main-layout/main-layout.component';
import { roleGuard } from '@core/guards/role-guard/role.guard';

const routes: Routes = [
    {
        path: 'auth',
        component: AppLayoutComponent,
        canActivateChild: [authGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('@features/auth/auth.module').then(
                        (module) => module.AuthModule,
                    ),
                canActivate: [authGuard],
            },
        ],
    },
    {
        path: '',
        component: AppLayoutComponent,
        canActivateChild: [unauthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('@features/dashboard/dashboard.module').then(
                        (module) => module.DashboardModule,
                    ),
            },
            {
                path: 'restaurants',
                loadChildren: () =>
                    import('@features/restaurants/restaurants.module').then(
                        (module) => module.RestaurantsModule,
                    ),
                canActivate: [roleGuard],
            },
            {
                path: 'error',
                component: ErrorComponent,
            },
            {
                path: '**',
                component: ErrorComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
