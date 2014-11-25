---
layout: default
name: "Mastering Perspectives"
---

Now that you've mastered the basics of advanced perspectives, it's time to
dive deep into the [available properties](/references/css-property-reference.html).

Below we've highlighted the ones we commonly find most useful.

# Element decorations

```
element {
  size: 20;     // base size
  scale: 2;     // multiple of base size (also scales labels)
  margin: 10;   // space between border and connections
  padding: 20;  // space between border and image / bullseye
  text-align: center;
  image: url(http://www...);
}
```

# Connection decorations

```
connection {
  width: 1;     // base width
  scale: 2;     // multiple of base width (also scales labels)
  pattern: dashed;
}
```

# Common decorations

The following properties come in handy for all types of decorations:

## Font styles

```
element {
  font-size: 20;
  font-weight: bold;
  font-family: "Helvetica Neue", sans-serif;
}
```

# @settings

If you're interested in working with `@settings` you truly have become a perspective master.
We salute you!

Let us show you some of the neat things you can do here:

## Default styles

If you want to set default styles that apply across the entire map, it's much more
efficient to assign them through the settings block.

```
@settings {
  font-size: 20;
  font-family: "Helvetica Neue", sans-serif;
}
```

## Background color

Not a fan of our light theme? Changing the background color is easy:

```
@settings {
  background-color: #252525;
}
```

![dark background](/images/person-shadow-dark.png)

For dark backgrounds, make sure to change the theme too (see below) or things can get ugly!

## Light and dark themes

Kumu's default theme looks great on light backgrounds, but it looks horrible on dark ones.
If you're using a dark background, make sure to change to the dark theme:

```
@settings {
  theme: dark;
  background-color: #252525;
}
```

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

You can use any [selector](/basics/selectors.html) to set the focus of the map. For example, you could set the focus to show only influential people, out 2 degrees:

```
@settings {
  focus: person["level of influence"="High"] out 2;
}
```

## Prompted mode

Prompted mode builds on the preset focus by allowing users to build a map based on search criteria. When you've enabled prompted mode, users are presented with a search prompt rather than seeing the map. Users can then type the name of any element and hit enter to add them to the list of elements to be included in the map. By default that element and its direct connections will be included, but you can tweak the "out 1" setting to also include second and third degree connections.

![prompted mode](/images/prompted-mode.png)

Click build map and voila!

![the map](/images/prompted-results.png)

Hit escape on your keyboard to start over, or use the focus menu and choose "back to prompt" to edit the current map.

![focus prompt](/images/focus-prompt.png)

To enable prompted mode, you'll need to add the following to the advanced tab of any perspective you'd like it active within:

```
@settings {
  focus: prompt;
}
```

## Render quality (for large maps)

The default mapping engine is optimized for creating great looking maps. As you start working with larger and larger maps (1000+ elements) or you experience slowness on your computer, try shifting to our high performance mode. You can do this by hitting the **q** keystroke or by adding the following to your advanced CSS:

```
@settings {
  quality: fast;
}
```

You'll notice that connections are no longer curved and that elements are squares instead of circles. You should now be able to map much larger maps (5,000 - 10,000 elements) with a powerful computer.

