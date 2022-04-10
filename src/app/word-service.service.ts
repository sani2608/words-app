import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordServiceService {
  constructor(private http: HttpClient) {}

  private wordList: string[] = ['sani', 'saurabh', 'vikram'];

  public sizeOfList(): number {
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

  //could not complete this part
  public gethttpData() {
    return this.http.get('/api/wordlist');
  }
}
