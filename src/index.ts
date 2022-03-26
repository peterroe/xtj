export type stringType = Record<string, any>

export default function xmltojs(xml: string): object {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'text/xml')
  const root = doc.documentElement

  const result: stringType = {}
  collection(root, result)
  return result
}

function collection(node: Element, res: stringType) {
  const key: string = node.tagName
  if (node.children.length) {
    const value = []
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      const item = {}
      collection(child, item)
      value.push(item)
    }
    res[key] = value
  }
  else {
    res[key] = node.textContent
  }
}
