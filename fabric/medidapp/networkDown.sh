#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
# Exit on first error
set -ex

rm -rf application-javascript/wallet/*

# Bring the test network down
pushd ../health-care-network
./network.sh down
popd
