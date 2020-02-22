////////////////////////////////////////////////////////////////
//                          Spy Decorator                     //
////////////////////////////////////////////////////////////////

// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

function work(a, b) {
    // alert(a + b); // work is an arbitrary function or method
}

function spy(func) {
    let f = function(...args) {
        f.calls.push(args);
        return func.apply(this, args);
    };

    f.calls = [];
    return f;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    // alert("call:" + args.join()); // "call:1,2", "call:4,5"
}

////////////////////////////////////////////////////////////////
//                       Delaying Decorator                   //
////////////////////////////////////////////////////////////////

// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

let f5000 = delay(alert, 5000);
f5000("hello after 5");

////////////////////////////////////////////////////////////////
//                       Debounce Decorator                   //
////////////////////////////////////////////////////////////////

// The result of debounce(f, ms) decorator should be a wrapper that passes the call to f at maximum once per ms milliseconds.

function debounce(f, ms) {
    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => (isCooldown = false), ms);
    };
}

let f = debounce(console.log, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)

////////////////////////////////////////////////////////////////
//                       Throttle Decorator                   //
////////////////////////////////////////////////////////////////

// Create a “throttling” decorator throttle(f, ms) – that returns a wrapper, passing the call to
// f at maximum once per ms milliseconds. Those calls that fall into the “cooldown” period, are ignored.

// first time, the function should be called immediately. It should set a timer
// second time, if the timer is going, it should be set to run once the timer is up.
// third time, if the timer still is going, it should be set to run once the timer is up.
// once the timer is up, it should run the function, then set another timer.

function throttle(f, ms) {
    let _args;
    let inTimeout;

    return function(...args) {
        if (inTimeout) {
            _args = args;
            return;
        }
        inTimeout = true;
        setTimeout(() => {
            inTimeout = false;
            if (_args) return f.apply(this, _args);
        }, ms);
        return f.apply(this, args);
    };
}

let throttle1000 = throttle(console.log, 1000);

throttle1000("should show immediately");
throttle1000("shouldn't show");
throttle1000("should show after 1000ms");
