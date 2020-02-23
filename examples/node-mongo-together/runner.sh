path=$(pwd)
echo "Hello from script - $path"
$(mongod -f /usr/src/app/mongo.conf --fork)
node app.js
