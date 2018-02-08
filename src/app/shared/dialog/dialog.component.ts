import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() title: string;
  @Input() content: string;
  @Input() acceptText: string;
  @Input() dismissText: string;

  @Output() initialize: EventEmitter<any>;
  @Output() accept: EventEmitter<any>;
  @Output() dismiss: EventEmitter<any>;

  private router: Router;

  private keyHandler: (event: KeyboardEvent) => void;

  constructor(router: Router) {
    this.router = router;

    this.id = 'dialog';

    this.initialize = new EventEmitter();
    this.accept = new EventEmitter();
    this.dismiss = new EventEmitter();
  }

  ngOnInit(): void {
    this.addKeyHandler();
    this.initialize.emit();
  }

  ngOnDestroy(): void {
    this.removeKeyHandler();
  }

  public submit(): void {
    if (this.accept.observers.length > 0) {
      this.accept.emit({
        close: this.close.bind(this)
      });
    } else {
      this.close();
    }
  }

  public cancel(): void {
    if (this.dismiss.observers.length > 0) {
      this.dismiss.emit({
        close: this.close.bind(this)
      });
    } else {
      this.close();
    }
  }

  private close(): void {
    const outlets = {};
    outlets[this.id] = null;
    this.router.navigate(['', { outlets: outlets }]);
  }

  private addKeyHandler(): void {
    this.keyHandler = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 13: // Enter
          this.submit();
          break;
        case 27: // Escape
          this.cancel();
          break;
      }
    };
    window.document.addEventListener('keydown', this.keyHandler);
  }

  private removeKeyHandler(): void {
    window.document.removeEventListener('keydown', this.keyHandler);
  }
}
