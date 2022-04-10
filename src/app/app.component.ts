import { Component, OnInit } from '@angular/core';
import { WordServiceService } from './word-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.updateWordList();
    // this.service.gethttpData().subscribe((data) => {
    //   console.log(data);
    // });
  }
  constructor(private service: WordServiceService) {}
  word = '';
  wordList: string[] = [];

  title = 'words-app';

  public onAddWord(word: any): void {
    if (!word) {
      alert('Please enter a word');
      return;
    }

    if (this.service.isWordPresentInList(word.toLowerCase())) {
      alert('Word already exists');
      return;
    }

    if (this.wordList.length === 10) {
      alert(
        'You have reached the maximum number of words! try to delete some words'
      );
    } else {
      this.service.addWord(word.toLowerCase());
      this.updateWordList();
    }
  }

  public deleteWord(index: any): void {
    this.service.deleteWord(index);
    this.updateWordList();
  }

  // public getLengthOfWordList(): number {
  //   return this.service.sizeOfList();
  // }
  public updateWordList(): void {
    this.wordList = this.service.getWordList();
  }
}
