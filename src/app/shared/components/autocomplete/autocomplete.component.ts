import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RestaurantDataService } from '@core/service/restaurant-data/restaurant-data.service';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
    myControl = new FormControl('All Restaurants');
    options: string[] = ['All Restaurants', 'Pizza Palace', 'Burger Bistro'];
    filteredOptions!: Observable<string[]>;
    restaurantDataService = inject(RestaurantDataService);

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || '')),
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter((option) =>
            option.toLowerCase().includes(filterValue),
        );
    }

    onOptionSelected(event: MatAutocompleteSelectedEvent) {
        this.restaurantDataService.setRestaurant(
            this.options.indexOf(event.option.value),
        );
    }
}
