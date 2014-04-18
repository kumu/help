---
layout: enterprise
name: "Upgrading"
---

Upgrades come in two flavors: software upgrades and appliance upgrades.

# Software Upgrade

Just grab the latest .ksb and upload it at `<hostname>/enterprise/setup`.
There's no need to upload your license again if you've already done so.

# Appliance Upgrade

Occasionally the underlying appliance will need to be upgraded as well. Although
not as simple as the basic upgrade, the process only requires a few steps.

First you'll need to fire up a fresh instance of the latest ova by following the standard
<a href="/enterprise/getting-started-with-virtualbox.html">installation instructions</a>.

Once the new instance is up and running, use the script below to migrate data
from the old instance to the new one.

```
ssh admin@<old-hostname> -- "kumu-export" > kumu-backup.tar.gz
ssh admin@<new-hostname> -- "kumu-import" < kumu-backup.tar.gz
```

### Still have questions? [Contact Support](mailto:enterprise@kumu.io)
