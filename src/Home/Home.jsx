import {Menu} from '../shared/Menu/Menu'
import {History} from '../History/History'
import './Home.css'
export function Home(){
    return(
       <>
       <Menu></Menu>
       
            <section className='banner'></section>     
       
        <section className='history'>
            <History></History>
        </section>
       </>

            

       
    )
}