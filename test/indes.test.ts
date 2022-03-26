import { describe, expect, it } from 'vitest'
import xmltojs from '../src/index'

describe('test', () => {
  it('should workd', () => {
    const str = `<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>`
    expect(xmltojs(str)).toMatchSnapshot(``)
  })
})
