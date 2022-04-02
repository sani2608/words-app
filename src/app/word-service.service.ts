import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordServiceService {
  constructor() {}

  private wordList: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  public sizeOfList():number {
    return this.wordList.length;
  }
  public isWordPresentInList(word: string): boolean {
    if (this.wordList.includes(word)) return true;
    else return false;
  }

  public addWord(word: string): void {
    this.wordList.unshift(word);
  }
  public deleteWord(index: number): void {
    this.wordList.splice(index, 1);
  }
  public getWordList(): string[] {
    return this.wordList;
  }
}
