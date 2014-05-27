---
layout: default
name: "Imports"
---

Imports make it quick and easy to start visualizing your existing data, but you'll need to make a few tweaks before your file is ready for import.

<iframe src="//player.vimeo.com/video/96531654?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Preparing your file for import

First, make sure you are working with either an .xlsx or .csv file format (no .xls allowed). Tweak your spreadsheet so it contains the following columns:

**For elements**

* Label
* Type (optional)
* Description (optional)

**For connections**

* From
* To
* Type (optional)
* Label (optional)

Here's a sample of how your element spreadsheet might look:

<table class="table table-condensed">
      <thead>
        <tr>
          <th>Label</th>
          <th>Type</th>
          <th>Description</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jeff Mohr</td>
          <td>Person</td>
          <td>Co-Founder and CEO, always<br /> up for learning</td>
          <td>Founder|Male|Runner</td>
        </tr>
        <tr>
          <td>Kumu</td>
          <td>Company</td>
          <td>A web-based platform<br />for mapping relationships...</td>
          <td>Mapping|Technology</td>
        </tr>
      </tbody>
</table>


And here's a sample of how your connection spreadsheet might look:

<table class="table table-condensed">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th>Strength</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Barack</td>
          <td>Michelle</td>
          <td>Personal</td>
          <td>Strong</td>
        </tr>
        <tr>
          <td>Ed Snowden</td>
          <td>NSA</td>
          <td>Contractor</td>
          <td>It's complicated</td>
        </tr>
      </tbody>
</table>

That's it! Now click the cloud icon (<i class="fa fa-cloud-upload"></i>) in the lower right corner or drag the file onto the map. You'll have the option to review the import before finalizing to double-check that everything imported correctly. Click save and you're all set!

**Get your hands dirty!** [Click here for a sample import file](https://dl.dropboxusercontent.com/u/9002358/Kumu%20-%20Do%20Not%20Delete/Help%20Site/kumu-paypal-mafia.xlsx) for the PayPal Mafia that you can use to see how imports work with real data before creating your import file.

If you want to dive a little deeper on imports you can check out our [detailed imports guide](/guides/imports.html).

## Common pitfalls

Having trouble with your import? Here are a few common pitfalls...

### Trying to import .xls files

If you run into this error message
<p class="alert alert-error">Sorry, there was an error with your import. <br/>Error: Import format not recognized: auto</p>
...you're trying to import an .xls file. Save it as .xlsx and try again!

### Not starting your element file with the "Label" column

Label should be the first column in your spreadsheet for an element import.

### Funny character issues?

If you're running into funny character issues, please make sure your file is UTF-8 encoded.
