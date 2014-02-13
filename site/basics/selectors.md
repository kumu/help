---
layout: default
name: "Using Selectors"
---

Selectors are how you tell Kumu what you want to decorate, filter, focus, etc. You can either build the selector using our handy selector builder (look for the rocket icon once you click on search)

![selector rocket](/images/selector-rocket.png)

...or you can build them by hand (you'll need to know how to do this for using advanced perspectives). Let's walk through the basics of how to build your own selectors:

## Writing Your First Selectors

### Selecting All Elements, Connections, or Loops
To select all elements, or all connections, or all loops, simply include the singular name of which entity you want to select (```element``` or ```connection```). Say we want to decorate all elements red. Here's the selector and the decoration:

```
element {
  color: #C72026;
}
```

### By Type

We've added a shortcut to make selecting by type (whether element or connection type) much easier. For elements types, simply use the name of the type itself (```person``` or ```organization```). For connection types, use the name of the type and then add "-connection" (```personal-connection``` or ```busines-connection```).

### By Label

To select by type, start the selector with "#" and then include the lable, without any spaces or special characters. That means the selector for "Yes We Can!" is ```#yeswecan```.

### By Tag

There are two ways to select by tag, the short way and the long way, depending on whether you're using tags as single words or more broadly. For single word tags without any special characters, simply add a period before the tag name (```.influential```). If you have multiple word tags or tags with special characters, follow the next steps for attributes and use "tag" as the attribute name.

### By Attribute

The simplest form of attribute selectors are checking for whether a given value is present. If we're trying to select for all people with "high" level of influence, the selector would be ```["level of influence"="high"]```. You can also select based on:

* Whether an attribute has any value assigned
* If it starts with, ends with, or includes a given term
* Relative comparisons for numerical attributes

For the full list of operators you can use to match against, check out the [selector reference](/references/css-selector-reference.html).

## Using Selectors

Once you know how to write selectors, they become a powerful way to build more functionality into your map. Combined with a bit of [Markdown](/guides/markdown.html) knowledge, you have a lot of power at your fingertips.

### Creating Links Within Your Map

You can combine the combine the standard link syntax for markdown...

```
[Kumu](http://launch.kumupowered.com)
```
But swap out the URL for a selector. Here's how:

```
[Jeff Mohr](= #jeffmohr)
```

That will create a link to an entities with a matching label. If you hover on the link, you'll automatically zoom into that element on the map (as long as it is actually part of your map). These links are styled with a dotted underline:

![selector rocket](/images/internal-link.png)

### In Search

You can click the search input and manually type a selector. This will select the relevant elements and allow you to add tags, delete, pin, etc. Simply type "=" followed by a space and then the selector: ```= #jeffmohr```.

### Focus By Selector

You can tell Kumu to load the map with a specific element or selection in focus. To do this, add the following to the advanced tab in your perspective:

```
@settings {
  focus: #jeffmohr out 2;
}
```
This will load the map with just the element "Jeff Mohr" and anything within two degrees. You can specifiy multiple roots if you'd like:

```
@ settings {
  focus: #jeffmohr out 2, #kumu out 1;
}
```
For more information about what you can do with @settings, head to our [Master Perspectives Guide](/guides/mastering-perspectives.html).
