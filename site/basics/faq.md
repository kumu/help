---
layout: default
name: "FAQ"
---

## How can I select all elements on my map? All connections?

Use the ***a*** keystroke to select all elements on your map. You can use the ***option*** + ***a*** to select all connections.

## Why does my map keep moving?

Kumu has a custom layout engine which creates a high quality layout regardless of map size. If you'd rather not have the layout change after you are happy with it, select all elements using the ***a*** keystroke and then click the pin button in the toolbar.

## Is there a limit to how many collaborators I can have in an account?

No, every hosted Kumu account comes with unlimited collaborators (except for our Enterprise version).

## Does Kumu only create curved connections?

By default all connections are curved. You can change the curvature of connections in one of two ways:

* **Dragging connections** - If you click and drag a connection you'll be able to change the radius of the curve. This is especially useful in system maps when trying to avoid lines crossing each other unneccessarily.
* **Through perspectives** - You can set the curvature of connections using Advanced CSS. You can choose to straighten all connections or just certain types based on the selector you use. Here is an example for making all connections have straight lines:

```
connection {
  curavture: 0;
}
```

## Can I size or color elements based on social network analysis metrics like degree and betweenness centrality?

We haven't yet implemented social network analysis calculations but plan to do so soon. Refer to the [Network Analysis Guide](/guides/network-analysis.html) for more information.

## How do I add images to the elements on my map?

To add an image to an element on your map, create an "Image" attribute and then paste the URL as the value for the given element. Also, if you create an "Email" attribute and add an email for a given person or company, Kumu will look whether a gravatar exists for that email and if so use that as the image.

## Can I create dotted connections?

Yep! Currently dotted connections are controlled only through Advanced CSS. Below is the code to create dotted connections for all connections with low strength:

```
connection["strength"="low"] {
  pattern: dashed
}
```

## Is it possible to create nested or layered networks?

Yes, we recommend creating separate maps and then using the description to create links to help ease navigation between various levels or layers. Read the [markdown guide](/guides/markdown.html) for how to create links to other maps.

## Does Kumu integrate with data from other tools/platforms?

Integrations with data from other tools/platforms are in progress. Have a platform you're looking to integrate with? <a href="mailto:support@kumu.io">Let us know!</a>

In the meantime, you can always use our handy [import feature](/basics/imports.html).
