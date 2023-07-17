import beautyIcon from '../../assets/images/beautyIcon.png'
import healthIcon from '../../assets/images/healthIcon.png'
import petIcon from '../../assets/images/petIcon.png'
import decorationIcon from '../../assets/images/decorationIcon.png'
import style from './style.module.css'

export const Categories = () => {
    return (
        <nav className={`${style.nav} my-5`}>
            <ul className='flex justify-around gap-5 text-center titleFont'>
                <li>
                    <img src={beautyIcon} alt="Beauty icon" />
                    <p>ESTÉTICA</p>
                </li>
                <li>
                    <img src={healthIcon} alt="Health icon" />
                    <p>SAÚDE E BEM ESTAR</p>
                </li>
                <li>
                    <img src={decorationIcon} alt="Decoration icon" />
                    <p>CASA E DECORAÇÃO</p>
                </li>
                <li>
                    <img src={petIcon} alt="Pet icon" />
                    <p>PETS</p>
                </li>
            </ul>
        </nav>
    )
}