{
"title": "Make a static website dynamic with NextJS on Github Pages",
"writer": "Muhammad Isa Al Anshori",
"publishedDate": "17 November 2021",
"editedDate": "22 December 2021",
"language": "English",
"tags": ["NextJS","Github","Actions","Pages","CI/CD","CI","CD","Static","Web","Development"],
"thumbs": "/img/blog/thumbnails/001-nextjs-github-pages-actions.jpg"
}
@==contentstartshere==@
Github pages has existed for a while now, and its very useful for hosting your static pages. But, Github pages is just a static page hosting service so if you have dynamic content then you're out of luck.

## Making Github Pages Dynamic
Github actions is a CI/CD service provided for free by Github, and it allows everyone to run a workflow on the cloud. This means that now, we can very easily run our code on the cloud for free. For example, **NextJS**. NextJS is a server-side rendering framework based on ReactJS, it allows us to use react not only on the client side, but also on the server. A really cool feature that NextJS has is Static Site Generation, which allows us to export our website as a static webpage. Combining NextJS SSG with Github Actions means that we can make a static website that can update on a schedule and make it seem dynamic.

## But Why?
Static websites are fine. But if you have data that changes, then it would be difficult to keep manually updating the data everytime it changes. Client side rendering is an option, but theres also some problems with that and its not very good for SEO. So what I'm doing is kinda in between a server-side rendered website and a static website with client-side rendering. Its technically static but has dynamic data and has readable text for the SEO robots

## So how did I do it?
Using NextJS we can have the webpage render ReactJS on the server, and continue getting rendered after it gets to the client browser. NextJS also has a way to export the site and generate static HTML pages with pre-rendered ReactJS. So combining these NextJS features with Github Actions, we can make a [workflow](https://github.com/misaalanshori/misaalanshori.github.io/blob/main/.github/workflows/publish.yml) that builds the entire website every couple hours (or even multiple times an hour) and pushes it into a separate gh-pages branch that will then get served via Github Pages.

## What about this blog?
These blog posts are actually just markdown files in the source code. But these [aren't just regular markdown files](https://github.com/misaalanshori/misaalanshori.github.io/blob/main/data/blog/posts/001-nextjs-github-pages-actions.pinned.md), they are a "custom" format I made where the file is actually split into 2 parts, the first is the metadata which include things like the title, writer, publised date and other data that I haven't actually implemented into the website yet, and the second part is the actual contents, which is the contents of the post. These files are then read by NextJS using getStaticPaths and getStaticProps to be rendered as static HTML pages.

## Final thoughts
This is obviously not even close to the first attempt of doing this. Many people have done it before, even before Github Actions and using something like Jenkins CI for example. But I wanted to try it myself because I have been trying to figure out how to host a dynamic website for free (without using the sketchy free hosting out there). Also since this is just a regular NextJS project, it would be very easy to migrate to my own web hosting somewhere else if/when Github decides that these services shouldn't be free or if I want to monetize the website.