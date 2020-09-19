import React from 'react';
import './login.css';

const Login = () => (
    <>
    <main className="login__main">
        <div className="login__main__container">
            <div className="lmc__form">
                <form className="lmcf">
                    <h2 className="lmcf__h2">GROWCASES</h2>
                    <h3 className="lmcf__h3">Oturum Aç</h3>
                    <input type="email" placeholder="E-Posta veya kullanıcı adınızı girin" />
                    <h5 className="lmcf__h5">Yardım almak için tıklayın</h5>
                    <div className="lmcf__options">
                        <button className="lmcf__options__button lmcfob__create"><a href="/register">Hesap Oluşturun</a></button>
                        <button className="lmcf__options__button lmcfob__next"><a href="/loginp">İleri</a></button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    </>
)

export default Login;