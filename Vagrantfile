#!/usr/bin/env ruby

Vagrant.require_version ">= 1.5.0"
VAGRANTFILE_API_VERSION = '2'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = 'ubuntu/trusty64'
  config.vm.provision :shell, path: 'provision_root.sh'
  config.vm.provision :shell, path: 'provision.sh', privileged: false
  config.vm.network :forwarded_port, guest: 5000, host: 5000
	if Vagrant.has_plugin?("vagrant-cachier")
  		config.cache.scope = :box
	end
end
