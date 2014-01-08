---
layout: default
name: "Markdown"
---

Markdown is an easy and powerful way to format your descriptions and long text attributes using simple, natural syntax. Use it to bring account, map, perspective, element, connection and loop descriptions to life!

## Basics

*italic* and **bold**

```
*italic* and **bold**
```

An inline link: [Kumu](http://launch.kumupowered.com)

```
An inline link: [Kumu](http://launch.kumupowered.com)
```

An auto-generated link: <a href="http://launch.kumupowered.com">http://launch.kumupowered.com</a>

```
http://launch.kumupowered.com
```

## Lists

* Milk
* Cookies
* Marshmallows

```
* Milk
* Cookies
* Marshmallows
```

1. California
2. Texas
3. New York

```
1. California
2. Texas
3. New York
```

## Images

![Kumu Logo](/images/kumu-logo-color.png)

```
![Kumu Logo](/images/kumu-logo-color.png)
```


## Videos

<iframe src="//player.vimeo.com/video/31240369?color=ffffff" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Look at the embed code of the video you want to embed and grab the URL within ***src=" "***

    ![I Believe I Can Fly](//player.vimeo.com/video/31240369?color=ffffff)

## Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

## Links within your account
We also support linking to elements, connections and loops (even other maps in your account) using the following format:

**Selectors**

    [link label](= selector)
    [Ryan](= #ryanmohr)

*Note: Make sure to remove any special characters and spaces from your element, connection or loop label and lowercase all letters ("Kumu is awesome!" would become "kumuisawesome").*

**Maps**

    [link label](#map-slug)

**Perspectives**

    [link label](#map-slug/perspective-slug)

*Note: The best way to find the "map-slug" and "perspective-slug" is to activate the given map and perspective and look at the URL in your browser. You should be able to spot it quite easily by using the above format as a guide. Then copy and paste the applicable portion.*

## Code

Simply indent lines with four spaces or wrap the code with three backticks:

    ```
    <div class="footer">
        &copy; 2013 Kumu Systems LLC
    </div>
    ```


## Blockquotes

> Remember, always, that everything you know, and everything everyone knows, is only a model. Get your model out there where it can be viewed. Invite others to challenge your assumptions and add their own. <br />- Donella Meadows, *Thinking in Systems: A Primer*

    > Add quote text here

## Tables

One | Two | Three
--- | --- | ---
Blue | White | Gray
Green | Yellow | Red
<br />

```
One | Two | Three
--- | --- | ---
Blue | White | Gray
Green | Yellow | Red
```

## Horizontal Rules

***
<br />

    Three or more dashes or asterisks --- ***

<br />
Now you know the basics of formtting with markdown. For more information, visit [Daring Fireball's markdown syntax documentation](http://daringfireball.net/projects/markdown/syntax#precode).
