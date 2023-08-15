import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { lougoutUser } from '../../redux/user/slice';

export function Header(){
  const navigate = useNavigate();
  const diapatch = useDispatch()
  const { user } = useSelector((rootReducer) => rootReducer.user)

  function handleLogin(){
    navigate("/")
  }

  function handleLogout(){
    diapatch(lougoutUser())
    navigate("/")
  }

  return(
    <header>
      <div className={styles.content}>
        <Link to="/painel">
          <h1>Dev<span>Redux</span></h1>
        </Link>

        {user ? (
          <button className={styles.logout} onClick={handleLogout}>
            Sair
          </button>
        ) : (
          <button className={styles.login} onClick={handleLogin}>
            Fazer login
          </button>
        )}
      </div>
    </header>
  )
}