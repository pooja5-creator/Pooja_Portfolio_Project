import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import './index.css'
export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
