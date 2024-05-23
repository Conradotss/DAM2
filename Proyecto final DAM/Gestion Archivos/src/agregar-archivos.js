import {Dropzone} from 'dropzone'
import { header, param } from 'express-validator'

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content') //Obtiene el token CSRF

Dropzone.options.archivos = {
    dictDefaultMessage: 'Sube tus archivos aquí',
    acceptedFiles: '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.rar,.jpg,.jpeg,.png,.gif,.svg,.mp4,.mp3,.avi,.mov,.flv,.wmv, .txt',
    maxFilesize: 100, //Peso máximo en MB
    maxFiles: 10, //Cantidad máxima de archivos
    parallelUploads: 10, //Subir 1 archivo a la vez
    autoProcessQueue: false, //Previene que se suban los archivos automáticamente
    addRemoveLinks: true, //Añade un enlace para eliminar el archivo
    dictRemoveFile: 'Eliminar archivo', //Texto del enlace para eliminar el archivo
    dictMaxFilesExceeded: 'Puedes subir hasta 10 archivos', //Mensaje de error al subir más de un archivo
    headers: {
        'CSRF-TOKEN': token
    },
    paramName: 'archivo', //Nombre del archivo que se enviará al servidor
    init: function(){ 
        const dropzone = this; 
        const form = document.getElementById('aceptar');
        form.addEventListener('click', function(){
            dropzone.processQueue(); //Envía los archivos al servidor
        })

        dropzone.on('queuecomplete', function(){
          if(dropzone.getActiveFiles().length === 0){ //Si ya no hay mas archivos por cargar entonces redirige al usuario hacia la pagina principal
              window.location.href = '/mis-proyectos';
            }
        })
    }
}