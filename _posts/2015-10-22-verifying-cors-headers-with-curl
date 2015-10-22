---
layout: post
title: "Verifying CORS Headers with cURL"
description: ""
category: articles
tag: [development, shell, front-end]
comments: true
published: true
---

Often times I'll find myself wanting to verify CORS headers on a specific static resource, for example, a webfont.

Consider the following command:

{% highlight bash %}
$ curl -I -s -X GET -H "Origin: pixelsonly.com" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/fonts/FontAwesome.otf
{% endhighlight %}

In the above example I'm asking cURL to return the document head of the specified resource via a GET request. Here's the output:

{% highlight bash %}
HTTP/1.1 200 OK
Server: cloudflare-nginx
Date: Thu, 22 Oct 2015 21:15:04 GMT
Content-Type: application/font-sfnt
Content-Length: 106260
Connection: keep-alive
Last-Modified: Wed, 29 Jul 2015 11:33:54 GMT
Expires: Tue, 11 Oct 2016 21:15:04 GMT
Cache-Control: public, max-age=30672000
Access-Control-Allow-Origin: *
CF-Cache-Status: HIT
Accept-Ranges: bytes
CF-RAY: 2398372a295028ca-SJC
{% endhighlight %}

This is especially helpful when working with webfonts served from content delivery networks. To make things even easier and a little more [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) you can add the following function to your ZSH or Bash profile.

{% highlight bash %}
corscheck() {
	curl -I -s -X GET -H "Origin: $1" $2
}
{% endhighlight %}

The first argument will be the domain that will be making the request and the second is the URL of the resource in question.
