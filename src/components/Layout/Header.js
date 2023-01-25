import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props =>
{


   
    return(
        <>
           <header className={classes.header}>
            <h1>MahrousMeals</h1>
                <HeaderCartButton onClick={props.onShow}/> 
           </header>


           <div className={classes['main-image']}>
           <img src={mealsImage} alt='akl'/>
            </div> 
        </>
    )
}



export default Header