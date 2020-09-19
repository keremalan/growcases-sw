import React from 'react';
import './password.css';

const Password = () => (
    <>
    <main className="login__main">
        <div className="login__main__container">
            <div className="lmc__form">
                <form className="lmcf">
                    <h2 className="lmcf__h2">GROWCASES</h2>
                    <h3 className="lmcf__h3">Oturum Aç</h3>
                    <h5 className="lmcf__h5 lmcf__h5--password">Giriş yapmak için şifrenizi girin.</h5>
                    <input type="password" placeholder="Şifrenizi girin" />
                    <div className="lmcf__options">
                        <button className="lmcf__options__button lmcfob__create">Şifrenizi mi unuttunuz?</button>
                        <button className="lmcf__options__button lmcfob__next">Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    </>
)

export default Password;