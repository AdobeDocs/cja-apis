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

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Customer Journey Analytics API',
        path: '/'
      },
      {
        title: 'Getting started',
        path: '/getting-started/'
      },
      {
        title: 'Endpoint guides',
        path: '/endpoints/'
      },
      {
        title: 'API reference',
        path: '/api/'
      },
      {
        title: 'Use cases',
        path: '/use-cases/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Getting started',
        path: '/getting-started/',
        pages: [
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
        title: 'Endpoint guides',
        path: '/endpoints/',
        pages: [
          {
            title: 'Calculated metrics',
            path: '/endpoints/calculatedmetrics/',
            pages: [
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
                title: 'Debugger',
                path: '/endpoints/reporting/debugger'
              }
            ]
          }
        ]
      },
      {
        title: 'Use cases',
        path: '/use-cases/',
        pages: [
          {
            title: 'cURL',
            path: '/use-cases/curl/'
          },
          {
            title: 'Postman',
            path: '/use-cases/postman/'
          }, {
            title: 'Python',
            path: '/use-cases/python/'
          }
        ]
      }
    ]
  },

  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/cja-apis/docs/'
};
