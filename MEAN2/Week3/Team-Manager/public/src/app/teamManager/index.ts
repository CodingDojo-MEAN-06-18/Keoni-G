import { GameComponent } from './game/game.component';
import { ManagerComponent } from './manager/manager.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';
import { StatusManagerComponent } from './status-manager/status-manager.component';

export const components: any[] = [
    GameComponent,
    ManagerComponent,
    PlayerFormComponent,
    PlayerListComponent,
    PlayerManagerComponent,
    StatusManagerComponent
];

export * from './game/game.component';
export * from './manager/manager.component';
export * from './player-form/player-form.component';
export * from './player-list/player-list.component';
export * from './player-manager/player-manager.component';
export * from './status-manager/status-manager.component';