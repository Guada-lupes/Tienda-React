import { Provider } from "react-redux"
import store from "./store/store.jsx"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>

)
