import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service'

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

	searchHistory: Array<string>;

	constructor(private wikiService: WikiService) { }

	ngOnInit() {
		this.wikiService.currentHistory.subscribe(searchHistory => this.searchHistory = searchHistory)
	}

}
