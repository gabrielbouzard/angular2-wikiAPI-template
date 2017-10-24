import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private wikiService: WikiService) {
	}

	ngOnInit() {
	}

	onSelect(searchText: string) {
		this.wikiService.search(searchText);
	}

}

