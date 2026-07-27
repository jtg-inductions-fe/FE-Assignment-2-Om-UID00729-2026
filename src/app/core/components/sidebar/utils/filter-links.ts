import { ROLES } from '@core/constants/role';
import { sideBarModel } from '../models/sidebar.model';

export const filterLinks = (
    links: sideBarModel[],
    userRole: ROLES | undefined,
): sideBarModel[] => {
    return links
        .filter((link) => {
            if (!link.role || link.role.length === 0) {
                return true;
            }
            return !!userRole && link.role.includes(userRole);
        })
        .map((link) => {
            if (link.children && Array.isArray(link.children)) {
                return {
                    ...link,
                    children: filterLinks(link.children, userRole),
                };
            }
            return link;
        });
};
