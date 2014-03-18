---
layout: default
name: "System Mapping"
---

Looking to create awesome and engaging system maps with the power to change hearts and minds? You've come to the right place.

## Building the basic structure of a map

Kumu allows you to have both fixed and dynamic layouts for your map. We recommend having a fixed layout for your system map by pinning each element in place so that you'd don't overwhelm people with a new layout each time they see the map.

### Adding elements and connections

The quickest way to add an element and have it pinned in place is to use the **alt** + **click** approach. By using this method, a new element will be created wherever you click on the map. You can quickly add a connection to a new element by holding **alt** and dragging out from the existing element. A new element will be created wherever you let go and you'll be prompted for the new element's label.

You can also use the **alt** + **drag** method to connect two existing elements. Simply follow the same instructions but release on top of an existing element.

If you add elements using the "Add Element" button workflow, the element will initially be floating. Click on the element and then hit the pin button (<i class="fa fa-map-marker"></i>) to make sure it stays in place.

### Marking connections as same or opposite

If you're looking to indicate whether a connection has a same or opposite causal relationship (does an increase in one factor cause an increase or a decrease in the other?), we recommend using the connection type and adding either "same" or "opposite" as the value. You can then add a decoration to your perspective that keeps the "same" connections solid and adds a dashed pattern for the "oppposite" connections. Here is the advanced CSS to add:

```
connection["connection type"="opposite"] {
  pattern: dashed;
}
```

### Adding pre and post labels

Some system mappers like to go even further and include not just whether a connection is same or opposite, but also the "+" and "-" labels on the from and to ends of a connection. We've customized the behavior of the type field for connections to allow for creation of these labels:

Value | Behavior
--- | ---
**+** | adds a "+" to the *trailing* end of the connection
**-** | adds a "-" to the *trailing* end of the connection
**++** | adds a "+" to both ends of the connection
**--**  | adds a "-" to both ends of the connection
**+-** | adds a "+" to the *leading* end and a "-" to the *trailing* end of the connection
**-+** | adds a "-" to the *leading* end and a "+" to the *trailing* end of the connection

<br /><br />
Simply add the value to the "type" field on any connection:

![connection type](/images/systems-connection-type.png)

And we'll automatically add the pre and post labels for you:

![pre and post labels](/images/systems-connection-type-example.png)

### Creating loops

Kumu has built-in support for loops including detailed profiles so you can add narratives and other research to support your map. To create a loop, hold either **command** or **shift** and click on each connection you'd like to have as part of your loop. Once you select more than one connection, you'll see a new button appear below the "Add Connection" button labeled "Add Loop." Click this button to create a loop involving the selected connections and then add a label for the loop.

![reinforcing loop](/images/systems-reinforcing-loop.png)

We recommend using a combination of "R" or "B" (for reinforcing and balancing) plus a short label for the dynamic at play (R: Trust in Government) and even a numerical label if that further helps differentiate your loops (R15: Trust in Government).

To edit an existing loop, click on the label and then hold shift and unselect any connections that should no longer be a part of the loop, or select connections that should be added to the loop. We'll automatically position the loop label at the center of each of the connections. You can drag the loop label to another location if that works better for your map and it will stay fixed in that location.

## Add narratives and other background information

One of the challenges with current system mapping platforms is that they don't allow for extensive narrative and data to be saved for each element, connection, loop and map. Instead, you're left with a simple graphical map that requires a consultant to explain it to anyone else.

### Narratives

Kumu allows you to add this information easily for any and all levels of your map. Start by using the map overview to add a description of the overall map and key dynamics at play. Then include a narrative for each loop that describes the behavior, both current and historical, and includes links to any supporting research that led to the creation of the loop. For specific elements, provide a quick definition to ensure there isn't confusion. And for connections, include a brief description of why two elements are causally related and any supporting research.

### Trends, needed change, and other data

It is often quite helpful to walk a group through the exercise of discussing how a given factor has been trending over time. By saving this information for a given element, you could color an element that has been significnatly decreasing as dark red to have this information jump to life.

Another helpful piece of data is whether a given factor needs to significantly increase, increase, stay the same, decrease, or significantly decrease going forward. By using this data and adding a color scale to the values, you can quickly see where the most change needs to happen in a given map.

Finally, you can even add data like **% complete** to be able to track the status of your implementation efforts as your progress with a systems intervention. The great part about Kumu is you don't need to just pick one of these ways to decorate. Create multiple perspectives and easily switch between all of these views.

## Creating magazine-ready maps

There are a number of decorations you can add that really make your system map ***pop***. One of these is using larger circles that fit the label within the circle rather than below it. One caution, if you're hoping to size elements by certain data, you probably want to keep the label placement below the element. But if you are using color scales instead, this can be a nice way to create a great looking map.

![Hawaii Quality of Life System Map](/images/systems-magazine-ready.png)

To make this happen, you'll need to create a perspective that increases the size of the circle and then changes the label placement. Here is the sample advanced CSS for a recent collaboration with [Hawaii Business Magazine](http://hawaiiqualityoflife.org):

```
element {
  color: #fff;
  font-color: #000;
  font-size: 18;
  size: 75;
  label-placement: center;
  stroke-width: 2;
  stroke-color: #000;
}
```

You can see we've included other decorations including font-color, font-size, and more (you can see the full list [here](/references/css-property-reference.html)).
