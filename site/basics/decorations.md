---
layout: default
name: "Decorating Your Map"
---

Kumu makes it easy to create decorations that allow you to tell powerful stories through your maps. We're all for democratizing the ability of people everywhere to create great maps so many of the decorations can be added without any knowledge of HTML or CSS. But if you're comfortable with CSS, we've got [even more powerful decorations](/references/css-property-reference.html) for you to take advantage of.

<h2 id="decorating-elements"> Decorating elements</h2>

Kumu allows you to decorate individual elements or use data stored on the profile of an element to create a decoration rule that will apply to all elements that share the same data. For example, you could just decorate the elements "Jack" and "Jane" or you could use the fact that Jack and Jane both have the element type "people" to decorate them. The benefit of the latter approach is once you add "Judy" (who also has type "person"), she will also inherit the same decoration.

Decorations are stored within [perspectives](/guides/perspectives.html) which offer a lot of flexibility and depth in creating multiple views of your map. For now we'll focus just on adding decorations.

### Step 1: <i class="fa fa-tint"></i> Click the decorate button

If you are looking to decorate a specific element, select the element and then click on the decorate button (<i class="fa fa-tint"></i>) in the toolbar. If you have multiple items selected, Kumu will automatically find out what the matching attributes are across the selection and allow you to use this data to create your decoration rule.

### Step 2: Build your selector

You'll find yourself within a modal for creating your decoration.

![Decorate](/images/decorate-2.png)

The first dropdown presents you with four options (depending on whether you had elements selected when you clicked the decorate button):

* Decorate **all** elements
* Decorate **selected** elements
* Decorate **similar** elements (by attribute)
* Build a **custom** selector

For this example, we'll select the last option to "Build a **custom** selector" in order to color all elements with type = people.

The first dropdown on the left is used to select which attribute you'd like to use for the decoration. We'll select "element type." The middle dropdown is used for the selector operation and can be one of the following:

* is
* isn't
* contains
* is less than
* is greater than
* has any value
* is unknown

We'll select "is" and then use the text entry area on the right to type "People" as the element type we want to decorate. You'll notice that Kumu will suggest values for any attribute which has prompt set to "autocomplete."

### Step 3: Choose your decorations
In this step you get to create the decorations that will apply to your selection in Step 2. You have a number of options available to you for decorating elements that we've split into three tabs

* Change size
* Change color
* Add image
* Add bullseye
* Add shadow

We'll keep it simple and toggle the "Change color" checkbox and then choose the option to set a fixed element color. Click the box to the right of the color label and then choose the color you'd like to use. You can also type your own color name or hex color value but we recommend sticking with one of our defined color palettes to improve the look and feel of your map.

### Step 4: Add a label (or not)

The last step is deciding whether to add a label for the decoration. If you add a label, the decoration and label will appear on a legend in the lower left corner of your map. If you leave the label blank, the decoration won't be included in the legend.

Click save and then you're done!


<h2 id="decorating-connections">Decorating connections</h2>

Decorating connections is quite similar to decorating elements.

### Step 1: <i class="fa fa-tint"></i> Click the decorate button

If you are looking to decorate a specific connection, select the connection and then click on the decorate button (<i class="fa fa-tint"></i>) in the toolbar. If you have multiple items selected, Kumu will automatically find out what the matching attributes are across the selection and allow you to use this data to create your decoration rule.

### Step 2: Build your selector

You'll find yourself within a modal for creating your decoration.

![Decorate](/images/decorate-connection.png)

You'll find yourself within a modal that has three sections on the left hand side: Select, Decorate, and Label. The first dropdown presents you with four options (depending on whether you had connections selected when you clicked the decorate button):

* Decorate **all** connections
* Decorate **selected** connections
* Decorate **similar** connections (by attribute)
* Build a **custom** selector

For this example, we'll select the last option to "Build a **custom** selector" in order to change the width of connections which are tagged influential.

The first dropdown on the left is used to select which attribute you'd like to use for the decoration. We'll select "tags." The middle dropdown is used for the selector operation and can be one of the following:

* is
* isn't
* contains
* is less than
* is greater than
* has any value
* is unknown

For tags, you need to select "contains." Use the text entry area on the right to type "Influential" as the tag you want to decorate. Click "next" and proceed to step 3.

### Step 3: Choose your decorations

The following decorations are available for connections:

* Change size
* Change color

In this example we'll select the first option "Change size" and drag the slider to the right (a value of around 5 works well).

### Step 4: Add a label (or not)

The last step is deciding whether to add a label for the decoration. If you add a label, the decoration and label will appear on a legend in the lower left corner of your map. If you leave the label blank, the decoration won't be included in the legend.

Click save and then you're done!
