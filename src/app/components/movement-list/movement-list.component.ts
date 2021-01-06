import { Component, OnInit } from '@angular/core';
import { MovementListItem } from 'src/app/model/movement-list-item.model';
import { MovementService } from 'src/app/services/movement.service';

import { RoutingService } from '../../routing/routing.service';

@Component({
    selector: 'movement-list',
    templateUrl: './movement-list.component.html'
})

export class MovementListComponent implements OnInit {

    loading: boolean = false;
    movementListItems: MovementListItem[] = [];

    constructor(
        private movementServive: MovementService
    ) {}

    ngOnInit() {
        this.findAllMovements();
    }

    private findAllMovements(): void {

        this.loading = true;

        this.movementServive.getAllProductMovements().subscribe(
            (response: MovementListItem[]) => {
                console.log( response );
                this.movementListItems = response;
            }
        ).add( () => this.loading = false );

    }

}