# GSAP Learning Cheatsheet for Students

Hello future animation wizards! I'm here to guide you through the exciting world of GSAP (GreenSock Animation Platform). This cheatsheet is designed to be your trusted companion as you learn to create stunning web animations.

---

## 1. The Absolute Basics: Your First Animations

Everything starts with the `gsap` object. The most fundamental methods are `to`, `from`, and `fromTo`.

*   **`gsap.to(target, vars)`**: Animates *TO* the state you define.
    *   **Think of it as:** "Hey element, I want you to **end up** like this."
    *   **When to use:** The most common type of animation.

*   **`gsap.from(target, vars)`**: Animates *FROM* the state you define.
    *   **Think of it as:** "Hey element, you're going to start here and animate **back to your original style**."
    *   **When to use:** Great for elements that are already visible and you want to animate them into view.

*   **`gsap.fromTo(target, fromVars, toVars)`**: The ultimate control - you define both start and end states.
    *   **Think of it as:** "I want you to start **exactly here** and end **exactly there**."
    *   **When to use:** When you need precise control over both the start and end of the animation.

**Code Example:**
```javascript
// Target can be a CSS selector, a variable, or an array of elements
const myBox = document.querySelector(".box");

// Animate TO a new position
gsap.to(myBox, { x: 500, duration: 2 });

// Animate FROM a position off-screen
gsap.from(myBox, { x: -500, opacity: 0, duration: 2 });

// Animate FROM a specific start TO a specific end
gsap.fromTo(myBox, { x: -200, opacity: 0 }, { x: 200, opacity: 1, duration: 3 });
```

---

## 2. Sequencing Like a Pro: Timelines

Don't try to time your animations with delays! That's a recipe for frustration. Use timelines to create animation sequences.

*   **`gsap.timeline()`**: Creates a container for your animations.

**Why use timelines?**
*   **Control:** Play, pause, reverse, speed up, or slow down the entire sequence.
*   **Organization:** Your code becomes much cleaner and easier to read.
*   **Flexibility:** Easily adjust the timing of individual animations within the sequence.

**Code Example:**
```javascript
const tl = gsap.timeline();

tl.to(".box1", { x: 200, duration: 1 })
  .to(".box2", { y: 100, duration: 1 })
  .to(".box3", { rotation: 360, duration: 1 });
```

---

## 3. Adding Personality: Easing

Easing determines the *style* of motion. Does your animation start fast and end slow? Does it bounce? That's easing!

*   **The `ease` property**: Add this to your `vars` object.

**Common Easing Categories:**
*   **`power` eases (1-4):** The workhorses of easing. `power2.out` is a great starting point.
*   **`back`:** Pulls back a little before moving forward.
*   **`elastic`:** Like an elastic band.
*   **`bounce`:** Bounces at the end.

**Code Example:**
```javascript
gsap.to(".box", {
  x: 500,
  duration: 2,
  ease: "bounce.out" // Give it a bounce!
});
```

---

## 4. Animating Groups: Staggering

Staggering is one of GSAP's most powerful features. It lets you animate a group of elements with a delay between each one.

*   **The `stagger` property**: Add this to your `vars` object.

**Code Example:**
```javascript
// Animate all boxes with a 0.2-second delay between each
gsap.to(".box", {
  y: 100,
  stagger: 0.2
});

// For more control, use a stagger object
gsap.to(".box", {
  y: 100,
  stagger: {
    each: 0.1,
    from: "center"
  }
});
```

---

## 5. The Magic of Scroll: ScrollTrigger

This is where things get really fun. ScrollTrigger lets you trigger animations as you scroll down the page.

**Key ScrollTrigger Properties:**
*   `trigger`: The element that starts the animation.
*   `start` & `end`: When the animation should start and end (e.g., `"top center"`).
*   `scrub`: Links the animation progress directly to the scrollbar.
*   `pin`: Pins an element while the animation is active.
*   `markers`: Shows you the start and end points for easy debugging.

**Code Example:**
```javascript
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%", // When the top of the box hits 80% from the top of the viewport
    scrub: true,
    markers: true
  }
});
```

---

## 6. Perfect Timing: The Position Parameter

When working with timelines, the position parameter gives you Jedi-level control over timing.

*   **`<`**: Starts at the **same time** as the previous animation.
*   **`>`**: Starts **immediately after** the previous animation ends (this is the default).
*   **`+=1`**: Starts 1 second **after** the end of the timeline.
*   **`-=1`**: Starts 1 second **before** the end of the timeline.
*   **Labels**: `tl.addLabel("myLabel").to(..., { ... }, "myLabel")`

**Code Example:**
```javascript
const tl = gsap.timeline();

tl.to(".box1", { x: 200, duration: 2 })
  // Start box2 animation 1 second before box1 finishes
  .to(".box2", { y: 100, duration: 1 }, "-=1");
```

---

## Best Practices for Students

*   **Use the `useGSAP` hook in React:** It automatically handles cleanup for you.
*   **Don't animate `display: none` to `display: block`:** Animate `opacity` and `visibility` instead.
*   **Performance is key:** Animate `transform` properties (`x`, `y`, `scale`, `rotation`) and `opacity` whenever possible. They are much faster for the browser to render.
*   **Read the docs!** The GreenSock documentation is fantastic. If you're stuck, it has the answer.

Happy animating! You've got this.
