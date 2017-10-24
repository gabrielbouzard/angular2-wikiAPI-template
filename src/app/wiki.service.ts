import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class WikiService {

	history: Array<string>;

	constructor(private jsonp: Jsonp) {}

	private searchHistory = new BehaviorSubject<Array<string>>(
		this.history = [],
	);

	currentHistory = this.searchHistory.asObservable();

	search(term: string) {

		this.history.push(term + ": " + Date.now());
		var search = new URLSearchParams();
		search.set('action', 'opensearch');
		search.set('search', term);
		search.set('format', 'json');
		return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search }).map((request) => request.json()[1]).toPromise();

	}

}
