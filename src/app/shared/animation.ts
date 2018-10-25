import { animate, animateChild, group, query as q, sequence, style, transition, trigger } from '@angular/animations';


const query = (s, a, o= {optional: true}) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(-100%)' }))
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);


