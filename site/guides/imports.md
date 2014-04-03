---
layout: default
name: "Imports"
---

While our [import basics](/basics/imports.html) will get you up and running, these tips will turn you into a master importer in two minutes flat.

## How To Master Imports in 5 Simple Steps

1. <a href="#separate-sheets">Separate elements and connections into their own sheets</a>
1. <a href="#reserved-attributes">Take advantage of reserved attributes</a>
1. <a href="#piped-lists">Use pipes to separate | multiple | values</a>
1. <a href="#selector-friendly">Try to be selector friendly</a>
1. <a href="#ask-for-help">Ask for help!</a>


<h3 id="separate-sheets">1. Separate elements and connections into their own sheets</h3>

Since elements and connections often have very different sets of attributes, we recommend using one worksheet for each type.  If you prefer keeping everything within a single sheet, you can use two blank lines to signal the start of a new section instead. If you are using a .csv file, you'll need to either use the single sheet method or create separate files for elements and connections.

<h3 id="reserved-attributes">2. Take advantage of reserved attributes</h3>

Additional attributes can be imported simply by adding new columns. Feel free to track as few or as many as you want. Our reserved attributes aren't required, but they can save you time and unlock powerful features.

<dl>
    <dt>Type</dt>
    <dd>
      Use the type attribute to categorize elements and connections. Common element
      types include person, project, and company. Common connection types include
      personal, business, and family.
      Try to be <a href="#selector-friendly">selector friendly</a> with your types if you can.
    </dd>

    <dt>Description</dt>
    <dd>
      The description is the first thing everyone will read so make sure to provide
      a short introduction.  If there's a compelling story behind the element or
      connection, the description is the best place to put it.
    </dd>

    <dt>Tags</dt>
    <dd>
      Tags are used to store short pieces of information. Make sure to separate
      multiple tags using a pipe "|".
      Try to be <a href="#selector-friendly">selector friendly</a> with your tags if you can.
    </dd>

    <dt>Image</dt>
    <dd>Include an image URL and we'll display it on the map and in the profile.</dd>

    <dt>Email</dt>
    <dd>
      Add an email and we'll automatically include their
      <a href="http://en.gravatar.com/">gravatar</a> on the map and in the profile.
      Gravatars can be a huge time saver when working with social data.
    </dd>
</dl>

<h3 id="piped-lists">3. Use pipes to separate multiple values</h3>
For columns with multiple values in a single cell (such as tags, skills, hobbies, etc), you need to separate them using the "|" character. If you're already separating them using commas, just use find and replace to switch before importing.

<h3 id="selector-friendly">4. Try to be selector friendly</h3>
Selectors provide a simple way to slice up your data. By keeping your attribute names and values selector friendly you'll be able to write much shorter queries.

Use single words for your element types, connection types, and tags. By doing so you'll be able to use shorthand selectors such as:
<ul>
      <li><code>person</code> To select all elements with type "Person"</li>
      <li><code>personal-connection</code> To select all connections with type "Personal"</li>
      <li><code>project.priority</code> To select all projects tagged "priority"</li>
</ul>

If you include special characters or multiple words you'll have to use the longhand instead (such as <code>["element type"="Government Sector"]</code>) and that's just not nearly as much fun.

<h3 id="ask-for-help">5. Ask for help!</h3>

Still have questions? <a href="mailto:support@kumu.io">Ask us!</a>

<p class="alert"><strong>Note:</strong> If you're running into funny character issues, please make sure your file is UTF-8 encoded.</p>
