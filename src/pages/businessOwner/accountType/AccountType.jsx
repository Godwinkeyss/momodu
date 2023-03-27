import React from 'react';
import Header from '../../../components/headers/Header';
import css from './AccountType.module.css';
import Account from '../../../images/accont.webp';
import Acc2 from '../../../images/acc2.webp';
import { Link } from 'react-router-dom';

const AccountType = () => {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.wrapper}>
        <div className={css.left}>
          <h1>Secure the investment for your business with the right pitch</h1>
          <div className={css.img}>
            <img src={Acc2} alt="" />
          </div>
        </div>
        <div className={css.right}>
          <div className={css.box}>
            <label htmlFor="mycheckboxId" className={css.checkbox}>
              <input
                type="checkbox"
                className="checkbox__input"
                id="mycheckboxId"
              />
              <div className={css.checkbox__box}></div>
              <p>i'm an investor looking to invest in a promising business</p>
            </label>
          </div>
          <div className={css.box}>
            <label htmlFor="mycheckboxId1" className={css.checkbox}>
              <input
                type="checkbox"
                className="checkbox__input"
                id="mycheckboxId1"
              />
              <div className={css.checkbox__box}></div>
              <p>
                i'm a Consultant looking to review business proposal for
                investors and business owners.
              </p>
            </label>
          </div>
          <div className={css.box}>
            <label htmlFor="mycheckboxId2" className={css.checkbox}>
              <input
                type="checkbox"
                className="checkbox__input"
                id="mycheckboxId2"
                
              />
              <div className={css.checkbox__box}></div>

              <p>
                An entreprenuer with business ideas looking for funding for my
                business
              </p>
            </label>
          </div>

        
        </div>
      </div>
      <div className={css.footer}>
        <button>Join as a business Owner</button>
        <div className={css.already}>
        <p>Already have an account?</p>
        <span><Link>Login</Link></span>
        </div>
        
      </div>
    </div>
  );
};

export default AccountType;
