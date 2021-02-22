FROM ubuntu

RUN apt-get update && \
	apt-get install -y curl && \
	curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
	apt-get install -y nodejs && \
	rm -rf /var/lib/apt/lists/* - clean computers

ADD ./package.json /app/package.json
RUN npm i
ADD ./ /app
CMD node index.js
WORKDIR /app


# docker build . -t firstdocker
# docker run firstdocker
# put Dockerfile close tho index.js with express server and node_modules
# docker run -it firstdocker -p 3000:3000 bash
# docker run -p 3000:3000 firstdocker


# //////////////// on server
# docker build . -t yura/firstdocker
# docker login
# docker push yura/firstdocker

# .dockerignore : node_modules
