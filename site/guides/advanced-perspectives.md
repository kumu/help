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

# Other Decorations

Now that you know the basics of using the advanced mode, it's time to go wild by diving deep into the available [CSS properties](/references/css-property-reference.html). Some of our favorites are listed below:

* **font-weight** (bold certain types of labels to make them stand out)
* **text-align** (use "center" as the value to have the label text show up in the middle of the circle)
* **scale** (using scale changes the size of both the element and the label, great for getting labels to stand out)
* **pattern** (use "dashed" to make dotted lines, great for opposite connections on system maps)

[Make sure to explore the full list!](/references/css-property-reference.html)

# High Performance Mode (for large maps)

The default mapping engine is optimized for creating great looking maps. As you start working with larger and larger maps (1000+ elements) or you experience slowness on your computer, try shifting to our high performance mode. You can do this by hitting the **q** keystroke or by adding the following to your advanced CSS:

```
@settings {
  quality: fast;
}
```
You'll notice that connections are no longer curved and that elements are squares instead of circles. You should now be able to map much larger maps (5,000 - 10,000 elements) with a powerful computer.

# Light and Dark Themes

Not a fan of our light theme? You've got options! By default the map has an off-white background. If you'd like to change to a dark theme, simply add the below code:

```
@settings {
  theme: dark;
}
```
<img src="/images/person-shadow-dark.png" alt="Dark Theme">

# Preset Focus

Focus is a powerful feature that let's you hone in on certain portions of your map. Instead of only being able to activate a focus by clicking and holding on the map, we support the ability to include a focus within any perspective.

```
@settings {
  focus: #jack out 2;
}
```
The above will load the map with Jack and any other elements that are within 2 degrees. You can add multiple hubs by using a comma to separate them:

```
@settings {
  focus: #jack out 2, #companyxyz out 1;
}
```
This will load the map with Jack and any other elements that are within 2 degrees, as well as Company XYZ and any elements that are directly connected.

