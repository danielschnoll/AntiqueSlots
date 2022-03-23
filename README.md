# AntiqueSlots
[![Netlify Status](https://api.netlify.com/api/v1/badges/57192f3b-ef31-46c8-bbea-5655362e10db/deploy-status)](https://app.netlify.com/sites/antiqueslots/deploys)

This git repo is for a static website for my Dad's antique slot machine collection.

It can be viewed here: https://antiqueslots.com

## Creation
A few years ago, I purchased a "modern antique" HTML/CSS/JS template from Envato. At the time, it was appropriate for my use case: I didn't know Angular or React, and I needed a website that I could put together myself. Over the course of a few days, I stitched it together by manually writing out the HTML for new sections and manually added images etc. 

Unfortunately, the template I purchased was very outdated. Even in 2018, jQuery was old and being phased out in favor of newer, lighter alternatives such as React and Vue. As far as SEO goes, the site was not very mobile friendly despite being sold as such. Accessibility scores from Google Lighthouse were subpar at best (bad contrast etc), and due to the scripting bloat the site grew sluggish as more content was added. The supplied animations only dragged it down further. As the site stagnated, so did its PageRank. 

I knew a new, ground up solution was the only way forward. So, with some professional React experience under my belt, I set out to rebuild AntiqueSlots the way I saw fit. Thankfully, `create-react-app` is a really powerful and handy basis to start building an SPA that's installable as a PWA. I can mimic paged-applications with `React Routing`. React has out of the box support for lazy loading with `React.lazy`. I also made as many reusable components as possible: Header banners, the navbar and footer, a reusable grid container that took in the respective page's JSON file as `props` and dynamically builds each collection page, and an Image card component that encapsulates the data from the aforementioned JSON.

I'm doing big things with AntiqueSlots. I have plans to make AntiqueSlots bigger and better than ever. Short term, I would like to add the following: Searching the image metadata with Algolia, an ecommerce shop powered by Stripe for purchasing machines, parts, and other stuff. Long term, I want this to be a go-to knowledge hub for everything vintage coin-op. I want to add a feature to document a machine's history. If its in our current collection, it will stay in the collections tab. If its not, it'll be moved to a separate Machine Lookup/history/museum page. For this, migrating the site to a SSG like Gatsby might be the best move. That way I can build out the page writeup in markdown and have it automatically parsed by Gatsby. 

## Changelog

### v3.1 (CURRENT)
* Complete site rebuild
* React based component level implementation
  * Mobile friendly, PWA installable
* Lazy Loading and Routing
* Image metadata is now stored in a JSON file for easy parsing
* New pictures taken on my iPhone 12

#### v2.2
* Lazy Loading added (native support w fallback option, thanks DesignCourse!)
* Added back Contact Form - Netfliy Forms is a godsend
* Alt tags for all images

#### v2.1
* Re-re-recompressed portfolio images (3rd time's the charm?), goal to get each page under 3mb
* Fixed bug with navbar on mobile
* Added meta tags to the head of each page for SEO
* Compressed front page for faster load

### v2.0
* Hosting with Netlify, NetworkSolutions for domain
* Removed prettyPhoto feature, including all related images from the assets/ directory (prettyPhoto was too buggy esp. with image resizing)
* Temporarily removed image overlay, will add back with "wiki" feature
* Compressed all images for optimal load speeds

### v1.0
* Remove "Additional Details" page links, too much to add in one version, TBA
* Buttons for sorting by machine brand/style
* Create a Machines for Sale page, content TBA
* Create pages for Pinball, Slots, Trade Stimulators, Vendors, and Arcade
* Add all parts from the Parts Bins in a Parts for Sale page
* Re-photograph all machines in collection
* Update nav bar 
* Create an About Me page and Contact Me page
* New logos
