import { Component, OnInit } from '@angular/core';

import { CardMonthlySubscription } from '../../../shared/card-monthly-subscription';
import { BaseService } from '../../../shared/base.service';

@Component({
	selector: 'app-card-monthly-subscription',
	templateUrl: './card-monthly-subscription.component.html',
	styleUrls: ['./card-monthly-subscription.component.scss']
})
export class CardMonthlySubscriptionComponent implements OnInit {
	card: CardMonthlySubscription;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.monthlySubscription;
	}
}
