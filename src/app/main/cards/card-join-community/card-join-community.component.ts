import { Component, OnInit } from '@angular/core';

import { CardJoinCommunity } from '../../../shared/card-join-community';
import { BaseService } from '../../../shared/base.service';

@Component({
	selector: 'app-card-join-community',
	templateUrl: './card-join-community.component.html',
	styleUrls: ['./card-join-community.component.scss']
})
export class CardJoinCommunityComponent implements OnInit {
	card: CardJoinCommunity;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.joinCommunity;
	}
}
