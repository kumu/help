---
layout: default
name: "Perspectives (Basic)"
---

Perspectives allow you to decorate and filter your map, building multiple perspectives and easily switching between them.  Size elements by level of influence, change connection width by strength of relationship, color elements based on status, even add icons for certain types of elements. Contine reading to learn how to make the most of perspectives.

## Editing the perspective

Each project comes with a default perspective that is active when the project is created. To edit the perspective, click the "edit perspective" link on the map overview. You'll be taken a new pane with three sections: **decorations**, **filters** and **advanced**.

Add a description to your perspective to give context for what you're trying to bring attention to with the perspective. The first paragraph of the description will also show in the map legend.

Make sure you've read the tutorials on decorating elements and connections before continuing:

* [Decorating Elements](/basics/decorations.html#decorating-elements)
* [Decorating Connections](/basics/decorations.html#decorating-connections)

## Decorations

### Element decorations

Click the "decorate elements" button to add a new decoration. You can hover over any existing decorations and click the pencil icon to edit the decoration. Delete the decoration by clicking the red "x".

Decorations will be applied top to bottom so you can layer decorations that may otherwise conflict with each other.

### Connection decorations

Click the "decorate connections" button to add a new decoration. You can hover over any existing decorations and click the pencil icon to edit the decoration. Delete the decoration by clicking the red "x".

Decorations will be applied top to bottom so you can layer decorations that may otherwise conflict with each other.

## Filters

Filters are a powerful way to hide elements and connections and create different views of your map. You can filter by type or create a custom selector.

### By type
You can easily filter elements and connections by type using the checkboxes within the filter section. Simply uncheck any element types that you don't want to display on the map. You can do the same with connection types.

### By selector (coming soon!)
You can also add filters based on any selector. This gives you a lot of power to change what is displayed on your map. Simply use the selector builder to create a selector that matches what you want to have displayed on the map.


## Advanced CSS

Below the surface perspectives are controlled by stylesheets. Styles are parsed via [LESS](http://lesscss.org/) so you have the full suite of [variables](http://lesscss.org/#-variables), [operations](http://lesscss.org/#-operations), and [color manipulation functions](http://lesscss.org/#reference) at your disposal.

If you're comfortable with CSS, we highly recommend using the advanced editor. Read the [CSS Selector](/references/css-selector-reference.html) and [CSS Property](/references/css-property-reference.html) references to learn all that you have available. Below are a few of the custom decorations that you can try using in the advanced mode:

### Elements
```
element {
 size: 20;
 color: #fafafa;
 shadow-size: 1.5;
 shadow-opacity: 0.6;
 stroke-width: 2;
 stroke-color: #333;
}
```

### Connections
```
connection {
 width: 5;
 color: #888;
 pattern: dashed;
}
```

### Loops
```
loop {
 font-color: #7B6834;
 font-weight: 700;
 font-size: 28;
}
```

## Other perspective tips

### Have a clear purpose for your perspective

The most powerful perspectives are clear in their purpose. What are you trying to bring to life through this perspective? What is the question you are trying to answer? Use these questions to help shape and prioritize your decorations and filters.

### Build from a base perspective

If you are building multiple perspectives that share many of the same decorations, we recommend first building one "base" perspective that includes the common decorations across each of the perspectives. You can then copy the "base" perspective and add other decorations as needed.


