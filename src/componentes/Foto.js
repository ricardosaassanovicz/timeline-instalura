import React, { Component } from 'react';

export default class Foto extends Component {
  render() {
    return (
      <div className="foto">
        <FotoHeader />
        <img alt="foto" className="foto-src" 
            src="https://scontent.ffln3-1.fna.fbcdn.net/v/t31.0-8/17157834_1251510651599410_3373426059944399195_o.jpg?oh=639af17fb32435a09e71b3ad546f7e0d&oe=5A0C5308" />
        <FotoInfo />
        <FotoAtualizacoes />
      </div>
    );
  }
}

class FotoHeader extends Component {
  render() {
    return (
      <header className="foto-header">
        <figure className="foto-usuario">
          <img src="https://instagram.ffln3-1.fna.fbcdn.net/t51.2885-19/s150x150/16110412_157522441410249_4687828053349367808_n.jpg" alt="foto do usuario" />
          <figcaption className="foto-usuario">
            <a href="">
              ricardosassanovicz
            </a>
          </figcaption>
        </figure>
        <time className="foto-data">03/10/2016 20:13</time>
      </header>
    );
  }
}

class FotoInfo extends Component {
  render() {
    return (
      <div className="foto-in fo">
        <div className="foto-info-likes">
          <a href="">
            alots_ssa
          </a>,
          <a href="">
            rafael_rollo
          </a>
          curtiram
        </div>

        <p className="foto-info-legenda">
          <a className="foto-info-autor">autor </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
        </p>

        <ul className="foto-info-comentarios">
          <li className="comentario">
            <a className="foto-info-autor">seguidor </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
          </li>
          <li className="comentario">
            <a className="foto-info-autor">seguidor </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
          </li>
          <li className="comentario">
            <a className="foto-info-autor">seguidor </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
          </li>
        </ul>
      </div>
    );
  }
}

class FotoAtualizacoes extends Component {
  render() {
    return (
      <section className="fotoAtualizacoes">
        <a href="" className="fotoAtualizacoes-like">Likar</a>
        <form className="fotoAtualizacoes-form">
          <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
          <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
        </form>
      </section>
    );
  }
}




