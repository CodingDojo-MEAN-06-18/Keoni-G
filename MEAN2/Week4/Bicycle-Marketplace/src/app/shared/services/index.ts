import { BikeService } from './bike.service';
import { AuthService } from './auth.service';

export const services: any[] = [AuthService, BikeService];

export * from './auth.service';
export * from './bike.service';
