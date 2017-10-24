import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WikiService } from './wiki.service';
import { WikiSearchComponent } from './wiki-search.component';
import { JsonpModule } from '@angular/http';
import { GifyService } from './gify.service';

const appRoutes: Routes = [
	{path: 'search-history', component: SearchHistoryComponent},
	{path: '**', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
	imports: [
		BrowserModule,
		JsonpModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		),
	],
	declarations: [
		AppComponent,
		SearchHistoryComponent,
		WikiSearchComponent,
	],
	providers: [WikiService, GifyService],
	bootstrap: [AppComponent]
})
export class AppModule { }
