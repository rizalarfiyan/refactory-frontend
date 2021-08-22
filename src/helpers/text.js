const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const kebabToCamel = (text) => text.replace(/-./g, (data) => data.toUpperCase()[1])

export default { firstUpper, kebabToCamel }
