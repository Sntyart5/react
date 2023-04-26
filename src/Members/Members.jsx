export function Members(){

    let integrantes=[
        {
            id:1,
            nombre:"leo Messi",
            rol: "baterista",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-cdf16.appspot.com/o/James_Hetfield.jpg?alt=media&token=f1aad5e0-db73-449a-80c6-556a9afa1ff5" ,
            nacimiento: "123-123-123"
        },
        {
            id:2,
            nombre:"Luiz suarez",
            rol: "baterista",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-cdf16.appspot.com/o/Lars_Ulrich.jpg?alt=media&token=f39a28c9-4d74-4232-955c-069bb3fbad5c" ,
            nacimiento: "123-123-123"
        },
        {
            id:2,
            nombre:"leo Messi",
            rol: "baterista",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-cdf16.appspot.com/o/Kirk_Hammett.jpg?alt=media&token=f610de70-e171-4cb7-9743-38a4e1c2f111" ,
            nacimiento: "123-123-123"
        },
        {
            id:4,
            nombre:"leo Messi",
            rol: "baterista",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-cdf16.appspot.com/o/Robert_Trujillo.jpg?alt=media&token=10698266-120f-414b-b402-85f80e32185c",
            nacimiento: "123-123-123"
        }

                
    ]



    return(
        <>
            <div className="row row-cols row-cols-md-3 ">
                {
                    integrantes.map(function(integrante){
                        return(
                            <div key={integrante.id}>

                            <div className="col">
                                <div className="card h-100 shadow">
                                    <h3 className="text-center fw-bold">{integrante.nombre}
                                    </h3>
                                    <img src={integrante.foto} alt="" className="img-fluid w-100"/>
                                    <h3>Rol: {integrante.rol}</h3>
                                </div>
                            </div>
                            
                            </div>
                        )
                    })
                }
                
            </div>



        </>
    )
}