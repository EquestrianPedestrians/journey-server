#!/bin/bash


echo "Running migrations and seeding db ..."
for i in $(seq 1 30); do
  npm run migrate && npm run seed
  [ $? = 0 ] && break
  echo "Reconnecting db ..." && sleep 1 
done

npm start