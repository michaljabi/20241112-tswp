import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';

@Component({
  template: `
    <h2>Strona nie istnieje</h2>
    <p class="alert alert-warning">
        Niestety strona <code>{{url}}</code> nie została odnaleziona
    </p>
  `,
  styles: [
  ]
})
export class A404pageComponent implements OnInit, OnDestroy {

  url = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Ten zapis jest niestety STATYCZNY ! (po przerwie... wyjaśnienie)
    this.activatedRoute.url.subscribe((urls: UrlSegment[]) => {
        // console.log(urls);
        this.url = this.router.url;
        console.log(urls.map((s: UrlSegment) => s.path).join('/'));
    });
    this.activatedRoute.params.subscribe((params: Params) => {
        console.log('params:', params);
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('queryParams:', params);
    });
    console.log('A404pageComponent MOUNTED on DOM !');
    // wrócimy do:
    // domyślnie router nawiguje absolutnie:
    // this.router.navigate(['auctions']);
    // ale możemy to zmienić na nawigowanie relatywne (przydatne przy child-routingu)
    // this.router.navigate([90], {relativeTo: this.activatedRoute});
  }

  ngOnDestroy(): void {
    console.log('OnDestroy!');
  }

}
