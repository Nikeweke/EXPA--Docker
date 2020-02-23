# THIS iS  SKINNY BUILD of NODE
# This stage installs our modules - image size ~46 MB
FROM mhart/alpine-node:12 as builder
WORKDIR /app
COPY package.json package-lock.json ./

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

# "ci" means install by package-lock.json deps
RUN npm ci

# Then we copy over the modules from above onto a `slim` image (that means we have no NPM)
FROM mhart/alpine-node:slim-12

WORKDIR /app
COPY --from=builder /app .
COPY . .