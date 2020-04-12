var cliente = true;
var bancoCliente = "Banquito";
var cuentaCliente = true;
var saldoCliente = 2000000;
var destino = true;
var cuentaDestino = true;
var bancoDestino = ["Banquito"];
var horaTransferencia = [0-24];
var costoTransaccion = 0;
var transaccion = 0;

functiontransferir(cliente, destino, horaTransferencia, transaccion)
{
    if(horaTransferencia >= 9 && horaTransferencia <= 12 ||  horaTransferencia >= 15 && horaTransferencia <= 20)
    {
        if(cliente == true && destino == true)
        {
            if(bancoCliente == bancoDestino)
            {
                costoTransaccion = 0;
            }
            else
            {
                costoTransaccion = 100;
            } 

            if(saldoCliente >= transaccion + costoTransaccion)
            {
                console.log("La transaccion se llevo a cabo exitosamente")
            }
            else
            {
                console.log("La transaccion supera el saldo disponible")
            }

        }
        else
        {
            console.log("Los datos no son validos")
        }
    }
    else
    {
        console.log("Fuera del horario")
    }

}

console.log(transferir(true, true, 13, 1000000))```
