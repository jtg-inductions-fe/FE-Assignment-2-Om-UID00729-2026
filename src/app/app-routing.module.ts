import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth-guard/auth.guard';
import { unauthGuard } from '@core/guards/unauth-guard/unauth.guard';
import { ErrorComponent } from '@core/components/error/error.component';

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
    },
    {
        path: 'restaurants',
        loadChildren: () =>
            import('@features/restaurants/restaurants.module').then(
                (module) => module.RestaurantsModule,
            ),
        canActivate: [unauthGuard],
    },
    {
        path: '**',
        component: ErrorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
