import React, { useState } from 'react';
import './Policies.css'; //  

const Policies = () => {
  // Definir las políticas disponibles
  const [selectedPolicy, setSelectedPolicy] = useState('shipping');


  const REFUNDS_POLICY = (
    <div>
      <h3 className='paratitulos'> POLÍTICA DE REEMBOLSOS DE ENVÍOS </h3>
      <p><h3>Políticas devolución antes de recibir el pedido: </h3>
      <strong>Política de devolución de productos no personalizados: </strong>El Usuario podrá cancelar la orden de cualquier producto no personalizado sin ningún costo siempre y cuando no haya sido enviado o esté en proceso de envío por la empresa transportadora, en cuyo caso se restará de su pago los gastos del envío y devolución del producto.
      </p>
      <p>
      <strong>Política de devolución de productos personalizados: </strong> El Usuario únicamente podrá cancelar el producto personalizado cuando esté en proceso de elaboración, una vez terminado el producto no podrá cancelar la orden. Si el usuario cancela la orden en proceso de elaboración se descontará al valor de la devolución un 10% del valor del pedido.
      </p>
      <p> <h3>Políticas devolución después de recibir el pedido: </h3>
      <strong>Política de cambio: </strong> Si el pedido cuenta con algún fallo causado por el proceso de envío, se solicitará de manera inmediata la devolución del paquete, el usuario debe comprobar el estado del paquete antes de ser usado, si el pedido o sus accesorios tienen indicios de uso no podrá realizarse el cambio del paquete y no procederá ningún reembolso por el producto.
      </p><p>
        <strong>Política de devolución de productos abiertos: </strong>no se realizarán reembolsos por productos que hayan sido abiertos por motivos de salubridad.
      </p>
      <p>
        <strong>Plazo devolución: </strong>La devolución del dinero se hará dentro de los 30 días calendario siguientes a la fecha en que se acepte por parte de la Compañía, ésta se realizará al mismo medio de pago utilizado al momento de la compra. Es deber del Usuario entregar la información requerida por SyviNails para la debida devolución de dinero.
      </p>
    </div>
  );
  
  
  const APPOINTMENTS_POLICY = (
    <div>
      <h3 className='paratitulos'>política cancelación y modificación de citas</h3>
      <p>
      <strong>Cancelación Sin Cargo: </strong>Puedes cancelar o modificar tu cita sin cargo hasta 24 horas antes de la hora programada.
      </p>
      <p>
      <strong>Cancelaciones Dentro de las 24 Horas:  </strong> Si cancelas o modificas tu cita dentro de las 24 horas previas a tu cita, perderás la mitad del valor de tu reserva, es decir el 10% del valor del servicio.
      </p>
      <p>
      <strong>Cancelaciones Tacitas:   </strong> En caso de no presentarse a la cita sin previo aviso o de exceder 15 minutos la cita pactada, se procederá a cancelar la cita y perderás el total del valor de tu reserva que corresponde al 20% del valor del servicio. En este caso nos reservamos el derecho de reprogramar tu cita o de cancelar el servicio, dependiendo de cada caso.
      </p>
      </div>
  );
  
  
  const SHIPPING_POLICY = (
    <div>
      <h3 className='paratitulos'>Tiempos de envio</h3>
      <p><h3>Tiempos de elaboración</h3>
      Una vez el pedido sea aceptado entra a proceso de elaboración, este proceso puede tardar entre 2 y 3 semanas. 
      <br></br>Cuando tu pedido esté listo se llevará a la empresa transportadora.
      <h3>Tiempos de envío</h3>
      Ten en cuenta que los tiempos de entrega por la empresa transportadora depende de la ciudad en que vivas. 
      <br></br><strong>Aclaración: </strong>  Se considera que el pedido es aceptado cuando el equipo de finanzas de SyviNails haya confirmado el pago, nosotros enviaremos un mensaje de confirmación al correo electrónico registrado cuando el pedido sea aceptado.
      </p>
    </div>
  );
  
  const PRIVACY_POLICY = (
    <div>
      <h3 className='paratitulos'> POLÍTICA DE PRIVACIDAD </h3>
      <p>
      Para la utilización de esta página web, el usuario acepta expresamente la adhesión plena y sin reservas de todas y cada una de las Condiciones Generales de la página hasta el momento. Por tanto, el usuario debe leer atentamente las Condiciones Generales con el propósito de informarse de cualquier actualización en las mismas.
      <br></br>Los Usuarios utilizarán esta página única y exclusivamente para uso privado y particular. 
      <br></br>Los usuarios no podrán copiar, reproducir, transmitir o distribuir de cualquier manera el contenido o los servicios que pueden obtenerse a través de la página.
      </p>
      <p>
      Los datos personales suministrados por los Usuarios para la utilización de esta pagina web, están sujetos a la política de privacidad contenida en este documento.
      <br></br>Todo el contenido generado en esta página es propiedad de <strong>Syvinails S.A.</strong> o de sus proveedores de contenidos y están protegidos y reconocidos nacional e internacionalmente.
     </p> 
     <p> No está permitida la reproducción, utilización o distribución de cualquier manera.
      Las presentes condiciones estarán sometidas a la legislación colombiana. Serán competentes para conocer de cualquier litigio que se derive de las condiciones, los tribunales de Bucaramanga (Colombia), renunciando expresamente a cualquier otra jurisdicción que por motivo de su nacionalidad, residencia o lugar de negocios pudiese corresponderler ahora o en el futuro.
    </p>
<br></br>
<br></br><strong>©2024 - Syvinails S.A. </strong>Todos los Derechos Reservados
      
      
    </div>
  );




  const policies = {
    shipping: SHIPPING_POLICY,
    appointments: APPOINTMENTS_POLICY,
    refunds: REFUNDS_POLICY,
    privacy: PRIVACY_POLICY,
  };

  return (
    <div className="policies-container">
      <table className="policies-table">
        <tbody>
          <tr>
            <td className="left-column">
              <button onClick={() => setSelectedPolicy('shipping')}>Tiempos de Envío</button>
              <button onClick={() => setSelectedPolicy('appointments')}>Política Cancelación de Citas</button>
              <button onClick={() => setSelectedPolicy('refunds')}>Política de Reembolsos Envíos</button>
              <button onClick={() => setSelectedPolicy('privacy')}>Política de Privacidad</button>
            </td>
            <td className="right-column">
              <div className="policy-content">
                {/* Mostrar el contenido de la política seleccionada */}
                <p>{policies[selectedPolicy]}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Policies;
