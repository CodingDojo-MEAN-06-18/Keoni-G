import { components } from './components';
import { pipes } from './pipes';
import { services } from './services';

export const declarations = [
    ...pipes,
    ...components
];

export const providers = [
    ...services,
]