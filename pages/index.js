import styles from '../styles/Home.module.css'
import  WrapperContainer from '../components/wrapper/WrapperContainer'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Previlegies } from '../components/homepage/Previlegies'
import  GoodsList  from '../components/homepage/GoodsList'
import { Info } from '../components/homepage/Info'
import { Slides } from '../components/homepage/Slides'
import { Category } from '../components/homepage/Category'
import { ContactForm } from '../components/homepage/ContactFrom'


export default function Home() {
 

  return (
    <>
      <Provider store={store}>
        <WrapperContainer>
          <Slides />
          <Previlegies/>
          <Info />
          <GoodsList>
            <Category />
          </GoodsList>
          <ContactForm />
        </WrapperContainer>
      </Provider>

    </>
  )
}
