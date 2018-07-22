import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromManager from './teamManager';

const routes: Routes = [
    {
        path: '', 
        redirectTo: 'players', 
        pathMatch: 'full'
    },
    {
        path: 'players',
        component: fromManager.PlayerManagerComponent,
        children: [
            {
                path: '',
                pathMatch: 'prefix', 
                redirectTo: 'list',
            },
            {
                path: 'list',
                component: fromManager.PlayerListComponent,
            },
            {
                path: 'addplayer',
                component: fromManager.PlayerFormComponent,
            }
        ]
    },
    {
        path: 'status/game',
        component: fromManager.StatusManagerComponent,
        children: [
            {
                path: '',
                pathMatch: 'prefix', 
                redirectTo: '1',
            },
            {
                path: ':game',
                component: fromManager.GameComponent,
            }
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }