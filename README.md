# PureRyzen.io

Web App using Python as backend.

PureRyzen is the hostname of the Linux box running the NGINX Unit application server. The box is running on an AMD Ryzen CPU (a Ryzen 7 3700X to be more specific), that is where the name originally came from. The domain name does not exist outside of my local network.

## Configuration

To apply the configuration to the application server:
```console
# curl -X PUT --data-binary @config.json --unix-socket /run/nginx-unit.sock http://localhost/config/
```

To restart the application processes:
```console
# curl -X GET --unix-socket /run/nginx-unit.sock http://localhost/control/applications/PureRyzen/restart
```

<kbd>![1660808374128211](https://user-images.githubusercontent.com/31898900/185345019-85a74ed8-fd3e-488e-abee-7025586ff61a.png)</kbd>
