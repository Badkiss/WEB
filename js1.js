import{usu,augregister} from './firebase.js'

const fors=document.getElementById('form');
fors.addEventListener('submit',(e) => {
    e.preventDefault()
    
   const Nombre = fors['nombre'];
   const Apellidos = fors['apellidos'];
   const direccion = fors['direccion'];
   const poblacion = fors['poblacion'];
   const provincia = fors['provincia'];
   const pais = fors['pais'];
   const correo = fors['correo'];
   const telefono = fors['telefono'];
   const usuario = fors['usuario'];
   const contra = fors['contra'];
    usu(Nombre.value, Apellidos.value, direccion.value, poblacion.value, pais.value,correo.value,telefono.value,usuario.value,contra.value,provincia.value)
    augregister(correo.value,contra.value)
    fors.reset();
    
})

