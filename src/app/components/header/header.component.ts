import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    pageTitle: string = 'Gestión de inventario';
    @Input() subtitle;

    constructor() {

    }

    ngOnInit() {

    }

}