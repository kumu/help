---
layout: enterprise
name: "Getting Started with VirtualBox"
---

The download locations for the Kumu Enterprise virtual appliance (.ova),
your Kumu Enterprise license (.kli), and the latest Kumu Enterprise software
bundle (.ksb) should have been provided to you by email. Please email
<a href="mailto:enterprise@kumu.io">enterprise@kumu.io</a> if you don't have them yet.

Also, please make sure you're running the
<a href="https://www.virtualbox.org/">latest version of VirtualBox</a>.

## Step 1. Import the appliance

Import the .ova into VirtualBox. Open the Machine Settings and configure the
following:

- Network (recommend Bridged Adapter)
- Memory (min 1024, recommend 4096)
- CPU

## Step 2. Boot the appliance

Boot the appliance and you'll be taken to the Kumu Enterprise console where you
can further configure the network settings.

If you see an ip listed here, you're all set.  If not, you'll need to adjust
your network settings.

## Step 3. Install your license and software bundle

Follow the instructions given to you by the console to complete your installation.
Your enterprise license (.kli) and software bundle (.ksb) can be installed by
going to `<hostname>/enterprise/setup`.

You're finished once you see the following screen (be patient as the process can take up to 10 minutes).
![Installation Complete](/images/enterprise-success.png)

## Step 4. Configure your installation

Once the setup is complete, you can go to `<hostname>/enterprise/admin` to
configure your installation.

<p>
  <strong>username:</strong> admin<br>
  <strong>password:</strong> the md5 checksum of your license
</p>

To get the checksum on a mac use `md5 kumu-enterprise.kli`
or on linux use `md5sum kumu-enterprise.kli`.

### Next: [Configuration](/enterprise/configuration.html)
