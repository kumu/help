---
layout: enterprise
name: "Configuration"
---

The settings for your enterprise installation can be managed at
`<hostname>/enterprise/admin`.

<p>
  <strong>username:</strong> admin<br>
  <strong>password:</strong> the md5 checksum of your license
</p>

The commands below can be used to generate the checksum.

```
# mac
md5 kumu-enterprise.kli

# linux
md5sum kumu-enterprise.kli
```
