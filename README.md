## XTJ

Xml to Javascript object

## Install

```shell
$ npm install xtj
```

## Features

* Typescript support
* Esm/Umd support 

## Usage

```ts
import XmlToJs from 'xtj'

const str = `<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>`

XmlTojs(str)

/* =>
{
  "HTML": [
    {
      "HEAD": "",
    },
    {
      "BODY": [
        {
          "MYROOT": [
            {
              "TEST": "Success",
            },
            {
              "TEST2": [
                {
                  "ITEM": "val1",
                },
                {
                  "ITEM": "val2",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
*/
```