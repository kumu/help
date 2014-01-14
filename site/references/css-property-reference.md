---
layout: default
name: "CSS Property Reference"
body_class: "css-property-reference"
---

{% assign properties = site.data.properties %}
{% assign collections = site.data.collections %}

Beneath perspectives, Kumu uses a powerful CSS-based language to control the appearance of your maps.

If you're familiar with CSS, the advanced perspective editor will quickly
become your best friend.  The perspective builder only exposes a small set
of the available properties.  Being able to write perspectives by hand is
the only way to harness the full power of Kumu.

**Note:** We've adopted standard CSS properties and values wherever possible, straying where
conventional values were irrelevant or misleading (eg `display: map` vs `display: block`),
and adding properties specific to Kumu (such as `bullseye-color`).

All values are unitless.

### Catalog of Supported Properties

The table belows lists all of the properties recognized by Kumu. Hover over the information icon at the far right to see additional details and available values for each property.

<table class="property-table table table-striped">
  <tr>
    <th class="text-left">Property</th>
    <th class="text-center">Elements</th>
    <th class="text-center">Connections</th>
    <th class="text-center">Loops</th>
    <th class="text-center"></th>
  </tr>

{% for property in site.data.properties %}
  <tr data-property="{{ property.name }}">
    <td>{{ property.name }}</td>
  {% for collection in collections %}
  {% if property.support contains collection %}
    <td><i class="glyphicon glyphicon-ok"></i></td>
  {% else %}
    <td><i class="glyphicon glyphicon-cancel"></i></td>
  {% endif %}
  {% endfor %}
    <td><i class="glyphicon glyphicon-info-sign" data-toggle="popover" data-placement="left" data-content="{{ property.description }}"></i></td>
  </tr>
{% endfor %}
</table>
