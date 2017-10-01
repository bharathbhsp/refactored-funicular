/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Tweet from '../../components/Tweet';
import Wall from '../../components/Wall';

const title = 'Tweet Us';

function action() {
  return {
    chunks: ['home'],
    title,
    component: (
      <Layout>
        <Tweet title={title} />
        <Wall title="The WALL" />
      </Layout>
    ),
  };
}

export default action;
