---
layout: default
name: "Network Analysis"
---

Looking to better understand the networks you're a part of? Wish you had a tool that didn't require a PhD to use effectively?

With Kumu, you can create beautiful and engaging network maps with ease. Add photos of the people in your network to bring your map to life. Color or size using data like sector, level of influence, and more. Attributes can be stored for both elements and connections (allowing you to store things like type and strength for connections and bring that data to life through width and color).

This guide walks you through the basics of network anaysis using Kumu. We'll walk through four parts:

1. Creating a project
1. Collecting the data
1. Running the metrics
1. Decorating your map

<!---

Looking for more background about network analysis? Check out "Social Network Analysis Made Easy" on Slideshare or Speakerdeck.

<iframe src="//www.slideshare.net/slideshow/embed_code/3273045" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px; text-align: center;"> <strong> <a href="https://www.slideshare.net/gcheliotis/social-network-analysis-3273045" title="Social Network Analysis" target="_blank">Social Network Analysis</a> </strong> from <strong><a href="http://www.slideshare.net/gcheliotis" target="_blank">Giorgos Cheliotis</a></strong> </div>

-->

## Step 1: Creating a project

If you haven't already, sign up for a user account by visiting [http://kumu.io/signup](http://kumu.io/signup).

Head to your [dashboard](http://kumu.io/dashboard) and click to create a new project. You can choose from either a public project (free) or a private project (starting at $29/month).

## Step 2: Collecting the data

Data can be collected via survey, pulled from existing data sources, or populated via personal knowledge.

### Surveys

Surveys ask participants both relational and demographic questions ([click here](http://www.surveymonkey.com/s.aspx?sm=JbeN1eq4AWhuxJjDhIgY7yWG9l5N4D%2fZ8bOLGMyAMcw%3d) for a sample survey done via SurveyMonkey). There are a number of both free and paid tools for survey analysis:

* [Google Forms](https://docs.google.com/forms) (Free)
* [Survey Monkey](https://www.surveymonkey.com/) (Free & Paid)

Spend time thinking deeply about the questions you send. Some common questions include:

* Who do you work with?
* Who do you turn to for new ideas?
* Who do you turn to for advice?
* How does working with this person affect your energy levels?

Each of the various relational questions get at a different kind of network. It may be a network of trust, idea sharing & innovation, collaboration, or any other relationships that are important. Here are the three questions from the sample survey:

* **Information Sharing Network** - At least twice in the last month, have you received information from this person that you need to do your job?
* **Problem Solving Network** - At least twice in the last month, have you gone to this person for help with technical work-related problems?
* **Support Network** - At least twice in the last year, have you gone to this person for help with a difficult situation at work?

### Existing data

Sometimes you'll already have access to the type of data needed to run a social network analysis. You might use email traffic, lists of "friends" or "followers" from a social network, information about board membership, or even data from your CRM platform. The key here is to be both creative and honest about what the data represents.

For example, how helpful is the fact that somone is a "friend" of yours on LinkedIn? Have you ever accepted a connection to someone you didn't really know all that well? (We're definitely guilty of this)

### Personal knowledge

For certain networks, it's not plausible to collect information via surveys and you don't have data lying around. In those cases, it's often best to rely on personal knowledge of who knows who - sometimes even crowdsourcing this information by pulling together a group of people from the network and building out the links one by one.

### Getting the data into Kumu

You can get the data into Kumu in one of two ways: imports or populating by hand. For more information on imports, check out our [imports guide](/basics/imports.html). If you're creating your map by hand, [start here](/basics/adding-elements.html).

There are a few subtleties to how you structure your data for easiest use within Kumu. We've laid out some of those below:

**Use connection type to differentiate between the different types of networks you are mapping**<br />
Say you ask two questions on your survey: one that asks questions getting at the *trust* network and another that probes for the *innovation* network. By storing this connection data with connection type as "Trust" or "Innovation", you can quickly switch between different views of the network using filters. We promote connection type in the filter interface so all you have to do is check or uncheck a few boxes and you'll be able to see both networks or the combined network.

**Element types make two (or more) mode networks a cinch**<br />
Sometimes you're looking to understand more than just how people are connected to each other. You may want to include organizations, projects, alma maters, and more. Simply differentiate these elements using the element type attribute and you can easily show and hide them as needed.

**Don't forget about the power of clustering**<br />
Clustering ([click here for the guide](/guides/clustering.html)) makes it easy to turn attribute data stored in the profile of any element into a dynamic network. Storing data about the organization someone works for within the profile? Use clustering to then transform that data into explicit connections on your map. This can be a big time saver if you don't already have connection data created.


## Step 3: Running the metrics

Metrics provide clues to who may be playing important (or not so important) roles across your network. You'll want to take the results of analysis based on metrics with a grain of salt as minor errors in data collection (or just missing data from someone not responding to a survey) can throw things off.

But we'll assume you have somewhat complete data. In that case, here's the metrics that are available and a short description of each:

### Degree

**MEASURES** The number of connections for a given element

**IDENTIFIES** Local connectors and hubs

**BEWARE** Not always the most influential or connected to the wider network

### Closeness centrality

**MEASURES** The distance from one element to all other elements

**IDENTIFIES** Those with high visibility about what’s happening across the network

**BEWARE** These people can quickly spread information (good or bad) across the network

### Betweenness centrality

**MEASURES** The number of times an element lies on the shortest path between two other elements

**IDENTIFIES** Key bridges and those who control the flow of information across a network

**BEWARE** These people may be bottlenecks or single points of failure

### Other metrics
You also have access to the following metrics (not seeing your favorite? [let us know](mailto:jeff@kumu.io)):

* **Indegree** - Indegree measures the number of incoming connections for an element. In general, elements with high indegree are the leaders, looked to by others as a source of advice, expertise, or information.
* **Outdegree** - Outdegree measures the number of outgoing connections for an element. In general, elements with high outdegree can reach a high number of elements and spark the flow of information across a network (but may not be the most efficient at spreading the information).
* **Reach (two-step out)** - Reach measures the portion of the network within two steps of an element. In general, elements with high reach can spread information through the network through close friend-of-a-friend contacts.
* **Reach efficiency** - Reach efficiency normalizes reach by dividing it by size (number of neighbors). In general, elements with high reach efficiency are less connected but gain more exposure through each direct relationship.

### Calculating and saving metric values

Use the "more" link (...) in the bottom toolbar and select "Run Metrics." You'll see the sidebar change and a dropdown to choose the metric you'd like to run. Select the metric and then click the button to run the metric. Once complete, you'll see an ordered listing of the elements based on the metric values. The respective value will also be saved to the profile of each element.

## Step 4: Decorating your map

You can decorate your map based on the metrics or any other data you've imported to Kumu. We often see people using a mixture of both metric and qualitative data to size and decorate the map. Here's an example using colors to differentiate by sector (Higher Education, NGO, Consulting, etc.) and size to differentiate by betweenness centrality:

![Innovation Lab Network](/images/innovation-lab.png)

First, make sure you've run whatever metric you'd like to use for sizing or coloring. Then open the perspective and click "decorate elements." You'll see a checkbox to "Change size" and then choose to "Scale elements based on attribute values." Choose your metric of choice or "metrics::last" to always size by the last metric that was run (this is helpful especially in the early analysis of a map).

![Decoration Builder](/images/metrics-scale.png)

For decorations based on qualitative attributes, check out the guide on [perspectives](/guides/perspectives.html).

### Looking to add or remove connection arrows?

By default, Kumu will import your connections as directed but won't display the arrow. To turn the arrow on, select all the connections by hitting the **a** keystroke, click the direction button (<i class="fa fa-random"></i>) in the toolbar and then choose "directed." Connections can be directed, undirected, or mutual (arrows both ways). You also use this button to switch directions for a given directed connection.

**Still have questions?** Send an email to [support@kumu.io](mailto:support@kumu.io).
