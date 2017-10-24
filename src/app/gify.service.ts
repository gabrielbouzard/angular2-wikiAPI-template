import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

@Injectable()
export class GifyService {

	constructor(private jsonp: Jsonp) {}

	searchGif(term: string) {

		var t = this.jsonp.get('https://api.giphy.com/v1/gifs/search?api_key=[fCMw0E08Gn68N3JUyfAsf0oguDtMHiZo]&q=' + term + '&limit=5&offset=0&rating=G&lang=en').toPromise();
		console.log(t[0]);
		return this.jsonp.get('https://api.giphy.com/v1/gifs/search?api_key=[fCMw0E08Gn68N3JUyfAsf0oguDtMHiZo]&q=' + term + '&limit=5&offset=0&rating=G&lang=en');


	}

}
