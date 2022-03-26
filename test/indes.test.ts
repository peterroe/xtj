import { describe, expect, it } from 'vitest'
import xmltojs from '../src/index'

describe('test', () => {
  it('should workd', () => {
    expect(xmltojs(`<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" 
    xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
    <title>少数派</title>
    <link>https://sspai.com</link>
    <description>少数派致力于更好地运用数字产品或科学方法，帮助用户提升工作效率和生活品质</description>
    <language>zh-CN</language>
    <managingEditor>contact@sspai.com (少数派)</managingEditor>
    <pubDate>Sat, 26 Mar 2022 11:31:18 +0800</pubDate>
    <title>你的输入法，原来也可以当作效率和知识管理工具？</title>
    <link>https://sspai.com/post/71703</link>
    <description>其实，不管是输入字词还是输入符号，核心要义就是通过自定义的方式，将我们常用
    、惯用的各种内容同输入法预设的排布分离开来， 而这也就是之前一直所说的「排除干扰、流畅输入」
    。&lt;a href=&#34;https://sspai.com/post/71703&#34; target=&#34;_blank&#34;&gt;
    查看全文&lt;/a&gt;</description><author>克莱德</author><pubDate>Thu, 24 Mar 2022 14:30:00 +0800</pubDate></item><atom:link href="https://sspai.com/feed" type="application/rss+xml" ref="self"></atom:link><atom:link href="https://sspai.com/feed" type="application/rss+xml" ref="hub"></atom:link></channel></rss>`))
    .toMatchSnapshot(``)
  })
})
