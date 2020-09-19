import React from 'react';
import './register.css';

const Register = () => (
    <>
    <main className="login__main">
        <div className="login__main__container">
            <div className="lmc__form">
                <form className="lmcf">
                    <h2 className="lmcf__h2">GROWCASES</h2>
                    <h3 className="lmcf__h3 lmcf__h3--register">Hesap Oluştur</h3>
                    <h5 className="lmcf__h5 lmcf__h5--register">Kayıt olmak için bilgileri girin.</h5>
                    <input className="register__input" type="text" placeholder="Kullanıcı adınızı belirleyin" />
                    <input className="register__input" type="email" placeholder="E-posta adresinizi girin" />
                    <input className="register__input" type="password" placeholder="Şifrenizi girin" />
                    <div className="lmcf__options">
                        <button className="lmcf__options__button lmcfob__create"><a href="/login">Zaten bir hesabınız mı var?</a></button>
                        <button className="lmcf__options__button lmcfob__next">Hesap Oluştur</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    </>
)

export default Register;