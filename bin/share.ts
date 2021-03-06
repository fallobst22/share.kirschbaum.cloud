#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import SharePipelineStack from '../lib/SharePipelineStack';

const app = new cdk.App();

new SharePipelineStack(app, 'Pipeline', {
  env: {
    account: '900412866728',
    region: 'eu-central-1',
  },
});
