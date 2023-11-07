import { Component, OnInit } from '@angular/core';

import { CardWhyUs } from '../../../shared/card-why-us';
import { BaseService } from '../../../shared/base.service';

@Component({
	selector: 'app-card-why-us',
	templateUrl: './card-why-us.component.html',
	styleUrls: ['./card-why-us.component.scss']
})
export class CardWhyUsComponent implements OnInit {
	card: CardWhyUs;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.whyUs;
	}
}
