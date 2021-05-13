import styles from '../styles/Home.module.css'
import  Wrapper  from '../components/wrapper/Wrapper'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Previlegies } from '../components/homepage/Previlegies'

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <Previlegies/>
        </Wrapper>
      </Provider>

    </>
  )
}
