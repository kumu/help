---
layout: default
name: "The Toolbar"
---

At the bottom of the map you'll find the toolbar. With the toolbar you can:

* Access the main menu (<i class="fa fa-th"></i>)
* Pin elements in place so they don't float (<i class="fa fa-map-marker"></i>)
* Change the direction of connections (or add/remove the arrow) (<i class="fa fa-random"></i>)
* Add delays to connections (<i class="fa fa-warning"></i>)
* Delete entities (<i class="fa fa-trash-o"></i>)
* Cluster
* Decorate (<i class="fa fa-tint"></i>)
* Filter (<i class="fa fa-filter"></i>)
* Focus (<i class="fa fa-crosshairs"></i>)
* Access additional settings (<i class="fa fa-ellipsis-h"></i>)

## Main menu (<i class="fa fa-th"></i>)

Use this menu to quickly change between maps and perspectices or switch between projects. You'll also find links to manage attributes, members, rename a project, and delete a project.

## Pin (<i class="fa fa-map-marker"></i>)

Pinning allows you to add a fix the position of the element on the map. You can pin individual elements by selecting the element and then clicking the pin button. You can also select mutiple elements (or all of the elements by hitting the ***a*** keystroke) and then click the pin button to pin multiple elements at once.

## Direction (<i class="fa fa-random"></i>)

Connections can be directed, undirected, or mutual (arrows both ways). Select a connection and then click the direction button to choose between the options. You also have an option to switch directions when the connection is directed.

## Delay (<i class="fa fa-warning"></i>)

Delays are used in system maps (especially causal loop diagrams) to signify a time delay between two factors. A delay shows up as two perpendicular lines on a connection and can be added by selecting a connection and then clicking the delay button.

## Delete (<i class="fa fa-trash-o"></i>)

Elements, connections and loops can be deleted by selecting it and then clicking the delete button (or by clicking delete on your keyboard). When elements are deleted, they are initially moved into a "trash can" and can later be fully deleted forever.

## Cluster

Clustering is a powerful way to connect elements based on data stored in the profile. To learn more, [read our clustering guide](/guides/clustering.html). To activate clustering, click the cluster button and then choose the attribute you want to cluster by. You can then choose to permanently save a cluster by clicking the green checkmark or remove the cluster by clicking the red x. If you refresh the page any unsaved clusters will be removed.

## Decorate (<i class="fa fa-tint"></i>)

The decorate button allows you to quickly add decorations to your map. To learn more, read [decorating your map](/basics/decorations.html).

## Filter (<i class="fa fa-filter"></i>)

The filter button allows you to change which element and connection types are visible by choosing which to display. Keep all the options checked to have all types displayed or uncheck specific types to hide only those entities with the given type. The undefined option allows you to show and hide entities which do not have any type assigned.

## Focus (<i class="fa fa-crosshairs"></i>)

Focus allows you to show only a certain part of your map. Click on an element and then click the focus button and you'll be presented with the following options:

* **Selected** - Hide all but the specific element
* **Direct (1 degree)** - Display the specific element and one step out
* **Indirect (2 degrees)** - Display the specific element and two steps out
* **Extended (3 degrees)** - Display the specific element and three steps out

We've also wrapped the focus behavior into your navigation of the map by allowing you to click and hold on a specific element to activate the direct focus. Below are the primary actions for activating focus using a long click:

<dl>
<dt>Click and hold an element without focus activated</dt>
<dd>Activates direct focus for the specified element</dd>
<dt>Click and hold another element when focus is already activated</dt>
<dd>Adds the selected element to the given focus, allowing you to expand outward</dd>
<dt>Click and hold on the map background</dt>
 <dd>Deactivates the focus</dd>
 </dl>
