# build environment
FROM node:alpine as build
WORKDIR /app

RUN npm config set unsafe-perm true

RUN npm install react-scripts@3.0.1 -g --silent
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
RUN npm cache clean --force
RUN GENERATE_SOURCEMAP=false npm run build --nomaps

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]