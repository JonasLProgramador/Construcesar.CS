import {Routes, Route} from 'react-router'
import { DefaultLayout } from './layouts/default-layout'
export function Router(){
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/sobre' element={<h1>Sobre</h1>}/>
        <Route path='/obras' element={<h1>obras</h1>}/>
      </Route>
    </Routes>
  )
}