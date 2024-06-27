const { years } = require("../../service/years")
const { apiUrls } = require("../CommonActionAPI/service")

const propertyTaxOpFormJson = (role) => {
  let readOnly = role === "ULB" ? false : true
  return {
    "_id": null,
    "ulb": "5fa24660072dab780a6f141e",
    "design_year": "606aafb14dff55e6c075d3ae",
    "isDraft": null,
    "tabs": [
      {
        "_id": "63e4cdf74d1e781623cac3f8",
        "key": "financialInformation",
        "icon": "",
        "text": "",
        "label": "Financial Information",
        "id": "s3",
        "displayPriority": 3,
        "__v": 0,
        "data": {
          "ulbCollectPtax": {
            "key": "ulbCollectPtax",
            "label": "Did the ULB collect property tax in FY 22-23?",
            "required": true,
            "displayPriority": "1.1",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "ulbCollectPtax",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "radio-toggle",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "ulbFinancialYear": {
            "key": "ulbFinancialYear",
            "label": "On which financial year ULB was formed?",
            "required": true,
            "displayPriority": "1.2",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "1800",
                "max": "2023",
                "required": true,
                "type": "ulbFinancialYear",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "ulbPassedResolPtax": {
            "key": "ulbPassedResolPtax",
            "label": "Has the ULB passed resolution for levy of property tax?",
            "required": true,
            "displayPriority": "1.3",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "ulbPassedResolPtax",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "radio-toggle",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "resolutionFile": {
            "key": "resolutionFile",
            "label": "Please submit the copy of resolution",
            "required": true,
            "displayPriority": "1.4",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "resolutionFile",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "notificationPropertyTax": {
            "key": "notificationPropertyTax",
            "label": "Has the ULB adopted notification for charging property tax?",
            "required": true,
            "displayPriority": "1.5",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "notificationPropertyTax",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "radio-toggle",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "notificationAdoptionDate": {
            "key": "notificationAdoptionDate",
            "label": "What was the notification adoption date?",
            "required": true,
            "displayPriority": "1.6",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "date": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "notificationAdoptionDate",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "date",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "notificationIssuedBy": {
            "key": "notificationIssuedBy",
            "label": "The adopted notification was issued by?",
            "required": true,
            "displayPriority": "1.7",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "options": [
                  {
                    "id": "ULB",
                    "label": "ULB"
                  },
                  {
                    "id": "State",
                    "label": "State"
                  }
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "notificationIssuedBy",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "select",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "notificationFile": {
            "key": "notificationFile",
            "label": "Upload a copy of the notification",
            "required": true,
            "displayPriority": "1.8",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "notificationFile",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "dmdIncludingCess": {
            "key": "dmdIncludingCess",
            "label": "Total property tax demand (including cess, other taxes, AND excluding user charges if user charges are collected with property tax)",
            "required": true,
            "displayPriority": "1.9",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdIncludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdIncludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdIncludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdIncludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdIncludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": "Including cess like library cess, tree cess etc , other taxes like water tax, sanitation tax etc. And excluding user charges like water charges, sewerage charges etc demanded along with property tax."
          },
          "cdmdIncludingCess": {
            "key": "cdmdIncludingCess",
            "label": "Current property tax demand (including cess, other taxes, AND excluding user charges if user charges are collected with property tax)",
            "required": false,
            "displayPriority": "1.10",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cdmdIncludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cdmdIncludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cdmdIncludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cdmdIncludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cdmdIncludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "admdIncludingCess": {
            "key": "admdIncludingCess",
            "label": "Arrear property tax demand (including cess, other taxes, AND excluding user charges if user charges are collected with property tax)",
            "required": false,
            "displayPriority": "1.11",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "admdIncludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "admdIncludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "admdIncludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "admdIncludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "admdIncludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "dmdexcludingCess": {
            "key": "dmdexcludingCess",
            "label": "Total property tax demand (excluding cess, other taxes, user charges if any)",
            "required": true,
            "displayPriority": "1.12",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdexcludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdexcludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdexcludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdexcludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "dmdexcludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": "Excluding cess like library cess, tree cess etc , other taxes like water tax, sanitation tax etc and user charges like water charges, sewerage charges etc demanded along with property tax."
          },
          "taxTypeDemand": {
            "key": "taxTypeDemand",
            "label": "Other tax demand (Demand figure for each type of tax other than property tax collected)",
            "required": true,
            "displayPriority": "1.13",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "taxTypeDemandChild",
                "label": "Other tax demand (Demand figure for each type of tax other than property tax collected)",
                "required": true,
                "displayPriority": "1.13",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeDemandChild",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeDemandChild",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeDemandChild",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeDemandChild",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeDemandChild",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": "For example,Water tax, Sanitation tax, etc."
          },
          "cessDemand": {
            "key": "cessDemand",
            "label": "Cess demand (Demand figure for each type of cess collected)",
            "required": true,
            "displayPriority": "1.14",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "cessDemandChild",
                "label": "Cess demand (Demand figure for each type of cess collected)",
                "required": true,
                "displayPriority": "1.14",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessDemandChild",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessDemandChild",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessDemandChild",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessDemandChild",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessDemandChild",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": "For example, Tree cess, Library cess etc."
          },
          "doesUserChargesDmnd": {
            "key": "doesUserChargesDmnd",
            "label": "Do you collect any user charges along with Property Tax?",
            "required": true,
            "displayPriority": "1.15",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "doesUserChargesDmnd",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "radio-toggle",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "userChargesDmnd": {
            "key": "userChargesDmnd",
            "label": "User charges demand (Demand figure for each type of user charge collected along with property tax)",
            "required": true,
            "displayPriority": "1.16",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "userChargesDmndChild",
                "label": "User charges demand (Demand figure for each type of user charge collected along with property tax)",
                "required": true,
                "displayPriority": "1.16",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesDmndChild",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesDmndChild",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesDmndChild",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesDmndChild",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesDmndChild",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 5,
            "copyOptions": [
              {
                "id": "Water charges",
                "label": "Water charges",
                "disabled": false
              },
              {
                "id": "Sewerage /Sanitation charges",
                "label": "Sewerage /Sanitation charges",
                "disabled": false
              },
              {
                "id": "Solid-waste management charges",
                "label": "Solid-waste management charges",
                "disabled": false
              },
              {
                "id": "Drainage charges",
                "label": "Drainage charges",
                "disabled": false
              },
              {
                "id": "others",
                "label": "others",
                "disabled": false
              }
            ],
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": "For example, Water charges, Sewerage charges etc."
          },
          "collectIncludingCess": {
            "key": "collectIncludingCess",
            "label": "Total property tax collection (including cess, other taxes, AND excluding user charges if user charges are collected with property tax)",
            "required": true,
            "displayPriority": "1.17",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectIncludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectIncludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectIncludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectIncludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectIncludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": "Including cess like library cess, tree cess etc , other taxes like water tax, sanitation tax etc. And excluding user charges like water charges, sewearge charges etc demanded along with property tax."
          },
          "cuCollectIncludingCess": {
            "key": "cuCollectIncludingCess",
            "label": "Current property tax collection (including cess, other taxes, AND excluding user charges if user charges are collected with property tax)",
            "required": false,
            "displayPriority": "1.18",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuCollectIncludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuCollectIncludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuCollectIncludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuCollectIncludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuCollectIncludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "arCollectIncludingCess": {
            "key": "arCollectIncludingCess",
            "label": "Arrear property tax collection (including cess, other taxes, AND excluding user charges if user charges are collected with property tax)",
            "required": false,
            "displayPriority": "1.19",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arCollectIncludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arCollectIncludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arCollectIncludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arCollectIncludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arCollectIncludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "collectExcludingCess": {
            "key": "collectExcludingCess",
            "label": "Total property tax collection (excluding cess,other taxes, user charges if any)",
            "required": true,
            "displayPriority": "1.20",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectExcludingCess",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectExcludingCess",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectExcludingCess",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectExcludingCess",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "collectExcludingCess",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": "Excluding cess like library cess, tree cess etc , other taxes like water tax, sanitation tax etc and user charges like water charges, sewearge charges etc demanded along with property tax."
          },
          "taxTypeCollection": {
            "key": "taxTypeCollection",
            "label": "Other tax collections (Collection figure for each type of tax other than property tax collected)",
            "required": true,
            "displayPriority": "1.21",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "taxTypeCollectionChild",
                "label": "Other tax collections (Collection figure for each type of tax other than property tax collected)",
                "required": true,
                "displayPriority": "1.21",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeCollectionChild",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeCollectionChild",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeCollectionChild",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeCollectionChild",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "taxTypeCollectionChild",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": "For example, Water tax, Sanitation tax, etc."
          },
          "cessCollect": {
            "key": "cessCollect",
            "label": "Cess collection (Collection figure for each type of cess collected)",
            "required": true,
            "displayPriority": "1.22",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "cessCollectChild",
                "label": "Cess collection (Collection figure for each type of cess collected)",
                "required": true,
                "displayPriority": "1.22",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessCollectChild",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessCollectChild",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessCollectChild",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessCollectChild",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "cessCollectChild",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": "For example, Tree cess, Library cess etc."
          },
          "userChargesCollection": {
            "key": "userChargesCollection",
            "label": "User charges collection (Collection figure for each type of user charge collected along with property tax)",
            "required": true,
            "displayPriority": "1.23",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "userChargesCollectionChild",
                "label": "Cess collection (Collection figure for each type of cess collected)",
                "required": true,
                "displayPriority": "1.23",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesCollectionChild",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesCollectionChild",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesCollectionChild",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesCollectionChild",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "userChargesCollectionChild",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 5,
            "copyOptions": [
              {
                "id": "Water charges",
                "label": "Water charges",
                "disabled": false
              },
              {
                "id": "Sewerage/Sanitation Charges",
                "label": "Sewerage/Sanitation Charges",
                "disabled": false
              },
              {
                "id": "Solid-waste management Charges",
                "label": "Solid-waste management Charges",
                "disabled": false
              },
              {
                "id": "Drainage Charges",
                "label": "Drainage Charges",
                "disabled": false
              },
              {
                "id": "Other charges",
                "label": "Other charges",
                "disabled": false
              }
            ],
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "totalMappedPropertiesUlb": {
            "key": "totalMappedPropertiesUlb",
            "label": "Total number of properties mapped in the ULB (including properties exempted from paying property tax)",
            "required": false,
            "displayPriority": "2.1",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalMappedPropertiesUlb",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalMappedPropertiesUlb",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalMappedPropertiesUlb",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalMappedPropertiesUlb",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalMappedPropertiesUlb",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalPropertiesTax": {
            "key": "totalPropertiesTax",
            "label": "Total number of properties exempted from paying property tax",
            "required": false,
            "displayPriority": "2.2",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalPropertiesTax",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalPropertiesTax",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalPropertiesTax",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalPropertiesTax",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": false,
                "type": "totalPropertiesTax",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalPropertiesTaxDm": {
            "key": "totalPropertiesTaxDm",
            "label": "Total number of properties from which property tax was demanded",
            "required": true,
            "displayPriority": "2.3",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalPropertiesTaxDmCollected": {
            "key": "totalPropertiesTaxDmCollected",
            "label": "Total number of properties from which property tax was collected",
            "required": true,
            "displayPriority": "2.4",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDmCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDmCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDmCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDmCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalPropertiesTaxDmCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resValuePropertyTaxDm": {
            "key": "resValuePropertyTaxDm",
            "label": "Value of property tax demanded (INR lakhs)",
            "required": true,
            "displayPriority": "2.5",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resNoPropertyTaxDm": {
            "key": "resNoPropertyTaxDm",
            "label": "Number of properties from which property tax was demanded",
            "required": true,
            "displayPriority": "2.6",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resValuePropertyTaxCollected": {
            "key": "resValuePropertyTaxCollected",
            "label": "Value of property tax collected (INR lakhs)",
            "required": true,
            "displayPriority": "2.7",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValuePropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resNoPropertyTaxCollected": {
            "key": "resNoPropertyTaxCollected",
            "label": "Number of properties from which property tax was collected",
            "required": true,
            "displayPriority": "2.8",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoPropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comValuePropertyTaxDm": {
            "key": "comValuePropertyTaxDm",
            "label": "Value of property tax demanded (INR lakhs)",
            "required": true,
            "displayPriority": "2.9",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comNoPropertyTaxDm": {
            "key": "comNoPropertyTaxDm",
            "label": "Number of properties from which property tax was demanded",
            "required": true,
            "displayPriority": "2.10",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comValuePropertyTaxCollected": {
            "key": "comValuePropertyTaxCollected",
            "label": "Value of property tax collected (INR lakhs)",
            "required": true,
            "displayPriority": "2.11",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValuePropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comNoPropertyTaxCollected": {
            "key": "comNoPropertyTaxCollected",
            "label": "Number of properties from which property tax was collected",
            "required": true,
            "displayPriority": "2.12",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoPropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indValuePropertyTaxDm": {
            "key": "indValuePropertyTaxDm",
            "label": "Value of property tax demanded (INR lakhs)",
            "required": true,
            "displayPriority": "2.13",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indNoPropertyTaxDm": {
            "key": "indNoPropertyTaxDm",
            "label": "Number of properties from which property tax was demanded",
            "required": true,
            "displayPriority": "2.14",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indValuePropertyTaxCollected": {
            "key": "indValuePropertyTaxCollected",
            "label": "Value of property tax collected (INR lakhs)",
            "required": true,
            "displayPriority": "2.15",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValuePropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indNoPropertyTaxCollected": {
            "key": "indNoPropertyTaxCollected",
            "label": "Number of properties from which property tax was collected",
            "required": true,
            "displayPriority": "2.16",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoPropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "govValuePropertyTaxDm": {
            "key": "govValuePropertyTaxDm",
            "label": "Value of property tax demanded (INR lakhs)",
            "required": true,
            "displayPriority": "2.17",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "govNoPropertyTaxDm": {
            "key": "govNoPropertyTaxDm",
            "label": "Number of properties from which property tax was demanded",
            "required": true,
            "displayPriority": "2.18",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "govValuePropertyTaxCollected": {
            "key": "govValuePropertyTaxCollected",
            "label": "Value of property tax collected (INR lakhs)",
            "required": true,
            "displayPriority": "2.19",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "govValuePropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "govNoPropertyTaxCollected": {
            "key": "govNoPropertyTaxCollected",
            "label": "Number of properties from which property tax was collected",
            "required": true,
            "displayPriority": "2.20",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "govNoPropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "insValuePropertyTaxDm": {
            "key": "insValuePropertyTaxDm",
            "label": "Value of property tax demanded (INR lakhs)",
            "required": true,
            "displayPriority": "2.21",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "insNoPropertyTaxDm": {
            "key": "insNoPropertyTaxDm",
            "label": "Number of properties from which property tax was demanded",
            "required": true,
            "displayPriority": "2.22",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "insValuePropertyTaxCollected": {
            "key": "insValuePropertyTaxCollected",
            "label": "Value of property tax collected (INR lakhs)",
            "required": true,
            "displayPriority": "2.23",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "insValuePropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "insNoPropertyTaxCollected": {
            "key": "insNoPropertyTaxCollected",
            "label": "Number of properties from which property tax was collected",
            "required": true,
            "displayPriority": "2.24",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "insNoPropertyTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "otherValuePropertyType": {
            "key": "otherValuePropertyType",
            "label": "Property Type",
            "required": true,
            "displayPriority": "2.25",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "otherValuePropertyTaxDm",
                "label": "Value of property tax demanded (INR lakhs)",
                "required": true,
                "displayPriority": "2.26",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxDm",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxDm",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxDm",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxDm",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxDm",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "otherNoPropertyTaxDm",
                "label": "Number of properties from which property tax was demanded",
                "required": true,
                "displayPriority": "2.27",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxDm",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxDm",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxDm",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxDm",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxDm",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "otherValuePropertyTaxCollected",
                "label": "Value of property tax collected (INR lakhs)",
                "required": true,
                "displayPriority": "2.28",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxCollected",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxCollected",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxCollected",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxCollected",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValuePropertyTaxCollected",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "otherNoPropertyTaxCollected",
                "label": "Number of properties from which property tax was collected",
                "required": true,
                "displayPriority": "2.29",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxCollected",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxCollected",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxCollected",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxCollected",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoPropertyTaxCollected",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "noOfPropertiesPaidOnline": {
            "key": "noOfPropertiesPaidOnline",
            "label": "Number of properties that paid online (through website or mobile application)",
            "required": true,
            "displayPriority": "3.1",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "noOfPropertiesPaidOnline",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "noOfPropertiesPaidOnline",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "noOfPropertiesPaidOnline",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "noOfPropertiesPaidOnline",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "noOfPropertiesPaidOnline",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalCollectionOnline": {
            "key": "totalCollectionOnline",
            "label": "Total collections made via online channel i.e. through website or mobile application (INR lakhs)",
            "required": true,
            "displayPriority": "3.2",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalCollectionOnline",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalCollectionOnline",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalCollectionOnline",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalCollectionOnline",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalCollectionOnline",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "propertyTaxValuationDetails": {
            "key": "propertyTaxValuationDetails",
            "label": "Please submit the property tax rate card",
            "required": true,
            "displayPriority": "4.1",
            "downloadLink": "https://democityfinance.s3.ap-south-1.amazonaws.com/ULB/2022-23/property-tax/sample-files/Sample%20format%20for%20property%20tax%20rate%20card.xlsx",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf",
                  "xls",
                  "xlsx"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "propertyTaxValuationDetails",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": "Please submit the formula by which property tax is calculated for different types of properties."
          },
          "notificationWaterCharges": {
            "key": "notificationWaterCharges",
            "label": "Are water charges being collected in the ULB?",
            "required": true,
            "displayPriority": "5.1",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "notificationWaterCharges",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "radio-toggle",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "entityWaterCharges": {
            "key": "entityWaterCharges",
            "label": "Which entity is collecting the water charges?",
            "required": true,
            "displayPriority": "5.2",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "options": [
                  {
                    "id": "ULB",
                    "label": "ULB"
                  },
                  {
                    "id": "State Department",
                    "label": "State Department"
                  },
                  {
                    "id": "Parastatal Agency",
                    "label": "Parastatal Agency"
                  },
                  {
                    "id": "Others",
                    "label": "Others"
                  }
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "entityWaterCharges",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "select",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": "If any option other than ULB is selected, please ensure that the relevant authority collecting the water charges fills the below details."
          },
          "entityNameWaterCharges": {
            "key": "entityNameWaterCharges",
            "label": "Please fill the name of entity",
            "required": true,
            "displayPriority": "5.3",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "entityNameWaterCharges",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "text",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "notificationWaterChargesFile": {
            "key": "notificationWaterChargesFile",
            "label": "Upload a copy of gazette notification that notifies water charges",
            "required": true,
            "displayPriority": "5.4",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "notificationWaterChargesFile",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "waterChrgDm": {
            "key": "waterChrgDm",
            "label": "Total water charges demand",
            "required": true,
            "displayPriority": "5.5",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "cuWaterChrgDm": {
            "key": "cuWaterChrgDm",
            "label": "Current water charges demand",
            "required": false,
            "displayPriority": "5.6",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "arWaterChrgDm": {
            "key": "arWaterChrgDm",
            "label": "Arrear water charges demand",
            "required": false,
            "displayPriority": "5.7",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "waterChrgCol": {
            "key": "waterChrgCol",
            "label": "Total water charges collection",
            "required": true,
            "displayPriority": "5.8",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "waterChrgCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "cuWaterChrgCol": {
            "key": "cuWaterChrgCol",
            "label": "Current water charges collection",
            "required": false,
            "displayPriority": "5.9",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "cuWaterChrgCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "arWaterChrgCol": {
            "key": "arWaterChrgCol",
            "label": "Arrear water charges collection",
            "required": false,
            "displayPriority": "5.10",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arWaterChrgCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "waterChrgConnectionDm": {
            "key": "waterChrgConnectionDm",
            "label": "Total Number of connections from which water charges was demanded",
            "required": true,
            "displayPriority": "5.11",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "waterChrgConnectionCol": {
            "key": "waterChrgConnectionCol",
            "label": "Total Number of connections from which water charges were collected",
            "required": true,
            "displayPriority": "5.12",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "waterChrgConnectionCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resValueWaterChrgDm": {
            "key": "resValueWaterChrgDm",
            "label": "Value of water charges demanded (INR lakhs)",
            "required": true,
            "displayPriority": "5.13",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resNoWaterChrgDm": {
            "key": "resNoWaterChrgDm",
            "label": "Number of connections from which water charges was demanded",
            "required": true,
            "displayPriority": "5.14",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resValueWaterChrgCollected": {
            "key": "resValueWaterChrgCollected",
            "label": "Value of water charges collected from connections (INR lakhs)",
            "required": true,
            "displayPriority": "5.15",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueWaterChrgCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resNoWaterChrgCollected": {
            "key": "resNoWaterChrgCollected",
            "label": "Number of connections from which water charges was collected",
            "required": true,
            "displayPriority": "5.16",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoWaterChrgCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comValueWaterChrgDm": {
            "key": "comValueWaterChrgDm",
            "label": "Value of water charges demanded (INR lakhs)",
            "required": true,
            "displayPriority": "5.17",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comNoWaterChrgDm": {
            "key": "comNoWaterChrgDm",
            "label": "Number of connections from which water charges was demanded",
            "required": true,
            "displayPriority": "5.18",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comValueWaterChrgCollected": {
            "key": "comValueWaterChrgCollected",
            "label": "Value of water charges collected from connections (INR lakhs)",
            "required": true,
            "displayPriority": "5.19",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueWaterChrgCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comNoWaterChrgCollected": {
            "key": "comNoWaterChrgCollected",
            "label": "Number of connections from which water charges was collected",
            "required": true,
            "displayPriority": "5.20",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoWaterChrgCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indValueWaterChrgDm": {
            "key": "indValueWaterChrgDm",
            "label": "Value of water charges demanded (INR lakhs)",
            "required": true,
            "displayPriority": "5.21",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indNoWaterChrgDm": {
            "key": "indNoWaterChrgDm",
            "label": "Number of connections from which water charges was demanded",
            "required": true,
            "displayPriority": "5.22",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indValueWaterChrgCollected": {
            "key": "indValueWaterChrgCollected",
            "label": "Value of water charges collected from connections (INR lakhs)",
            "required": true,
            "displayPriority": "5.23",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueWaterChrgCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indNoWaterChrgCollected": {
            "key": "indNoWaterChrgCollected",
            "label": "Number of connections from which water charges was collected",
            "required": true,
            "displayPriority": "5.24",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoWaterChrgCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "othersValueWaterType": {
            "key": "othersValueWaterType",
            "label": "Connection Type",
            "required": true,
            "displayPriority": "5.25",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "othersValueWaterChrgDm",
                "label": "Value of water charges demanded (INR lakhs)",
                "required": true,
                "displayPriority": "5.26",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgDm",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgDm",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgDm",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgDm",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgDm",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "othersNoWaterChrgDm",
                "label": "Number of connections from which water charges was demanded",
                "required": true,
                "displayPriority": "5.27",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgDm",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgDm",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgDm",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgDm",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgDm",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "othersValueWaterChrgCollected",
                "label": "Value of water charges collected from connections (INR lakhs)",
                "required": true,
                "displayPriority": "5.28",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgCollected",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgCollected",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgCollected",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgCollected",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "othersValueWaterChrgCollected",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "othersNoWaterChrgCollected",
                "label": "Number of connections from which water charges was collected",
                "required": true,
                "displayPriority": "5.29",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgCollected",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgCollected",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgCollected",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgCollected",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "othersNoWaterChrgCollected",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "waterChrgTariffDetails": {
            "key": "waterChrgTariffDetails",
            "label": "Please provide the water tariff sheet",
            "required": true,
            "displayPriority": "5.30",
            "downloadLink": "https://democityfinance.s3.ap-south-1.amazonaws.com/ULB/2022-23/property-tax/sample-files/Sample%20Water%20Tariff%20Rate%20Sheet.docx",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf",
                  "xls",
                  "xlsx"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "waterChrgTariffDetails",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": "Please provide the base formula/ rates at which different connection types are charged."
          },
          "omCostDeleveryWater": {
            "key": "omCostDeleveryWater",
            "label": "What is the O&M cost of service delivery for water? (INR lakhs)",
            "required": true,
            "displayPriority": "5.31",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleveryWater",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleveryWater",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleveryWater",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleveryWater",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleveryWater",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "omCostWaterService": {
            "key": "omCostWaterService",
            "label": "Please provide the working sheet for O&M cost calculation",
            "required": true,
            "displayPriority": "5.32",
            "downloadLink": "https://democityfinance.s3.ap-south-1.amazonaws.com/ULB/2022-23/property-tax/sample-files/Sample%20O_M%20cost%20working%20sheet%20-%20water%20services.docx",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf",
                  "xls",
                  "xlsx"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "omCostWaterService",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "doesColSewerageCharges": {
            "key": "doesColSewerageCharges",
            "label": "Are sewerage charges being collected in the ULB?",
            "required": true,
            "displayPriority": "6.1",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "doesColSewerageCharges",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "radio-toggle",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "entitySewerageCharges": {
            "key": "entitySewerageCharges",
            "label": "Which entity is collecting the sewerage charges?",
            "required": true,
            "displayPriority": "6.2",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "options": [
                  {
                    "id": "ULB",
                    "label": "ULB"
                  },
                  {
                    "id": "State Department",
                    "label": "State Department"
                  },
                  {
                    "id": "Parastatal Agency",
                    "label": "Parastatal Agency"
                  },
                  {
                    "id": "Others",
                    "label": "Others"
                  }
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "entitySewerageCharges",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "select",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": "If any option other than ULB is selected, please ensure that the relevant authority collecting the sewerage charges fills the below details."
          },
          "entityNaSewerageCharges": {
            "key": "entityNaSewerageCharges",
            "label": "Please fill the name of the entity",
            "required": true,
            "displayPriority": "6.3",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": "",
                "max": "",
                "required": true,
                "type": "entityNaSewerageCharges",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "text",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "copyGazetteNotificationSewerage": {
            "key": "copyGazetteNotificationSewerage",
            "label": "Upload a copy of gazette notification that notifies collection of sewerage charges",
            "required": true,
            "displayPriority": "6.4",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "copyGazetteNotificationSewerage",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "totalSewergeChrgDm": {
            "key": "totalSewergeChrgDm",
            "label": "Total sewerage charges demand",
            "required": true,
            "displayPriority": "6.5",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "curSewergeChrgDm": {
            "key": "curSewergeChrgDm",
            "label": "Current sewerage charges demand",
            "required": false,
            "displayPriority": "6.6",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "arrSewergeChrgDm": {
            "key": "arrSewergeChrgDm",
            "label": "Arrear sewerage charges demand",
            "required": false,
            "displayPriority": "6.7",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalSewergeChrgCol": {
            "key": "totalSewergeChrgCol",
            "label": "Total sewerage charges collection",
            "required": true,
            "displayPriority": "6.8",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "totalSewergeChrgCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "curSewergeChrgCol": {
            "key": "curSewergeChrgCol",
            "label": "Current sewerage charges collection",
            "required": false,
            "displayPriority": "6.9",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "curSewergeChrgCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "arrSewergeChrgCol": {
            "key": "arrSewergeChrgCol",
            "label": "Arrear sewerage charges collection",
            "required": false,
            "displayPriority": "6.10",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": false,
                "type": "arrSewergeChrgCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalSewergeConnectionDm": {
            "key": "totalSewergeConnectionDm",
            "label": "Total number of connections from which sewerage charges was demanded",
            "required": true,
            "displayPriority": "6.11",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "totalSewergeConnectionCol": {
            "key": "totalSewergeConnectionCol",
            "label": "Total number of connections from which sewerage charges were collected",
            "required": true,
            "displayPriority": "6.12",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionCol",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionCol",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionCol",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionCol",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 999999999999999,
                "required": true,
                "type": "totalSewergeConnectionCol",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resValueSewerageTaxDm": {
            "key": "resValueSewerageTaxDm",
            "label": "Value of sewerage charges demanded (INR lakhs)",
            "required": true,
            "displayPriority": "6.13",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resNoSewerageTaxDm": {
            "key": "resNoSewerageTaxDm",
            "label": "Number of connections from which sewerage charges was demanded",
            "required": true,
            "displayPriority": "6.14",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resValueSewerageTaxCollected": {
            "key": "resValueSewerageTaxCollected",
            "label": "Value of sewerage charges collected from connections (INR lakhs)",
            "required": true,
            "displayPriority": "6.15",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "resValueSewerageTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "resNoSewerageTaxCollected": {
            "key": "resNoSewerageTaxCollected",
            "label": "Number of connections from which sewerage charges was collected",
            "required": true,
            "displayPriority": "6.16",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "resNoSewerageTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comValueSewerageTaxDm": {
            "key": "comValueSewerageTaxDm",
            "label": "Value of sewerage charges demanded (INR lakhs)",
            "required": true,
            "displayPriority": "6.17",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comNoSewerageTaxDm": {
            "key": "comNoSewerageTaxDm",
            "label": "Number of connections from which sewerage charges was demanded",
            "required": true,
            "displayPriority": "6.18",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comValueSewerageTaxCollected": {
            "key": "comValueSewerageTaxCollected",
            "label": "Value of sewerage charges collected from connections (INR lakhs)",
            "required": true,
            "displayPriority": "6.19",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "comValueSewerageTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "comNoSewerageTaxCollected": {
            "key": "comNoSewerageTaxCollected",
            "label": "Number of connections from which sewerage charges was collected",
            "required": true,
            "displayPriority": "6.20",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "comNoSewerageTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indValueSewerageTaxDm": {
            "key": "indValueSewerageTaxDm",
            "label": "Value of sewerage charges demanded (INR lakhs)",
            "required": true,
            "displayPriority": "6.21",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indNoSewerageTaxDm": {
            "key": "indNoSewerageTaxDm",
            "label": "Number of connections from which sewerage charges was demanded",
            "required": true,
            "displayPriority": "6.22",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxDm",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxDm",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxDm",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxDm",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxDm",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indValueSewerageTaxCollected": {
            "key": "indValueSewerageTaxCollected",
            "label": "Value of sewerage charges collected from connections (INR lakhs)",
            "required": true,
            "displayPriority": "6.23",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "indValueSewerageTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "indNoSewerageTaxCollected": {
            "key": "indNoSewerageTaxCollected",
            "label": "Number of connections from which sewerage charges was collected",
            "required": true,
            "displayPriority": "6.24",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxCollected",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxCollected",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxCollected",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxCollected",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "min": 0,
                "max": 9999999999,
                "required": true,
                "type": "indNoSewerageTaxCollected",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "otherValueSewerageType": {
            "key": "otherValueSewerageType",
            "label": "Connection Type",
            "required": true,
            "displayPriority": "6.25",
            "replicaCount": 0,
            "copyChildFrom": [
              {
                "key": "otherValueSewerageTaxDm",
                "label": "Value of sewerage charges demanded (INR lakhs)",
                "required": true,
                "displayPriority": "6.26",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxDm",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxDm",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxDm",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxDm",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxDm",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "otherNoSewerageTaxDm",
                "label": "Number of connections from which sewerage charges was demanded",
                "required": true,
                "displayPriority": "6.27",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxDm",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxDm",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxDm",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxDm",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxDm",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "otherValueSewerageTaxCollected",
                "label": "Value of sewerage charges collected from connections (INR lakhs)",
                "required": true,
                "displayPriority": "6.28",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxCollected",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxCollected",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxCollected",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxCollected",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "decimalLimit": 2,
                    "isRupee": true,
                    "min": 0,
                    "max": 9999999,
                    "required": true,
                    "type": "otherValueSewerageTaxCollected",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              },
              {
                "key": "otherNoSewerageTaxCollected",
                "label": "Number of connections from which sewerage charges was collected",
                "required": true,
                "displayPriority": "6.29",
                "yearData": [
                  {
                    "label": "FY 2018-19",
                    "key": "FY2018-19",
                    "postion": "0",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxCollected",
                    "year": "63735a5bd44534713673c1ca",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2019-20",
                    "key": "FY2019-20",
                    "postion": "1",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxCollected",
                    "year": "607697074dff55e6c0be33ba",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2020-21",
                    "key": "FY2020-21",
                    "postion": "2",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxCollected",
                    "year": "606aadac4dff55e6c075c507",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2021-22",
                    "key": "FY2021-22",
                    "postion": "3",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxCollected",
                    "year": "606aaf854dff55e6c075d219",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  },
                  {
                    "label": "FY 2022-23",
                    "key": "FY2022-23",
                    "postion": "4",
                    "value": "",
                    "file": "",
                    "min": 0,
                    "max": 9999999999,
                    "required": true,
                    "type": "otherNoSewerageTaxCollected",
                    "year": "606aafb14dff55e6c075d3ae",
                    "code": [],
                    "readonly": readOnly,
                    "formFieldType": "number",
                    "bottomText": "",
                    "placeHolder": ""
                  }
                ],
                "info": ""
              }
            ],
            "maxChild": 10,
            "child": [],
            "yearData": [
              {},
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "sewerageChrgTarrifSheet": {
            "key": "sewerageChrgTarrifSheet",
            "label": "Please provide the sewerage tariff sheet",
            "required": true,
            "displayPriority": "6.30",
            "downloadLink": "https://democityfinance.s3.ap-south-1.amazonaws.com/ULB/2022-23/property-tax/sample-files/Sample%20Sewerage%20Tariff%20Rate%20Sheet.docx",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf",
                  "xls",
                  "xlsx"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "sewerageChrgTarrifSheet",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": "Please provide the base formula/ rates at which different connection types are charged."
          },
          "omCostDeleverySewerage": {
            "key": "omCostDeleverySewerage",
            "label": "What is the O&M cost of service delivery for sewerage ?(INR lakhs)",
            "required": true,
            "displayPriority": "6.31",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleverySewerage",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2019-20",
                "key": "FY2019-20",
                "postion": "1",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleverySewerage",
                "year": "607697074dff55e6c0be33ba",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2020-21",
                "key": "FY2020-21",
                "postion": "2",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleverySewerage",
                "year": "606aadac4dff55e6c075c507",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2021-22",
                "key": "FY2021-22",
                "postion": "3",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleverySewerage",
                "year": "606aaf854dff55e6c075d219",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              },
              {
                "label": "FY 2022-23",
                "key": "FY2022-23",
                "postion": "4",
                "value": "",
                "file": "",
                "decimalLimit": 2,
                "isRupee": true,
                "min": 0,
                "max": 9999999,
                "required": true,
                "type": "omCostDeleverySewerage",
                "year": "606aafb14dff55e6c075d3ae",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "number",
                "bottomText": "",
                "placeHolder": ""
              }
            ],
            "info": ""
          },
          "omCostSewerageService": {
            "key": "omCostSewerageService",
            "label": "Please provide the working sheet for O&M cost calculation",
            "required": true,
            "displayPriority": "6.32",
            "downloadLink": "https://democityfinance.s3.ap-south-1.amazonaws.com/ULB/2022-23/property-tax/sample-files/Sample%20O_M%20cost%20working%20sheet%20-%20sewerage%20services.docx",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf",
                  "xls",
                  "xlsx"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "omCostSewerageService",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          },
          "signedPdf": {
            "key": "signedPdf",
            "label": "Upload Signed PDF",
            "required": true,
            "displayPriority": "7.1",
            "yearData": [
              {
                "label": "FY 2018-19",
                "key": "FY2018-19",
                "postion": "0",
                "value": "",
                "file": {
                  "name": "",
                  "url": ""
                },
                "allowedFileTypes": [
                  "pdf"
                ],
                "min": "",
                "max": "",
                "required": true,
                "type": "signedPdf",
                "year": "63735a5bd44534713673c1ca",
                "code": [],
                "readonly": readOnly,
                "formFieldType": "file",
                "bottomText": "",
                "placeHolder": ""
              },
              {},
              {},
              {},
              {}
            ],
            "info": ""
          }
        },
        "feedback": {
          "status": null,
          "comment": ""
        }
      }
    ]
  }
}



function getInputKeysByType(formType, type, label, dataSource = null, position, required = true, mn = false, info = "") {
  let maximum = 9999999999
  let min = 0
  if (formType != "number") {
    min = 0
    maximum = 50
  }
  if (mn == true) {
    min = 6000000000
    maximum = 9999999999
  }
  let obj = {
    label: label,
    max: maximum,
    min: min,
    placeHolder: "",
    postion: position,
    modelName: dataSource, // USER | LEDGER
    formFieldType: formType, // text | number | radio-toggle | file
    required: required,
    type: type,
    canShow: true,
  }
  if (info !== "") {
    obj.info = info
  }
  return obj
}


let financialYearTableHeader = {
  "1.9": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Property Tax Demand Details (Amount in INR Lakhs)",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "1.17": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Property Tax Collection Details (Amount in INR Lakhs)",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.1": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Details",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.5": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Residential Properties",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.9": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Commercial Properties",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.13": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Industrial Properties",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.17": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Government Properties",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.21": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Institutional Properties",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "2.25": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Other Properties",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "3.1": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Details",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.5": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Water Charges Demand and Collection Details (Amount in INR lakhs)",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.11": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Water Connection Details",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.13": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Residential connections",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.17": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Commercial connections",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.21": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Industrial connections",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.25": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Other connections(any other connection type)",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "5.30": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Water Charges Tariff Details",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    }
  ],
  "5.31": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Water Charges: Cost of Service Delivery Details",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    }
  ],
  "5.32": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Working of the O&M Cost- Water Service",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    }
  ],
  "6.5": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Sewerage Charges Demand and Collection Details (Amount in INR lakhs)",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.11": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Sewerage Connection Details",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.13": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Residential connections",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.17": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Commercial connections",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.21": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Industrial connections",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.25": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Other connections(any other connection type)",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.30": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Sewerage Charges Tariff Details",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    }
  ],
  "6.31": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Sewerage Charges: Cost of Service Delivery Details",
      "info": ""
    },
    {
      "label": "2018-19",
      "info": ""
    },
    {
      "label": "2019-20",
      "info": ""
    },
    {
      "label": "2020-21",
      "info": ""
    },
    {
      "label": "2021-22",
      "info": ""
    },
    {
      "label": "2022-23",
      "info": ""
    }
  ],
  "6.32": [
    {
      "label": "",
      "info": ""
    },
    {
      "label": "Working of the O&M Cost- Sewerage Service",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    },
    {
      "label": "",
      "info": ""
    }
  ]
}

let specialHeaders = {
  "1.1": {
    "label": "Property Tax Details",
    "info": ""
  },
  "2.1": {
    "label": "Property Register Details",
    "info": ""
  },
  "2.5": {
    "label": "Property Tax Demand and Collection Details by Property Type (including cess, other tax charges, excluding user charges if any)",
    "info": ""
  },
  "3.1": {
    "label": "Property Tax Collection Details by Mode of payment (including cess, other tax charges, excluding user charges if any)",
    "info": ""
  },
  "4.1": {
    "label": "Property Tax Valuation Details",
    "info": ""
  },
  "5.1": {
    "label": "Water Charges Details",
    "info": ""
  },
  "5.13": {
    "label": "Water Charges Demand and Collection Details by Connection type",
    "info": ""
  },
  "6.1": {
    "label": "Sewerage Charges Details",
    "info": ""
  },
  "6.13": {
    "label": "Sewerage Charges Details by Connection type",
    "info": ""
  },
  "7.1": {
    "label": "Download and Upload Signed PDF",
    "info": ""
  }
}
let skipLogicDependencies = {
  "data.ulbCollectPtax.yearData.0": {
    "skippable": {
      "notificationPropertyTax": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "notificationAdoptionDate": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "notificationIssuedBy": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "notificationFile": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "ulbFinancialYear": {
        "value": "No",
        "years": [
          0
        ]
      },
      "ulbPassedResolPtax": {
        "value": "No",
        "years": [
          0
        ]
      },
    }
  },
  "data.ulbPassedResolPtax.yearData.0": {
    "skippable": {
      "resolutionFile": {
        "value": "Yes",
        "years": [
          0
        ]
      },
    }
  },
  "data.doesUserChargesDmnd.yearData.0": {
    "skippable": {
      "userChargesDmnd": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "userChargesCollection": {
        "value": "Yes",
        "years": [
          0
        ]
      }
    }
  },
  "data.notificationWaterCharges.yearData.0": {
    "updatables": [
      {
        "on": "No",
        "target": "data.entityWaterCharges.yearData.0",
        "value": ""
      }
    ],
    "skippable": {
      "entityWaterCharges": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "notificationWaterChargesFile": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "waterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "cuWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "arWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "waterChrgCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "cuWaterChrgCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "arWaterChrgCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "waterChrgConnectionDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "waterChrgConnectionCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resValueWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resNoWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resValueWaterChrgCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resNoWaterChrgCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comValueWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comNoWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comValueWaterChrgCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comNoWaterChrgCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indValueWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indNoWaterChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indValueWaterChrgCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indNoWaterChrgCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "othersValueWaterType": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "waterChrgTariffDetails": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "omCostDeleveryWater": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "omCostWaterService": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      }
    }
  },
  "data.entityWaterCharges.yearData.0": {
    "skippable": {
      "entityNameWaterCharges": {
        "value": [
          "State Department",
          "Parastatal Agency",
          "Others"
        ],
        "years": [
          0
        ]
      }
    }
  },
  "data.doesColSewerageCharges.yearData.0": {
    "updatables": [
      {
        "on": "No",
        "target": "data.entitySewerageCharges.yearData.0",
        "value": ""
      }
    ],
    "skippable": {
      "entitySewerageCharges": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "copyGazetteNotificationSewerage": {
        "value": "Yes",
        "years": [
          0
        ]
      },
      "totalSewergeChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "curSewergeChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "arrSewergeChrgDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "totalSewergeChrgCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "curSewergeChrgCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "arrSewergeChrgCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "totalSewergeConnectionDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "totalSewergeConnectionCol": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resValueSewerageTaxDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resNoSewerageTaxDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resValueSewerageTaxCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "resNoSewerageTaxCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comValueSewerageTaxDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comNoSewerageTaxDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comValueSewerageTaxCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "comNoSewerageTaxCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indValueSewerageTaxDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indNoSewerageTaxDm": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indValueSewerageTaxCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "indNoSewerageTaxCollected": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "otherValueSewerageType": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "sewerageChrgTarrifSheet": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "omCostDeleverySewerage": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      "omCostSewerageService": {
        "value": "Yes",
        "years": [
          0,
          1,
          2,
          3,
          4
        ]
      }
    }
  },
  "data.entitySewerageCharges.yearData.0": {
    "skippable": {
      "entityNaSewerageCharges": {
        "value": [
          "State Department",
          "Parastatal Agency",
          "Others"
        ],
        "years": [
          0
        ]
      }
    }
  }
}

function sortPosition(itemA, itemB) {
  itemA.displayPriority = itemA.displayPriority.toString()
  itemB.displayPriority = itemB.displayPriority.toString()
  const [integerA, decimalA] = itemA.displayPriority.split('.').map(i => +i);
  const [integerB, decimalB] = itemB.displayPriority.split('.').map(i => +i);
  if (integerA != integerB) {
      return integerA > integerB ? 1 : (integerB > integerA ? -1 : 0);;
  }
  return decimalA > decimalB ? 1 : (decimalB > decimalA ? -1 : 0);;

}


function fetchIndicatorsOrDp(dynamicJson) {
  let keysWithLabel = []
  let childELements = {}
  let keysWithLabelObj = {}
  let indicatorsWithNoyears = []
  try {
    for (let key in dynamicJson) {
      let obj = dynamicJson[key]
      let temp = {
        key: key,
        label: obj.label,
        displayPriority: obj.displayPriority
      }
      keysWithLabelObj[key] = obj.label
      keysWithLabel.push(temp)
      let multipleParameters = obj.yearData.filter(item => item?.type === obj.key)
      if(multipleParameters.length === 1){
        indicatorsWithNoyears.push(obj.key)
      }
      if (obj.copyChildFrom) {
        for (let objects of obj.copyChildFrom) {
          let temp = {
            key: objects.key,
            label: obj.label,
            displayPriority: obj.displayPriority
          }
          keysWithLabelObj[objects.key] = objects.label
          childELements[objects.key] = objects.displayPriority
          if (keysWithLabel.findIndex(item => item.key === objects.key) !== -1) {
            keysWithLabel.push(temp)
            keysWithLabelObj[objects.type] = objects.label
          }
        }
      }
    }
    let sortedArray = keysWithLabel.sort(sortPosition)
      return {
        childKeys:childELements,
        questionIndicators:keysWithLabelObj,
        indicatorsWithNoyears:indicatorsWithNoyears

      }
  }
  catch (err) {
    console.log("error in fetchIndicatorsOrDp ::: ", err.message)
  }
}


function getSkippableKeys(skipLogics) {
  const results = {};
  Object.entries(skipLogics).forEach(([key, value]) => {
    Object.keys(value.skippable).forEach(itemKey => {
      results[itemKey] = key.split('.')[1];
    })
  })
  return results;
}

let dynamicJson = propertyTaxOpFormJson()['tabs'][0]['data']
let {childKeys, questionIndicators,indicatorsWithNoyears} = fetchIndicatorsOrDp(dynamicJson)
module.exports.reverseKeys = ["ulbFinancialYear","ulbPassedResolPtax"]
module.exports.skippableKeys = getSkippableKeys(skipLogicDependencies)
module.exports.financialYearTableHeader = financialYearTableHeader
module.exports.specialHeaders = specialHeaders
module.exports.childKeys =childKeys
module.exports.indicatorsWithNoyears = indicatorsWithNoyears
module.exports.questionIndicators = questionIndicators
module.exports.propertyTaxOpFormJson = propertyTaxOpFormJson;
module.exports.getInputKeysByType = getInputKeysByType;
module.exports.skipLogicDependencies = skipLogicDependencies
module.exports.sortPosition = sortPosition