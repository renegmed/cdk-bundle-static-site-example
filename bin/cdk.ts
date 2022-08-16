#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline-stack';
import { AppStage } from '../lib/app-stage';

const app = new cdk.App();

const delivery = new PipelineStack(app, 'Frontend-DeliveryPipeline', {
  name: 'Frontend',
  env: {
    account: '731833107751',
    region: 'us-east-1'
  }
});

delivery.pipeline.addStage(
  new AppStage(app, 'App', {
    apiUrl: 'https://eccmoplyq1.execute-api.us-east-1.amazonaws.com/hello', // this should be the HTTP API url from the cdk-bundle-go-lambda-example app
    env: {
      account: '731833107751',
      region: 'us-east-1',
    },
  })
);
