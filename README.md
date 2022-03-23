# AntiqueSlots
[![Netlify Status](https://api.netlify.com/api/v1/badges/57192f3b-ef31-46c8-bbea-5655362e10db/deploy-status)](https://app.netlify.com/sites/antiqueslots/deploys)

This git repo is for a static website for my Dad's antique slot machine collection.

It can be viewed here: https://antiqueslots.com


## Creation
I purchased [this template](https://themeforest.net/item/monaco-vintage-multiconcept-html-template/16516842) from Envato. It has a nice modern yet vintage feel, and plenty of features I was looking for in a Gallery website, such as making use of CSS Grids for displaying images, image sorting by label, and that was mobile friendly. 

From start to finish, this project took about 4 days to complete with on/off work. Most of it was because I had to manually insert every image into the HTML, which is hard to do without a CMS. We use Netlify to host the site and NetworkSolutions for the domain.

I could have written a CLI tool like a Python HTML parser but I didn't want to risk any bugs with the parser that would cause the HTML layout to get messed up. As I add more pictures and pages to the site, this is very likely an option I will use as the site's HTML is already long and hard to track.

## Changelog

#### v2.2 (CURRENT)
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

## Future Features
* Individual pages for each machine in collection
* Archived Machines page
* Better pictures?
