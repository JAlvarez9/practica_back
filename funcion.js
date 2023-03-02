const usua =  [
    {
        "user": "administrador",
        "password": "admin"
    },
    {
        "user": "Juanito1",
        "password": "juanpentino"
    },
    {
        "user": "Rodrigo12",
        "password": "Rod_123"
    },
    {
        "user": "Carlos",
        "password": "Car_4567"
    },
    {
        "user": "Alejandra",
        "password": "ale.123"
    },
    {
        "user": "Josue",
        "password": "Jos0456"
    }
]

exports.Ejemplio = async function(req, res){
    res.status(200).json(usua)
}