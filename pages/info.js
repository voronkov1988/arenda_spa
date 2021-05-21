import { InfoPage } from "../components/InfoPage"
import { Footer } from "../components/wrapper/Footer"
import { Header } from "../components/wrapper/Header"
import { Wrapper } from "../components/wrapper/Wrapper"


export default function Info () {
    return(
        <>
        <Wrapper title='Информация'>
            <InfoPage />
        </Wrapper>
        </>
    )
}