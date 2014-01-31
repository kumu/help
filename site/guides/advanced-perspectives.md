---
layout: default
name: "Perspectives (Advanced)"
---

We've intentionally limited the decorations available through the builder to keep the UI simple
and avoid overwhelming new users.

In order to harness the full power of perspectives, you'll need to roll up your sleeves and
do a little coding. Don't be scared! Beneath the surface perspectives are controlled by css and
it's a very easy language to learn.  Let us show you how.

# Getting Started

Click on the Advanced tab and you'll see the css editor:

![default perspective](/images/default-perspective.png)

The basic syntax goes like this:

```
selector {
  property: value;
}
```

First you decide what you want to decorate (the selector), and then you decide how you want
to decorate it (through properties and values). Piece of cake! Let's dive in.

## Step 1: Pick your target

Becoming comfortable writing selectors by hand is the first step to mastering perspectives.

The selector can be a single selector, or a comma-separated list of selectors:

```
person                         // all people
#joe, #jane                    // just the elements labelled "Joe" and "Jane"
project.pending[priority=high] // all high priority projects tagged "pending"
```

<p class="alert alert-info">
  The full list of supported selectors can be found in our
  <a href="/references/css-selector-reference.html">CSS Selector Reference</a>.
</p>

## Step 2: Build your decorations

Now it's time to do some decorating! Below we'll increase Jack's size, change his color and add a shadow:

```
#jack {
  size: 40;
  color: #3596c0;
  shadow-color: #ccc;
}
```

![decorate](/images/person-shadow.png)

<p class="alert alert-info">
  The full suite of available properties can be found in our
  <a href="/references/css-property-reference.html">CSS Property Reference</a>.
</p>

## Step 3: Add it to the legend (optional)

If you want to include the decoration in the legend, simply add a comment:

```
/* Person */
element["element type"="person"]{
  color: #3596c0;
  size: 40;
  shadow-color: #ccc;
}
```

## And you're done!

Congrats! That's all there is to it.

Don't worry if writing perspectives by hand is bit challenging at first.
You'll get the hang of it in no time and we're here to help if you have questions.

If that was all a little too easy for you then head over to our
[Mastering Perspectives](/guides/mastering-perspectives.html) guide.
