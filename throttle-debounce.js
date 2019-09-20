// Throttling is a straightforward reduction of the trigger rate.
// It will cause the event listener to ignore some portion of the events
// while still firing the listeners at a constant (but reduced) rate.

// Throttling is used when you want to track the user’s activity,
// but you can’t keep up with a high trigger rate because
// you’re doing some heavy-lifting each time the event is triggered.
// One very common example is scrolling where you want your interface to react
// in response to the scroll position (e.g., real and fake parallax effects, sticky menus, etc).

function throttled(delay, fn) {
  let runThrottle = true;
  return function(...args) {
    setTimeout(() => {runThrottle = true}, delay);
    if (runThrottle) {
      runThrottle = false;
      fn(...args);
    }
  }
}

// Unlike throttling, debouncing is a technique of keeping the trigger rate
// at exactly 0 until a period of calm, and then triggering the listener exactly once.

// Debouncing is used when you don’t need to track every move user makes
// as long as you can make a timely response. A common example is a widget
// that reacts to user typing. We normally assume that users will not care about
// what goes on the screen while they are typing, but want to see the result
// as soon as they are done. This assumption is (ab)used to, for example,
// reduce the number of AJAX requests we make to obtain autocompletion
// candidates and thus conserve server resources.

function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
  }
