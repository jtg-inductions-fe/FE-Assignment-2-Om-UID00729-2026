import { CanActivateFn } from '@angular/router';

export const unsavedChangesGuard: CanActivateFn = () => {
    return true;
};
