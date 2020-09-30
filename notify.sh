#!/bin/bash
url='https://api.telegram.org/bot'
url+=$1
url+='/sendMessage?chat_id=-400535008&text=GitHub+api+Build+Pass'
echo ${url}
curl --location --request GET ${url}