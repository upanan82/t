import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as Fuse from 'fuse.js';
import { ITest, test, images } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('input')
  public input: ElementRef;

  public result: string[] = [];

  public score: number = null;

  public images = images;

  public dblShow = false;

  private fuse: Fuse<ITest, Fuse.FuseOptions<ITest>> = null;

  private _searchText = '';

  constructor() {
    const options: Fuse.FuseOptions<ITest> = {
      shouldSort: true,
      includeScore: true,
      threshold: 0.2,
      location: 0,
      distance: 9,
      maxPatternLength: 32,
      minMatchCharLength: 32,
      keys: [
        'question'
      ]
    };

    for (;;) {
      const secure = prompt();

      if (secure === '1123') {
        break;
      }
    }

    this.fuse = new Fuse(test, options);
  }

  public get searchText(): string {
    return this._searchText;
  }

  public set searchText(val: string) {
    this._searchText = val.trim();

    if (!!val) {
      this.search();
    }
  }

  @HostListener('window:dblclick')
  public dblclick(): void {
    this.dblShow = true;
  }

  @HostListener('window:blur')
  public blur(): void {
    this.clear();
  }

  @HostListener('window:click')
  public async click(): Promise<void> {
    this.clear();
    await this.focus();
  }

  @HostListener('window:focus')
  public async windowFocus(): Promise<void> {
    this.clear();
    await this.focus();
  }

  private search(): void {
    const result: any = this.fuse.search(this._searchText);

    if (!result.length) {
      this.result = [];
      this.score = null;
    } else {
      this.result = result[0].item.answer;
      this.score = result[0].score;
    }
  }

  private clear(): void {
    this.searchText = '';
    this.result = [];
    this.score = null;
    this.dblShow = false;
  }

  private async focus(): Promise<void> {
    await setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }
}
