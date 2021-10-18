---
keywords:
  - Experience Platform
  - API Documentation
  - JavaScript
title: Audit Logs
description: Get a list of audit logs using the API.
---

# Projects Overview

The CJA APIs allow you to retrieve, update, or create projects programmatically through Adobe I/O. The APIs use the same data and methods that are used when working with projects in the UI. For more information on understanding project definition data architecture, see the [Project Definition](structure.md) article that accompanies this user guide.  See [Workspace projects overview](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-workspace/home.html) in the CJA documentation for more information.

## Best Practices

Please follow these guidelines when using the Projects APIs:

*  Make multiple, smaller requests instead of a large, single request.
*  Request data once and cache it.
*  Use caution when updating a project so that you do not alter the original project used by others.
*  Avoid creating duplicate projects with the same definition. Creating many projects will affect performance for your company in some situations.
*  If possible use the Analytics UI for creating projects from scratch. The UI offers significant advantages for managing and optimizing the complexity of this task. If you need to create projects programmatically, it is usually easier to create a template project in the UI and then have your application change only small portions of the project definition.

## Creating Projects

As mentioned in the [Best Practices](#best-practices) section above, the CJA UI is recommended for creating projects from scratch. If you do choose to use the API to create projects, keep in mind that certain fields cannot be supplied via the `POST /projects` endpoint. For example, `tags` are not stored within the projects themselves and will therefore be ignored if supplied on a creation request.

## /projects Endpoint Description

The `/projects` endpoint description is shown in our [Swagger UI](../../api.md). Use the Swagger UI to see endpoint summaries, available methods, parameters, example values, models, and status codes, and to try out the API.

### Expansions

Projects endpoints support the URL query parameter `expansion`. This parameter allows specifying additional data fields to be populated in response objects. Available expansions are shown in the [Swagger UI](../../api.md) description. The following table describes expansion fields:

|           Field       | 	Description         |
|---------------------|-------------------------|
| ownerFullName | The name of the owner of the project |
| modified | The date the project was last modified |
| tags |  Tags applied to the project |
| shares |  Shares applied to the project |
| accessLevel | Access level the current user has to a particular project (Edit/Duplicate/View) |
| externalReferences | Analytics components (Segments, Calculated Metrics, Date Views) used in the project definition |
| definition | The [project definition](structure.md) |

### IncludeTypes

The GET multiple `/projects` endpoint supports the query parameter `includeType`. This parameter alters the set of projects that are included in API responses. By default, responses without this parameter include only projects owned by the user making the request. When using this parameter, the following values are possible:

* `all`: Returns all projects linked to this company - this includeType is only available to admin users
* `shared`: Returns projects shared with the user

### Locale

Project endpoints support the URL query parameter `locale`. Supported values are `en_US`, `fr_FR`, `jp_JP`, `ja_JP`, `de_DE`, `es_ES`, `ko_KR`, `pt_BR`, `zh_CN`, and `zh_TW`. This query parameter specifies the language for responses.

### Pagination

Any response that can return multiple projects can be paginated with the `page` and `limit` URL query parameters. The `limit` parameter indicates the size of the desired page, and the `page` parameter indicates which page you want. A maximum page size of 1000 is enforced.

### Example cURL Request

The following example requests all projects on page 0 with page size 10:

`GET https://cja.adobe.io/projects`

### Example Response

The following response 10 projects owned by the caller on the first page:

```

{
  "content": [
    {
      "id": "6091a10005c7706c0acdd751",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-04T19:31:12Z"
    },
    {
      "id": "6094a7e01936af351300b81b",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-07T02:37:20Z"
    },
    {
      "id": "6094aa6b318ae31bf7d0a052",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-07T02:48:11Z"
    },
    {
      "id": "609c001c17d70a6b31694b7b",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-12T16:19:40Z"
    },
    {
      "id": "609d94557a1bac32bfe822d6",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-13T21:04:21Z"
    },
    {
      "id": "609d9b7117d70a6b31699d63",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-13T21:34:41Z"
    },
    {
      "id": "609eb9772ecede2233067197",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-14T17:55:03Z"
    },
    {
      "id": "60a400cfad861025de7edf25",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-18T18:00:47Z"
    },
    {
      "id": "60a403292ecede223306ffe3",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-18T18:10:49Z"
    },
    {
      "id": "60a5777dad861025de7ee116",
      "name": "New Project",
      "description": "",
      "dataId": "dv_000000000000000000",
      "owner": {
        "imsUserId": "0000000000000000000@AdobeID"
      },
      "type": "project",
      "created": "2021-05-19T20:39:25Z"
    }
  ],
  "totalPages": 10,
  "totalElements": 94,
  "number": 0,
  "numberOfElements": 10,
  "firstPage": true,
  "lastPage": false,
  "sort": [
    {
      "direction": "ASC",
      "property": "id",
      "ignoreCase": false,
      "ascending": true
    }
  ],
  "size": 10
}

```

## Retrieving a Single Project

You can retrieve projects individually if you know the project `id`. To find the project `id`, you can refer to the report descriptions or find it by using the multiple projects endpoint.

### Example Request

The following example requests data on the project `6091a10005c7706c0acdd751`:

`GET https://cja.adobe.io/projects/6091a10005c7706c0acdd751`

### Example Response

The following example shows the response data for the request on project `6091a10005c7706c0acdd751`:

```
{
  "id": "6091a10005c7706c0acdd751",
  "name": "New Project",
  "description": "",
  "dataId": "dv_000000000000000000",
  "owner": {
    "imsUserId": "0000000000000000000@AdobeID"
  },
  "type": "project",
  "created": "2021-05-04T19:31:12Z"
}
```

## Deleting a Project

If you delete a project, it is hidden from all users in all menus. Additionally, it is no longer returned when retrieving multiple projects in an API call.

### Example Request

The following example deletes project `6091a10005c7706c0acdd751`:

`DELETE https://cja.adobe.io/projects/6091a10005c7706c0acdd751`

### Example Response

The following response shows the deletion status for project `6091a10005c7706c0acdd751`:

```
{
  "result": "success"
}
```

## Updating a Project

You can edit existing projects with the `PUT /projects/{id}` endpoint. Some fields cannot be edited on a project with the PUT endpoint, including `tags` and `shares`. Other fields, including `owner`, `name`, `description`, `dataId`, and `definition`, can be edited.

The `PUT` endpoint also supports partial updates. This means that instead of sending the entire JSON object to the API, you can simply send fields that you want to update. For example, if you only want to update the name, use the JSON `{"name":"Updated name"}`. The entire object is returned in the response, modified by the requested expansions.

### Example Request

The following example updates the project `6091a10005c7706c0acdd751` with a new name:

`PUT https://cja.adobe.io/projects/6091a10005c7706c0acdd751`

```
{"name":"{NAME UPDATE}"}
```

### Example Response

The following example shows the response with updated name data:

```

{
  "id": "6091a10005c7706c0acdd751",
  "name": "{NAME UPDATE}",
  "description": "",
  "dataId": "dv_000000000000000000",
  "owner": {
    "imsUserId": "0000000000000000000@AdobeID"
  },
  "type": "project",
  "created": "2021-05-04T19:31:12Z"
}

```

## Validate Endpoint

Because report suites can have different configurations, variables, or metrics, one project that is valid in one report suite may not be valid in another. To determine which projects to use in different report suites, you can use the `validate` endpoint. This endpoint allows you to `POST` a definition along with a target `rsid`. The validate endpoint responds with compatibility information on the project.

### Example Request

The following example requests validation for the project with `rsid`: `apptestpnwtest`. The example shows a `POST` of the JSON [definition](projects.md):

`POST https://cja.adobe.io/projects/validate`
```
{
  "project": {
    "id": "6091a10005c7706c0acdd751",
    "name": "New Project",
    "description": "",
    "rsid": "apptestpnwtest",
    "owner": {
      "id": 622291
    },
    "type": "project",
    "definition": {
      "additionalCuratedComponents": [],
      "colorScheme": {
        "id": "default",
        "label": "",
        "value": ["#00C0C7", "#5144D3", "#E8871A", "#DA3490", "#9089FA", "#47E26F", "#2780EB", "#6F38B1", "#DFBF03", "#CB6F10", "#268D6C", "#9BEC54", "#5EABFA", "#BE40CC", "#F56BB7", "#FEE02D"]
      },
      "countRepeatInstances": true,
      "currentWorkspaceIndex": 0,
      "customColorSchemes": [],
      "isCurated": false,
      "version": "31",
      "viewDensity": "expanded",
      "workspaces": [{
        "id": "3B1FE317-C72A-4983-ABF1-D3BD14A8D511",
        "name": "",
        "panels": [{
          "annotations": [],
          "collapsed": false,
          "dateRange": {
            "id": "thisMonth",
            "__entity__": true,
            "type": "DateRange",
            "__metaData__": {
              "name": "This month"
            }
          },
          "description": "",
          "id": "C0DACAE8-CCE1-4332-9496-ABDBE80C9C23",
          "name": "Freeform",
          "position": {
            "autoHeight": 374,
            "autoSize": true,
            "width": 100,
            "x": 0,
            "y": 0
          },
          "reportSuite": {
            "id": "dv_000000000000000000",
            "__entity__": true,
            "type": "ReportSuite",
            "__metaData__": {
              "name": "dv_000000000000000000",
              "rsid": "dv_000000000000000000"
            }
          },
          "segmentGroups": [],
          "subPanels": [{
            "collapsed": false,
            "description": "",
            "id": "F2AAAA88-E63E-4AB6-9090-3612F378B9F0",
            "isQuickInsightsSubPanel": false,
            "linkedSourceId": "",
            "position": {
              "autoHeight": 222,
              "autoSize": true,
              "width": 100,
              "x": 0,
              "y": 0
            },
            "reportlet": {
              "advancedMode": false,
              "advancedSettings": {
                "rows": [],
                "tableState": "builder"
              },
              "columnTree": {
                "_computedValues": [],
                "dataSettings": {
                  "advancedItemLimit": 5,
                  "advancedItemSearch": {
                    "operator": "AND",
                    "rules": []
                  }
                },
                "id": "f46df4-2",
                "name": "",
                "nodes": [{
                  "_computedValues": [],
                  "component": {
                    "id": "All_Visits",
                    "__entity__": true,
                    "type": "Segment",
                    "__metaData__": {
                      "name": "All Visits"
                    }
                  },
                  "dataSettings": {
                    "advancedItemLimit": 5,
                    "advancedItemSearch": {
                      "operator": "AND",
                      "rules": []
                    }
                  },
                  "id": "f46df4-4",
                  "name": "All Visits",
                  "nodes": [],
                  "selectionCoordinates": [],
                  "tableCellDisplay": {
                    "conditionalFormattingOpts": {
                      "autoGenerate": true,
                      "usePercentLimits": false
                    },
                    "location": "behindNumber",
                    "type": {
                      "anomaly": true,
                      "background": true,
                      "backgroundType": "bar",
                      "comparison": "none",
                      "interpretZeroAsNoValue": false,
                      "number": true,
                      "percent": true,
                      "showGrandTotal": true,
                      "showSparklines": true,
                      "showTotals": true,
                      "wrapHeaderText": true
                    }
                  }
                }],
                "selectionCoordinates": [],
                "tableCellDisplay": {
                  "conditionalFormattingOpts": {
                    "autoGenerate": true,
                    "usePercentLimits": false
                  },
                  "location": "behindNumber",
                  "type": {
                    "anomaly": true,
                    "background": true,
                    "backgroundType": "bar",
                    "comparison": "none",
                    "interpretZeroAsNoValue": false,
                    "number": true,
                    "percent": true,
                    "showGrandTotal": true,
                    "showSparklines": true,
                    "showTotals": true,
                    "wrapHeaderText": true
                  }
                }
              },
              "freeformTable": {
                "alignDatesForTimeDimension": true,
                "attributionSettings": [],
                "breakdowns": [],
                "collapsed": false,
                "columnWidths": [100, 100],
                "pagination": {
                  "currentPage": 0,
                  "viewBy": 50
                },
                "search": {
                  "operator": "AND",
                  "rules": []
                },
                "selectionCoordinates": [],
                "settings": {
                  "breakdownByPosition": false,
                  "rowBasedPercentages": false,
                  "totalsType": "columnSum"
                },
                "sort": {
                  "asc": false,
                  "columnId": "f46df4-4",
                  "labelColumn": false
                },
                "staticRows": [{
                  "component": {
                    "id": "metrics/visits",
                    "__entity__": true,
                    "type": "Metric",
                    "__metaData__": {
                      "name": "Visits"
                    }
                  },
                  "dataSettings": {
                    "advancedItemLimit": 5,
                    "advancedItemSearch": {
                      "operator": "AND",
                      "rules": []
                    }
                  },
                  "id": "f46df4-a"
                }],
                "statistics": {
                  "functions": [],
                  "ignoreZeros": true
                }
              },
              "isConfigVisible": true,
              "type": "FreeformReportlet"
            },
            "swatchColor": "#00C0C7",
            "type": "genericSubPanel",
            "visible": true,
            "visualizationIndex": 1
          }],
          "type": "panel"
        }]
      }]
    },
    "created": "2021-05-04T19:31:12Z"
  }
}

```

### Example Response

The following response shows validation for the project with `dataId`: `dv_000000000000000000`.

```
{
  "valid": true,
  "validatorVersion": "1.0.0"
}
```
