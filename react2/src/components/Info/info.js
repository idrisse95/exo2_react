import React from 'react'


export function Info({ _nom, _age, _taille, _src }) {
    return (

        <div className='mt-20  text-white flex justify-center'>


            <div className='p-10 bg-blue'>

                <img src={_src} width="100px" alt="non" />
                <div>{_nom}</div>
                <div>{_age}</div>
                <div>{_taille}</div>

            </div>

        </div>
    );
}







export default Info