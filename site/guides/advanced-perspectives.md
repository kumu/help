---
layout: default
name: "Perspectives (Advanced)"
---

While you can achieve lots of useful decorations using the built-in decorations and filters, you'll be able to unlock even more features by getting comfortable using the Advanced CSS mode. Keep reading to learn all that you can do.

## Getting Started with Advanced CSS

Activate the perspective you want to edit and then switch to the perspective pane on the sidebar. Click on the Advanced tab and you'll see a text entry area. This is where you add the advanced CSS.

<img src="/images/default-perspective.png" alt="Default Perspective">

You have a whole set of [CSS properties](/references/css-property-reference.html) to use for changing the look and feel of your map and bringing key aspects of your data to life. We'll walk through how to build a custom decoration step by step:

### Step 1: Build your selector

The first step is to build the selector of what you want to decorate (for the full list of CSS selectors, [click here](/references/css-selector-reference.html)). In this example we'll build a selector for all elements with the type "people."

```
element["element type"="person"]

```
### Step 2: Build your decoration

Now it's time to choose how you want to decorate people. We'll increase the size, change the color and add a shadow:

```
element["element type"="person"]{
     color: #3596c0;
     size: 40;
     shadow-color: #ccc;
}
```
<img src="/images/person-shadow.png" alt="Step 2">

### Step 3: Decide whether you want an entry in the legend

Each decoration you build can optionally be included in the legend on the map. To do this, simply add a comment before the decoration:

```
/* Person */
element["element type"="person"]{
     color: #3596c0;
     size: 40;
     shadow-color: #ccc;
}
```
### You're done!

## Other Decorations

Now that you know the basics of using the advanced mode, it's time to go wild by diving deep into the available [CSS properties](/references/css-property-reference.html). Some of our favorites are listed below:

* **font-weight** (bold certain types of labels to make them stand out)
* **text-align** (use "center" as the value to have the label text show up in the middle of the circle)
* **scale** (using scale changes the size of both the element and the label, great for getting labels to stand out)
* **pattern** (use "dashed" to make dotted lines, great for opposite connections on system maps)

[Make sure to explore the full list!](/references/css-property-reference.html)

## High Performance Mode (for large maps)

The default mapping engine is optimized for creating great looking maps. As you start working with larger and larger maps (1000+ elements) or you experience slowness on your computer, try shifting to our high performance mode. You can do this by hitting the **q** keystroke or by adding the following to your advanced CSS:

```
@settings {
     quality: fast;
}
```
You'll notice that connections are no longer curved and that elements are squares instead of circles. You should now be able to map much larger maps (5,000 - 10,000 elements) with a powerful computer.

## Light and Dark Themes

Not a fan of our light theme? You've got options! By default the map has an off-white background. If you'd like to change to a dark theme, simply add the below code:

```
@settings {
     theme: dark;
}
```
<img src="/images/person-shadow-dark.png" alt="Dark Theme">

## Preset Focus

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

