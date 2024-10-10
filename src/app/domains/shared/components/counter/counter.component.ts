import { Component, Inject, Input, PLATFORM_ID, signal, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  interval$: Subscription | null = null;

  constructor(@Inject(PLATFORM_ID) private plataformId: object) {
    // NO ASYNC
    // before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.interval$ = interval(1000).subscribe(() => { 
       //console.log(this.counter()); 
      this.counter.update(value => value + 1);
    });
  }

  ngAfterViewInit(){
    // after render 
    // handle child changed
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    this.interval$?.unsubscribe();
  }

  doSomething() {
    console.log('change duration')
    // async
  }
}
