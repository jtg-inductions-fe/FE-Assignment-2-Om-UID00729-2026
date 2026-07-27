import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsListComponent } from './pages/restaurants-list/restaurants-list.component';
import { RestaurantFormComponent } from './pages/restaurant-form/restaurant-form.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantsListComponent,
    },
    {
        path: 'add',
        component: RestaurantFormComponent,
    },
    {
        path: 'edit',
        component: RestaurantFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
