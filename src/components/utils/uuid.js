export default {
  created (prefix) {
    return prefix + Math.random().toString(36).substring(3, 8)
  }
}
