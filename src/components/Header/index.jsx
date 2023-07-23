import logo from '../../assets/images/logo.png'
import style from './style.module.css'
import { ImSearch } from 'react-icons/im'
import { FaCartShopping } from 'react-icons/fa6'
import { BiSolidTruck } from 'react-icons/bi'
import { HiUser } from 'react-icons/hi2'

export const Header = () => {
    return (
        <>
            <header className={`${style.header} flex justify-around items-center`}>
                <img src={logo} alt="logo" />
                <div>
                    <input className='rounded-xl h-10 p-5' type="text" name="" id="" placeholder='pesquise' />
                    <button className={style.btn}><ImSearch /></button>
                </div>
                <div className={`${style.iconContainer} flex justify-center gap-10 w-1/5`}>

                    <HiUser />
                    <BiSolidTruck />
                    <FaCartShopping />

                </div>

            </header>
            <div className={style.divider}></div>
        </>
    )
}