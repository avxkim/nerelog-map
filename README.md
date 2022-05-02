# NERELOG Map

React map application for demonstration purposes.

### Guide

1. `npm run dev` - runs dev environment uses. When the task is launched, a browser would automatically open a window with url: http://localhost:3000/
2. `npm run build` - builds app for production, uses Rollup under the hood.

### Docker

If you plan to use this app in a Docker container, then the following steps would be useful for you:

1. `docker build -t nerelog-map .` - would build a docker image with this app
2. `docker run -p 80:80 nerelog-map` - would launch this app on the `localhost` url. 

**NOTE**

If you're using Apple Sillicon chips and plan to ship to linux systems, you might consider `docker buildx` instead, because of the different architectures.