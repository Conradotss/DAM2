
import path from 'path';

export default{
    mode: 'development',
    entry: {
        agregarArchivos: './src/agregar-archivos.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}