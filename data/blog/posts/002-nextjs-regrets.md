{
"title": "Why I kinda regret using NextJS for this website",
"writer": "Muhammad Isa Al Anshori",
"publishedDate": "22 November 2021",
"editedDate": "22 November 2021",
"language": "English",
"tags": ["NextJS", "regret", "optimization", "js"],
"thumbs": ""
}
@==contentstartshere==@
NextJS is great. It so easy to use, the features are great, and its basically perfect for what I'm trying to do. But now I have just realized a problem with NextJS, Its not very efficient. The main feature of NextJS is the fact that is basically a combination of server-side rendering and client-side rendering. The way it works is by rendering the page in the server and then basically re-rendering the entire thing in the browser with a process called Hydration.

The problem is that this Hydration process is still being done even on static components and pages. So even loading a completely static page without any components that can change states, will still cause useless data and JS to be sent to the browser and cause useless processing. The following is a comparison of the this blog post page without any optimization and then with some manual optimization.

![Page Optimization Comparison](/img/blog/images/nextjs-no-optimize.png)

As you can see, my very simple manual optimization had huge effects on the page size, load times, and required requests. The only thing I changed is removing the script tags in the generated HTML. This has no effects on the webpage itself, as everything is already rendered by the server and there is no changing components.

As far as I know, NextJS does not have any official way of optimizing this. Though it looks like there is an experimental/unstable way to do something similar to what I'm doing manually, and I'm testing it out right now. So there should be no JS in this page you are viewing right now. 

Currently, there are some things that I hope can be changed with NextJS. The main one is the way data is sent to the browser, currently all data that the browser needs is sent as a separate JSON file. What I think should be done is that all data that doesn't change (like this blog post) should just be embedded to the webpage itself. Also, any static components should just be rendered server-side into regular HTML and not get client-side rendered. 

Obviously I'm not an expert on NextJS or ReactJS or even just web development in general, so maybe there's a reason its not done the way I wish it was done, maybe its even impossible. I don't know... Or maybe I'm just using NextJS completely wrong, thats another possibility.

