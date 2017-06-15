import fs from 'fs'
import readReadSync from 'recursive-readdir-sync'

export default class File {
  // ===========================================================================
  // 파일 리스트 리턴
  // string => array
  // ===========================================================================
  static getFiles(path) {
    return readReadSync(path)
            .map(x => x.replace(/\\/gi, '/'))
  }

  // ===========================================================================
  // 파일명에서 경로를 제외한 파일명만 리턴
  // string => string
  // ===========================================================================
  static changeFileName(fileName) {
    return fileName.substr(fileName.lastIndexOf('/') + 1)
  }

  // ===========================================================================
  // 파일명에서 경로와 확장자를 제외한 파일명만 리턴
  // string => string
  // ===========================================================================
  static changeBaseName(fileName) {
    const temp = fileName.substr(fileName.lastIndexOf('/') + 1)
    const result = temp.substr(0, temp.lastIndexOf('.'))
    return result
  }

  // ===========================================================================
  // 파일명에서 확장자명만 리턴
  // string => string
  // ===========================================================================
  static changeExtension(fileName) {
    return fileName.substr(fileName.lastIndexOf('.') + 1)
  }

  // ===========================================================================
  // 파일명을 받아 파일내용을 리턴
  // string => string
  // ===========================================================================
  static readContents(path) {
    return fs.readFileSync(path, 'utf-8')
  }
}
