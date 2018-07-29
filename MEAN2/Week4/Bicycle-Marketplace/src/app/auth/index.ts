import { components } from './components';
import { containers } from './containers';
import { guards } from './guards';

export const declarations = [
    ...components,
    ...containers
];

export const providers = [
    ...guards,
];