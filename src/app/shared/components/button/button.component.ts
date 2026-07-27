import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() variant: 'flat' | 'raised' | 'stroked' | 'basic' | 'icon' =
        'raised';
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
    @Input() disabled = false;
    @Input() type: 'submit' | 'button' | 'reset' = 'button';
    @Input() label = '';
    @Input() iconLabel = '';
}
