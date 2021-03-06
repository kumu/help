---
layout: default
name: "FAQ"
---

## How can I select all elements on my map? All connections?

Use the ***a*** keystroke to select all elements on your map.

## Why does my map keep moving?

Kumu has a custom layout engine which creates a high quality layout regardless of map size. Use the spacebar keystroke to pause the layout. If you'd rather not have the layout change after you're happy with it, select all elements using the ***a*** keystroke and then click the pin button in the toolbar.

## Is there a limit to how many collaborators I can have in an account?

Every hosted Kumu account comes with unlimited collaborators. Our Enterprise version is billed in 20-seat packs.

## Does Kumu only create curved connections?

By default all connections are curved. You can change the curvature of connections in one of two ways:

* **Dragging connections** - For pinned maps, if you click and drag a connection you'll be able to change the radius of the curve. This is especially useful in system maps when trying to avoid lines crossing each other unneccessarily.
* **Through the settings menu** - You can set the default curvature of connections using the settings menu. Simply drag the slider to achieve the curvature you want.

## Can I size or color elements based on social network analysis metrics like degree and betweenness centrality?

Yes! Head over to the [Network Analysis Guide](/guides/network-analysis.html) for more information.

## How do I add images to the elements on my map?

To add an image to an element on your map, create an "Image" attribute and then paste the URL as the value for the given element. Also, if you create an "Email" attribute and add an email for a given person or company, Kumu will look whether a gravatar exists for that email and if so use that as the image.

## Can I create dashed connections?

Yep! Currently dashed connections are controlled only through Advanced CSS. Below is the code to create dashed connections for all connections with strength = low:

```
connection["strength"="low"] {
  pattern: dashed
}
```
Note that support for dashed connections isn't great across all browsers, so you may be better off using color instead.

## Is it possible to create nested or layered networks?

Yes, we recommend creating separate maps and then using the description to create links to help ease navigation between various levels or layers. Read the [markdown guide](/guides/markdown.html) to learn how to create links to other maps.

## Does Kumu integrate with data from other tools/platforms?

Integrations with data from other tools/platforms are in progress. Have a platform you're looking to integrate with? <a href="mailto:support@kumu.io">Let us know!</a>

In the meantime, you can always use our handy [import feature](/basics/imports.html).
