
# This dockerfile make very light image  (multi-stage dockerfile)
FROM golang:latest as builder

WORKDIR /app
COPY ./app ./

FROM alpine:latest
# mailcap adds mime detection and ca-certificates help with TLS (basic stuff)
# RUN apk --no-cache add ca-certificates mailcap && addgroup -S app && adduser -S app -G app
# USER app

WORKDIR /app
COPY --from=builder /app/app .
CMD ["./app"]


## Simple dockefile
# FROM golang:alpine

# WORKDIR /app

# COPY ./app ./

# CMD ["./app"]