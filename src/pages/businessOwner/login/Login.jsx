import React from 'react'
import css from './Login.module.css'
import LoginImg from '../../../images/charming-successful-young-female-yellow-autumn-coat-smiling-broadly-holding-hands-crossed-body-confident-self-assured-pose-standing-delighted-happy-red-background-removebg-preview.png';
import Google from '../../../images/R.png';
import Apple from '../../../images/R (1).png'
import {Link} from 'react-router-dom'
import Header from '../../../components/headers/Header';

const Login = () => {
  return (
    <div className={css.container}>
     <Header />
     <div className={css.login}>
        <div className={css.left}>
            <img src={LoginImg} alt="" />
            <div className={css.background}>
             <div className={css.bgtop}>
                <p>Fund has given my business the needed boost to cover a large market with proper review from expert on the platform</p>
             </div>
             <div className={css.bgbottom}>
                <div className={css.ceo}>
                    <p>Tope Adesuwa</p>
                    <p>CEO of Milling Fags Limited</p>
                </div>
                <div className={css.rating}>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
             </div>
            </div>
        </div>
        <div className={css.right}>
            <h1>Get Started</h1>
            <form className={css.form}>
                <div className={css.form_group}>
                    <label>User name or email</label>
                    <input type="text" placeholder='Email'/>
                </div>
                <div className={css.form_group}>
                    <label>Password</label>
                    <input type="text" placeholder='Password...'/>
                </div>
                <div className={css.forget}>
                    <p>Forgot Password</p>
                </div>
                <div className={css.button}>
                    <button>Login</button>
                </div>
                <div className={css.or}>
                <span>Or</span>
                </div>
                <div className={css.button}>
                    <button className={css.google}>Continue With Google</button>
                    <img src={Google} alt="" />
                </div>
                <div className={css.button}>
                    <button className={css.apple}>Continue With Apple</button>
                    <img src={Apple} alt="" />
                </div>
                <div className={css.signup}>
                    <p>Don't have a Fund account? <Link to="/select-account">Signup</Link> </p>
                </div>
            </form>
        </div>
     </div>
     <div className={css.loginfooter}>
        <div className={css.loginfooterWrapper}>
        <Link>About</Link>
        <Link>Help</Link>
        <Link>Terms</Link>
        <Link>Privacy</Link>
        </div>
        
     </div>
    </div>
  )
}

export default Login