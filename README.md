## XTJ

A tiny unit to convert xml to javascript object.

<a href="http://img.badgesize.io/https://unpkg.com/xtj?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/xtj?compression=gzip&label=gzip%20size:%20JS">
</a>

## Features

* `Typescript` support.
* `ESM` and `UMD` friendly.
* Tiny size.

## Install

```shell
$ npm install xtj
```

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