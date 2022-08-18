# PureRyzen.io

Web App using Python as backend.

PureRyzen is the hostname of the Linux box running the NGINX Unit application server. The box is running on an AMD Ryzen CPU (a Ryzen 7 3700X to be more specific), that is where the name originally came from. The domain name does not exist outside of my local network.

To apply the configuration to the application server:
```console
# curl -X PUT --data-binary @config.json --unix-socket /run/nginx-unit.sock http://localhost/config/
```

To restart the application processes:
```console
# curl -X GET --unix-socket /run/nginx-unit.sock http://localhost/control/applications/PureRyzen/restart
```
