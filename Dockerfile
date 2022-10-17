FROM node:16-alpine3.16 as builder

RUN apk update

WORKDIR /app

COPY . .

ENTRYPOINT ["npm"]
CMD ["build"]

FROM nginx

RUN apt-get update 
RUN apt-get install bash

COPY --from=builder /app/build /usr/share/nginx/html