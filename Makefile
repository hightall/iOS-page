SLASH:=/
REPLACE_SLASH:=\/
export ROOT_PATH ?= ${PWD}
ROOT_PATH_REPLACE=$(subst $(SLASH),$(REPLACE_SLASH),$(ROOT_PATH))

export ARCH:=$(shell arch)
export VERSION?=latest
DOCKER=`which docker`

-include .makerc/bootup
-include .makerc/help
-include .makerc/docker
-include .makerc/kubernetes

build-image: ##@Docker build docker images
	docker build -t registry-vpc.cn-hangzhou.aliyuncs.com/tealeaf/home-page:${VERSION} .

push-image:
	docker push registry-vpc.cn-hangzhou.aliyuncs.com/tealeaf/home-page:${VERSION}

start:
	@$(MAKE) -C bootup/kubernetes start

stop:
	@$(MAKE) -C bootup/kubernetes stop

HELP_FUN = \
	%help; \
	while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-]+)\s*:.*\#\#(?:@([a-zA-Z\-]+))?\s(.*)$$/ }; \
	print "usage: make [target]\n\n"; \
	for (sort keys %help) { \
	print "${WHITE}$$_:${RESET}\n"; \
	for (@{$$help{$$_}}) { \
	$$sep = " " x (32 - length $$_->[0]); \
	print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
	}; \
	print "\n"; }

help: ##@other Show this help.
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)
