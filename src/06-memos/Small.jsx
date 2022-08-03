import {memo} from 'react';


// Lo que hace el memo es solo redibujar el compononente cuando las propiedades del mimso son cambiados. Si eso no pasa entonces no se redibuja
export const Small = memo(({value}) => {
    console.log('me volví a renderizar :/')

  return (
    <small>{value}</small>
  )
})
