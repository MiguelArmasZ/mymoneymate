import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import {
  AuthProvider,
  CategoriesProvider,
  MainProvider,
  RecordsProvider
} from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MainProvider>
      <AuthProvider>
        <CategoriesProvider>
          <RecordsProvider>
            <App />
          </RecordsProvider>
        </CategoriesProvider>
      </AuthProvider>
    </MainProvider>
  </BrowserRouter>
)

/**
 * TODO: AJUSTES FINALES
 *  Poner el mes en el balance cuando no hay registros ✅
 *  Página de settings ✅
 * * Refactorizar el componente de balance
 *  Cuando un usuario se crea, añadirle las categorías por defecto ✅
 * * Añadir la funcionalidad de crear registros automáticos cada mes
 * * Hacer que el menu forme parte del flujo
 * * Cuando se cambie de ruta hacer un scroll to top
 *  Cuando creas un registro mejorar el feedback ✅
 *  Hacer dinamica la altura de la grafica de categorias ✅
 * * Desplegar
 *  hacer pruebas del loading cuando hace la redirección al iniciar sesión ✅
 */
