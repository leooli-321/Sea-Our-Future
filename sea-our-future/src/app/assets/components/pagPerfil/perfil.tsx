// Perfil.tsx
import React from "react";
import "./perfil.css";

const Perfil: React.FC = () => {
  return (
    <main className="main container">
      <div className="right">
        <div className="best__sellers">
          <h3 className="seller__title">Atividade</h3>

          {/* Seller Profiles */}
          <div className="seller__profile">
            <img src="https://media.licdn.com/dms/image/D4E0BAQEcm_X5hIaf4A/company-logo_200_200/0/1666901361372/ocean_works_logo?e=2147483647&v=beta&t=tFjfiVxlmnNXo0RlXNXoIkEJRnQwwh9e_ItUE2_qLxo" alt="" className="seller__img" />
            <h3 className="seller__name">Ocean Works</h3>
            <div className="sales__box">
              <span className="sales">Última conexão: há 4 dias 🟢</span>
            </div>
          </div>
          <div className="seller__profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/V0Q4f9a2_400x400.jpg" alt="" className="seller__img" />
            <h3 className="seller__name">Plastic Soup</h3>
            <div className="sales__box">
              <span className="sales">Última conexão: há 13 dias 🟢</span>
            </div>
          </div>
          <div className="seller__profile">
            <img src="https://media.licdn.com/dms/image/C4E0BAQG4UFoVeEQ5aA/company-logo_200_200/0/1651176132192/plasticbank_logo?e=2147483647&v=beta&t=UdIU7XMKoA6AG7_uUu8FDEEZ6j_Cc9Dbr5f6N-bPCC0" alt="" className="seller__img" />
            <h3 className="seller__name">Plastic Bank</h3>
            <div className="sales__box">
              <span className="sales">Última conexão: há 19 dias 🟢</span>
            </div>
          </div>

        </div>
      </div>

      <div className="left">
        <div className="stats__container">
          {/* Stats Items */}
          <div className="stats__item">
            <div className="stats__header">
              <div className="stats__icon">
                <i className="uil uil-favorite">♻️</i>
              </div>
              <h3 className="stats__title">Este mês você já reciclou:</h3>
            </div>
            <div className="stats__body">
              <div className="stats__data">
                <div className="stats__data-number">59kg</div>
              </div>
            </div>
          </div>

          {/* Stats Items */}
          <div className="stats__item">
            <div className="stats__header">
              <div className="stats__icon">
                <i className="uil uil-favorite">🫱🏻‍🫲🏻</i>
              </div>
              <h3 className="stats__title">Você está conectado com:</h3>
            </div>
            <div className="stats__body">
              <div className="stats__data">
                <div className="stats__data-number">7 empresas</div>
              </div>
            </div>
          </div>

          {/* Stats Items */}
          <div className="stats__item">
            <div className="stats__header">
              <div className="stats__icon">
                <i className="uil uil-favorite">💰</i>
              </div>
              <h3 className="stats__title">
                Este mês suas parcerias te renderam:
              </h3>
            </div>
            <div className="stats__body">
              <div className="stats__data">
                <div className="stats__data-number">R$ 6.720</div>
              </div>
            </div>
          </div>
          {/* Adicione mais stats items conforme necessário */}
        </div>

        <div className="sales__container">
          {/* Top Selling Products */}
          <div className="top__products">
            <h3 className="product__title">Descrição</h3>
            <div className="product__details">
              <table className="table">
                <tbody>
                  {/* Product Rows */}
                  <tr>
                    <td>
                      <div className="product__item">
                        <div className="product__item-body">
                          <h3 className="product__item-title">
                            A MarineTech Solutions é uma empresa inovadora, com
                            sede em Burnaby, Colúmbia Britânica. <br /> Especializada
                            no desenvolvimento e fabricação de sistemas
                            subaquáticos tripulados e não tripulados, <br /> a
                            MarineTech Solutions atende à indústria marítima
                            global. Seu compromisso é fornecer soluções <br /> de alta
                            qualidade para clientes militares, científicos e
                            comerciais em todo o mundo.
                          </h3>
                          <span className="product__item-rating"></span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Perfil;
