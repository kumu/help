---
layout: default
name: "Perspectives"
---

Perspectives allow you to decorate and filter your map and consist of three main sections: decorations, filters, and advanced css. You can build multiple perspectives and easily switch between them.  Size elements by level of influence, change connection width by strength of relationship, color elements based on status, even add icons for certain types of elements. Contine reading to learn how to make the most of perspectives.

## Creating a Perspective

Navigate to the perspectives pane on the sidebar and then click the blue "Create New Perspective" button. You'll be prompted to choose a name for the perspective. Choose a name that is descriptive of the insights you are working to bring to life through the perspective.

You can also add a description to the perspective to give additional detail. The first paragraph of the description will be shown in the legend on the map and all other paragraphs will only show up in the sidebar.

## Perspective Options

Read the mini tutorials for each of the below to learn how to use their full power.

* [Decorating Elements](/basics/decorations.html#decorating-elements)
* [Decorating Connections](/basics/decorations.html#decorating-connections)
* [Filtering Elements and Connections](= #filters)
* [Advanced: Custom CSS Based Editor](= #advancedcss)

## Using Perspectives to Create a Base Style

If you name your perspective the same as your map name, we'll create a special type of perspective that is the default perspective for your map. It will hide the legend label and allow you to create a base style to use on your map.

## Building From a Common Perspective

If you are building multiple perspectives that share many of the same decorations, we recommend first building one "base" perspective that has the common decorations across each of the perspectives. You can then use the copy button to duplicate the "base" perspective and add any other decorations that are needed.

## Filters
Filters are a powerful way to hide elements and connections and create different views of your map. You can filter by type or create a custom selector.

### By Type
You can easily filter elements and connections by type using the checkboxes within the filter section. Simply uncheck any element types that you don't want to display on the map. You can do the same with connection types.

### By Selector
You can also add filter based on any selector. This gives you a lot of power to change what is displayed on your map. Simply use the selector builder to create a selector that matches what you want to have displayed on the map.

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
