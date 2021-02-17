/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const fs = require('fs');

const globalNavFilePath = require.resolve('@adobe/gatsby-theme-aio/globalNav.json');
const globalNav = JSON.parse(fs.readFileSync(globalNavFilePath, 'utf8'));

globalNav.menus = [globalNav.menus[1]];

module.exports = {
  siteMetadata: {
    globalNav,
    pages: [
      {
        title: 'Customer Journey Analytics',
        path: '/'
      },
      {
        title: 'Endpoint guides',
        path: '/endpoints/'
      },
      {
        title: 'API reference',
        path: '/api/'
      },
    ],
    subPages: [
      {
        title: 'Customer Journey Analytics',
        path: '/',
        pages: [
          {
            title: 'Overview',
            path: '/'
          },
          {
            title: 'Getting started',
            path: '/getting-started/',
            pages: [
              {
                title: 'Overview',
                path: '/getting-started/'
              },
              {
                title: 'FAQ',
                path: '/getting-started/faq/'
              },
              {
                title: 'CJA vs. 2.0 API',
                path: '/getting-started/differences/'
              }
            ]
          },
          {
            title: 'Use cases',
            path: '/use-cases/',
            pages: [
              {
                title: 'Use cases overview',
                path: '/use-cases/'
              },
              {
                title: 'Postman',
                path: '/use-cases/postman/'
              },                {
                title: 'Python',
                path: '/use-cases/python/'
              }
            ]
          },
          {
            title: 'Support',
            path: '/support/'
          }
        ]
      },
      {
        title: 'Endpoint guides',
        path: '/endpoints/',
        pages: [
          {
            title: 'Endpoints overview',
            path: '/endpoints/',
            pages: [
              {
                title: 'Calculated metrics',
                path: '/endpoints/calculatedmetrics/',
                pages: [
                  {
                    title: 'Calculated metrics overview',
                    path: '/endpoints/calculatedmetrics/'
                  },
                  {
                    title: 'Functions',
                    path: '/endpoints/calculatedmetrics/functions/'
                  },
                  {
                    title: 'Validate',
                    path: '/endpoints/calculatedmetrics/validate/'
                  },
                  {
                    title: 'FAQ',
                    path: '/endpoints/calculatedmetrics/faq'
                  }
                ]
              },
              {
                title: 'Data groups',
                path: '/endpoints/datagroups/',
                pages: [
                  {
                    title: 'Data groups overview',
                    path: '/endpoints/datagroups/'
                  },
                  {
                    title: 'Data views',
                    path: '/endpoints/datagroups/dataviews/'
                  },
                  {
                    title: 'Dimensions and metrics',
                    path: '/endpoints/datagroups/data/'
                  }
                ]
              },
              {
                title: 'Filters',
                path: '/endpoints/filters/',
                pages: [
                  {
                    title: 'Filters overview',
                    path: '/endpoints/filters/'
                  },
                  {
                    title: 'Validate',
                    path: '/endpoints/filters/validate/'
                  }
                ]
              },
              {
                title: 'Reporting',
                path: '/endpoints/reporting/',
                pages: [
                  {
                    title: 'Reporting overview',
                    path: '/endpoints/reporting/'
                  },
                  {
                    title: 'Debugger',
                    path: '/endpoints/reporting/debugger'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'API reference',
        path: '/api/'
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/cja-apis/docs'
};
