
import { SetMetadata } from '@nestjs/common';
import { Roles } from '../../constants/Roles';

/**
 * Allow only specified roles to access a specific route
 * @param roles
 * @constructor
 */
export const RolesAllowed = (...roles: Roles[]) => SetMetadata('roles', roles);
