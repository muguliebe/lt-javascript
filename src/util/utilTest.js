import File from './file'

const result = File.getFiles('/tmp/ttt')
  .filter(x => File.changeExtension(x) === 'xml' )
  .map(x => File.changeBaseName(x).toLowerCase())
  .filter(x => x.endsWith('dlg') || x.endsWith('pop'))
