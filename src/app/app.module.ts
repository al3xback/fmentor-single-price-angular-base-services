import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './main/cards/cards.component';
import { CardJoinCommunityComponent } from './main/cards/card-join-community/card-join-community.component';
import { CardMonthlySubscriptionComponent } from './main/cards/card-monthly-subscription/card-monthly-subscription.component';
import { CardWhyUsComponent } from './main/cards/card-why-us/card-why-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		CardsComponent,
		CardJoinCommunityComponent,
		CardMonthlySubscriptionComponent,
		CardWhyUsComponent,
		FooterComponent
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
