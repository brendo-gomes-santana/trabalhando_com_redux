import { useState } from 'react'
import styles from './address.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux'
import { AdicionarEndereco } from '../../redux/user/slice';

export function Address() {

  const dispatch = useDispatch();
  const { user } = useSelector((rootReducer) => rootReducer.user)
  const [addressName, setAddressName] = useState(user?.endereco ? user.endereco.local : null)
  const [addressNumber, setAddressNumber] = useState(user?.endereco ? user.endereco.numero : null)


  function handleRegisterAddress(){
    dispatch(AdicionarEndereco({
      local: addressName,
      numero: addressNumber
    }))
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>

        <main className={styles.content}>
          <div>
            <Link to="/painel">
              Voltar para o painel
            </Link>
          </div>

          <section className={styles.address}>
           <h2>Meu endereço:</h2>

          <input 
            type="text" 
            className={styles.input}
            placeholder="Ex: Rua centro, x"
            value={addressName}
            onChange={ (e) => setAddressName(e.target.value) }
          />
          <input 
            type="text" 
            className={styles.input}
            placeholder="Numero"
            value={addressNumber}
            onChange={ (e) => setAddressNumber(e.target.value) }
          />

          <button className={styles.button} onClick={handleRegisterAddress}>
            Salvar Alteração
          </button>

          </section>
        </main>
      </div>
    </>
  )
}
