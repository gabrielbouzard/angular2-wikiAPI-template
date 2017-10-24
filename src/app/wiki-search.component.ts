import { Component, Input, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WikiService } from './wiki.service';
import { GifyService } from './gify.service';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-wiki-search',
	template:`
	<form class="pure-form">
		<fieldset>
			<input name="searchText" [(ngModel)]="searchText" #change>
			<button (click)="onClick(change.value)" class="pure-button pure-button-primary">Search</button>
		</fieldset>
	</form>
	<h2>Wikipedia Search</h2>
	<img [src]="imagePath" />
	<ul>
		<li style="list-style: none" *ngFor="let item of wikiItems | async">{{ item }}</li>
	</ul>
	`
})

export class WikiSearchComponent {

	wikiItems: Promise<Array<string>>;
	gifyItems: Promise<Array<string>>;
	imagePath: string;
	term = '';

	constructor(private wikiService: WikiService, private gifyService: GifyService) {
		const startTime = Date.now();
	}

	onClick(searchText: string) {
		this.term = searchText;
		this.wikiItems = this.wikiService.search(searchText);
		this.gifyItems = this.gifyService.searchGif(searchText)[0];
	}

}