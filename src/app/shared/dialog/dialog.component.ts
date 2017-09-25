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
  @Input() accept: string;
  @Input() dismiss: string;

  @Output() onInitialize: EventEmitter<any>;
  @Output() onAccept: EventEmitter<any>;
  @Output() onDismiss: EventEmitter<any>;

  private router: Router;

  private keyHandler: (event: KeyboardEvent) => void;

  constructor(router: Router) {
    this.router = router;

    this.id = 'dialog';

    this.onInitialize = new EventEmitter();
    this.onAccept = new EventEmitter();
    this.onDismiss = new EventEmitter();
  }

  ngOnInit(): void {
    this.addKeyHandler();
    this.onInitialize.emit();
  }

  ngOnDestroy(): void {
    this.removeKeyHandler();
  }

  public submit(): void {
    if (this.onAccept.observers.length > 0) {
      this.onAccept.emit({
        close: this.close.bind(this)
      });
    } else {
      this.close();
    }
  }

  public cancel(): void {
    if (this.onDismiss.observers.length > 0) {
      this.onDismiss.emit({
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
        case 13:
          this.submit();
          break;
        case 27:
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
