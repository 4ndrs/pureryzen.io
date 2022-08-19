# PureRyzen.io

Web App using Python as backend.

PureRyzen is the hostname of the Linux box running the NGINX Unit application server. The box is running on an AMD Ryzen CPU (a Ryzen 7 3700X to be more specific), that is where the name originally came from. The domain name does not exist outside of my local network.

## Configuration

To apply the configuration to the application server:
```console
# curl -X PUT --data-binary @config.json \
              --unix-socket /run/nginx-unit.sock http://localhost/config/
```

To restart the application processes:
```console
# curl -X GET --unix-socket /run/nginx-unit.sock \
              http://localhost/control/applications/PureRyzen/restart
```

## Screenshots
<kbd>![screen](https://user-images.githubusercontent.com/31898900/185584714-875b888c-0df9-4252-a435-84dc6a0166e2.gif)</kbd>

<kbd>![1660900116106024](https://user-images.githubusercontent.com/31898900/185586210-f586ff4b-2023-4ec7-871c-04facc74b965.png)</kbd>
