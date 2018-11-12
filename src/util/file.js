const fs = require('fs')
const readReadSync = require('recursive-readdir-sync')

// ===========================================================================
// 파일 리스트 리턴
// string => array
// ===========================================================================
function getFiles(path) {
  return readReadSync(path)
    .map(x => x.replace(/\\/gi, '/'))
}

// ===========================================================================
// 파일명에서 경로를 제외한 파일명만 리턴
// string => string
// ===========================================================================
function changeFileName(fileName) {
  return fileName.substr(fileName.lastIndexOf('/') + 1)
}

// ===========================================================================
// 파일명에서 경로와 확장자를 제외한 파일명만 리턴
// string => string
// ===========================================================================
function changeBaseName(fileName) {
  const temp = fileName.substr(fileName.lastIndexOf('/') + 1)
   const result = temp.substr(0, temp.lastIndexOf('.'))
  return result
}

// ===========================================================================
// 파일명에서 확장자명만 리턴
// string => string
// ===========================================================================
function changeExtension(fileName) {
  return fileName.substr(fileName.lastIndexOf('.') + 1)
}

// ===========================================================================
// 파일명을 받아 파일내용을 리턴
// string => string
// ===========================================================================
function readContents(path) {
  return fs.readFileSync(path, 'utf-8')
}
